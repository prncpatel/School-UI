import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { UsersIcon, UserIcon, BookOpenIcon, CalendarIcon, TruckIcon, LibraryIcon, DollarSignIcon, CalendarDaysIcon } from 'lucide-react';

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
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Admin Dashboard</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Welcome to the school management portal
      </p>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Recent Activities
          </h2>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
              {recentActivities.map(activity => <li key={activity.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-800 dark:text-gray-200 truncate">
                        {activity.activity}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {activity.time} by {activity.user}
                      </p>
                    </div>
                  </div>
                </li>)}
            </ul>
          </div>
          <div className="mt-6">
            <Link 
              to="/activities" 
              className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              View all
            </Link>
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Upcoming Events</h2>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
              {upcomingEvents.map(event => <li key={event.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <CalendarDaysIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                        {event.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {event.date} at {event.location}
                      </p>
                    </div>
                  </div>
                </li>)}
            </ul>
          </div>
          <div className="mt-6">
            <Link 
              to="/events" 
              className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              View all events
            </Link>
          </div>
        </Card>
      </div>
      <div className="mt-8">
        <Card>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Quick Access</h2>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {[
              { to: '/students', icon: <UsersIcon className="h-10 w-10 text-blue-500 dark:text-blue-400" />, label: 'Students' },
              { to: '/teachers', icon: <UserIcon className="h-10 w-10 text-green-500 dark:text-green-400" />, label: 'Teachers' },
              { to: '/subjects', icon: <BookOpenIcon className="h-10 w-10 text-yellow-500 dark:text-yellow-400" />, label: 'Subjects' },
              { to: '/fees', icon: <DollarSignIcon className="h-10 w-10 text-red-500 dark:text-red-400" />, label: 'Fees' },
              { to: '/library', icon: <LibraryIcon className="h-10 w-10 text-purple-500 dark:text-purple-400" />, label: 'Library' },
              { to: '/transport', icon: <TruckIcon className="h-10 w-10 text-indigo-500 dark:text-indigo-400" />, label: 'Transport' }
            ].map(item => (
              <Link 
                key={item.to}
                to={item.to} 
                className="col-span-1 flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {item.icon}
                <div className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>;
};

export default AdminDashboard;