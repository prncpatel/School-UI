import React, { useState, ReactNode } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, LogOutIcon, UserIcon, UsersIcon, BookOpenIcon, CalendarIcon, ClipboardListIcon, TruckIcon, LibraryIcon, DollarSignIcon, CalendarDaysIcon, LayoutDashboardIcon, SearchIcon, BellIcon, CheckSquareIcon, WalletIcon, FileTextIcon, CalendarClockIcon, ChevronDownIcon, ChevronRightIcon, UserPlusIcon, ListIcon, ArrowUpRightIcon, MegaphoneIcon } from 'lucide-react';
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

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  roles: string[];
  submenu?: {
    name: string;
    path: string;
    icon: React.ReactNode;
  }[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  user,
  onLogout
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMenu = (menuName: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuName) 
        ? prev.filter(item => item !== menuName)
        : [...prev, menuName]
    );
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const navigation: NavigationItem[] = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <LayoutDashboardIcon className="h-5 w-5" />,
      roles: ['admin', 'teacher', 'student', 'staff']
    },
    {
      name: 'Students',
      path: '/students',
      icon: <UsersIcon className="h-5 w-5" />,
      roles: ['admin', 'teacher'],
      submenu: [
        {
          name: 'Student List',
          path: '/students',
          icon: <ListIcon className="h-4 w-4" />
        },
        {
          name: 'Student Details',
          path: '/students/details',
          icon: <UserIcon className="h-4 w-4" />
        },
        {
          name: 'Add Student',
          path: '/students/add',
          icon: <UserPlusIcon className="h-4 w-4" />
        },
        {
          name: 'Student Promotion',
          path: '/students/promotion',
          icon: <ArrowUpRightIcon className="h-4 w-4" />
        }
      ]
    },
    {
      name: 'Teachers',
      path: '/teachers',
      icon: <UserIcon className="h-5 w-5" />,
      roles: ['admin'],
      submenu: [
        {
          name: 'Teacher List',
          path: '/teachers',
          icon: <ListIcon className="h-4 w-4" />
        },
        {
          name: 'Teacher Details',
          path: '/teachers/details',
          icon: <UserIcon className="h-4 w-4" />
        },
        {
          name: 'Add Teacher',
          path: '/teachers/add',
          icon: <UserPlusIcon className="h-4 w-4" />
        }
      ]
    },
    {
      name: 'Subjects',
      path: '/subjects',
      icon: <BookOpenIcon className="h-5 w-5" />,
      roles: ['admin', 'teacher'],
      submenu: [
        {
          name: 'Subject List',
          path: '/subjects',
          icon: <ListIcon className="h-4 w-4" />
        },
        {
          name: 'Add Subject',
          path: '/subjects/add',
          icon: <UserPlusIcon className="h-4 w-4" />
        }
      ]
    },
    {
      name: 'Classes',
      path: '/classes',
      icon: <CalendarIcon className="h-5 w-5" />,
      roles: ['admin', 'teacher'],
      submenu: [
        {
          name: 'Class List',
          path: '/classes',
          icon: <ListIcon className="h-4 w-4" />
        },
        {
          name: 'Add Class',
          path: '/classes/add',
          icon: <UserPlusIcon className="h-4 w-4" />
        }
      ]
    },
    {
      name: 'Exams',
      path: '/exams',
      icon: <ClipboardListIcon className="h-5 w-5" />,
      roles: ['admin', 'teacher', 'student'],
      submenu: [
        {
          name: 'Exam List',
          path: '/exams',
          icon: <ListIcon className="h-4 w-4" />
        },
        {
          name: 'Add Exam',
          path: '/exams/add',
          icon: <UserPlusIcon className="h-4 w-4" />
        }
      ]
    },
    {
      name: 'Library',
      path: '/library',
      icon: <LibraryIcon className="h-5 w-5" />,
      roles: ['admin', 'teacher', 'student'],
      submenu: [
        {
          name: 'Book List',
          path: '/library',
          icon: <ListIcon className="h-4 w-4" />
        },
        {
          name: 'Add Book',
          path: '/library/add',
          icon: <UserPlusIcon className="h-4 w-4" />
        }
      ]
    },
    {
      name: 'Transport',
      path: '/transport',
      icon: <TruckIcon className="h-5 w-5" />,
      roles: ['admin', 'staff', 'student'],
      submenu: [
        {
          name: 'Route List',
          path: '/transport',
          icon: <ListIcon className="h-4 w-4" />
        },
        {
          name: 'Add Route',
          path: '/transport/add',
          icon: <UserPlusIcon className="h-4 w-4" />
        }
      ]
    },
    {
      name: 'Fees',
      path: '/fees',
      icon: <DollarSignIcon className="h-5 w-5" />,
      roles: ['admin', 'staff', 'student'],
      submenu: [
        {
          name: 'Fee List',
          path: '/fees',
          icon: <ListIcon className="h-4 w-4" />
        },
        {
          name: 'Add Fee',
          path: '/fees/add',
          icon: <UserPlusIcon className="h-4 w-4" />
        }
      ]
    },
    {
      name: 'Events',
      path: '/events',
      icon: <CalendarDaysIcon className="h-5 w-5" />,
      roles: ['admin', 'teacher', 'student', 'staff'],
      submenu: [
        {
          name: 'Event List',
          path: '/events',
          icon: <ListIcon className="h-4 w-4" />
        },
        {
          name: 'Add Event',
          path: '/events/add',
          icon: <UserPlusIcon className="h-4 w-4" />
        }
      ]
    },
    {
      name: 'Attendance',
      path: '/attendance',
      icon: <CheckSquareIcon className="h-5 w-5" />,
      roles: ['admin', 'teacher', 'student'],
      submenu: [
        {
          name: 'Attendance List',
          path: '/attendance',
          icon: <ListIcon className="h-4 w-4" />
        },
        {
          name: 'Mark Attendance',
          path: '/attendance/add',
          icon: <UserPlusIcon className="h-4 w-4" />
        },
        {
          name: 'Check Attendance',
          path: '/attendance/check',
          icon: <ClipboardListIcon className="h-4 w-4" />
        }
      ]
    },
    {
      name: 'Salary',
      path: '/salary',
      icon: <WalletIcon className="h-5 w-5" />,
      roles: ['admin'],
      submenu: [
        {
          name: 'Salary List',
          path: '/salary',
          icon: <ListIcon className="h-4 w-4" />
        },
        {
          name: 'Add Salary',
          path: '/salary/add',
          icon: <UserPlusIcon className="h-4 w-4" />
        }
      ]
    },
    {
      name: 'Assignments',
      path: '/assignments',
      icon: <FileTextIcon className="h-5 w-5" />,
      roles: ['admin', 'teacher', 'student'],
      submenu: [
        {
          name: 'Assignment List',
          path: '/assignments',
          icon: <ListIcon className="h-4 w-4" />
        },
        {
          name: 'Add Assignment',
          path: '/assignments/add',
          icon: <UserPlusIcon className="h-4 w-4" />
        }
      ]
    },
    {
      name: 'Notices',
      path: '/notices',
      icon: <MegaphoneIcon className="h-5 w-5" />,
      roles: ['admin', 'teacher', 'student', 'staff'],
      submenu: [
        {
          name: 'Notice Board',
          path: '/notices',
          icon: <ListIcon className="h-4 w-4" />
        },
        {
          name: 'Add Notice',
          path: '/notices/add',
          icon: <UserPlusIcon className="h-4 w-4" />
        }
      ]
    }
  ];

  const filteredNavigation = navigation.filter(item => 
    item.roles.includes(user.role || '')
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        {/* Backdrop overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-gray-900/20 backdrop-blur-[2px] transition-all duration-300 z-40"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}
        {/* Sidebar */}
        <div 
          className={`fixed inset-y-0 left-0 flex flex-col w-full max-w-xs bg-white dark:bg-gray-800 transition-transform ease-in-out duration-300 z-50 shadow-xl ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <nav className="mt-2 px-3 space-y-2">
              {filteredNavigation.map(item => (
                <div key={item.name} className="mb-2">
                  <div
                    className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${
                      location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                        ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                    }`}
                    onClick={() => item.submenu && toggleMenu(item.name)}
                  >
                    <div className="flex items-center">
                      <span className="text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {item.icon}
                      </span>
                      <span className="ml-3">{item.name}</span>
                    </div>
                    {item.submenu && (
                      expandedMenus.includes(item.name) ? 
                        <ChevronDownIcon className="h-4 w-4" /> : 
                        <ChevronRightIcon className="h-4 w-4" />
                    )}
                  </div>
                  {item.submenu && expandedMenus.includes(item.name) && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`flex items-center px-3 py-2 text-sm rounded-md ${
                            location.pathname === subItem.path
                              ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <span className="text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                            {subItem.icon}
                          </span>
                          <span className="ml-3">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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

      {/* Static sidebar for desktop */}
      <div className={`hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 transition-all duration-300 z-40 ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}`}>
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-2 px-3 space-y-2">
              {filteredNavigation.map(item => (
                <div key={item.name} className="mb-2">
                  <div
                    className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${
                      location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                        ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                    }`}
                    onClick={() => item.submenu && toggleMenu(item.name)}
                  >
                    <Link
                      to={item.path}
                      className="flex items-center flex-1"
                    >
                      <span className="text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {item.icon}
                      </span>
                      <span className={`ml-3 whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>{item.name}</span>
                    </Link>
                    {item.submenu && (
                      expandedMenus.includes(item.name) ? 
                        <ChevronDownIcon className="h-4 w-4" /> : 
                        <ChevronRightIcon className="h-4 w-4" />
                    )}
                  </div>
                  {item.submenu && expandedMenus.includes(item.name) && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`flex items-center px-3 py-2 text-sm rounded-md ${
                            location.pathname === subItem.path
                              ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <span className="text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                            {subItem.icon}
                          </span>
                          <span className={`ml-3 whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white group transition-all duration-200"
            >
              <LogOutIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
              <span className={`ml-3 whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`relative flex flex-col flex-1 transition-all duration-300 ${isCollapsed ? 'lg:pl-20' : 'lg:pl-64'}`}>
        {/* Top navbar */}
        <div className="sticky top-0 flex-shrink-0 flex h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm transition-colors duration-300 z-30">
          <button
            type="button"
            className="px-4 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={() => {
              if (window.innerWidth >= 1024) {
                setIsCollapsed(!isCollapsed);
              } else {
                setSidebarOpen(!sidebarOpen);
              }
            }}
          >
            <span className="sr-only">Toggle navigation</span>
            {isCollapsed ? (
              <MenuIcon className="h-6 w-6 transition-transform duration-200" />
            ) : (
              <MenuIcon className="h-6 w-6 transition-transform duration-200 rotate-180" />
            )}
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
          <div className="py-4">
            <div className={`mx-auto px-2 sm:px-4 md:px-6 transition-all duration-300 ${isCollapsed ? 'max-w-full' : 'max-w-full'}`}>
              <div className="py-2">
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