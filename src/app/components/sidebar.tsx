export default function Sidebar() {
    return (
      <div className="w-64 h-screen fixed top-0 left-0 bg-gray-800 text-white p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">My Sidebar</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="block hover:bg-gray-700 p-2 rounded">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block hover:bg-gray-700 p-2 rounded">
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="block hover:bg-gray-700 p-2 rounded">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block hover:bg-gray-700 p-2 rounded">
              Logout
            </a>
          </li>
        </ul>
      </div>
    );
  }
  