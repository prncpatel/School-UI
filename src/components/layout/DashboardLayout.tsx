import React, { useState, ReactNode } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, LogOutIcon, UserIcon, UsersIcon, BookOpenIcon, CalendarIcon, ClipboardListIcon, TruckIcon, LibraryIcon, DollarSignIcon, CalendarDaysIcon, LayoutDashboardIcon, SearchIcon, BellIcon, CheckSquareIcon, WalletIcon } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

interface User {
  isAuthenticated: boolean;
  role: string | null;
}

interface DashboardLayoutProps {
  children: ReactNode;
  user: User;
  onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  user,
  onLogout
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const getNavItems = () => {
    const commonItems = [{
      name: 'Dashboard',
      path: '/dashboard',
      icon: <LayoutDashboardIcon className="w-5 h-5" />,
      roles: ['admin', 'teacher', 'student', 'staff']
    }, {
      name: 'Events',
      path: '/events',
      icon: <CalendarDaysIcon className="w-5 h-5" />,
      roles: ['admin', 'teacher', 'student', 'staff']
    }];
    const adminItems = [{
      name: 'Students',
      path: '/students',
      icon: <UsersIcon className="w-5 h-5" />,
      roles: ['admin', 'teacher']
    }, {
      name: 'Teachers',
      path: '/teachers',
      icon: <UserIcon className="w-5 h-5" />,
      roles: ['admin']
    }, {
      name: 'Subjects',
      path: '/subjects',
      icon: <BookOpenIcon className="w-5 h-5" />,
      roles: ['admin', 'teacher']
    }, {
      name: 'Classes',
      path: '/classes',
      icon: <CalendarIcon className="w-5 h-5" />,
      roles: ['admin', 'teacher']
    }, {
      name: 'Exams',
      path: '/exams',
      icon: <ClipboardListIcon className="w-5 h-5" />,
      roles: ['admin', 'teacher', 'student']
    }, {
      name: 'Transport',
      path: '/transport',
      icon: <TruckIcon className="w-5 h-5" />,
      roles: ['admin', 'staff', 'student']
    }, {
      name: 'Library',
      path: '/library',
      icon: <LibraryIcon className="w-5 h-5" />,
      roles: ['admin', 'teacher', 'student']
    }, {
      name: 'Fees',
      path: '/fees',
      icon: <DollarSignIcon className="w-5 h-5" />,
      roles: ['admin', 'staff', 'student']
    }, {
      name: 'Attendance',
      path: '/attendance',
      icon: <CheckSquareIcon className="w-5 h-5" />,
      roles: ['admin', 'teacher']
    }, {
      name: 'Salary',
      path: '/salary',
      icon: <WalletIcon className="w-5 h-5" />,
      roles: ['admin']
    }];
    return [...commonItems, ...adminItems].filter(item => item.roles.includes(user.role || ''));
  };

  const navItems = getNavItems();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <div className="fixed inset-0 z-40 flex">
          <div 
            className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ease-in-out duration-300 ${
              sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`} 
            onClick={toggleSidebar} 
          />
          <div 
            className={`relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-800 focus:outline-none transform transition ease-in-out duration-300 ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Close sidebar</span>
                <XIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <nav className="mt-2 px-3 space-y-2">
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                    }`}
                    onClick={toggleSidebar}
                  >
                    <span className="text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {item.icon}
                    </span>
                    <span className="ml-3">{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
              <button
                onClick={handleLogout}
                className="flex w-full items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white group transition-all duration-200"
              >
                <LogOutIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
                <span className="ml-3">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-2 px-3 space-y-2">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <span className="text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {item.icon}
                  </span>
                  <span className="ml-3">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white group transition-all duration-200"
            >
              <LogOutIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top navbar */}
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm transition-colors duration-300">
          <button
            type="button"
            className="lg:hidden px-4 border-r border-gray-200 dark:border-gray-700 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" />
          </button>

          <div className="flex-1 px-4 flex justify-between items-center">
            {/* Logo and School Name */}
            <div className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/school-logo.svg"
                alt="School Logo"
              />
              <h1 className="ml-3 text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                School Portal
              </h1>
            </div>

            <div className="flex-1 flex justify-center px-8">
              <div className="w-full max-w-lg">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-600 rounded-full leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Search anything..."
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button
                type="button"
                className="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" />
              </button>
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center space-x-2 p-1.5 rounded-full bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                >
                  <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <UserIcon className="h-5 w-5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 bg-gray-50 dark:bg-gray-900">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;