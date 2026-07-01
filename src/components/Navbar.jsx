export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <h1 className="text-2xl font-bold">Unni</h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-black text-white px-4 py-2 rounded-full">
        Get Started
      </button>
    </nav>
  );
}