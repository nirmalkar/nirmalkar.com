export interface NavConst {
  name: string;
  path: string;
}

export const navLinks: NavConst[] = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog-categories" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "others", path: "" },
];
