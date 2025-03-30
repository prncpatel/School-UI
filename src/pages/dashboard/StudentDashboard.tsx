import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Select from '../../components/ui/Select';
import { BookOpenIcon, ClipboardListIcon, CalendarDaysIcon, CheckCircleIcon, XCircleIcon, SearchIcon, FilterIcon } from 'lucide-react';

const StudentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const stats = [{
    title: 'Attendance',
    value: '92%',
    icon: <CheckCircleIcon className="h-8 w-8 text-green-500" />
  }, {
    title: 'Assignments',
    value: '8',
    icon: <ClipboardListIcon className="h-8 w-8 text-blue-500" />
  }, {
    title: 'Upcoming Exams',
    value: '3',
    icon: <BookOpenIcon className="h-8 w-8 text-purple-500" />
  }, {
    title: 'Events',
    value: '5',
    icon: <CalendarDaysIcon className="h-8 w-8 text-yellow-500" />
  }];
  const timetable = [{
    id: 1,
    subject: 'Mathematics',
    time: '9:00 AM - 10:00 AM',
    teacher: 'Mr. Johnson'
  }, {
    id: 2,
    subject: 'Science',
    time: '10:30 AM - 11:30 AM',
    teacher: 'Mrs. Smith'
  }, {
    id: 3,
    subject: 'English',
    time: '1:00 PM - 2:00 PM',
    teacher: 'Ms. Davis'
  }, {
    id: 4,
    subject: 'History',
    time: '2:30 PM - 3:30 PM',
    teacher: 'Mr. Wilson'
  }];
  const assignments = [{
    id: 1,
    title: 'Mathematics Assignment',
    subject: 'Mathematics',
    dueDate: 'May 15, 2023',
    status: 'Pending'
  }, {
    id: 2,
    title: 'Science Project',
    subject: 'Science',
    dueDate: 'May 20, 2023',
    status: 'Pending'
  }, {
    id: 3,
    title: 'English Essay',
    subject: 'English',
    dueDate: 'May 10, 2023',
    status: 'Submitted'
  }];
  const attendanceRecords = [{
    date: 'May 1, 2023',
    status: 'Present'
  }, {
    date: 'May 2, 2023',
    status: 'Present'
  }, {
    date: 'May 3, 2023',
    status: 'Absent'
  }, {
    date: 'May 4, 2023',
    status: 'Present'
  }, {
    date: 'May 5, 2023',
    status: 'Present'
  }];

  const filteredTimetable = timetable.filter(period => 
    period.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    period.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAssignments = assignments.filter(assignment => 
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assignment.subject.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(assignment => filter === 'all' || assignment.status === filter);

  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Student Dashboard
      </h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Welcome to your learning portal
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
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Today's Timetable
            </h2>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  value={searchTerm} 
                  onChange={e => setSearchTerm(e.target.value)} 
                  placeholder="Search timetable..." 
                  className="pl-10 w-64 focus:ring-primary-500 focus:border-primary-500 block shadow-sm text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 bg-gray-700 dark:bg-gray-800 text-gray-100" 
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredTimetable.map(period => <li key={period.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <BookOpenIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                        {period.subject}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {period.time} - {period.teacher}
                      </p>
                    </div>
                  </div>
                </li>)}
            </ul>
          </div>
          <div className="mt-6">
            <a href="#" className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              View full timetable
            </a>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Assignments</h2>
            <div className="flex items-center space-x-2">
              <Select
                icon={<FilterIcon className="h-5 w-5 text-gray-400" />}
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="w-48 bg-gray-700 dark:bg-gray-800 text-gray-100 rounded-lg"
              >
                <option value="all">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Submitted">Submitted</option>
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
                        {assignment.subject} - Due: {assignment.dueDate}
                      </p>
                    </div>
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${assignment.status === 'Pending' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'}`}>
                        {assignment.status}
                      </span>
                    </div>
                  </div>
                </li>)}
            </ul>
          </div>
          <div className="mt-6">
            <a href="#" className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              View all assignments
            </a>
          </div>
        </Card>
      </div>
      <div className="mt-8">
        <Card>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Recent Attendance
          </h2>
          <div className="mt-6 overflow-hidden">
            <div className="flex flex-wrap -mx-2">
              {attendanceRecords.map((record, index) => <div key={index} className="px-2 w-1/5 mb-4">
                  <div className="text-center p-2 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex justify-center">
                      {record.status === 'Present' ? 
                        <CheckCircleIcon className="h-6 w-6 text-green-500 dark:text-green-400" /> : 
                        <XCircleIcon className="h-6 w-6 text-red-500 dark:text-red-400" />
                      }
                    </div>
                    <div className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                      {record.date}
                    </div>
                  </div>
                </div>)}
            </div>
            <div className="mt-4 flex justify-center">
              <a href="#" className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                View full attendance
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>;
};

export default StudentDashboard;