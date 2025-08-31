import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FiHome, FiPieChart, FiSettings, FiMenu } from 'react-icons/fi';
import { useState } from 'react';

const navItems = [
  { to: '/', icon: <FiHome size={20} />, label: 'Dashboard' },
  { to: '/reports', icon: <FiPieChart size={20} />, label: 'Reports' },
  { to: '/settings', icon: <FiSettings size={20} />, label: 'Settings' },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <motion.div
      initial={{ width: 250 }}
      animate={{ width: isOpen ? 250 : 70 }}
      className="h-screen bg-white dark:bg-gray-800 shadow-lg flex flex-col transition-all duration-300"
    >
      <div className="p-4 flex items-center justify-between">
        {isOpen && <h1 className="text-xl font-bold text-primary-600 dark:text-primary-400">SmartDash</h1>}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Toggle sidebar"
        >
          <FiMenu className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      
      <nav className="flex-1 mt-6">
        <ul className="space-y-2 px-3">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-600 dark:bg-gray-700 dark:text-primary-400'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`
                }
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {isOpen && <span className="ml-3">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
            <span className="text-primary-600 dark:text-primary-300 font-medium">U</span>
          </div>
          {isOpen && (
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">User Name</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">user@example.com</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
