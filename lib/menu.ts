/**
 * Menu from footscraymilkingstation.restaurants-us.com/menu (community-maintained).
 * Items with no listed price have no `price`. Salmon Bagel uses the current Uber Eats price.
 */
export type MenuItem = { name: string; price?: string; tag?: string };
export type MenuGroup = { title: string; items: MenuItem[] };
export type MenuTab = { id: string; label: string; groups: MenuGroup[] };

export const menu: MenuTab[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    groups: [
      {
        title: "Plates",
        items: [
          { name: "Eggs on Toast", price: "$10", tag: "Top seller" },
          { name: "FMS Big Breakfast" },
          { name: "Dukkah Eggs" },
          { name: "Breakfast Croquettes" },
          { name: "Scotch Bonnet Chickpea Curry", tag: "Vegan" },
          { name: "Vegie Bowl" },
        ],
      },
      {
        title: "Lighter",
        items: [
          { name: "House Granola" },
          { name: "Tapioca Pudding" },
          { name: "Fruit Loaf" },
          { name: "Extra Egg", price: "$3" },
        ],
      },
    ],
  },
  {
    id: "toaster",
    label: "Toaster",
    groups: [
      {
        title: "Morning",
        items: [
          { name: "Ham & Cheese Croissant", price: "$11", tag: "Top seller" },
          { name: "Ham & Cheese Toastie" },
          { name: "Breaky Burger" },
          { name: "Sausage Muffin", price: "$10" },
          { name: "Chilli Scrambled Egg Wrap", price: "$10" },
          { name: "Breakfast Wrap" },
        ],
      },
      {
        title: "Anytime",
        items: [
          { name: "BLT", price: "$18", tag: "Top seller" },
          { name: "Mortadella Bun", price: "$10" },
          { name: "Mushroom Toastie", price: "$9.50" },
          { name: "Prosciutto Baguette", price: "$13" },
          { name: "Roast Veg Ciabatta", price: "$13" },
          { name: "Reuben Toastie", price: "$16" },
          { name: "Sausage Roll", price: "$6.50" },
        ],
      },
    ],
  },
  {
    id: "lunch",
    label: "Lunch",
    groups: [
      {
        title: "Mains",
        items: [
          { name: "Pork Focaccia", price: "$18", tag: "Signature" },
          { name: "Schnitzel Focaccia", price: "$16" },
          { name: "Cheeseburger", price: "$24" },
          { name: "Cherry Tomato Casarecce" },
          { name: "Super Salad", price: "$22" },
          { name: "Cuban Pork Panini" },
          { name: "Sticky Orange Chicken" },
          { name: "Bowl of Chips", price: "$10" },
        ],
      },
      {
        title: "Wraps",
        items: [
          { name: "Chicken Wrap" },
          { name: "BBQ Beef Wrap" },
          { name: "Vegan Wrap", tag: "Vegan" },
        ],
      },
    ],
  },
  {
    id: "bagels",
    label: "Bagels & Specials",
    groups: [
      {
        title: "Bagels",
        items: [
          { name: "Salmon Bagel", price: "$14.50", tag: "Top seller" },
          { name: "Veggie Bagel", price: "$12" },
          { name: "Plain Bagel", price: "$8" },
        ],
      },
      {
        title: "Specials",
        items: [
          { name: "Prawn Eggs", price: "$20" },
          { name: "Breakfast Burger", price: "$16" },
          { name: "Fish Fillet Burger", price: "$22" },
          { name: "Soup" },
          { name: "Tofu Fico Pastry" },
          { name: "Ricotta Fico Pastry" },
        ],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    groups: [
      {
        title: "Hot",
        items: [
          { name: "Coffee", tag: "Padre" },
          { name: "Chai Latte" },
          { name: "Matcha Latte" },
          { name: "Golden Turmeric Latte" },
          { name: "Hot Chocolate" },
          { name: "Babycino" },
        ],
      },
      {
        title: "Cold",
        items: [
          { name: "Iced Coffee" },
          { name: "Iced Chai · Iced Matcha" },
          { name: "Iced Chocolate" },
          { name: "Milkshakes" },
          { name: "Smoothies", tag: "Mango · Berry · Minty Matcha" },
          { name: "Simple Juices", tag: "Orange · Apple · Glow Bright" },
          { name: "Remedy Kombucha" },
          { name: "Strange Love Soda" },
        ],
      },
    ],
  },
];
