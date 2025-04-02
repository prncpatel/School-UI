import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Table from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';

interface Teacher {
  id: number;
  name: string;
  employeeId: string;
  department: string;
  qualification: string;
  joinDate: string;
  phone: string;
  email: string;
  status: string;
}

const TeacherList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  const teachers = [{
    id: 1,
    name: 'Dr. Robert Johnson',
    employeeId: 'T001',
    department: 'Mathematics',
    qualification: 'Ph.D.',
    joinDate: '2018-06-15',
    phone: '+1234567890',
    email: 'robert.johnson@school.edu',
    status: 'Active'
  }, {
    id: 2,
    name: 'Mrs. Sarah Williams',
    employeeId: 'T002',
    department: 'Science',
    qualification: 'M.Sc.',
    joinDate: '2017-08-10',
    phone: '+1234567891',
    email: 'sarah.williams@school.edu',
    status: 'Active'
  }, {
    id: 3,
    name: 'Mr. James Brown',
    employeeId: 'T003',
    department: 'English',
    qualification: 'M.A.',
    joinDate: '2019-07-05',
    phone: '+1234567892',
    email: 'james.brown@school.edu',
    status: 'Active'
  }, {
    id: 4,
    name: 'Ms. Emily Davis',
    employeeId: 'T004',
    department: 'History',
    qualification: 'M.Phil.',
    joinDate: '2020-01-20',
    phone: '+1234567893',
    email: 'emily.davis@school.edu',
    status: 'Active'
  }, {
    id: 5,
    name: 'Mr. Thomas Wilson',
    employeeId: 'T005',
    department: 'Physical Education',
    qualification: 'B.P.Ed.',
    joinDate: '2018-03-12',
    phone: '+1234567894',
    email: 'thomas.wilson@school.edu',
    status: 'Inactive'
  }, {
    id: 6,
    name: 'Dr. Jennifer Moore',
    employeeId: 'T006',
    department: 'Computer Science',
    qualification: 'Ph.D.',
    joinDate: '2019-11-08',
    phone: '+1234567895',
    email: 'jennifer.moore@school.edu',
    status: 'Active'
  }, {
    id: 7,
    name: 'Mr. Michael Taylor',
    employeeId: 'T007',
    department: 'Arts',
    qualification: 'M.F.A.',
    joinDate: '2021-02-15',
    phone: '+1234567896',
    email: 'michael.taylor@school.edu',
    status: 'Active'
  }, {
    id: 8,
    name: 'Mrs. Patricia Anderson',
    employeeId: 'T008',
    department: 'Music',
    qualification: 'M.Music',
    joinDate: '2020-07-22',
    phone: '+1234567897',
    email: 'patricia.anderson@school.edu',
    status: 'Inactive'
  }];
  const filteredTeachers = teachers.filter(teacher => teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) || teacher.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) || teacher.department.toLowerCase().includes(searchTerm.toLowerCase())).filter(teacher => filter === 'all' || teacher.status === filter);
  const columns = [{
    header: 'Employee ID',
    accessor: 'employeeId'
  }, {
    header: 'Name',
    accessor: 'name'
  }, {
    header: 'Department',
    accessor: 'department'
  }, {
    header: 'Qualification',
    accessor: 'qualification'
  }, {
    header: 'Join Date',
    accessor: 'joinDate'
  }, {
    header: 'Contact',
    accessor: 'phone',
    render: (value: unknown, row: Teacher) => (
      <div>
        <div className="text-gray-900 dark:text-gray-100">{row.phone}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{row.email}</div>
      </div>
    )
  }, {
    header: 'Status',
    accessor: 'status',
    render: (value: unknown, row: Teacher) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.status === 'Active' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'}`}>
        {row.status}
      </span>
    )
  }, {
    header: 'Actions',
    accessor: 'actions',
    render: (value: unknown, row: Teacher) => (
      <div className="flex space-x-2">
        <Button 
          variant="secondary" 
          size="sm"
          onClick={() => navigate(`/teachers/${row.id}`)}
        >
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
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Teachers</h1>
        <Link to="/teachers/add">
          <Button>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Teacher
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
              placeholder="Search teachers..." 
              className="pl-10 w-64 focus:ring-primary-500 focus:border-primary-500 block shadow-sm text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-800 dark:text-gray-100" 
            />
          </div>
          <div className="flex items-center space-x-2">
            <Select
              icon={<FilterIcon className="h-5 w-5 text-gray-400" />}
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="w-48 bg-gray-700 dark:bg-gray-800 text-gray-100 rounded-lg"
            >
              <option value="all">All Teachers</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </Select>
          </div>
        </div>
        <Table columns={columns} data={filteredTeachers} />
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredTeachers.length} of {teachers.length} teachers
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
export default TeacherList;