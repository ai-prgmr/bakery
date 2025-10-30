// Define a type for a single product item
export type Product = {
  id: number;
  name: string;
  price: string;
  image: string; // URL path to the image
  category?:
    | "cakes"
    | "cheesecakes"
    | "brownies"
    | "dessert bowls"
    | "designer";
};

// Define a type for customer testimonials
export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string; // URL path to the avatar image
};
