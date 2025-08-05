export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        <div>
          <h3 className="text-xl font-bold text-indigo-600">SaaSify</h3>
          <p className="text-gray-600">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <ul className="flex gap-6 text-gray-700">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>
    </footer>
  );
}
