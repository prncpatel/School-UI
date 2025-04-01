import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { UsersIcon, UserIcon, BookOpenIcon, CalendarIcon, TruckIcon, LibraryIcon, DollarSignIcon, CalendarDaysIcon, ClipboardListIcon, CheckSquareIcon, WalletIcon, FileTextIcon, CalendarClockIcon } from 'lucide-react';
import Calendar from '../../components/dashboard/Calendar';
import '../../styles/calendar.css';

const AdminDashboard = () => {
  const stats = [{
    title: 'Total Students',
    value: '1,254',
    icon: <UsersIcon className="h-8 w-8 text-blue-500" />,
    change: '+5%',
    changeType: 'increase'
  }, {
    title: 'Total Teachers',
    value: '87',
    icon: <UserIcon className="h-8 w-8 text-green-500" />,
    change: '+2%',
    changeType: 'increase'
  }, {
    title: 'Classes',
    value: '42',
    icon: <CalendarIcon className="h-8 w-8 text-purple-500" />,
    change: '0%',
    changeType: 'neutral'
  }, {
    title: 'Subjects',
    value: '56',
    icon: <BookOpenIcon className="h-8 w-8 text-yellow-500" />,
    change: '+4',
    changeType: 'increase'
  }];
  const recentActivities = [{
    id: 1,
    activity: 'New student registered',
    time: '2 hours ago',
    user: 'Admin'
  }, {
    id: 2,
    activity: 'Exam schedule updated',
    time: '5 hours ago',
    user: 'Admin'
  }, {
    id: 3,
    activity: 'Fee structure updated',
    time: '1 day ago',
    user: 'Admin'
  }, {
    id: 4,
    activity: 'New event created',
    time: '2 days ago',
    user: 'Admin'
  }];
  const upcomingEvents = [{
    id: 1,
    title: 'Annual Sports Day',
    date: 'May 15, 2023',
    location: 'School Ground'
  }, {
    id: 2,
    title: 'Parent-Teacher Meeting',
    date: 'May 20, 2023',
    location: 'School Auditorium'
  }, {
    id: 3,
    title: 'Science Exhibition',
    date: 'June 5, 2023',
    location: 'School Hall'
  }];
  return <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Admin Dashboard</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Welcome to the school management portal
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => <Card key={index} className="overflow-hidden">
            <div className="flex items-center">
              <div className="flex-shrink-0">{stat.icon}</div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    {stat.title}
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      {stat.value}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className={`text-sm ${
                stat.changeType === 'increase' 
                  ? 'text-green-600 dark:text-green-400' 
                  : stat.changeType === 'decrease' 
                    ? 'text-red-600 dark:text-red-400' 
                    : 'text-gray-500 dark:text-gray-400'
              }`}>
                {stat.change} from last month
              </div>
            </div>
          </Card>)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        <div className="lg:col-span-2 relative z-0">
          <Calendar />
        </div>
        <div className="space-y-6 relative z-10">
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                        <CalendarIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{event.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{event.date} at {event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Add Student', icon: UsersIcon, color: 'bg-blue-500', to: '/students/add' },
                  { name: 'Add Teacher', icon: UserIcon, color: 'bg-green-500', to: '/teachers/add' },
                  { name: 'Add Class', icon: CalendarIcon, color: 'bg-yellow-500', to: '/classes/add' },
                  { name: 'Add Event', icon: CalendarDaysIcon, color: 'bg-purple-500', to: '/events/add' }
                ].map((action) => (
                  <Link
                    key={action.name}
                    to={action.to}
                    className="relative z-20 flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105"
                  >
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{action.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>;
};

export default AdminDashboard;