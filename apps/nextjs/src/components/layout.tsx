import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <aside className="fixed h-screen w-72 border-r">
        <Sidebar />
      </aside>
      <main className="ml-72 flex h-screen flex-col">{children}</main>
    </div>
  );
}
