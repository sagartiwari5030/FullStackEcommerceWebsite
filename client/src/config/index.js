// export const registerFormControls = [
//   {
//     name: "userName",
//     label: "User Name",
//     placeholder: "Enter your user name",
//     componentType: "input",
//     type: "text",
//   },
//   {
//     name: "email",
//     label: "Email",
//     placeholder: "Enter your email",
//     componentType: "input",
//     type: "email",
//   },
//   {
//     name: "password",
//     label: "Password",
//     placeholder: "Enter your password",
//     componentType: "input",
//     type: "password",
//   },
// ];

// export const loginFormControls = [
//   {
//     name: "email",
//     label: "Email",
//     placeholder: "Enter your email",
//     componentType: "input",
//     type: "email",
//   },
//   {
//     name: "password",
//     label: "Password",
//     placeholder: "Enter your password",
//     componentType: "input",
//     type: "password",
//   },
// ];

// export const addProductFormElements = [
//   {
//     label: "Title",
//     name: "title",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter product title",
//   },
//   {
//     label: "Description",
//     name: "description",
//     componentType: "textarea",
//     placeholder: "Enter product description",
//   },
//   {
//     label: "Category",
//     name: "category",
//     componentType: "select",
//     options: [
//       { id: "men", label: "Men" },
//       { id: "women", label: "Women" },
//       { id: "kids", label: "Kids" },
//       { id: "accessories", label: "Accessories" },
//       { id: "footwear", label: "Footwear" },
//     ],
//   },
//   {
//     label: "Brand",
//     name: "brand",
//     componentType: "select",
//     options: [
//       { id: "nike", label: "Nike" },
//       { id: "adidas", label: "Adidas" },
//       { id: "puma", label: "Puma" },
//       { id: "levi", label: "Levi's" },
//       { id: "zara", label: "Zara" },
//       { id: "h&m", label: "H&M" },
//     ],
//   },
//   {
//     label: "Price",
//     name: "price",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter product price",
//   },
//   {
//     label: "Sale Price",
//     name: "salePrice",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter sale price (optional)",
//   },
//   {
//     label: "Total Stock",
//     name: "totalStock",
//     componentType: "input",
//     type: "number",
//     placeholder: "Enter total stock",
//   },
// ];

// export const shoppingViewHeaderMenuItems = [
//   {
//     id: "home",
//     label: "Home",
//     path: "/shop/home",
//   },
//   {
//     id: "products",
//     label: "Products",
//     path: "/shop/listing",
//   },
//   {
//     id: "men",
//     label: "Men",
//     path: "/shop/listing",
//   },
//   {
//     id: "women",
//     label: "Women",
//     path: "/shop/listing",
//   },
//   {
//     id: "kids",
//     label: "Kids",
//     path: "/shop/listing",
//   },
//   {
//     id: "footwear",
//     label: "Footwear",
//     path: "/shop/listing",
//   },
//   {
//     id: "accessories",
//     label: "Accessories",
//     path: "/shop/listing",
//   },
//   {
//     id: "search",
//     label: "Search",
//     path: "/shop/search",
//   },
// ];

// export const categoryOptionsMap = {
//   men: "Men",
//   women: "Women",
//   kids: "Kids",
//   accessories: "Accessories",
//   footwear: "Footwear",
// };

// export const brandOptionsMap = {
//   nike: "Nike",
//   adidas: "Adidas",
//   puma: "Puma",
//   levi: "Levi",
//   zara: "Zara",
//   "h&m": "H&M",
// };

// export const filterOptions = {
//   category: [
//     { id: "men", label: "Men" },
//     { id: "women", label: "Women" },
//     { id: "kids", label: "Kids" },
//     { id: "accessories", label: "Accessories" },
//     { id: "footwear", label: "Footwear" },
//   ],
//   brand: [
//     { id: "nike", label: "Nike" },
//     { id: "adidas", label: "Adidas" },
//     { id: "puma", label: "Puma" },
//     { id: "levi", label: "Levi's" },
//     { id: "zara", label: "Zara" },
//     { id: "h&m", label: "H&M" },
//   ],
// };

// export const sortOptions = [
//   { id: "price-lowtohigh", label: "Price: Low to High" },
//   { id: "price-hightolow", label: "Price: High to Low" },
//   { id: "title-atoz", label: "Title: A to Z" },
//   { id: "title-ztoa", label: "Title: Z to A" },
// ];

// export const addressFormControls = [
//   {
//     label: "Address",
//     name: "address",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your address",
//   },
//   {
//     label: "City",
//     name: "city",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your city",
//   },
//   {
//     label: "Pincode",
//     name: "pincode",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your pincode",
//   },
//   {
//     label: "Phone",
//     name: "phone",
//     componentType: "input",
//     type: "text",
//     placeholder: "Enter your phone number",
//   },
//   {
//     label: "Notes",
//     name: "notes",
//     componentType: "textarea",
//     placeholder: "Enter any additional notes",
//   },
// ];





export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "sofa", label: "Sofa" },
      { id: "2seatersofa", label: "2 Seater Sofa" },
      { id: "3seatersofa", label: "3 Seater Sofa" },
      { id: "beds", label: "Beds" },
      { id: "dining_sets", label: "Dining Sets" },
      { id: "study_table", label: "Study Table" },
      { id: "sectional_sofa", label: "Sectional Sofas" },
      { id: "wardrobes", label: "Wardrobes" },
      { id: "cabinates", label: "Cabinates" },
      { id: "office_furniture", label: "Office Furniture" },
      { id: "center_table", label: "Center Table" },
      { id: "shoe_racks", label: "Shoe Racks" },
      { id: "recliners", label: "Recliners" },
      { id: "chairs", label: "Chairs" },
      { id: "dressing_tables", label: "Dressing Tables" },
    ],
  },
    {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "sofa",
    label: "Sofa",
    path: "/shop/listing?category=sofa",
  },
  {
    id: "beds",
    label: "Beds",
    path: "/shop/listing?category=beds",
  },
  {
    id: "dining_sets",
    label: "Dining Sets",
    path: "/shop/listing?category=dining_sets",
  },
  {
    id: "study_table",
    label: "Study Table",
    path: "/shop/listing?category=study_table",
  },
  {
    id: "wardrobes",
    label: "Wardrobes",
    path: "/shop/listing?category=wardrobes",
  },
  {
    id: "office_furniture",
    label: "Office Furniture",
    path: "/shop/listing?category=office_furniture",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  sofa: "Sofa",
  twoseatersofa: "2 Seater Sofa",
  threeseatersofa: "3 Seater Sofa",
  beds: "Beds",
  dining_sets: "Dining Sets",
  study_table: "Study Table",
  sectional_sofa: "Sectional Sofas",
  wardrobes: "Wardrobes",
  cabinates: "Cabinates",
  office_furniture: "Office Furniture",
  center_table: "Center Table",
  shoe_racks: "Shoe Racks",
  recliners: "Recliners",
  chairs: "Chairs",
  dressing_tables: "Dressing Tables",
};

export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi",
  zara: "Zara",
  "h&m": "H&M",
};

export const filterOptions = {
  category: [
    { id: "sofa", label: "Sofa" },
    { id: "beds", label: "Beds" },
    { id: "dining_sets", label: "Dining Sets" },
    { id: "study_table", label: "Study Table" },
    { id: "sectional_sofa", label: "Sectional Sofas" },
    { id: "wardrobes", label: "Wardrobes" },
    { id: "cabinates", label: "Cabinates" },
    { id: "office_furniture", label: "Office Furniture" },
    { id: "center_table", label: "Center Table" },
    { id: "shoe_racks", label: "Shoe Racks" },
    { id: "recliners", label: "Recliners" },
    { id: "chairs", label: "Chairs" },
    { id: "dressing_tables", label: "Dressing Tables" },
  ],
  brand: [
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "puma", label: "Puma" },
    { id: "levi", label: "Levi's" },
    { id: "zara", label: "Zara" },
    { id: "h&m", label: "H&M" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
