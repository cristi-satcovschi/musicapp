export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const sidebarItems: { name: string; items: Item[] }[] = [
  {
    name: "Meniu",
    items: [
      {
        name: "Dashboard",
        slug: "/dashboard",
        description: "",
      },
    ],
  },
];
