export interface Product {
  id: number;
  title: string;
  image: string;
  money: string;
  discountedPrice?: string;
  category: string;
  quantity?: number;

  popularity?: number; // Add popularity (optional)
  rating?: number; // Add rating (optional)
  price?: number; // Add price (optional)
}

export const products: Product[] = [
  {
    id: 1,
    title: "Assorted Coffee",
    image: "/assets/coffee-asorted.jpg",
    money: "£35.00",
    category: "Groceries",
  },
  {
    id: 2,
    title: "Cashew Butter",
    image: "/assets/cashew-butter-500.jpg",
    money: "£25.00",
    discountedPrice: "£35.00",
    category: "Groceries",
  },
  {
    id: 3,
    title: "Diabetic Cookies",
    image: "/assets/diabetic-cookies.jpg",
    money: "£25.00",
    discountedPrice: "£35.00",
    category: "Groceries",
  },
  {
    id: 4,
    title: "Farm Fresh Eggs",
    image: "/assets/eggs.jpg",
    money: "£34.00",
    category: "Juice",
  },
  {
    id: 5,
    title: "Fresh Orange Juice",
    image: "/assets/orange-juice-kariz.jpg",
    money: "£18.00",
    category: "Juice",
  },
  {
    id: 6,
    title: "Fresh Organic Honey",
    image: "/assets/organic-honey.jpg",
    money: "£34.00",
    category: "Groceries",
  },
  {
    id: 7,
    title: "Hand Sanitizer",
    image: "/assets/sanitizer.jpg",
    money: "£15.00",
    category: "Groceries",
  },
  {
    id: 8,
    title: "Handpicked Red Chillies",
    image: "/assets/red-chillies.jpg",
    money: "£19.00",
    category: "Groceries",
  },
  {
    id: 9,
    title: "Natural Extracted Edible Oil",
    image: "/assets/edible-oil.jpg",
    money: "£34.00",
    discountedPrice: "£25.00",
    category: "Groceries",
  },
  {
    id: 10,
    title: "Organic Face Scrub",
    image: "/assets/face-wash.jpg",
    money: "£35.00",
    category: "Groceries",
  },
  {
    id: 11,
    title: "Pulses From Organic Farm",
    image: "/assets/pulses.jpg",
    money: "£15.00",
    category: "Groceries",
  },
  {
    id: 12,
    title: "Wheat From Organic Farms",
    image: "/assets/wheat-768x768.jpg",
    money: "£34.00",
    category: "Groceries",
  },
];
