import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Select from '../../components/ui/Select';
import { UsersIcon, BookOpenIcon, ClipboardListIcon, CalendarDaysIcon, SearchIcon, FilterIcon } from 'lucide-react';

const TeacherDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const stats = [{
    title: 'My Students',
    value: '87',
    icon: <UsersIcon className="h-8 w-8 text-blue-500" />
  }, {
    title: 'My Classes',
    value: '5',
    icon: <BookOpenIcon className="h-8 w-8 text-green-500" />
  }, {
    title: 'Upcoming Exams',
    value: '3',
    icon: <ClipboardListIcon className="h-8 w-8 text-purple-500" />
  }, {
    title: 'Assignments',
    value: '12',
    icon: <CalendarDaysIcon className="h-8 w-8 text-yellow-500" />
  }];
  const upcomingClasses = [{
    id: 1,
    className: 'Class 10 - Mathematics',
    time: '9:00 AM - 10:00 AM',
    room: 'Room 101'
  }, {
    id: 2,
    className: 'Class 9 - Mathematics',
    time: '10:30 AM - 11:30 AM',
    room: 'Room 103'
  }, {
    id: 3,
    className: 'Class 8 - Mathematics',
    time: '1:00 PM - 2:00 PM',
    room: 'Room 105'
  }];
  const recentAssignments = [{
    id: 1,
    title: 'Quadratic Equations',
    class: 'Class 10',
    dueDate: 'May 15, 2023',
    status: 'Active'
  }, {
    id: 2,
    title: 'Linear Equations',
    class: 'Class 9',
    dueDate: 'May 12, 2023',
    status: 'Active'
  }, {
    id: 3,
    title: 'Algebra Basics',
    class: 'Class 8',
    dueDate: 'May 10, 2023',
    status: 'Completed'
  }];

  const filteredClasses = upcomingClasses.filter(cls => 
    cls.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.room.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAssignments = recentAssignments.filter(assignment => 
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assignment.class.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(assignment => filter === 'all' || assignment.status === filter);

  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Teacher Dashboard
      </h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Welcome to your teaching portal
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
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Today's Classes</h2>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  value={searchTerm} 
                  onChange={e => setSearchTerm(e.target.value)} 
                  placeholder="Search classes..." 
                  className="pl-10 w-64 focus:ring-primary-500 focus:border-primary-500 block shadow-sm text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 bg-gray-700 dark:bg-gray-800 text-gray-100" 
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredClasses.map(cls => <li key={cls.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <BookOpenIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                        {cls.className}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {cls.time} at {cls.room}
                      </p>
                    </div>
                  </div>
                </li>)}
            </ul>
          </div>
          <div className="mt-6">
            <Link to="/schedule" className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              View full schedule
            </Link>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Recent Assignments
            </h2>
            <div className="flex items-center space-x-2">
              <Select
                icon={<FilterIcon className="h-5 w-5 text-gray-400" />}
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="w-48 bg-gray-700 dark:bg-gray-800 text-gray-100 rounded-lg"
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </Select>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredAssignments.map(assignment => <li key={assignment.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <ClipboardListIcon className="h-6 w-6 text-green-500 dark:text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                        {assignment.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {assignment.class} - Due: {assignment.dueDate}
                      </p>
                    </div>
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${assignment.status === 'Active' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' : 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-400'}`}>
                        {assignment.status}
                      </span>
                    </div>
                  </div>
                </li>)}
            </ul>
          </div>
          <div className="mt-6">
            <Link to="/assignments" className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              View all assignments
            </Link>
          </div>
        </Card>
      </div>
      <div className="mt-8">
        <Card>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Quick Access</h2>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {[
              { to: '/students', icon: <UsersIcon className="h-10 w-10 text-blue-500 dark:text-blue-400" />, label: 'My Students' },
              { to: '/subjects', icon: <BookOpenIcon className="h-10 w-10 text-yellow-500 dark:text-yellow-400" />, label: 'My Subjects' },
              { to: '/exams', icon: <ClipboardListIcon className="h-10 w-10 text-purple-500 dark:text-purple-400" />, label: 'Exams' },
              { to: '/events', icon: <CalendarDaysIcon className="h-10 w-10 text-red-500 dark:text-red-400" />, label: 'Events' }
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

export default TeacherDashboard;