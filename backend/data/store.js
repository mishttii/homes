// In-memory data store for Pluto Home

let products = [
  // Pillow Covers
  {
    id: "pillow-blue",
    name: "Blue Pillow Cover",
    price: 400,
    description: "Elegant pillow cover - Perfect for your bedroom. Transform your home into a cozy, stylish space with our premium handwoven macrame cushion cover.",
    category: "pillow",
    image: "image/blue01a.PNG",
    stock: 15,
    features: ["Soft and breathable fabric", "Premium quality material", "Easy to clean and maintain", "100% cotton yarn"]
  },
  {
    id: "pillow-green",
    name: "Green Pillow Cover",
    price: 400,
    description: "Elegant pillow cover - Perfect for your bedroom. Transform your home into a cozy, stylish space with our premium handwoven macrame cushion cover.",
    category: "pillow",
    image: "image/green01a.PNG",
    stock: 12,
    features: ["Soft and breathable fabric", "Premium quality material", "Easy to clean and maintain", "100% cotton yarn"]
  },
  {
    id: "pillow-yellow",
    name: "Yellow Pillow Cover",
    price: 400,
    description: "Elegant pillow cover - Perfect for your bedroom. Transform your home into a cozy, stylish space with our premium handwoven macrame cushion cover.",
    category: "pillow",
    image: "image/yellow01a.PNG",
    stock: 10,
    features: ["Soft and breathable fabric", "Premium quality material", "Easy to clean and maintain", "100% cotton yarn"]
  },
  // Bedsheets (Design 01 to 11)
  {
    id: "bedsheet-01",
    name: "Bedsheet Design 1",
    price: 599,
    description: "Premium Cotton Bedsheet. Relax in the comfort of our cozy, breathable sheets featuring beautiful floral patterns.",
    category: "bedsheet",
    image: "image/bedsheet01.jpeg",
    stock: 20,
    features: ["100% Premium Cotton", "Breathable material", "Soft feel", "Fade resistant"]
  },
  {
    id: "bedsheet-02",
    name: "Bedsheet Design 2",
    price: 599,
    description: "Premium Cotton Bedsheet. Relax in the comfort of our cozy, breathable sheets featuring beautiful floral patterns.",
    category: "bedsheet",
    image: "image/bedsheet02.jpeg",
    stock: 18,
    features: ["100% Premium Cotton", "Breathable material", "Soft feel", "Fade resistant"]
  },
  {
    id: "bedsheet-03",
    name: "Bedsheet Design 3",
    price: 599,
    description: "Premium Cotton Bedsheet. Relax in the comfort of our cozy, breathable sheets featuring beautiful floral patterns.",
    category: "bedsheet",
    image: "image/bedsheet03.jpeg",
    stock: 15,
    features: ["100% Premium Cotton", "Breathable material", "Soft feel", "Fade resistant"]
  },
  {
    id: "bedsheet-04",
    name: "Bedsheet Design 4",
    price: 599,
    description: "Premium Cotton Bedsheet. Relax in the comfort of our cozy, breathable sheets featuring beautiful floral patterns.",
    category: "bedsheet",
    image: "image/bedsheet04.jpeg",
    stock: 22,
    features: ["100% Premium Cotton", "Breathable material", "Soft feel", "Fade resistant"]
  },
  {
    id: "bedsheet-05",
    name: "Bedsheet Design 5",
    price: 599,
    description: "Premium Cotton Bedsheet. Relax in the comfort of our cozy, breathable sheets featuring beautiful floral patterns.",
    category: "bedsheet",
    image: "image/bedsheet05.jpeg",
    stock: 8,
    features: ["100% Premium Cotton", "Breathable material", "Soft feel", "Fade resistant"]
  },
  {
    id: "bedsheet-06",
    name: "Bedsheet Design 6",
    price: 599,
    description: "Premium Cotton Bedsheet. Relax in the comfort of our cozy, breathable sheets featuring beautiful floral patterns.",
    category: "bedsheet",
    image: "image/bedsheet06.jpeg",
    stock: 14,
    features: ["100% Premium Cotton", "Breathable material", "Soft feel", "Fade resistant"]
  },
  {
    id: "bedsheet-07",
    name: "Bedsheet Design 7",
    price: 599,
    description: "Premium Cotton Bedsheet. Relax in the comfort of our cozy, breathable sheets featuring beautiful floral patterns.",
    category: "bedsheet",
    image: "image/bedsheet07.jpeg",
    stock: 11,
    features: ["100% Premium Cotton", "Breathable material", "Soft feel", "Fade resistant"]
  },
  {
    id: "bedsheet-08",
    name: "Bedsheet Design 8",
    price: 599,
    description: "Premium Cotton Bedsheet. Relax in the comfort of our cozy, breathable sheets featuring beautiful floral patterns.",
    category: "bedsheet",
    image: "image/bedsheet08.jpeg",
    stock: 13,
    features: ["100% Premium Cotton", "Breathable material", "Soft feel", "Fade resistant"]
  },
  {
    id: "bedsheet-09",
    name: "Bedsheet Design 9",
    price: 599,
    description: "Premium Cotton Bedsheet. Relax in the comfort of our cozy, breathable sheets featuring beautiful floral patterns.",
    category: "bedsheet",
    image: "image/bedsheet09.jpeg",
    stock: 9,
    features: ["100% Premium Cotton", "Breathable material", "Soft feel", "Fade resistant"]
  },
  {
    id: "bedsheet-10",
    name: "Bedsheet Design 10",
    price: 599,
    description: "Premium Cotton Bedsheet. Relax in the comfort of our cozy, breathable sheets featuring beautiful floral patterns.",
    category: "bedsheet",
    image: "image/bedsheet10.jpeg",
    stock: 16,
    features: ["100% Premium Cotton", "Breathable material", "Soft feel", "Fade resistant"]
  },
  {
    id: "bedsheet-11",
    name: "Bedsheet Design 11",
    price: 599,
    description: "Premium Cotton Bedsheet. Relax in the comfort of our cozy, breathable sheets featuring beautiful floral patterns.",
    category: "bedsheet",
    image: "image/bedsheet11.jpeg",
    stock: 12,
    features: ["100% Premium Cotton", "Breathable material", "Soft feel", "Fade resistant"]
  }
];

let orders = [
  {
    id: "ord-1",
    customerName: "Jane Doe",
    whatsAppNumber: "919876543210",
    address: "123 Main St, New Delhi, India",
    items: [
      {
        productId: "bedsheet-01",
        name: "Bedsheet Design 1",
        quantity: 2,
        price: 599
      },
      {
        productId: "pillow-blue",
        name: "Blue Pillow Cover",
        quantity: 1,
        price: 400
      }
    ],
    totalAmount: 1598,
    status: "PENDING",
    createdAt: new Date().toISOString()
  }
];

module.exports = {
  products,
  orders
};
