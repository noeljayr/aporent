const properties = [
  {
    property_id: "c1c2d3e4-f5f6-47c7-8123-9e1b8b9a0f1a",
    title: "Stand Alone House",
    price: 350000,
    payment_frequency: "Monthly",
    location: "Area 47, Lilongwe, Central Region",
    features: [
      "4 bedrooms",
      "Self contained",
      "Fence",
      "Ceiling",
      "Fully tiled",
      "Kitchen unit",
      "Geyser",
      "Wardrobes",
      "Master ensuit",
    ],
    description:
      "This charming yellow house features bright, spacious interiors with large windows, a cozy front porch, and a wooden deck overlooking a lush, well-maintained lawn. The yard is open and unfenced, creating a seamless connection with the surrounding greenery. With a gravel driveway, ample outdoor seating, and a classic brick chimney, this home is perfect for relaxation or entertaining.",
    images: ["property-image-8.png", "property-image-8.png", "property-image-8.png", "property-image-8.png", "property-image-8.png"],
    status: "Unoccupied",
    isSaved: true,
  },
  {
    property_id: "a2f3b4c5-d6e7-48f9-a123-0f1b2c3d4e5f",
    title: "Modern House",
    price: 600000,
    payment_frequency: "Monthly",
    location: "Area 43, Lilongwe, Central Region",
    features: ["3 bedrooms", "Self contained", "Fence"],
    description: `
      This modern house features a sleek design with large windows, open spaces, and a minimalist aesthetic. The interior is bright and airy, with high ceilings and contemporary finishes. The backyard includes a spacious patio area, perfect for outdoor entertaining. The property is located in a quiet neighborhood, providing a peaceful retreat while still being close to amenities.
    `,
    images: ["property-image-7.png"],
    status: "Unoccupied",
    isSaved: false,
  },
  {
    property_id: "b1e2c3d4-f5a6-4768-9c0d-1e2b3c4d5f6a",
    title: "Apartment",
    price: 175000,
    payment_frequency: "Monthly",
    location: "Area 10, Lilongwe, Central Region",
    features: ["1 bedrooms", "Self contained", "Fence"],
    description: `
      This apartment features a cozy living space with modern finishes and a well-equipped kitchen. The bedroom is spacious and includes built-in wardrobes. The living area opens up to a small balcony, providing a nice view of the surrounding area. The building offers secure access and is located near local shops and public transport.
    `,
    images: ["property-image-6.png"],
    status: "Unoccupied",
    isSaved: false,
  },
  {
    property_id: "f6e5d4c3-b2a1-42c9-9f0e-123abc456def",
    title: "Bed Sitter",
    price: 50000,
    payment_frequency: "2 months",
    location: "Area 6, Lilongwe, Central Region",
    features: ["No bedroom", "Self contained", "Fence"],
    description: `
      This bed sitter is a compact living space that combines the bedroom and living area into one. It features a small kitchenette and a private bathroom. The space is designed for efficiency and comfort, making it ideal for singles or couples. Located in a vibrant neighborhood, it offers easy access to local amenities and public transport.
    `,
    images: [
      "property-image-5.png",
      "property-image-5.png",
      "property-image-5.png",
      "property-image-5.png",
    ],
    status: "Being viewed",
    isSaved: false,
  },
  {
    property_id: "1a2b3c4d-5e6f-78a9-b0c1-2d3e4f5g6h7i",
    title: "Stand Alone House",
    price: 1000000,
    payment_frequency: "Monthly",
    location: "Area 24, Lilongwe, Central Region",
    features: ["4 bedrooms", "Self contained", "Fence"],
    description: `
      This stand-alone house is a spacious property with a large backyard and plenty of room for outdoor activities. The interior features an open-concept living area, modern kitchen, and multiple bedrooms with ample storage. The house is located in a family-friendly neighborhood, close to schools and parks.
    `,
    images: ["property-image-4.png"],
    status: "Unoccupied",
    isSaved: false,
  },
  {
    property_id: "9f8e7d6c-5b4a-3210-9c8d-7e6f5d4c3b2a",
    title: "Town House",
    price: 300000,
    payment_frequency: "Monthly",
    location: "Area 25, Lilongwe, Central Region",
    features: ["4 bedrooms", "Self contained", "Fence"],
    description: `
      This town house features a modern design with an open floor plan, large windows, and a private backyard. The kitchen is equipped with stainless steel appliances and granite countertops. The bedrooms are spacious and include built-in wardrobes. The property is located in a gated community, providing added security and amenities such as a pool and fitness center.
    `,
    images: ["property-image-6.png"],
    status: "Occupied",
    isSaved: false,
  },
  {
    property_id: "abc12345-6789-4bcd-a0f1-2345abcdef67",
    title: "House Near Likuni",
    price: 300000,
    payment_frequency: "Monthly",
    location: "Likuni, Lilongwe, Central Region",
    features: ["5 bedrooms", "Self contained", "Fence"],
    description: `
      This house near Likuni offers a spacious layout with multiple bedrooms and a large backyard. The interior features a modern kitchen, open living spaces, and plenty of natural light. The property is located in a quiet area, providing a peaceful environment while still being close to local amenities.
    `,
    images: ["property-image-3.png"],
    status: "Occupied",
    isSaved: false,
  },
  {
    property_id: "def67890-1234-4cba-b0f1-56789abcdef0",
    title: "Executive House",
    price: 350000,
    payment_frequency: "Monthly",
    location: "Area 10, Lilongwe, Central Region",
    features: ["4 bedrooms", "Self contained", "Fence"],
    description: `
      This executive house features a luxurious design with high-end finishes and spacious living areas. The kitchen is equipped with top-of-the-line appliances and a large island for entertaining. The backyard includes a patio area and landscaped garden. The property is located in an upscale neighborhood, providing privacy and security.
    `,
    images: ["property-image-2.png"],
    status: "Occupied",
    isSaved: false,
  },
  {
    property_id: "f1e2d3c4-b5a6-4789-90ab-cdef12345678",
    title: "Town House",
    price: 600000,
    payment_frequency: "Monthly",
    location: "Area 6, Lilongwe, Central Region",
    features: ["4 bedrooms", "Self contained", "Fence"],
    description: `
      This town house features a modern design with an open floor plan and large windows. The kitchen is equipped with stainless steel appliances and granite countertops. The bedrooms are spacious and include built-in wardrobes. The property is located in a gated community, providing added security and amenities such as a pool and fitness center.
    `,
    images: ["property-image-9.png"],
    status: "Unoccupied",
    isSaved: false,
  },
  {
    property_id: "0a9b8c7d-6e5f-4d3c-2b1a-0f9e8d7c6b5a",
    title: "Town House",
    price: 400000,
    payment_frequency: "Monthly",
    location: "Area 12, Lilongwe, Central Region",
    features: ["4 bedrooms", "Self contained", "Fence"],
    description: `
      This town house features a modern design with an open floor plan and large windows. The kitchen is equipped with stainless steel appliances and granite countertops. The bedrooms are spacious and include built-in wardrobes. The property is located in a gated community, providing added security and amenities such as a pool and fitness center.
    `,
    images: ["property-image-10.png"],
    status: "Unoccupied",
    isSaved: false,
  },
  {
    property_id: "7654321a-0bcd-4ef9-a012-3456789abcde",
    title: "House Near Likuni",
    price: 300000,
    payment_frequency: "Monthly",
    location: "Area 47, Lilongwe, Central Region",
    features: ["4 bedrooms", "Self contained", "Fence"],
    description: `
      This house near Likuni offers a spacious layout with multiple bedrooms and a large backyard. The interior features a modern kitchen, open living spaces, and plenty of natural light. The property is located in a quiet area, providing a peaceful environment while still being close to local amenities.
    `,
    images: ["property-image-11.png"],
    status: "Unoccupied",
    isSaved: false,
  },
  {
    property_id: "1234abcd-5678-90ef-a1b2-3c4d5e6f7890",
    title: "Bed Sitter",
    price: 8000,
    payment_frequency: "Weekly",
    location: "Area 3, Lilongwe, Central Region",
    features: ["4 bedrooms", "Self contained", "Fence"],
    description: `
      This bed sitter is a compact living space that combines the bedroom and living area into one. It features a small kitchenette and a private bathroom. The space is designed for efficiency and comfort, making it ideal for singles or couples. Located in a vibrant neighborhood, it offers easy access to local amenities and public transport.
    `,
    images: ["property-image-12.png"],
    status: "Unoccupied",
    isSaved: false,
  },
];

export default properties;
