import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';

interface Assignment {
  id: string;
  title: string;
  subject: string;
  class: string;
  dueDate: string;
  status: 'Active' | 'Completed' | 'Upcoming';
  [key: string]: any;
}

const AssignmentsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'Active' | 'Completed' | 'Upcoming'>('all');

  // Sample data - replace with actual data from your backend
  const assignments: Assignment[] = [
    {
      id: '1',
      title: 'Mathematics Assignment 1',
      subject: 'Mathematics',
      class: 'Class 10',
      dueDate: '2024-04-15',
      status: 'Active'
    },
    {
      id: '2',
      title: 'Science Project',
      subject: 'Science',
      class: 'Class 9',
      dueDate: '2024-04-20',
      status: 'Upcoming'
    },
    {
      id: '3',
      title: 'English Essay',
      subject: 'English',
      class: 'Class 11',
      dueDate: '2024-04-10',
      status: 'Completed'
    }
  ];

  const filteredAssignments = assignments.filter(assignment => 
    (filter === 'all' || assignment.status === filter) &&
    (assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    assignment.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
    assignment.class.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const columns = [{
    header: 'Title',
    accessor: 'title',
    render: (value: unknown, row: Assignment) => (
      <div className="text-gray-900 dark:text-gray-100">{row.title}</div>
    )
  }, {
    header: 'Subject',
    accessor: 'subject',
    render: (value: unknown, row: Assignment) => (
      <div className="text-gray-900 dark:text-gray-100">{row.subject}</div>
    )
  }, {
    header: 'Class',
    accessor: 'class',
    render: (value: unknown, row: Assignment) => (
      <div className="text-gray-900 dark:text-gray-100">{row.class}</div>
    )
  }, {
    header: 'Due Date',
    accessor: 'dueDate',
    render: (value: unknown, row: Assignment) => (
      <div className="text-gray-900 dark:text-gray-100">{row.dueDate}</div>
    )
  }, {
    header: 'Status',
    accessor: 'status',
    render: (value: unknown, row: Assignment) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium
        ${row.status === 'Active' ? 'bg-green-100 text-green-800' :
          row.status === 'Completed' ? 'bg-gray-100 text-gray-800' :
            'bg-blue-100 text-blue-800'}`}>
        {row.status}
      </span>
    )
  }, {
    header: 'Actions',
    accessor: 'actions',
    render: (value: unknown, row: Assignment) => (
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
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Assignments</h1>
        <Link to="/assignments/add">
          <Button>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Assignment
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
              placeholder="Search assignments..." 
              className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100" 
            />
          </div>
          <div className="flex items-center space-x-2">
            <Select
              icon={<FilterIcon className="h-5 w-5 text-gray-400" />}
              value={filter}
              onChange={e => setFilter(e.target.value as 'all' | 'Active' | 'Completed' | 'Upcoming')}
              className="w-48"
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Upcoming">Upcoming</option>
            </Select>
          </div>
        </div>
        <Table columns={columns} data={filteredAssignments} />
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredAssignments.length} of {assignments.length} assignments
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

export default AssignmentsList; 