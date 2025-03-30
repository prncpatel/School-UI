import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  class: string;
  rollNo: string;
  gender: string;
  contactNo: string;
  status: string;
}

const StudentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const students = [{
    id: 1,
    name: 'John Smith',
    class: '10A',
    rollNo: '10A01',
    gender: 'Male',
    contactNo: '+1234567890',
    status: 'Active'
  }, {
    id: 2,
    name: 'Mary Johnson',
    class: '10A',
    rollNo: '10A02',
    gender: 'Female',
    contactNo: '+1234567891',
    status: 'Active'
  }, {
    id: 3,
    name: 'Robert Brown',
    class: '10B',
    rollNo: '10B01',
    gender: 'Male',
    contactNo: '+1234567892',
    status: 'Active'
  }, {
    id: 4,
    name: 'Patricia Davis',
    class: '10B',
    rollNo: '10B02',
    gender: 'Female',
    contactNo: '+1234567893',
    status: 'Inactive'
  }, {
    id: 5,
    name: 'Michael Wilson',
    class: '9A',
    rollNo: '9A01',
    gender: 'Male',
    contactNo: '+1234567894',
    status: 'Active'
  }, {
    id: 6,
    name: 'Linda Moore',
    class: '9A',
    rollNo: '9A02',
    gender: 'Female',
    contactNo: '+1234567895',
    status: 'Active'
  }, {
    id: 7,
    name: 'James Taylor',
    class: '9B',
    rollNo: '9B01',
    gender: 'Male',
    contactNo: '+1234567896',
    status: 'Inactive'
  }, {
    id: 8,
    name: 'Jennifer Anderson',
    class: '9B',
    rollNo: '9B02',
    gender: 'Female',
    contactNo: '+1234567897',
    status: 'Active'
  }];
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) || 
    student.class.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(student => filter === 'all' || student.status === filter);
  const columns = [{
    header: 'Roll No',
    accessor: 'rollNo'
  }, {
    header: 'Name',
    accessor: 'name'
  }, {
    header: 'Class',
    accessor: 'class'
  }, {
    header: 'Gender',
    accessor: 'gender'
  }, {
    header: 'Contact No',
    accessor: 'contactNo'
  }, {
    header: 'Status',
    accessor: 'status',
    render: (value: unknown, row: Student) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.status === 'Active' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'}`}>
        {row.status}
      </span>
    )
  }, {
    header: 'Actions',
    accessor: 'actions',
    render: (value: unknown, row: Student) => (
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
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Students</h1>
        <Link to="/students/add">
          <Button>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Student
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
              placeholder="Search students..." 
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
              <option value="all">All Students</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </Select>
          </div>
        </div>
        <Table columns={columns} data={filteredStudents} />
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredStudents.length} of {students.length} students
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

export default StudentList;