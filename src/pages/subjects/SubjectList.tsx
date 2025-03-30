import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';

interface Subject {
  id: number;
  name: string;
  code: string;
  class: string;
  teacherName: string;
  description: string;
}

const SubjectList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const subjects = [{
    id: 1,
    name: 'Mathematics',
    code: 'MATH101',
    class: '10',
    teacherName: 'Dr. Robert Johnson',
    description: 'Advanced Mathematics including Algebra, Geometry, and Trigonometry'
  }, {
    id: 2,
    name: 'Physics',
    code: 'PHY101',
    class: '10',
    teacherName: 'Mrs. Sarah Williams',
    description: 'Study of matter, energy, and the interaction between them'
  }, {
    id: 3,
    name: 'Chemistry',
    code: 'CHEM101',
    class: '10',
    teacherName: 'Mrs. Sarah Williams',
    description: 'Study of the composition, structure, properties, and change of matter'
  }, {
    id: 4,
    name: 'English',
    code: 'ENG101',
    class: '10',
    teacherName: 'Mr. James Brown',
    description: 'Language arts, literature, grammar, and composition'
  }, {
    id: 5,
    name: 'History',
    code: 'HIST101',
    class: '10',
    teacherName: 'Ms. Emily Davis',
    description: 'Study of past events, particularly in human affairs'
  }, {
    id: 6,
    name: 'Computer Science',
    code: 'CS101',
    class: '10',
    teacherName: 'Dr. Jennifer Moore',
    description: 'Study of computers and computational systems'
  }, {
    id: 7,
    name: 'Geography',
    code: 'GEO101',
    class: '10',
    teacherName: 'Mr. Michael Taylor',
    description: 'Study of places and the relationships between people and their environments'
  }, {
    id: 8,
    name: 'Physical Education',
    code: 'PE101',
    class: '10',
    teacherName: 'Mr. Thomas Wilson',
    description: 'Education in physical exercise, care for the body, and overall wellness'
  }];

  const filteredSubjects = subjects.filter(subject => 
    subject.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    subject.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
    subject.class.toLowerCase().includes(searchTerm.toLowerCase()) || 
    subject.teacherName.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(subject => filter === 'all' || subject.class === filter);

  const columns = [{
    header: 'Subject Code',
    accessor: 'code',
    render: (value: unknown, row: Subject) => (
      <div className="text-gray-900 dark:text-gray-100">{row.code}</div>
    )
  }, {
    header: 'Subject Name',
    accessor: 'name',
    render: (value: unknown, row: Subject) => (
      <div className="text-gray-900 dark:text-gray-100">{row.name}</div>
    )
  }, {
    header: 'Class',
    accessor: 'class',
    render: (value: unknown, row: Subject) => (
      <div className="text-gray-900 dark:text-gray-100">{row.class}</div>
    )
  }, {
    header: 'Teacher',
    accessor: 'teacherName',
    render: (value: unknown, row: Subject) => (
      <div className="text-gray-900 dark:text-gray-100">{row.teacherName}</div>
    )
  }, {
    header: 'Description',
    accessor: 'description',
    render: (value: unknown, row: Subject) => (
      <div className="max-w-xs truncate text-gray-900 dark:text-gray-100">{row.description}</div>
    )
  }, {
    header: 'Actions',
    accessor: 'actions',
    render: (value: unknown, row: Subject) => (
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

  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Subjects</h1>
        <Link to="/subjects/add">
          <Button>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Subject
          </Button>
        </Link>
      </div>
      <Card>
        <div className="flex flex-col md:flex-row justify-between mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
              placeholder="Search subjects..." 
              className="pl-10 w-64 focus:ring-primary-500 focus:border-primary-500 block shadow-sm text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-800 dark:text-gray-100" 
            />
          </div>
          <div className="flex items-center space-x-2">
            <Select
              icon={<FilterIcon className="h-5 w-5 text-gray-400" />}
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="w-48 dark:bg-gray-800 dark:text-gray-100 rounded-lg"
            >
              <option value="all">All Classes</option>
              <option value="10">Class 10</option>
              <option value="9">Class 9</option>
              <option value="8">Class 8</option>
              <option value="7">Class 7</option>
            </Select>
          </div>
        </div>
        <Table columns={columns} data={filteredSubjects} />
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredSubjects.length} of {subjects.length} subjects
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
    </div>;
};

export default SubjectList;