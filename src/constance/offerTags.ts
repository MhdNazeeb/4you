interface Offer {
    id: number;
    title: string;
    discount: string;
    category: string;
    validUntil: string;
  }
  
  const offerTags: Offer[] = [
    { id: 1, title: "Big Sale", discount: "50% Off", category: "Electronics", validUntil: "2025-02-10" },
    { id: 2, title: "Big Sale", discount: "Buy 1 Get 1 Free", category: "Clothing", validUntil: "2025-02-15" },
    { id: 3, title: "Big Sale", discount: "Flat 30% Off", category: "Groceries", validUntil: "2025-02-12" },
    { id: 4, title: "Big Sale", discount: "Up to 70% Off", category: "Furniture", validUntil: "2025-02-20" },
    { id: 5, title: "Big Sale", discount: "40% Cashback", category: "Food & Beverages", validUntil: "2025-02-18" },
    { id: 6, title: "Big Sale", discount: "Free Shipping", category: "Online Shopping", validUntil: "2025-02-28" },
    { id: 7, title: "Big Sale", discount: "Extra 25% Off", category: "Footwear", validUntil: "2025-02-22" },
    { id: 8, title: "Big Sale", discount: "Special Combo Offers", category: "Beauty & Health", validUntil: "2025-02-25" },
    { id: 9, title: "Big Sale", discount: "Save Up to ₹5000", category: "Mobiles", validUntil: "2025-02-14" },
    { id: 10, title: "Big Sale", discount: "Exchange Bonus", category: "Appliances", validUntil: "2025-02-17" },
  ];
  
  export default offerTags;
  