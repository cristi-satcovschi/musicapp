import Link from "next/link";
import { useRouter } from "next/router";

import { sidebarItems } from "~/lib/sidebarItems";

const SidebarItem = ({ item }) => {
  const router = useRouter();

  return (
    <Link
      href={`${item.slug}`}
      className={`shadow-neumorphic block rounded-xl px-4 py-3 text-sm font-semibold ${
        router.pathname.includes(item.slug)
          ? "bg-slate-300 text-slate-950"
          : "bg-slate-200 hover:bg-slate-300 hover:text-gray-800"
      }`}
    >
      {item.name}
    </Link>
  );
};

const Sidebar = () => {
  // todo: map multiple categories
  const items = sidebarItems[0]?.items;

  return (
    <nav className="px-8 py-8">
      <div className="flex flex-row items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-300 font-bold text-gray-700">
          Mus
        </div>
        <h2 className="ml-4 text-3xl">Music App</h2>
      </div>
      <div className="mt-16 space-y-3">
        {items.map((item) => (
          <SidebarItem key={item.slug} item={item} />
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
