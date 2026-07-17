#!/bin/bash
# Push TheShop to your GitHub account
# Usage: GITHUB_TOKEN=ghp_xxx ./push-to-github.sh
# Or:    ./push-to-github.sh  (and it'll prompt for the token)

set -e

REPO_NAME="${REPO_NAME:-theshop}"
DESCRIPTION="TheShop.com - A beautiful, production-ready e-commerce storefront built with vanilla HTML, CSS, and JS. Features a hero carousel, 100+ products, multi-step checkout, and Framer-Motion-inspired animations."

if [ -z "$GITHUB_TOKEN" ]; then
  echo "GitHub Personal Access Token required."
  echo ""
  echo "Create one at: https://github.com/settings/tokens/new"
  echo "  - Note: 'theshop-push'"
  echo "  - Scopes: 'repo' (full control of private repos)"
  echo "  - Expiration: your choice"
  echo ""
  read -p "Enter your GitHub token: " GITHUB_TOKEN
fi

if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: No token provided"
  exit 1
fi

echo ""
echo "==> Creating repo '$REPO_NAME' on GitHub..."

# Try to create the repo
HTTP_STATUS=$(curl -s -o /tmp/github_response.json -w "%{http_code}" \
  -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/user/repos \
  -d "{\"name\":\"$REPO_NAME\",\"description\":\"$DESCRIPTION\",\"private\":false,\"auto_init\":false}")

if [ "$HTTP_STATUS" = "201" ]; then
  echo "    Repo created successfully!"
elif [ "$HTTP_STATUS" = "422" ]; then
  echo "    Repo '$REPO_NAME' already exists (that's fine, we'll just push to it)"
else
  echo "    HTTP $HTTP_STATUS - response:"
  cat /tmp/github_response.json
  echo ""
  echo "If you got a 401, your token is invalid or lacks the 'repo' scope."
  echo "If you got a 404, your username may not be 'OnefranC'."
  exit 1
fi

echo ""
echo "==> Pushing to GitHub..."

git remote remove origin 2>/dev/null || true
git remote add origin "https://$GITHUB_TOKEN@github.com/OnefranC/$REPO_NAME.git"
git push -u origin main
GIT_EXIT=$?

# Clean up token from remote URL for security
git remote set-url origin "https://github.com/OnefranC/$REPO_NAME.git"

if [ $GIT_EXIT -eq 0 ]; then
  echo ""
  echo "✅ Success! Your shop is live at:"
  echo "   https://github.com/OnefranC/$REPO_NAME"
  echo ""
  echo "To enable GitHub Pages for a shareable demo link, go to:"
  echo "   https://github.com/OnefranC/$REPO_NAME/settings/pages"
  echo "   - Source: 'main' branch, '/' root"
  echo "   - Save. The demo will be at:"
  echo "     https://OnefranC.github.io/$REPO_NAME/"
else
  echo ""
  echo "❌ Push failed. Try running with GIT_TRACE=1 for details."
  exit 1
fi
