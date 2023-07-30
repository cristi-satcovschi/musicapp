export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const sidebarItems: { name: string; items: Item[] }[] = [
  {
    name: "Meniu",
    items: [
      // {
      //   name: "Dashboard",
      //   slug: "/",
      //   description: "",
      // },
      {
        name: "Songs",
        slug: "/songs",
        description: "",
      },
      {
        name: "Synths",
        slug: "/synths",
        description: "",
      },
      {
        name: "Tests",
        slug: "/tests",
        description: "",
      },
    ],
  },
];
