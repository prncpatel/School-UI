import React from 'react';
import Card from '../../components/ui/Card';
import { UsersIcon, ClipboardListIcon, CalendarDaysIcon, ClockIcon, CheckCircleIcon } from 'lucide-react';

const StaffDashboard = () => {
  const stats = [{
    title: 'Staff Attendance',
    value: '96%',
    icon: <CheckCircleIcon className="h-8 w-8 text-green-500" />
  }, {
    title: 'Tasks',
    value: '12',
    icon: <ClipboardListIcon className="h-8 w-8 text-blue-500" />
  }, {
    title: 'Events',
    value: '5',
    icon: <CalendarDaysIcon className="h-8 w-8 text-purple-500" />
  }, {
    title: 'Hours Logged',
    value: '168',
    icon: <ClockIcon className="h-8 w-8 text-yellow-500" />
  }];
  const tasks = [{
    id: 1,
    title: 'Update staff records',
    priority: 'High',
    deadline: 'May 15, 2023',
    status: 'In Progress'
  }, {
    id: 2,
    title: 'Prepare monthly report',
    priority: 'Medium',
    deadline: 'May 20, 2023',
    status: 'Not Started'
  }, {
    id: 3,
    title: 'Organize staff meeting',
    priority: 'Low',
    deadline: 'May 25, 2023',
    status: 'Not Started'
  }, {
    id: 4,
    title: 'Review leave applications',
    priority: 'High',
    deadline: 'May 10, 2023',
    status: 'Completed'
  }];
  const staffMembers = [{
    id: 1,
    name: 'John Smith',
    role: 'Admin Assistant',
    status: 'Present'
  }, {
    id: 2,
    name: 'Mary Johnson',
    role: 'Librarian',
    status: 'Present'
  }, {
    id: 3,
    name: 'Robert Brown',
    role: 'IT Support',
    status: 'Present'
  }, {
    id: 4,
    name: 'Jennifer Davis',
    role: 'Accountant',
    status: 'On Leave'
  }, {
    id: 5,
    name: 'Michael Wilson',
    role: 'Maintenance',
    status: 'Present'
  }];
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Staff Dashboard</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Welcome to your staff management portal
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
          </Card>)}
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Tasks</h2>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
              {tasks.map(task => <li key={task.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <ClipboardListIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                        {task.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        Priority: {task.priority} - Due: {task.deadline}
                      </p>
                    </div>
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        task.status === 'Completed' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' 
                          : task.status === 'In Progress' 
                            ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400' 
                            : 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-400'
                      }`}>
                        {task.status}
                      </span>
                    </div>
                  </div>
                </li>)}
            </ul>
          </div>
          <div className="mt-6">
            <a href="#" className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              View all tasks
            </a>
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Staff Attendance
          </h2>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
              {staffMembers.map(staff => <li key={staff.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <UsersIcon className="h-6 w-6 text-green-500 dark:text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                        {staff.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {staff.role}
                      </p>
                    </div>
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${staff.status === 'Present' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'}`}>
                        {staff.status}
                      </span>
                    </div>
                  </div>
                </li>)}
            </ul>
          </div>
          <div className="mt-6">
            <a href="#" className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              View all staff
            </a>
          </div>
        </Card>
      </div>
      <div className="mt-8">
        <Card>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Quick Access</h2>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {[
              { href: '#', icon: <UsersIcon className="h-10 w-10 text-blue-500 dark:text-blue-400" />, label: 'Staff Directory' },
              { href: '#', icon: <ClipboardListIcon className="h-10 w-10 text-green-500 dark:text-green-400" />, label: 'Task Management' },
              { href: '#', icon: <CalendarDaysIcon className="h-10 w-10 text-yellow-500 dark:text-yellow-400" />, label: 'Events' },
              { href: '#', icon: <ClockIcon className="h-10 w-10 text-purple-500 dark:text-purple-400" />, label: 'Time Tracking' }
            ].map(item => (
              <a 
                key={item.href}
                href={item.href} 
                className="col-span-1 flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {item.icon}
                <div className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {item.label}
                </div>
              </a>
            ))}
          </div>
        </Card>
      </div>
    </div>;
};

export default StaffDashboard;