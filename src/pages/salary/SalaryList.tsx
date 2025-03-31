import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { PlusIcon, SearchIcon, FilterIcon, CalendarIcon } from 'lucide-react';

interface Salary {
  id: number;
  employeeName: string;
  designation: string;
  month: string;
  year: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  status: 'Paid' | 'Pending' | 'Processing';
  paymentDate: string;
  [key: string]: string | number;
}

const SalaryList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'Paid' | 'Pending' | 'Processing'>('all');
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7));

  const salary: Salary[] = [
    {
      id: 1,
      employeeName: 'John Smith',
      designation: 'Teacher',
      month: 'March',
      year: '2024',
      basicSalary: 50000,
      allowances: 5000,
      deductions: 2000,
      netSalary: 53000,
      status: 'Paid',
      paymentDate: '2024-03-01'
    },
    {
      id: 2,
      employeeName: 'Mary Johnson',
      designation: 'Administrator',
      month: 'March',
      year: '2024',
      basicSalary: 45000,
      allowances: 4000,
      deductions: 1800,
      netSalary: 47200,
      status: 'Pending',
      paymentDate: ''
    },
    {
      id: 3,
      employeeName: 'Robert Brown',
      designation: 'Teacher',
      month: 'March',
      year: '2024',
      basicSalary: 48000,
      allowances: 4500,
      deductions: 1900,
      netSalary: 50600,
      status: 'Processing',
      paymentDate: '2024-03-02'
    },
    {
      id: 4,
      employeeName: 'Patricia Davis',
      designation: 'Staff',
      month: 'March',
      year: '2024',
      basicSalary: 35000,
      allowances: 3000,
      deductions: 1500,
      netSalary: 36500,
      status: 'Paid',
      paymentDate: '2024-03-01'
    }
  ];

  const filteredSalary = salary.filter(record => 
    (record.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) || 
     record.designation.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filter === 'all' || record.status === filter) &&
    `${record.year}-${record.month}` === selectedMonth
  );

  const columns = [
    {
      header: 'Employee',
      accessor: 'employeeName',
      render: (value: unknown, row: Salary) => (
        <div>
          <div className="text-gray-900 dark:text-gray-100">{row.employeeName}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {row.designation}
          </div>
        </div>
      )
    },
    {
      header: 'Month',
      accessor: 'month',
      render: (value: unknown, row: Salary) => (
        <div>
          <div className="text-gray-900 dark:text-gray-100">{row.month}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {row.year}
          </div>
        </div>
      )
    },
    {
      header: 'Basic Salary',
      accessor: 'basicSalary',
      render: (value: unknown, row: Salary) => (
        <div className="text-gray-900 dark:text-gray-100">
          ₹{row.basicSalary.toLocaleString()}
        </div>
      )
    },
    {
      header: 'Allowances',
      accessor: 'allowances',
      render: (value: unknown, row: Salary) => (
        <div className="text-gray-900 dark:text-gray-100">
          ₹{row.allowances.toLocaleString()}
        </div>
      )
    },
    {
      header: 'Deductions',
      accessor: 'deductions',
      render: (value: unknown, row: Salary) => (
        <div className="text-gray-900 dark:text-gray-100">
          ₹{row.deductions.toLocaleString()}
        </div>
      )
    },
    {
      header: 'Net Salary',
      accessor: 'netSalary',
      render: (value: unknown, row: Salary) => (
        <div className="text-gray-900 dark:text-gray-100 font-medium">
          ₹{row.netSalary.toLocaleString()}
        </div>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (value: unknown, row: Salary) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          row.status === 'Paid' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 
          row.status === 'Processing' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' : 
          'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
        }`}>
          {row.status}
        </span>
      )
    },
    {
      header: 'Payment Date',
      accessor: 'paymentDate',
      render: (value: unknown, row: Salary) => (
        <div className="text-gray-900 dark:text-gray-100">
          {row.paymentDate || '-'}
        </div>
      )
    },
    {
      header: 'Actions',
      accessor: 'actions',
      render: (value: unknown, row: Salary) => (
        <div className="flex space-x-2">
          <Button variant="secondary" size="sm">
            Edit
          </Button>
        </div>
      )
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Salary Management</h1>
        <Link to="/salary/add">
          <Button>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Salary
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
              placeholder="Search salary records..." 
              className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100" 
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
              <input
                type="month"
                value={selectedMonth}
                onChange={e => setSelectedMonth(e.target.value)}
                className="focus:ring-blue-500 focus:border-blue-500 shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
            </div>
            <div className="flex items-center space-x-2">
              <FilterIcon className="h-5 w-5 text-gray-400" />
              <select 
                value={filter} 
                onChange={e => setFilter(e.target.value as 'all' | 'Paid' | 'Pending' | 'Processing')} 
                className="w-48 focus:ring-blue-500 focus:border-blue-500 shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              >
                <option value="all">All Status</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
              </select>
            </div>
          </div>
        </div>
        <Table columns={columns} data={filteredSalary} />
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredSalary.length} of {salary.length} salary records
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

export default SalaryList; 