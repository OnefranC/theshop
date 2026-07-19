// TheShop Product Catalog & Data
// Realistic demo products, prices, and reviews for a general merchandise store

const CATEGORIES = [
  { id: 'electronics', name: 'Electronics', icon: 'laptop' },
  { id: 'fashion', name: 'Fashion', icon: 'shirt' },
  { id: 'home', name: 'Home & Living', icon: 'home' },
  { id: 'beauty', name: 'Beauty', icon: 'sparkles' },
  { id: 'sports', name: 'Sports & Outdoors', icon: 'dumbbell' },
  { id: 'kids', name: 'Kids & Baby', icon: 'baby' },
  { id: 'accessories', name: 'Accessories', icon: 'watch' },
  { id: 'audio', name: 'Audio', icon: 'headphones' }
];

const PRODUCTS = [
  {
    id: 'p001',
    title: 'Fitbit Versa 4 Fitness Smartwatch with Daily Readiness, GPS, 24/7 Heart Rate, 40+ Exercise Modes, Sleep Tracking and more, Black/Graphite, One Size (S & L Bands Included)',
    price: 149.95,
    originalPrice: 199.95,
    rating: 4.0,
    reviewCount: 13435,
    sold: 14000,
    category: 'electronics',
    collection: 'new',
    keywords: ['smart', 'modern', 'fitness'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'Get better results from your fitness routine with the Fitbit Versa 4. Daily Readiness scores help you understand when to push or recover. Track 40+ exercise modes, monitor your heart rate 24/7, and get a full picture of your sleep with personalized Sleep Score. Built-in GPS lets you see pace and distance during outdoor workouts without your phone. Stay connected with calls, texts, and app notifications right from your wrist.',
    specs: {
      'Operation System': 'iOS',
      'Memory Storage Capacity': '4 GB',
      'Special Features': 'Activity Tracker, GPS, Heart Rate Monitor, Sleep Monitor, Daily Workout Memory, Water Resistant, Alarm Clock, Bluetooth, Text Messaging, Phone Call',
      'Battery Life': '6+ days',
      'Connectivity': 'Bluetooth, Wi-Fi, GPS',
      'Display': 'AMOLED'
    },
    options: {
      'Strap Type': ['Black silicone', 'Gray silicone', 'Black Mesh Tape', 'Black steel strap'],
      'Size': ['S', 'L']
    },
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=900&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=900&q=80',
      'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=900&q=80',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=900&q=80',
      'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=900&q=80'
    ],
    freeShipping: true,
    delivery: 'Mar 1-14'
  },
  {
    id: 'p002',
    title: 'Nike Air Max 270 React Running Sneakers - Breathable Mesh Upper, Cushioned Sole',
    price: 129.00,
    originalPrice: 169.00,
    rating: 4.6,
    reviewCount: 8214,
    sold: 18000,
    category: 'fashion',
    collection: 'trending',
    keywords: ['modern', 'spring'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'The Nike Air Max 270 React combines two of our most innovative technologies for incredible comfort. The big heel Air unit delivers plush cushioning while the React foam sole feels springy and light.',
    specs: {
      'Material': 'Mesh and Synthetic',
      'Sole': 'Rubber',
      'Closure': 'Lace-Up',
      'Available Sizes': '6-13 US'
    },
    options: {
      'Size': ['7', '8', '9', '10', '11', '12'],
      'Color': ['Red/White', 'Black/White', 'Blue/Gray']
    },
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900&q=80',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p003',
    title: 'Curology Custom Skincare Set - Personalized 3-Step Routine with Cleanser, Moisturizer and Serum',
    price: 50.00,
    originalPrice: 100.00,
    rating: 4.4,
    reviewCount: 5210,
    sold: 14000,
    category: 'beauty',
    collection: 'trending',
    keywords: ['modern'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'Custom prescription-strength skincare tailored to your skin goals. Includes your custom cleanser, treatment, and moisturizer formulated by licensed dermatologists.',
    specs: {
      'Skin Type': 'All',
      'Volume': '30ml + 50ml + 50ml',
      'Cruelty Free': 'Yes',
      'Vegan': 'Yes'
    },
    options: {
      'Routine': ['Acne', 'Anti-Aging', 'Brightening', 'Hydration']
    },
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p004',
    title: 'Premium Wireless Earbuds with Active Noise Cancellation & 30hr Battery Life',
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviewCount: 9832,
    sold: 22000,
    category: 'audio',
    collection: 'trending',
    keywords: ['smart', 'modern'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'Studio-quality sound with deep bass and crystal-clear highs. Industry-leading active noise cancellation blocks out the world so you can focus on your music.',
    specs: {
      'Battery Life': '30 hours with case',
      'Connectivity': 'Bluetooth 5.3',
      'Water Resistance': 'IPX5',
      'Driver': '11mm dynamic'
    },
    options: {
      'Color': ['Midnight Black', 'Pearl White', 'Ocean Blue']
    },
    images: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=900&q=80',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&q=80',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p005',
    title: 'Apple iPhone 15 Pro 256GB - Titanium, Unlocked, 5G, ProMotion Display',
    price: 999.00,
    originalPrice: 1199.00,
    rating: 4.8,
    reviewCount: 24180,
    sold: 50000,
    category: 'electronics',
    collection: 'new',
    keywords: ['smart', 'modern'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'iPhone 15 Pro features a strong and light aerospace-grade titanium design with a textured matte glass back. The Action button replaces the Ring/Silent switch, offering a fast way to access your favorite feature.',
    specs: {
      'Display': '6.1-inch Super Retina XDR',
      'Chip': 'A17 Pro',
      'Camera': '48MP Main | 12MP Ultra Wide',
      'Battery': 'Up to 23 hours video playback'
    },
    options: {
      'Color': ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
      'Storage': ['128GB', '256GB', '512GB', '1TB']
    },
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=900&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=900&q=80',
      'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p006',
    title: 'MacBook Pro 14-inch M3 Chip 8GB RAM 512GB SSD - Space Gray',
    price: 1599.00,
    originalPrice: 1799.00,
    rating: 4.9,
    reviewCount: 15432,
    sold: 12000,
    category: 'electronics',
    collection: 'trending',
    keywords: ['smart', 'modern'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'Supercharged by M3, the MacBook Pro features a stunning Liquid Retina XDR display, up to 22 hours of battery life, and a powerful 8-core CPU.',
    specs: {
      'Processor': 'Apple M3 8-core',
      'RAM': '8GB Unified Memory',
      'Storage': '512GB SSD',
      'Display': '14.2-inch Liquid Retina XDR'
    },
    options: {
      'Color': ['Space Gray', 'Silver']
    },
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&q=80',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p007',
    title: 'CHANEL N°5 Eau de Parfum - Iconic Women\'s Fragrance, 100ml',
    price: 132.00,
    originalPrice: 175.00,
    rating: 4.7,
    reviewCount: 12340,
    sold: 8000,
    category: 'beauty',
    collection: 'trending',
    keywords: ['modern'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'The legendary N°5 fragrance. A floral-aldehyde composition with notes of ylang-ylang, neroli, and jasmine. The most iconic fragrance in the world.',
    specs: {
      'Volume': '100ml',
      'Type': 'Eau de Parfum',
      'Concentration': '15-20%',
      'Scent Family': 'Floral Aldehyde'
    },
    options: {
      'Size': ['50ml', '100ml', '150ml']
    },
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p008',
    title: 'LEGO Star Wars Millennium Falcon Building Set - 1,353 Pieces',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.9,
    reviewCount: 18234,
    sold: 15000,
    category: 'kids',
    collection: 'trending',
    keywords: ['modern'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'Build and play out classic Star Wars scenes with this impressive Millennium Falcon. Includes 4 minifigures and iconic features from the films.',
    specs: {
      'Pieces': '1,353',
      'Age': '9+',
      'Theme': 'Star Wars'
    },
    options: {
      'Edition': ['Standard', 'Collector\'s']
    },
    images: [
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80',
      'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p009',
    title: 'Stainless Steel Insulated Water Bottle 32oz - Keeps Cold 24hrs, Hot 12hrs',
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviewCount: 32145,
    sold: 45000,
    category: 'sports',
    collection: 'new',
    keywords: ['modern', 'spring'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'Triple-wall vacuum insulation keeps drinks ice cold for 24 hours or piping hot for 12. BPA-free, dishwasher safe, fits in standard cup holders.',
    specs: {
      'Capacity': '32oz / 946ml',
      'Material': '18/8 Stainless Steel',
      'Insulation': 'Triple-wall vacuum',
      'BPA Free': 'Yes'
    },
    options: {
      'Color': ['Matte Black', 'White', 'Navy', 'Sage Green', 'Coral'],
      'Size': ['20oz', '32oz', '40oz']
    },
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900&q=80',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p010',
    title: 'Sony WH-1000XM5 Wireless Noise-Cancelling Headphones - Black',
    price: 348.00,
    originalPrice: 399.99,
    rating: 4.8,
    reviewCount: 28430,
    sold: 30000,
    category: 'audio',
    collection: 'new',
    keywords: ['smart', 'modern'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'Industry-leading noise cancellation with two processors and eight microphones. Exceptional sound quality with new driver units. Crystal clear hands-free calling.',
    specs: {
      'Battery Life': '30 hours',
      'Driver': '30mm',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.2, NFC'
    },
    options: {
      'Color': ['Black', 'Silver']
    },
    images: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p011',
    title: 'Dyson V15 Detect Cordless Vacuum Cleaner - Laser Dust Detection',
    price: 649.99,
    originalPrice: 799.99,
    rating: 4.7,
    reviewCount: 9120,
    sold: 6000,
    category: 'home',
    collection: 'trending',
    keywords: ['smart', 'modern'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'The most powerful, intelligent cordless vacuum. Laser reveals microscopic dust. LCD screen shows real-time proof of a deep clean.',
    specs: {
      'Suction Power': '230 AW',
      'Battery': 'Up to 60 minutes',
      'Bin Capacity': '0.77L',
      'Weight': '3.1kg'
    },
    options: {
      'Bundle': ['Vacuum Only', 'With Stand', 'Complete Kit']
    },
    images: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&q=80',
      'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p012',
    title: 'Nespresso Vertuo Coffee Machine by Breville - 5 Cup Sizes',
    price: 159.00,
    originalPrice: 199.00,
    rating: 4.5,
    reviewCount: 14210,
    sold: 9000,
    category: 'home',
    collection: 'trending',
    keywords: ['modern'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'Brews 5 different cup sizes from espresso to Alto. Centrifusion technology for the perfect crema. One-touch operation.',
    specs: {
      'Cup Sizes': 'Espresso, Double, Gran Lungo, Mug, Alto',
      'Water Tank': '1.1L',
      'Pressure': '19 bar',
      'Heat-up Time': '15-20 seconds'
    },
    options: {
      'Color': ['Ink Black', 'Chrome', 'Red']
    },
    images: [
      'https://images.unsplash.com/photo-1572119865084-43c285814d63?w=900&q=80',
      'https://images.unsplash.com/photo-1517668808823-1c19e5a32e51?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p013',
    title: 'Patagonia Women\'s Better Sweater Fleece Jacket - Forest Green',
    price: 139.00,
    originalPrice: 169.00,
    rating: 4.7,
    reviewCount: 6320,
    sold: 4000,
    category: 'fashion',
    collection: 'trending',
    keywords: ['spring', 'modern'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'A versatile, classic-look 100% recycled polyester fleece jacket with a sweater-knit face and a warm, soft fleece interior.',
    specs: {
      'Material': '100% Recycled Polyester',
      'Fit': 'Regular',
      'Weight': '638g',
      'Pockets': '2 hand, 1 chest'
    },
    options: {
      'Size': ['XS', 'S', 'M', 'L', 'XL'],
      'Color': ['Forest Green', 'Black', 'Natural']
    },
    images: [
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=900&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p014',
    title: 'Floral Maxi Summer Dress - V-Neck, Sleeveless, Bohemian Style',
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.4,
    reviewCount: 11250,
    sold: 22000,
    category: 'fashion',
    collection: 'trending',
    keywords: ['spring', 'modern'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'A beautiful, flowing maxi dress in a soft floral print. Perfect for warm weather and casual occasions.',
    specs: {
      'Material': '95% Polyester, 5% Spandex',
      'Length': 'Maxi',
      'Care': 'Machine washable',
      'Lining': 'Yes'
    },
    options: {
      'Size': ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=900&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p015',
    title: 'Kids Electric Ride-On Toy Car with Remote Control - Red',
    price: 219.00,
    originalPrice: 299.00,
    rating: 4.3,
    reviewCount: 4520,
    sold: 3000,
    category: 'kids',
    collection: 'new',
    keywords: ['modern'],
    inStock: true,
    seller: 'TheShop mall',
    description: '12V battery-powered ride-on car with parent remote control, LED lights, music, and realistic engine sounds.',
    specs: {
      'Age': '3-6 years',
      'Max Speed': '5 mph',
      'Battery': '12V rechargeable',
      'Weight Capacity': '66 lbs'
    },
    options: {
      'Color': ['Red', 'Black', 'White', 'Pink']
    },
    images: [
      'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=900&q=80',
      'https://images.unsplash.com/photo-1566149932330-c0e6da2cd8f3?w=900&q=80'
    ],
    freeShipping: true
  },
  {
    id: 'p016',
    title: 'Smart Home Security Camera 1080p WiFi with Night Vision, 2-Way Audio',
    price: 39.99,
    originalPrice: 79.99,
    rating: 4.5,
    reviewCount: 18920,
    sold: 35000,
    category: 'electronics',
    collection: 'trending',
    keywords: ['smart', 'modern'],
    inStock: true,
    seller: 'TheShop mall',
    description: 'Keep your home safe with 1080p HD live view, infrared night vision, and motion detection alerts sent to your phone.',
    specs: {
      'Resolution': '1080p Full HD',
      'Field of View': '130°',
      'Storage': 'MicroSD up to 256GB',
      'Connectivity': '2.4GHz WiFi'
    },
    options: {
      'Pack': ['1 Camera', '2 Camera Pack', '4 Camera Pack']
    },
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=80',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=900&q=80'
    ],
    freeShipping: true
  },

  // ========== ELECTRONICS (additional 14) ==========
  {
    id: 'e001', title: 'Samsung Galaxy S24 Ultra 512GB - Titanium Black, Unlocked 5G',
    price: 1199.00, originalPrice: 1399.00, rating: 4.7, reviewCount: 18420, sold: 42000,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'The Galaxy S24 Ultra features a titanium frame, S Pen, 200MP camera, and Galaxy AI for next-level productivity.',
    images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=900&q=80']
  },
  {
    id: 'e002', title: 'iPad Air 11-inch M2 Chip 128GB WiFi - Space Gray',
    price: 549.00, originalPrice: 599.00, rating: 4.8, reviewCount: 9120, sold: 18000,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Powerful iPad Air with M2 chip, 11-inch Liquid Retina display, and Apple Pencil Pro support.',
    images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?w=900&q=80']
  },
  {
    id: 'e003', title: 'Sony A7 IV Full-Frame Mirrorless Camera Body',
    price: 2499.00, originalPrice: 2799.00, rating: 4.9, reviewCount: 3210, sold: 4500,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: '33MP full-frame sensor with 4K 60p video, advanced autofocus, and pro-grade build quality.',
    images: ['https://images.unsplash.com/photo-1510127031640-ca499bba820a?w=900&q=80']
  },
  {
    id: 'e004', title: 'Bose QuietComfort Earbuds II - Triple Black',
    price: 229.00, originalPrice: 299.00, rating: 4.6, reviewCount: 12340, sold: 25000,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Personalized noise cancellation and immersive sound. CustomTune technology calibrates sound to your ears.',
    images: ['https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=900&q=80']
  },
  {
    id: 'e005', title: 'Apple Watch Series 9 GPS 45mm - Midnight Aluminum',
    price: 399.00, originalPrice: 429.00, rating: 4.7, reviewCount: 22100, sold: 38000,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'New S9 SiP chip, the magic of Double Tap, brighter Always-On display, and watchOS 10.',
    images: ['https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=900&q=80']
  },
  {
    id: 'e006', title: 'DJI Mini 3 Pro Drone with RC Controller',
    price: 759.00, originalPrice: 909.00, rating: 4.8, reviewCount: 4230, sold: 7200,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Sub-249g drone with 4K HDR video, obstacle sensing, and 34-min flight time.',
    images: ['https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&q=80']
  },
  {
    id: 'e007', title: 'Logitech MX Master 3S Wireless Mouse - Graphite',
    price: 99.99, originalPrice: 119.99, rating: 4.8, reviewCount: 15420, sold: 28000,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: '8K DPI sensor, quiet clicks, MagSpeed scroll wheel, and multi-device flow.',
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=900&q=80']
  },
  {
    id: 'e008', title: 'Kindle Paperwhite 11th Gen 16GB - 6.8" Display, Ad-Supported',
    price: 139.99, originalPrice: 159.99, rating: 4.7, reviewCount: 112400, sold: 150000,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: '6.8" glare-free display, adjustable warm light, 10-week battery life, and waterproof design.',
    images: ['https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&q=80']
  },
  {
    id: 'e009', title: 'Ring Video Doorbell Pro 2 with 1536p HD+ Video',
    price: 249.00, originalPrice: 299.00, rating: 4.5, reviewCount: 23420, sold: 41000,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Head-to-toe HD+ video, 3D motion detection, Bird\'s Eye View, and package alerts.',
    images: ['https://images.unsplash.com/photo-1558002038-1055907df827?w=900&q=80']
  },
  {
    id: 'e010', title: 'Razer Huntsman V3 Pro TKL Linear Optical Switch Keyboard',
    price: 199.99, originalPrice: 249.99, rating: 4.6, reviewCount: 3420, sold: 5800,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Analog optical switches, adjustable actuation, doubleshot PBT keycaps, and per-key Chroma RGB.',
    images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=900&q=80']
  },
  {
    id: 'e011', title: 'GoPro HERO12 Black Action Camera - 5.3K60 Video',
    price: 349.00, originalPrice: 449.00, rating: 4.6, reviewCount: 8230, sold: 14000,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: '5.3K60 video, HyperSmooth 6.0, 27MP photos, and waterproof to 33ft.',
    images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&q=80']
  },
  {
    id: 'e012', title: 'Anker 737 Power Bank 24,000mAh 140W Output',
    price: 149.99, originalPrice: 179.99, rating: 4.7, reviewCount: 9320, sold: 18000,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Smart digital display, 140W output, charges MacBook Pro, and 3 ports.',
    images: ['https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=900&q=80']
  },
  {
    id: 'e013', title: 'Nintendo Switch OLED Model - White Joy-Con',
    price: 349.00, originalPrice: 379.00, rating: 4.9, reviewCount: 42100, sold: 65000,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: '7-inch OLED screen, wide adjustable stand, dock with wired LAN port, 64 GB internal storage.',
    images: ['https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=900&q=80']
  },
  {
    id: 'e014', title: 'Google Nest Thermostat - Smart Temperature Control',
    price: 129.00, originalPrice: 169.00, rating: 4.5, reviewCount: 14210, sold: 22000,
    category: 'electronics', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Save energy with smart scheduling. Voice control with Google Assistant and Alexa.',
    images: ['https://images.unsplash.com/photo-1567721913486-6585f069b332?w=900&q=80']
  },

  // ========== FASHION (additional 14) ==========
  {
    id: 'f001', title: 'Levi\'s 501 Original Fit Men\'s Jeans - Stonewash',
    price: 69.50, originalPrice: 89.50, rating: 4.6, reviewCount: 38200, sold: 75000,
    category: 'fashion', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'The original jean. A blank canvas for self-expression since 1873.',
    images: ['https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&q=80']
  },
  {
    id: 'f002', title: 'Adidas Ultraboost 22 Running Shoes - Core Black',
    price: 159.00, originalPrice: 190.00, rating: 4.7, reviewCount: 12420, sold: 21000,
    category: 'fashion', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Boost midsole, Primeknit upper, and Continental rubber outsole for ultimate comfort.',
    images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&q=80']
  },
  {
    id: 'f003', title: 'Ralph Lauren Polo Men\'s Cotton Shirt - Navy',
    price: 89.50, originalPrice: 109.00, rating: 4.7, reviewCount: 9320, sold: 18000,
    category: 'fashion', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Classic fit polo in soft cotton mesh with the iconic Pony embroidery.',
    images: ['https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=900&q=80']
  },
  {
    id: 'f004', title: 'Zara Women\'s Wool Blend Long Coat - Camel',
    price: 199.00, originalPrice: 269.00, rating: 4.5, reviewCount: 4230, sold: 8000,
    category: 'fashion', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'A timeless long coat in a soft wool blend, perfect for layering.',
    images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80']
  },
  {
    id: 'f005', title: 'Champion Powerblend Crewneck Sweatshirt - Oxford Gray',
    price: 49.99, originalPrice: 65.00, rating: 4.8, reviewCount: 18420, sold: 32000,
    category: 'fashion', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Reduced shrinkage and pilling, Champion\'s classic fleece crewneck.',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=80']
  },
  {
    id: 'f006', title: 'Lululemon Align High-Rise Pant 25" - Black',
    price: 98.00, originalPrice: 128.00, rating: 4.7, reviewCount: 22340, sold: 41000,
    category: 'fashion', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Buttery-soft Nulu fabric that feels weightless and is squat-proof.',
    images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=900&q=80']
  },
  {
    id: 'f007', title: 'H&M Slim Fit Suit Jacket - Black',
    price: 119.00, originalPrice: 149.00, rating: 4.3, reviewCount: 1420, sold: 3000,
    category: 'fashion', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'A versatile slim-fit blazer in a stretchy wool-blend fabric.',
    images: ['https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80']
  },
  {
    id: 'f008', title: 'Under Armour Men\'s Tech 2.0 Short Sleeve T-Shirt',
    price: 24.99, originalPrice: 30.00, rating: 4.6, reviewCount: 28420, sold: 52000,
    category: 'fashion', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Loose fit, quick-drying UA Tech fabric, and anti-odor technology.',
    images: ['https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=900&q=80']
  },
  {
    id: 'f009', title: 'Coach Tabby Shoulder Bag 26 - Chalk',
    price: 350.00, originalPrice: 450.00, rating: 4.6, reviewCount: 1820, sold: 3200,
    category: 'fashion', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Polished pebble leather, magnetic snap closure, and Signature C hardware.',
    images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900&q=80']
  },
  {
    id: 'f010', title: 'New Balance Fresh Foam 1080v13 - Grey/White',
    price: 159.99, originalPrice: 184.99, rating: 4.6, reviewCount: 4230, sold: 7800,
    category: 'fashion', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Plush Fresh Foam X midsole, engineered hypoknit upper, and ultra-comfortable ride.',
    images: ['https://images.unsplash.com/photo-1603808034871-4d98c1b46218?w=900&q=80']
  },
  {
    id: 'f011', title: 'Madewell Women\'s Denim Jacket - Vintage Wash',
    price: 128.00, originalPrice: 158.00, rating: 4.5, reviewCount: 1820, sold: 3400,
    category: 'fashion', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'A timeless denim jacket with classic styling and a soft, broken-in feel.',
    images: ['https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=900&q=80']
  },
  {
    id: 'f012', title: 'Ray-Ban Aviator Classic Sunglasses - Gold/Green',
    price: 159.00, originalPrice: 189.00, rating: 4.7, reviewCount: 9230, sold: 16000,
    category: 'fashion', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Timeless aviator style with crystal green G-15 lenses and gold-tone frame.',
    images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=80']
  },
  {
    id: 'f013', title: 'Tommy Hilfiger Men\'s Cotton Crewneck T-Shirt 3-Pack',
    price: 49.99, originalPrice: 75.00, rating: 4.5, reviewCount: 12320, sold: 22000,
    category: 'fashion', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Three classic crew tees in 100% cotton with the iconic Tommy flag logo.',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80']
  },
  {
    id: 'f014', title: 'Levi\'s Wedgie High-Rise Women\'s Jeans - Indigo',
    price: 79.00, originalPrice: 98.00, rating: 4.5, reviewCount: 18230, sold: 33000,
    category: 'fashion', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'The cheekiest, comfiest, throwback-styled high-rise jean.',
    images: ['https://images.unsplash.com/photo-1604176354204-9268737828e4?w=900&q=80']
  },

  // ========== HOME (additional 14) ==========
  {
    id: 'h001', title: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker 6 Qt',
    price: 89.95, originalPrice: 129.99, rating: 4.7, reviewCount: 184200, sold: 250000,
    category: 'home', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Pressure cook, slow cook, rice cooker, steamer, sauté, yogurt maker, and warmer.',
    images: ['https://images.unsplash.com/photo-1574269910231-bc508bcb40d2?w=900&q=80']
  },
  {
    id: 'h002', title: 'Casper Original Memory Foam Mattress Queen',
    price: 1095.00, originalPrice: 1395.00, rating: 4.6, reviewCount: 18230, sold: 32000,
    category: 'home', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Zoned support for proper alignment and pressure relief for better sleep.',
    images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80']
  },
  {
    id: 'h003', title: 'iRobot Roomba 694 Robot Vacuum with WiFi',
    price: 274.99, originalPrice: 374.99, rating: 4.5, reviewCount: 32420, sold: 58000,
    category: 'home', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Learns your cleaning habits and offers personalized schedules. Works with Alexa and Google.',
    images: ['https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=900&q=80']
  },
  {
    id: 'h004', title: 'KitchenAid Artisan Stand Mixer 5 Qt - Empire Red',
    price: 379.99, originalPrice: 449.99, rating: 4.8, reviewCount: 18230, sold: 32000,
    category: 'home', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Tilt-head stand mixer with 10 speeds, dough hook, flat beater, and wire whip.',
    images: ['https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&q=80']
  },
  {
    id: 'h005', title: 'Philips Hue White and Color Ambiance Starter Kit',
    price: 199.99, originalPrice: 249.99, rating: 4.6, reviewCount: 8920, sold: 15000,
    category: 'home', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: '16 million colors, voice control, and smart scheduling. Includes bridge and 4 bulbs.',
    images: ['https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=900&q=80']
  },
  {
    id: 'h006', title: 'Vitamix 5200 Variable-Speed Blender - Black',
    price: 449.95, originalPrice: 549.95, rating: 4.8, reviewCount: 8230, sold: 14000,
    category: 'home', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Professional-grade blender, aircraft-grade stainless steel blades, and 7-year warranty.',
    images: ['https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=900&q=80']
  },
  {
    id: 'h007', title: 'Ninja Foodi 10-in-1 Pressure Cooker & Air Fryer',
    price: 199.99, originalPrice: 249.99, rating: 4.7, reviewCount: 14210, sold: 25000,
    category: 'home', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Pressure cook, air fry, slow cook, steam, sear, sauté, bake, roast, dehydrate, and yogurt.',
    images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80']
  },
  {
    id: 'h008', title: 'Crayola Ultimate Crayon Collection 152 Pieces',
    price: 24.99, originalPrice: 34.99, rating: 4.9, reviewCount: 32420, sold: 65000,
    category: 'home', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: '152 crayons with built-in sharpener, perfect for any coloring project.',
    images: ['https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80']
  },
  {
    id: 'h009', title: 'Our Place Wonder Oven 6-in-1 Air Fryer & Toaster',
    price: 295.00, originalPrice: 345.00, rating: 4.7, reviewCount: 2320, sold: 4200,
    category: 'home', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Air fry, bake, toast, roast, reheat, and broil in a compact countertop design.',
    images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80']
  },
  {
    id: 'h010', title: 'Dyson Purifier Cool TP10 Air Purifier & Fan',
    price: 549.99, originalPrice: 649.99, rating: 4.5, reviewCount: 1820, sold: 3200,
    category: 'home', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'HEPA H13 filtration, removes 99.97% of particles, and cools you in summer.',
    images: ['https://images.unsplash.com/photo-1581275288578-2fbf9ad15b3a?w=900&q=80']
  },
  {
    id: 'h011', title: 'Le Creuset Enameled Cast Iron Signature Dutch Oven 5.5 Qt',
    price: 369.95, originalPrice: 449.95, rating: 4.9, reviewCount: 4230, sold: 7800,
    category: 'home', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Even heat distribution, superior heat retention, and stunning enameled finish.',
    images: ['https://images.unsplash.com/photo-1584990347449-a8d4a74a2c4f?w=900&q=80']
  },
  {
    id: 'h012', title: 'SimpliSafe 8-Piece Wireless Home Security System',
    price: 269.99, originalPrice: 359.99, rating: 4.6, reviewCount: 18420, sold: 32000,
    category: 'home', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'No contracts, 24/7 professional monitoring optional, and easy 30-min setup.',
    images: ['https://images.unsplash.com/photo-1558002038-1055907df827?w=900&q=80']
  },
  {
    id: 'h013', title: 'Breville Toast & Bagel Maker BTA730XL',
    price: 119.95, originalPrice: 149.95, rating: 4.7, reviewCount: 3230, sold: 5800,
    category: 'home', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Variable width slots, lift & look feature, and motorized lowering.',
    images: ['https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?w=900&q=80']
  },
  {
    id: 'h014', title: 'Room Essentials 5-Shelf Bookcase - White',
    price: 49.99, originalPrice: 69.99, rating: 4.5, reviewCount: 14210, sold: 25000,
    category: 'home', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: '5 spacious shelves, easy assembly, and a clean white finish.',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=900&q=80']
  },

  // ========== BEAUTY (additional 14) ==========
  {
    id: 'b001', title: 'The Ordinary Hyaluronic Acid 2% + B5 Hydration Serum',
    price: 8.90, originalPrice: 12.00, rating: 4.6, reviewCount: 92300, sold: 180000,
    category: 'beauty', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Multi-depth hydration serum with 5 forms of hyaluronic acid and vitamin B5.',
    images: ['https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=900&q=80']
  },
  {
    id: 'b002', title: 'Estée Lauder Advanced Night Repair Serum 50ml',
    price: 105.00, originalPrice: 145.00, rating: 4.8, reviewCount: 14230, sold: 25000,
    category: 'beauty', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Iconic anti-aging serum that works overnight to help skin look younger.',
    images: ['https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900&q=80']
  },
  {
    id: 'b003', title: 'Maybelline Fit Me Matte + Poreless Foundation',
    price: 9.99, originalPrice: 13.99, rating: 4.5, reviewCount: 142300, sold: 250000,
    category: 'beauty', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Mattifying foundation with micro-powders for natural matte coverage and poreless-looking skin.',
    images: ['https://images.unsplash.com/photo-1631214524020-3c8db3f47b50?w=900&q=80']
  },
  {
    id: 'b004', title: 'CeraVe Daily Facial Moisturizing Lotion 12 oz',
    price: 16.97, originalPrice: 22.00, rating: 4.7, reviewCount: 82300, sold: 150000,
    category: 'beauty', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Lightweight, oil-free moisturizer with ceramides and hyaluronic acid for all skin types.',
    images: ['https://images.unsplash.com/photo-1570194065650-d99fb4a25e22?w=900&q=80']
  },
  {
    id: 'b005', title: 'Charlotte Tilbury Pillow Talk Lipstick - Original',
    price: 35.00, originalPrice: 45.00, rating: 4.8, reviewCount: 8230, sold: 15000,
    category: 'beauty', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'The iconic natural-pink nude lipstick loved by celebrities.',
    images: ['https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&q=80']
  },
  {
    id: 'b006', title: 'Olaplex No.3 Hair Perfector Treatment',
    price: 28.00, originalPrice: 35.00, rating: 4.7, reviewCount: 28340, sold: 52000,
    category: 'beauty', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'At-home bond maintenance treatment that reduces breakage and strengthens hair.',
    images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=900&q=80']
  },
  {
    id: 'b007', title: 'Rare Beauty Soft Pinch Liquid Blush - Joy',
    price: 23.00, originalPrice: 30.00, rating: 4.7, reviewCount: 18230, sold: 32000,
    category: 'beauty', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Weightless, buildable liquid blush that blends seamlessly for a natural flush.',
    images: ['https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80']
  },
  {
    id: 'b008', title: 'La Roche-Posay Anthelios Melt-In Sunscreen SPF 100',
    price: 36.99, originalPrice: 45.99, rating: 4.6, reviewCount: 9230, sold: 16000,
    category: 'beauty', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Invisible finish, weightless texture, and broad-spectrum protection.',
    images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=900&q=80']
  },
  {
    id: 'b009', title: 'Dyson Airwrap Multi-Styler Complete - Nickel/Copper',
    price: 549.99, originalPrice: 599.99, rating: 4.7, reviewCount: 12340, sold: 22000,
    category: 'beauty', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Curl, wave, and dry without extreme heat. Multiple attachments for endless styles.',
    images: ['https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=900&q=80']
  },
  {
    id: 'b010', title: 'MAC Ruby Woo Matte Lipstick',
    price: 19.00, originalPrice: 24.00, rating: 4.8, reviewCount: 18230, sold: 32000,
    category: 'beauty', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'The iconic blue-red matte lipstick that flatters every skin tone.',
    images: ['https://images.unsplash.com/photo-1583241519240-3a846c6e8f8a?w=900&q=80']
  },
  {
    id: 'b011', title: 'Drunk Elephant Bronzing Drops - Dusk',
    price: 36.00, originalPrice: 44.00, rating: 4.5, reviewCount: 4230, sold: 7800,
    category: 'beauty', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Customizable, buildable, natural-looking bronzer for face and body.',
    images: ['https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=900&q=80']
  },
  {
    id: 'b012', title: 'Tatcha The Camellia Cleansing Oil',
    price: 36.00, originalPrice: 48.00, rating: 4.8, reviewCount: 8230, sold: 14000,
    category: 'beauty', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Gentle yet powerful makeup remover and cleanser. Suitable for all skin types.',
    images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=900&q=80']
  },
  {
    id: 'b013', title: 'Fenty Beauty Gloss Bomb Universal Lip Luminizer',
    price: 19.00, originalPrice: 24.00, rating: 4.8, reviewCount: 18420, sold: 32000,
    category: 'beauty', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Universal rose-nude lip gloss with explosive shine and a hint of mint.',
    images: ['https://images.unsplash.com/photo-1583241519240-3a846c6e8f8a?w=900&q=80']
  },
  {
    id: 'b014', title: 'Sunday Riley Good Genes All-In-One Lactic Acid Treatment',
    price: 85.00, originalPrice: 105.00, rating: 4.6, reviewCount: 4230, sold: 7800,
    category: 'beauty', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Lactic acid treatment that brightens, plumps, and smooths skin instantly.',
    images: ['https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&q=80']
  },

  // ========== SPORTS (additional 14) ==========
  {
    id: 's001', title: 'Nike Pegasus 40 Running Shoes - Black/White',
    price: 129.99, originalPrice: 159.99, rating: 4.7, reviewCount: 8230, sold: 14000,
    category: 'sports', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Responsive React foam, breathable mesh upper, and reliable everyday trainer.',
    images: ['https://images.unsplash.com/photo-1560769629-97571966e5b2?w=900&q=80']
  },
  {
    id: 's002', title: 'Manduka PRO Yoga Mat 6mm - Black',
    price: 119.95, originalPrice: 149.95, rating: 4.8, reviewCount: 14230, sold: 25000,
    category: 'sports', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'High-performance, eco-friendly yoga mat with a lifetime guarantee.',
    images: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=900&q=80']
  },
  {
    id: 's003', title: 'Bowflex SelectTech 552 Adjustable Dumbbells (Pair)',
    price: 549.00, originalPrice: 729.00, rating: 4.8, reviewCount: 9230, sold: 16000,
    category: 'sports', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Replace 15 sets of weights. Adjust from 5 to 52.5 lbs in 2.5 lb increments.',
    images: ['https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80']
  },
  {
    id: 's004', title: 'Yeti Rambler 20 oz Tumbler with MagSlider Lid',
    price: 35.00, originalPrice: 45.00, rating: 4.8, reviewCount: 42300, sold: 80000,
    category: 'sports', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Double-wall vacuum insulation keeps drinks cold or hot for hours. Dishwasher safe.',
    images: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900&q=80']
  },
  {
    id: 's005', title: 'Fitbit Charge 6 Fitness Tracker - Obsidian',
    price: 129.95, originalPrice: 159.95, rating: 4.3, reviewCount: 8230, sold: 14000,
    category: 'sports', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Built-in GPS, heart rate, sleep tracking, and Google apps. 7-day battery life.',
    images: ['https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&q=80']
  },
  {
    id: 's006', title: 'Theragun Mini 2 Portable Massage Gun',
    price: 199.00, originalPrice: 249.00, rating: 4.5, reviewCount: 1820, sold: 3200,
    category: 'sports', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Powerful percussive therapy in a pocket-sized device. 3 speeds, 150-minute battery.',
    images: ['https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?w=900&q=80']
  },
  {
    id: 's007', title: 'Under Armour HOVR Rise 4 Training Shoes',
    price: 89.99, originalPrice: 119.99, rating: 4.5, reviewCount: 1230, sold: 2400,
    category: 'sports', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'HOVR cushioning for energy return, breathable mesh, and supportive heel counter.',
    images: ['https://images.unsplash.com/photo-1608256246200-53e635b0809b?w=900&q=80']
  },
  {
    id: 's008', title: 'Hydro Flask 32 oz Wide Mouth Water Bottle',
    price: 44.95, originalPrice: 54.95, rating: 4.8, reviewCount: 38230, sold: 65000,
    category: 'sports', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'TempShield insulation, keeps cold 24 hours or hot 12. BPA-free, dishwasher safe.',
    images: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900&q=80']
  },
  {
    id: 's009', title: 'Coleman Sundome 4-Person Tent',
    price: 89.99, originalPrice: 109.99, rating: 4.5, reviewCount: 14230, sold: 25000,
    category: 'sports', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Weatherproof, easy 10-minute setup. Perfect for car camping and festivals.',
    images: ['https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=80']
  },
  {
    id: 's010', title: 'Wilson Tennis Racket Set for Beginners - 2 Rackets',
    price: 49.99, originalPrice: 69.99, rating: 4.4, reviewCount: 2320, sold: 4800,
    category: 'sports', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Pre-strung rackets, 2 overgrips, and 2 tennis balls. Perfect starter set.',
    images: ['https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=900&q=80']
  },
  {
    id: 's011', title: 'Garmin Forerunner 165 GPS Running Smartwatch',
    price: 249.99, originalPrice: 299.99, rating: 4.7, reviewCount: 1820, sold: 3400,
    category: 'sports', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'AMOLED display, 11-day battery, and personalized daily suggested workouts.',
    images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=900&q=80']
  },
  {
    id: 's012', title: 'Spalding NBA Street Basketball - Size 7',
    price: 24.99, originalPrice: 29.99, rating: 4.7, reviewCount: 18230, sold: 32000,
    category: 'sports', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Official NBA size and weight, durable outdoor rubber cover.',
    images: ['https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900&q=80']
  },
  {
    id: 's013', title: 'Burton Custom Snowboard 2024 - 158cm',
    price: 549.95, originalPrice: 649.95, rating: 4.8, reviewCount: 820, sold: 1500,
    category: 'sports', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'The most popular snowboard of all time. Iconic camber, exceptional control.',
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=900&q=80']
  },
  {
    id: 's014', title: 'Stanley Quencher H2.0 Tumbler 40 oz - Cream',
    price: 44.95, originalPrice: 54.95, rating: 4.8, reviewCount: 14230, sold: 28000,
    category: 'sports', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Double-wall vacuum insulation, fits in cup holder, 40 oz capacity.',
    images: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900&q=80']
  },

  // ========== KIDS (additional 14) ==========
  {
    id: 'k001', title: 'LEGO Classic Creative Bricks 484 Pieces',
    price: 39.99, originalPrice: 49.99, rating: 4.8, reviewCount: 18420, sold: 35000,
    category: 'kids', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Inspires open-ended creativity with 484 pieces in 35 different colors.',
    images: ['https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80']
  },
  {
    id: 'k002', title: 'Nintendo Switch Mario Kart 8 Deluxe Bundle',
    price: 299.00, originalPrice: 349.00, rating: 4.9, reviewCount: 142300, sold: 250000,
    category: 'kids', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Console, Mario Kart 8 Deluxe, 3-month Nintendo Switch Online membership.',
    images: ['https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=900&q=80']
  },
  {
    id: 'k003', title: 'Fisher-Price Laugh & Learn Smart Stages Chair',
    price: 39.99, originalPrice: 49.99, rating: 4.7, reviewCount: 18420, sold: 32000,
    category: 'kids', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Over 50 songs, sounds, and phrases. Smart Stages technology for growing minds.',
    images: ['https://images.unsplash.com/photo-1597509402757-f3a60fccf002?w=900&q=80']
  },
  {
    id: 'k004', title: 'Melissa & Doug Wooden Play Food Set - 21 Pieces',
    price: 24.99, originalPrice: 34.99, rating: 4.8, reviewCount: 8230, sold: 14000,
    category: 'kids', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: '21 pieces of wooden play food with a storage crate. Promotes imaginative play.',
    images: ['https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80']
  },
  {
    id: 'k005', title: 'Barbie Dreamhouse Adventure Doll House',
    price: 199.99, originalPrice: 249.99, rating: 4.7, reviewCount: 14230, sold: 25000,
    category: 'kids', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: '3 stories, 8 rooms, a working elevator, and pool with slide. 70+ accessories.',
    images: ['https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80']
  },
  {
    id: 'k006', title: 'Hot Wheels 5 Car Pack Assortment',
    price: 14.99, originalPrice: 19.99, rating: 4.8, reviewCount: 38230, sold: 65000,
    category: 'kids', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: '5 die-cast cars in 1:64 scale. Different colors and styles in every pack.',
    images: ['https://images.unsplash.com/photo-1566576912328-b4d2b1b7a9e5?w=900&q=80']
  },
  {
    id: 'k007', title: 'VTech Touch and Teach Word Book',
    price: 22.99, originalPrice: 29.99, rating: 4.7, reviewCount: 14230, sold: 25000,
    category: 'kids', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: '12 interactive pages, teaches over 100 words. Bilingual English/Spanish.',
    images: ['https://images.unsplash.com/photo-1495446815901-a7297e633e98?w=900&q=80']
  },
  {
    id: 'k008', title: 'Nerf Elite 2.0 Commander RD-6 Blaster',
    price: 24.99, originalPrice: 34.99, rating: 4.6, reviewCount: 18230, sold: 32000,
    category: 'kids', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: '6-dart rotating drum, includes 12 Nerf Elite darts. Ages 8+.',
    images: ['https://images.unsplash.com/photo-1576610616653-5c4dc3ddde97?w=900&q=80']
  },
  {
    id: 'k009', title: 'Crayola Inspiration Art Case 140 Pieces',
    price: 19.99, originalPrice: 29.99, rating: 4.8, reviewCount: 28420, sold: 52000,
    category: 'kids', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: '64 crayons, 40 colored pencils, 28 markers, 12 colored pencils. Portable case.',
    images: ['https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900&q=80']
  },
  {
    id: 'k010', title: 'Step2 Neighborhood Express Activity Center',
    price: 109.99, originalPrice: 139.99, rating: 4.6, reviewCount: 1820, sold: 3200,
    category: 'kids', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Train-themed indoor/outdoor play center. Multiple activities for toddler fun.',
    images: ['https://images.unsplash.com/photo-1597509402757-f3a60fccf002?w=900&q=80']
  },
  {
    id: 'k011', title: 'Pampers Baby-Dry Disposable Diapers Size 4 (124 Count)',
    price: 44.97, originalPrice: 54.97, rating: 4.8, reviewCount: 38420, sold: 75000,
    category: 'kids', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Up to 12 hours of protection, 3 layers of absorbency, hypoallergenic.',
    images: ['https://images.unsplash.com/photo-1546016671-a59cb1f5c4e3?w=900&q=80']
  },
  {
    id: 'k012', title: 'BabyBjörn Baby Carrier One - Anthracite',
    price: 159.95, originalPrice: 199.95, rating: 4.7, reviewCount: 4230, sold: 7800,
    category: 'kids', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Ergonomic baby carrier for newborns to 3 years. 4 carrying positions.',
    images: ['https://images.unsplash.com/photo-1546016671-a59cb1f5c4e3?w=900&q=80']
  },
  {
    id: 'k013', title: 'Skechers Toddler Light-Up Sneakers',
    price: 39.99, originalPrice: 49.99, rating: 4.6, reviewCount: 8230, sold: 14000,
    category: 'kids', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Fun light-up soles with every step. Easy on/off with hook-and-loop closure.',
    images: ['https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80']
  },
  {
    id: 'k014', title: 'Roblox Gift Card $50 - Digital Code',
    price: 50.00, originalPrice: 50.00, rating: 4.7, reviewCount: 18230, sold: 32000,
    category: 'kids', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Roblox credit to spend on avatar items, game passes, and premium games.',
    images: ['https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=900&q=80']
  },

  // ========== AUDIO (additional 14) ==========
  {
    id: 'a001', title: 'Apple AirPods Pro (2nd Gen) with MagSafe Case',
    price: 199.00, originalPrice: 249.00, rating: 4.7, reviewCount: 142300, sold: 250000,
    category: 'audio', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Active Noise Cancellation, Adaptive Transparency, Personalized Spatial Audio.',
    images: ['https://images.unsplash.com/photo-1484704069851-2d0a05b8d2da?w=900&q=80']
  },
  {
    id: 'a002', title: 'JBL Charge 5 Portable Bluetooth Speaker - Black',
    price: 149.95, originalPrice: 199.95, rating: 4.7, reviewCount: 18420, sold: 32000,
    category: 'audio', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: '20 hours of playtime, IP67 waterproof, and built-in powerbank.',
    images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900&q=80']
  },
  {
    id: 'a003', title: 'Sennheiser HD 660S2 Open-Back Headphones',
    price: 599.95, originalPrice: 699.95, rating: 4.7, reviewCount: 820, sold: 1400,
    category: 'audio', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Reference-class open-back headphones for audiophiles. Crystal-clear sound.',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80']
  },
  {
    id: 'a004', title: 'Marshall Stanmore III Bluetooth Speaker - Cream',
    price: 379.99, originalPrice: 449.99, rating: 4.6, reviewCount: 1820, sold: 3200,
    category: 'audio', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Iconic Marshall design with powerful, room-filling sound and Bluetooth 5.2.',
    images: ['https://images.unsplash.com/photo-1545454675-3531b5438153?w=900&q=80']
  },
  {
    id: 'a005', title: 'Beats Studio Pro Wireless Headphones - Black',
    price: 349.99, originalPrice: 399.99, rating: 4.5, reviewCount: 4230, sold: 7800,
    category: 'audio', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Lossless audio, 40-hour battery, and personalized Spatial Audio.',
    images: ['https://images.unsplash.com/photo-1484704069851-2d0a05b8d2da?w=900&q=80']
  },
  {
    id: 'a006', title: 'Audio-Technica AT2020 Cardioid Condenser Microphone',
    price: 99.95, originalPrice: 129.95, rating: 4.7, reviewCount: 8230, sold: 14000,
    category: 'audio', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Studio-quality mic for podcasting, streaming, and music recording.',
    images: ['https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=900&q=80']
  },
  {
    id: 'a007', title: 'Sonos Era 100 Smart Speaker - White',
    price: 249.00, originalPrice: 299.00, rating: 4.6, reviewCount: 1820, sold: 3200,
    category: 'audio', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Next-gen acoustics, WiFi 6, Bluetooth, and built-in voice control.',
    images: ['https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=900&q=80']
  },
  {
    id: 'a008', title: 'Bose SoundLink Flex Bluetooth Speaker - Stone Blue',
    price: 149.00, originalPrice: 179.00, rating: 4.6, reviewCount: 8230, sold: 14000,
    category: 'audio', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'PositionIQ technology, IP67 waterproof, and 12-hour battery life.',
    images: ['https://images.unsplash.com/photo-1603534633872-fc13468be791?w=900&q=80']
  },
  {
    id: 'a009', title: 'SteelSeries Arctis Nova Pro Wireless Gaming Headset',
    price: 349.99, originalPrice: 449.99, rating: 4.5, reviewCount: 1230, sold: 2400,
    category: 'audio', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Active noise cancellation, dual wireless, and hot-swappable battery.',
    images: ['https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=900&q=80']
  },
  {
    id: 'a010', title: 'Yamaha YAS-209 Sound Bar with Wireless Subwoofer',
    price: 299.99, originalPrice: 399.99, rating: 4.6, reviewCount: 1820, sold: 3200,
    category: 'audio', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'DTS Virtual:X 3D surround, built-in Alexa, and wireless subwoofer.',
    images: ['https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=900&q=80']
  },
  {
    id: 'a011', title: 'Shure SM7B Cardioid Dynamic Microphone',
    price: 399.00, originalPrice: 449.00, rating: 4.9, reviewCount: 1820, sold: 3400,
    category: 'audio', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Broadcast-quality dynamic mic for radio, podcasting, and studio recording.',
    images: ['https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=900&q=80']
  },
  {
    id: 'a012', title: 'Sonos Beam Gen 2 Soundbar with Dolby Atmos',
    price: 449.00, originalPrice: 499.00, rating: 4.7, reviewCount: 1820, sold: 3200,
    category: 'audio', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Compact smart soundbar with 3D sound, voice control, and HDMI eARC.',
    images: ['https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=900&q=80']
  },
  {
    id: 'a013', title: 'AKG K371 Closed-Back Studio Headphones',
    price: 149.00, originalPrice: 199.00, rating: 4.6, reviewCount: 1820, sold: 3200,
    category: 'audio', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Reference-class studio headphones with extended frequency response.',
    images: ['https://images.unsplash.com/photo-1618366718557-2630e18a31bb?w=900&q=80']
  },
  {
    id: 'a014', title: 'Anker Soundcore Motion Boom Plus Speaker',
    price: 129.99, originalPrice: 169.99, rating: 4.6, reviewCount: 4820, sold: 8800,
    category: 'audio', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: '80W stereo sound, 20-hour playtime, IP67 waterproof and dustproof.',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80']
  },

  // ========== ACCESSORIES (additional 14) ==========
  {
    id: 'ac001', title: 'Ray-Ban Round Metal Sunglasses - Gold/Green',
    price: 159.00, originalPrice: 189.00, rating: 4.6, reviewCount: 2320, sold: 4800,
    category: 'accessories', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Vintage-inspired round metal frame with classic G-15 lenses.',
    images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=80']
  },
  {
    id: 'ac002', title: 'Hermès Silk Scarf 90 - Brides de Gala',
    price: 450.00, originalPrice: 550.00, rating: 4.9, reviewCount: 820, sold: 1400,
    category: 'accessories', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: '100% silk twill scarf with hand-rolled edges. 90cm square.',
    images: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=900&q=80']
  },
  {
    id: 'ac003', title: 'Fossil Gen 6 Smartwatch - Smoke Stainless Steel',
    price: 295.00, originalPrice: 395.00, rating: 4.4, reviewCount: 1820, sold: 3200,
    category: 'accessories', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Wear OS 3, Snapdragon Wear 4100+, and heart rate, SpO2, sleep tracking.',
    images: ['https://images.unsplash.com/photo-1523170335258-f5fe11844f6e?w=900&q=80']
  },
  {
    id: 'ac004', title: 'Tumi Alpha 3 Brief Laptop Bag - Black',
    price: 595.00, originalPrice: 695.00, rating: 4.7, reviewCount: 1820, sold: 3400,
    category: 'accessories', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Premium ballistic nylon, padded laptop compartment fits up to 15" screens.',
    images: ['https://images.unsplash.com/photo-1547949003-3844ce5a4b4e?w=900&q=80']
  },
  {
    id: 'ac005', title: 'Oakley Holbrook Polarized Sunglasses - Matte Black',
    price: 159.00, originalPrice: 209.00, rating: 4.7, reviewCount: 4230, sold: 7800,
    category: 'accessories', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Timeless design with Prizm lens technology. Lightweight O Matter frame.',
    images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=80']
  },
  {
    id: 'ac006', title: 'Montblanc Meisterstuck Ballpoint Pen',
    price: 285.00, originalPrice: 350.00, rating: 4.9, reviewCount: 1230, sold: 2400,
    category: 'accessories', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Iconic luxury pen with platinum-plated clip and black precious resin.',
    images: ['https://images.unsplash.com/photo-1583485088034-697b5bc36b92?w=900&q=80']
  },
  {
    id: 'ac007', title: 'Bell & Ross BR 03-92 Diver Watch - Black',
    price: 3900.00, originalPrice: 4400.00, rating: 4.7, reviewCount: 120, sold: 250,
    category: 'accessories', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Swiss-made automatic dive watch with 300m water resistance and 42mm case.',
    images: ['https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=900&q=80']
  },
  {
    id: 'ac008', title: 'Michael Kors Jet Set Tote Bag - Brown',
    price: 178.00, originalPrice: 248.00, rating: 4.5, reviewCount: 3820, sold: 7800,
    category: 'accessories', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Spacious tote in signature Saffiano leather with gold-tone hardware.',
    images: ['https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=900&q=80']
  },
  {
    id: 'ac009', title: 'Herschel Little America Backpack - Black',
    price: 99.99, originalPrice: 129.99, rating: 4.7, reviewCount: 18230, sold: 35000,
    category: 'accessories', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Iconic mountaineering-inspired design with magnetic strap closures.',
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80']
  },
  {
    id: 'ac010', title: 'Casio G-Shock GA-2100 Watch - Black',
    price: 109.99, originalPrice: 129.99, rating: 4.8, reviewCount: 8230, sold: 14000,
    category: 'accessories', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Slim Carbon Core Guard structure, 200m water resistance, and world time.',
    images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=900&q=80']
  },
  {
    id: 'ac011', title: 'Apple AirTag 4 Pack',
    price: 99.00, originalPrice: 119.00, rating: 4.7, reviewCount: 142300, sold: 250000,
    category: 'accessories', keywords: ['smart','modern'], inStock: true, seller: 'TheShop mall',
    description: 'Track your keys, wallet, luggage, and more with the Find My app.',
    images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=900&q=80']
  },
  {
    id: 'ac012', title: 'Gucci GG Marmont Leather Belt - Black',
    price: 480.00, originalPrice: 580.00, rating: 4.7, reviewCount: 1820, sold: 3400,
    category: 'accessories', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Italian-made leather belt with antique gold-toned Double G buckle.',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=80']
  },
  {
    id: 'ac013', title: 'Patagonia Black Hole Duffel 40L - Black',
    price: 119.00, originalPrice: 149.00, rating: 4.8, reviewCount: 1820, sold: 3400,
    category: 'accessories', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Weather-resistant duffel for travel and adventure. Carry-on compatible.',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=80']
  },
  {
    id: 'ac014', title: 'Poppy Lissiman Sunglasses - Daisy White',
    price: 175.00, originalPrice: 220.00, rating: 4.6, reviewCount: 320, sold: 720,
    category: 'accessories', keywords: ['modern','spring'], inStock: true, seller: 'TheShop mall',
    description: 'Handcrafted acetate frames with UV400 protection. Designer statement piece.',
    images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=80']
  },
  {
    id: 'ac015', title: 'Mismo Briefcase - Navy Canvas Leather',
    price: 595.00, originalPrice: 695.00, rating: 4.7, reviewCount: 220, sold: 480,
    category: 'accessories', keywords: ['modern'], inStock: true, seller: 'TheShop mall',
    description: 'Handcrafted briefcase combining water-resistant canvas with full-grain leather trim.',
    images: ['https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=900&q=80']
  }
];

const REVIEWS = [
  {
    id: 'r1',
    productId: 'p001',
    author: 'Sarah M.',
    rating: 5,
    date: '2 weeks ago',
    title: 'Best fitness tracker I\'ve owned',
    text: 'I\'ve gone through several fitness trackers and this is by far my favorite. The Daily Readiness score has really helped me balance my workouts. Battery lasts about 5-6 days for me with always-on display enabled.',
    helpful: 234,
    verified: true
  },
  {
    id: 'r2',
    productId: 'p001',
    author: 'Michael T.',
    rating: 4,
    date: '1 month ago',
    title: 'Great watch, app could be better',
    text: 'The hardware is solid and comfortable. Sleep tracking is very accurate. The Fitbit app takes some getting used to but has lots of features once you learn it.',
    helpful: 89,
    verified: true
  },
  {
    id: 'r3',
    productId: 'p001',
    author: 'Linda K.',
    rating: 4,
    date: '3 weeks ago',
    title: 'Comfortable and accurate',
    text: 'I love how lightweight it is. I forget I\'m wearing it. Heart rate is spot on compared to my doctor\'s monitor.',
    helpful: 156,
    verified: true
  },
  {
    id: 'r4',
    productId: 'p001',
    author: 'James R.',
    rating: 3,
    date: '2 months ago',
    title: 'Good but not perfect',
    text: 'GPS is slow to connect sometimes. Otherwise it does what it says. Good value for the price.',
    helpful: 42,
    verified: true
  },
  {
    id: 'r5',
    productId: 'p001',
    author: 'Anonymous',
    rating: 5,
    date: '5 days ago',
    title: 'Exceeded my expectations',
    text: 'Was hesitant because of the price but worth every penny. Tracks my runs perfectly and the sleep insights have helped me improve my rest.',
    helpful: 12,
    verified: true
  }
];

// Demo data
const SHIPPING_METHODS = [
  { id: 'standard', name: 'Standard', days: '7-10 business days', price: 0 },
  { id: 'express', name: 'Express', days: '3-5 business days', price: 9.99 },
  { id: 'overnight', name: 'Overnight', days: '1-2 business days', price: 19.99 }
];

const TOP_PICKS = ['p001', 'p002', 'p004', 'p010', 'p011', 'p012', 'p009', 'p016', 'p005', 'p006', 'p014', 'p008', 'e001', 'a001', 'f001', 'b001', 's001', 'h001'];
const NEW_IN_STORE = ['p001', 'p005', 'p010', 'p004', 'p009', 'p003', 'p016', 'p015', 'p011', 'p007', 'p013', 'p014', 'e002', 'a002', 'f002', 'b002', 's002', 'h002'];
const REFURBISHED_PRODUCTS = ['e002', 'e005', 'e007', 'e008', 'e012', 'e014', 'a001', 'a002', 'a005', 'h003', 'h010', 's005'];
const BRANDS_PRODUCTS = ['p002', 'p005', 'p006', 'p007', 'p010', 'p011', 'p013', 'f002', 'f003', 'f005', 'f006', 'f010', 'f012', 'b005', 'b009', 'b010', 'a003', 'a004', 'a011', 'ac007', 'ac010', 'ac012'];

// Hero carousel slides
const HERO_SLIDES = [
  {
    id: 'slide-1',
    eyebrow: 'Up to 40% off',
    title: 'Special Mega Sales',
    subtitle: 'Limited time only — save big on thousands of products',
    cta: 'Shop the sale',
    ctaSecondary: 'Browse deals',
    ctaTarget: 'deals',
    ctaSecondaryTarget: 'all',
    bgGradient: 'linear-gradient(135deg, #c084fc 0%, #9333ea 50%, #660066 100%)',
    titleColor: '#ffffff',
    eyebrowColor: 'rgba(255,255,255,0.92)',
    decorLeft: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
    decorRight: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&q=80',
    badge: 'Limited time',
    height: 480
  },
  {
    id: 'slide-2',
    eyebrow: 'New arrivals',
    title: 'Fresh Styles Daily',
    subtitle: 'Be the first to discover what just dropped',
    cta: 'Explore new',
    ctaTarget: 'new',
    bgGradient: 'linear-gradient(135deg, #ff9a6c 0%, #ffad8a 50%, #ffc4a3 100%)',
    titleColor: '#3a1a08',
    eyebrowColor: 'rgba(58, 26, 8, 0.7)',
    decorLeft: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80',
    decorRight: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
    height: 480
  },
  {
    id: 'slide-3',
    eyebrow: 'Tech lovers',
    title: 'Latest Electronics',
    subtitle: 'Phones, laptops, audio and more — all in one place',
    cta: 'Browse tech',
    ctaTarget: 'electronics',
    bgGradient: 'linear-gradient(135deg, #1a2540 0%, #2d3a5f 50%, #4a5478 100%)',
    titleColor: '#ffffff',
    eyebrowColor: 'rgba(255,255,255,0.7)',
    decorLeft: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80',
    decorRight: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80',
    height: 480
  },
  {
    id: 'slide-4',
    eyebrow: 'Audio Sale',
    title: 'Sound that Moves You',
    subtitle: 'Premium headphones & speakers up to 30% off',
    cta: 'Shop audio',
    ctaTarget: 'audio',
    bgGradient: 'linear-gradient(135deg, #4a2c6d 0%, #6b3d8f 50%, #8e4eb3 100%)',
    titleColor: '#ffffff',
    eyebrowColor: 'rgba(255,255,255,0.7)',
    decorLeft: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80',
    decorRight: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&q=80',
    height: 480
  }
];

// State management
const State = {
  cart: JSON.parse(localStorage.getItem('theshop_cart') || '[]'),
  user: JSON.parse(localStorage.getItem('theshop_user') || 'null'),
  wishlist: JSON.parse(localStorage.getItem('theshop_wishlist') || '[]'),
  currentPage: 'home',
  currentProductId: null,
  checkoutStep: 1,
  checkoutData: {
    address: {},
    shipping: 'standard',
    payment: {},
    isGuest: true
  },
  promoCode: 'WELCOME50',
  promoApplied: false,
  route: '#/'
};

function saveState() {
  localStorage.setItem('theshop_cart', JSON.stringify(State.cart));
  localStorage.setItem('theshop_user', JSON.stringify(State.user));
  localStorage.setItem('theshop_wishlist', JSON.stringify(State.wishlist));
}

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getCartCount() {
  return State.cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return State.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function getDiscount() {
  if (State.promoApplied) {
    return getCartTotal();
  }
  return 0;
}
