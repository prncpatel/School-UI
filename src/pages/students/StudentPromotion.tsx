import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import Table from '../../components/ui/Table';
import { ArrowLeftIcon, SearchIcon, ArrowRightIcon } from 'lucide-react';

interface Student {
  id: number;
  rollNo: string;
  name: string;
  currentClass: string;
  section: string;
  status: string;
  [key: string]: string | number; // Add index signature for Table component
}

const StudentPromotion = () => {
  const [currentSession, setCurrentSession] = useState('2023-2024');
  const [promoteToSession, setPromoteToSession] = useState('2024-2025');
  const [fromClass, setFromClass] = useState('');
  const [toClass, setToClass] = useState('');

  // Mock data for students
  const students: Student[] = [
    {
      id: 1,
      rollNo: '2023001',
      name: 'John Smith',
      currentClass: '10th',
      section: 'A',
      status: 'Eligible'
    },
    {
      id: 2,
      rollNo: '2023002',
      name: 'Emma Johnson',
      currentClass: '10th',
      section: 'A',
      status: 'Not Eligible'
    },
    // Add more mock data as needed
  ];

  const columns = [
    {
      header: 'Roll No',
      accessor: 'rollNo'
    },
    {
      header: 'Name',
      accessor: 'name'
    },
    {
      header: 'Current Class',
      accessor: 'currentClass'
    },
    {
      header: 'Section',
      accessor: 'section'
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (value: unknown, row: Student) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          row.status === 'Eligible' 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
            : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
        }`}>
          {row.status}
        </span>
      )
    },
    {
      header: 'Select',
      accessor: 'select',
      render: (value: unknown, row: Student) => (
        <input
          type="checkbox"
          disabled={row.status !== 'Eligible'}
          className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
        />
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/students">
            <Button variant="secondary" size="sm" className="flex items-center">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Students
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Student Promotion
          </h1>
        </div>
      </div>

      {/* Search Form */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Current Session
            </label>
            <Select
              value={currentSession}
              onChange={(e) => setCurrentSession(e.target.value)}
              className="w-full"
            >
              <option value="2023-2024">2023-2024</option>
              <option value="2022-2023">2022-2023</option>
              <option value="2021-2022">2021-2022</option>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Promote To Session
            </label>
            <Select
              value={promoteToSession}
              onChange={(e) => setPromoteToSession(e.target.value)}
              className="w-full"
            >
              <option value="2024-2025">2024-2025</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2022-2023">2022-2023</option>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Promotion From Class
            </label>
            <Select
              value={fromClass}
              onChange={(e) => setFromClass(e.target.value)}
              className="w-full"
            >
              <option value="">Please Select</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Promotion To Class
            </label>
            <Select
              value={toClass}
              onChange={(e) => setToClass(e.target.value)}
              className="w-full"
            >
              <option value="">Please Select</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </Select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button>
            <SearchIcon className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>
      </Card>

      {/* Results Table */}
      <Card>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Student List
          </h2>
          <Button variant="primary" className="flex items-center">
            <ArrowRightIcon className="h-5 w-5 mr-2" />
            Promote Selected Students
          </Button>
        </div>

        <Table columns={columns} data={students} />

        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {students.length} students
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

export default StudentPromotion; 