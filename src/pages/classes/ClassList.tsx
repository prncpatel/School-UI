import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';

interface Class {
  id: number;
  name: string;
  classTeacher: string;
  totalStudents: number;
  room: string;
  section: string;
  subjects: string[];
  [key: string]: string | number | string[];
}

const ClassList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'A' | 'B'>('all');
  
  const classes: Class[] = [{
    id: 1,
    name: 'Class 10A',
    classTeacher: 'Dr. Robert Johnson',
    totalStudents: 42,
    room: '101',
    section: 'A',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'English', 'History']
  }, {
    id: 2,
    name: 'Class 10B',
    classTeacher: 'Mrs. Sarah Williams',
    totalStudents: 40,
    room: '102',
    section: 'B',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'English', 'History']
  }, {
    id: 3,
    name: 'Class 9A',
    classTeacher: 'Mr. James Brown',
    totalStudents: 45,
    room: '103',
    section: 'A',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Computer Science']
  }, {
    id: 4,
    name: 'Class 9B',
    classTeacher: 'Ms. Emily Davis',
    totalStudents: 43,
    room: '104',
    section: 'B',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Computer Science']
  }, {
    id: 5,
    name: 'Class 8A',
    classTeacher: 'Mr. Thomas Wilson',
    totalStudents: 48,
    room: '201',
    section: 'A',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Arts']
  }, {
    id: 6,
    name: 'Class 8B',
    classTeacher: 'Dr. Jennifer Moore',
    totalStudents: 46,
    room: '202',
    section: 'B',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Arts']
  }, {
    id: 7,
    name: 'Class 7A',
    classTeacher: 'Mr. Michael Taylor',
    totalStudents: 50,
    room: '203',
    section: 'A',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Music']
  }, {
    id: 8,
    name: 'Class 7B',
    classTeacher: 'Mrs. Patricia Anderson',
    totalStudents: 48,
    room: '204',
    section: 'B',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Music']
  }];

  const filteredClasses = classes.filter(cls => 
    (filter === 'all' || cls.section === filter) &&
    (cls.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cls.classTeacher.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cls.room.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cls.section.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const columns = [{
    header: 'Class Name',
    accessor: 'name',
    render: (value: unknown, row: Class) => (
      <div className="text-gray-900 dark:text-gray-100">{row.name}</div>
    )
  }, {
    header: 'Class Teacher',
    accessor: 'classTeacher',
    render: (value: unknown, row: Class) => (
      <div className="text-gray-900 dark:text-gray-100">{row.classTeacher}</div>
    )
  }, {
    header: 'Total Students',
    accessor: 'totalStudents',
    render: (value: unknown, row: Class) => (
      <div className="text-gray-900 dark:text-gray-100">{row.totalStudents}</div>
    )
  }, {
    header: 'Room',
    accessor: 'room',
    render: (value: unknown, row: Class) => (
      <div className="text-gray-900 dark:text-gray-100">{row.room}</div>
    )
  }, {
    header: 'Section',
    accessor: 'section',
    render: (value: unknown, row: Class) => (
      <div className="text-gray-900 dark:text-gray-100">{row.section}</div>
    )
  }, {
    header: 'Subjects',
    accessor: 'subjects',
    render: (value: unknown, row: Class) => (
      <div className="max-w-xs truncate text-gray-900 dark:text-gray-100">
        {row.subjects.join(', ')}
      </div>
    )
  }, {
    header: 'Actions',
    accessor: 'actions',
    render: (value: unknown, row: Class) => (
      <div className="flex space-x-2">
        <Button variant="secondary" size="sm">
          View
        </Button>
        <Button variant="primary" size="sm">
          Edit
        </Button>
      </div>
    )
  }];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Classes</h1>
        <Link to="/classes/add">
          <Button>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Class
          </Button>
        </Link>
      </div>
      <Card>
        <div className="flex flex-col md:flex-row justify-between mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
              placeholder="Search classes..." 
              className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100" 
            />
          </div>
          <div className="flex items-center space-x-2">
            <Select
              icon={<FilterIcon className="h-5 w-5 text-gray-400" />}
              value={filter}
              onChange={e => setFilter(e.target.value as 'all' | 'A' | 'B')}
              className="w-48"
            >
              <option value="all">All Sections</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
            </Select>
          </div>
        </div>
        <Table columns={columns} data={filteredClasses} />
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredClasses.length} of {classes.length} classes
          </div>
          <div className="flex space-x-2">
            <Button variant="secondary" size="sm" disabled>
              Previous
            </Button>
            <Button variant="secondary" size="sm">
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ClassList;