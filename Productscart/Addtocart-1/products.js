const products = [
        {
          "id": 1,
          "name": "Wireless Headphones",
          "price": 99.99,
          "description": "High-quality wireless headphones with noise cancellation.",
          "image": "https://th.bing.com/th/id/OIP.IiuyToUT0zByyOJLV6YlugHaHZ?rs=1&pid=ImgDetMain"
        },
        {
          "id": 2,
          "name": "Smartphone",
          "price": 799.99,
          "description": "Latest model with a powerful processor and great camera.",
          "image": "https://th.bing.com/th/id/OIP.nvdM5sEm4DqG8oZb8nNStQHaHa?rs=1&pid=ImgDetMain"
        },
        {
          "id": 3,
          "name": "Laptop",
          "price": 1299.99,
          "description": "A sleek laptop with fast performance and long battery life.",
          "image": "https://www.bhphotovideo.com/images/images2500x2500/hp_5yh29ua_aba_pavilion_laptop_15_cs2010nr_core_1473122.jpg"
        },
        {
          "id": 4,
          "name": "Smartwatch",
          "price": 199.99,
          "description": "Track your health and stay connected with this advanced smartwatch.",
          "image": "https://th.bing.com/th/id/OIP.xNaq2av-3G2pim8WFO5YpAHaHa?rs=1&pid=ImgDetMain"
        },
        {
          "id": 5,
          "name": "Bluetooth Speaker",
          "price": 49.99,
          "description": "Compact Bluetooth speaker with excellent sound quality.",
          "image": "https://th.bing.com/th/id/OIP.MpMIjxi1ne0agVkWrlCzPQHaHa?rs=1&pid=ImgDetMain"
        },
        {
          "id": 6,
          "name": "Electric Toothbrush",
          "price": 89.99,
          "description": "High-performance electric toothbrush with multiple modes.",
          "image": "https://i5.walmartimages.com/asr/c0ee8e18-fdb7-472b-889a-bb37551765ff_1.40b83d171b48f583dff374b612f269ed.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
        },
        {
          "id": 7,
          "name": "Gaming Console",
          "price": 499.99,
          "description": "Next-gen gaming console with ultra-fast load times and exclusive titles.",
          "image": "https://i5.walmartimages.com/asr/9e947e75-1ca3-4007-8a9d-8d7ab383d6ce_3.149f515544d3f950c91638c70125d817.jpeg"
        },
        {
          "id": 8,
          "name": "4K Television",
          "price": 799.99,
          "description": "Experience stunning visuals with this 4K Ultra HD TV.",
          "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5900/5900138_sd.jpg"
        },
        {
          "id": 9,
          "name": "Digital Camera",
          "price": 599.99,
          "description": "Capture high-quality images with this easy-to-use digital camera.",
          "image": "https://www.bhphotovideo.com/images/images2500x2500/Fujifilm_15976371_S200EXR_FinePix_Super_Zoom_639209.jpg"
        },
        {
          "id": 10,
          "name": "Tablet",
          "price": 299.99,
          "description": "A versatile tablet with a bright screen and fast processing speed.",
          "image": "https://www.lifewire.com/thmb/ZB-B0N9_U3WG-JXtv0tVeyielC0=/4032x2860/filters:no_upscale():max_bytes(150000):strip_icc()/1LW4036560diagnolscreenshot-5ba3d492c9e77c00501469bb.jpg"
        },
        {
          "id": 11,
          "name": "Portable Charger",
          "price": 29.99,
          "description": "Keep your devices charged on the go with this portable power bank.",
          "image": "https://images.homedepot-static.com/productImages/76f1c5cf-8119-40fd-9a9f-e7e74195c657/svn/anodized-aluminum-mycharge-cell-phone-tablet-accessories-hb67v-64_1000.jpg"
        },
        {
          "id": 12,
          "name": "VR Headset",
          "price": 399.99,
          "description": "Immerse yourself in virtual reality with this state-of-the-art headset.",
          "image": "https://th.bing.com/th/id/OIP.8EFuvZUOzVFWI_IbnOaQqQHaEK?rs=1&pid=ImgDetMain"
        },
        {
          "id": 13,
          "name": "Coffee Maker",
          "price": 59.99,
          "description": "Make fresh coffee every morning with this easy-to-use coffee maker.",
          "image": "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/4508a0e0-e399-4672-9275-4800559dd612.jpg._CB271659340_.jpg"
        },
        {
          "id": 14,
          "name": "Robot Vacuum",
          "price": 249.99,
          "description": "Automated cleaning with smart navigation for a spotless home.",
          "image": "https://www.bissell.com/on/demandware.static/-/Sites-master-catalog-bissell/default/dwb9134682/hi-res/Product-Images/2503/EV675_2503_Secondary1_2449x2449.png"
        },
        {
          "id": 15,
          "name": "Blender",
          "price": 89.99,
          "description": "Perfect for smoothies, soups, and more with this high-speed blender.",
          "image": "https://m.media-amazon.com/images/I/91a5IMlV0pL._AC_SL1500_.jpg"
        },
        {
          "id": 16,
          "name": "Electric Kettle",
          "price": 39.99,
          "description": "Quickly heat water with this efficient electric kettle.",
          "image": "https://images-na.ssl-images-amazon.com/images/I/71Vfrn5g0-L._SL1500_.jpg"
        },
        {
          "id": 17,
          "name": "Air Fryer",
          "price": 99.99,
          "description": "Cook healthier meals with less oil using this air fryer.",
          "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6288/6288574cv12d.jpg"
        },
        {
          "id": 18,
          "name": "Smart Light Bulbs",
          "price": 39.99,
          "description": "Change the mood in any room with these smart, color-changing bulbs.",
          "image": "https://th.bing.com/th/id/OIP.93Z077wp9ZTDFQBrA1lHKwHaHa?rs=1&pid=ImgDetMain"
        },
        {
          "id": 19,
          "name": "Fitness Tracker",
          "price": 59.99,
          "description": "Track your fitness progress with this waterproof fitness tracker.",
          "image": "https://wearablefitnesstracker.com/wp-content/uploads/2020/03/best-waterproof-fitness-tracker.jpg"
        },
        {
          "id": 20,
          "name": "Electric Grill",
          "price": 129.99,
          "description": "Grill your favorite foods indoors with this easy-to-clean electric grill.",
          "image": "https://morningchores.com/wp-content/uploads/2020/06/Proctor-Silex-5-in-1-Electric-Indoor-Grill.jpg"
        }      
];
export default products;