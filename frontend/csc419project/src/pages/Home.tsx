import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white flex">
      <Sidebar />

      <main className="flex-1 p-10 pt-20 md:pt-10 md:ml-64">
        <h1 className="text-3xl font-bold">Home Page</h1>
      </main>
    </div>
  );
}
