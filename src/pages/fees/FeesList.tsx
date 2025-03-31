import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';

interface Fee {
  id: number;
  studentName: string;
  class: string;
  rollNo: string;
  feeType: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  paidDate: string | null;
  [key: string]: string | number | null | 'Paid' | 'Pending' | 'Overdue';
}

const FeesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'Paid' | 'Pending' | 'Overdue'>('all');

  const fees: Fee[] = [{
    id: 1,
    studentName: 'John Smith',
    class: '10A',
    rollNo: '10A01',
    feeType: 'Tuition Fee',
    amount: 5000,
    dueDate: '2023-05-15',
    status: 'Paid',
    paidDate: '2023-05-10'
  }, {
    id: 2,
    studentName: 'Mary Johnson',
    class: '10A',
    rollNo: '10A02',
    feeType: 'Tuition Fee',
    amount: 5000,
    dueDate: '2023-05-15',
    status: 'Pending',
    paidDate: null
  }, {
    id: 3,
    studentName: 'Robert Brown',
    class: '10B',
    rollNo: '10B01',
    feeType: 'Tuition Fee',
    amount: 5000,
    dueDate: '2023-05-15',
    status: 'Paid',
    paidDate: '2023-05-12'
  }, {
    id: 4,
    studentName: 'Patricia Davis',
    class: '10B',
    rollNo: '10B02',
    feeType: 'Tuition Fee',
    amount: 5000,
    dueDate: '2023-05-15',
    status: 'Overdue',
    paidDate: null
  }, {
    id: 5,
    studentName: 'John Smith',
    class: '10A',
    rollNo: '10A01',
    feeType: 'Library Fee',
    amount: 1000,
    dueDate: '2023-05-20',
    status: 'Paid',
    paidDate: '2023-05-10'
  }, {
    id: 6,
    studentName: 'Mary Johnson',
    class: '10A',
    rollNo: '10A02',
    feeType: 'Library Fee',
    amount: 1000,
    dueDate: '2023-05-20',
    status: 'Pending',
    paidDate: null
  }, {
    id: 7,
    studentName: 'Robert Brown',
    class: '10B',
    rollNo: '10B01',
    feeType: 'Computer Lab Fee',
    amount: 1500,
    dueDate: '2023-05-25',
    status: 'Pending',
    paidDate: null
  }, {
    id: 8,
    studentName: 'Patricia Davis',
    class: '10B',
    rollNo: '10B02',
    feeType: 'Computer Lab Fee',
    amount: 1500,
    dueDate: '2023-05-25',
    status: 'Pending',
    paidDate: null
  }];

  const filteredFees = fees.filter(fee => 
    fee.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    fee.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) || 
    fee.feeType.toLowerCase().includes(searchTerm.toLowerCase()) || 
    fee.class.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(fee => filter === 'all' || fee.status === filter);

  const columns = [{
    header: 'Student',
    accessor: 'studentName',
    render: (value: unknown, row: Fee) => (
      <div>
        <div className="text-gray-900 dark:text-gray-100">{row.studentName}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {row.class} | {row.rollNo}
        </div>
      </div>
    )
  }, {
    header: 'Fee Type',
    accessor: 'feeType'
  }, {
    header: 'Amount',
    accessor: 'amount',
    render: (value: unknown, row: Fee) => (
      <div className="text-gray-900 dark:text-gray-100">${row.amount}</div>
    )
  }, {
    header: 'Due Date',
    accessor: 'dueDate'
  }, {
    header: 'Status',
    accessor: 'status',
    render: (value: unknown, row: Fee) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        row.status === 'Paid' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 
        row.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' : 
        'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
      }`}>
        {row.status}
      </span>
    )
  }, {
    header: 'Paid Date',
    accessor: 'paidDate',
    render: (value: unknown, row: Fee) => (
      <div className="text-gray-900 dark:text-gray-100">{row.paidDate || '-'}</div>
    )
  }, {
    header: 'Actions',
    accessor: 'actions',
    render: (value: unknown, row: Fee) => (
      <div className="flex space-x-2">
        <Button variant="secondary" size="sm">
          View
        </Button>
        {row.status !== 'Paid' && (
          <Button variant="primary" size="sm">
            Pay Now
          </Button>
        )}
      </div>
    )
  }];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Fees</h1>
        <Link to="/fees/add">
          <Button>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Fee
          </Button>
        </Link>
      </div>
      <Card>
        <div className="flex flex-col md:flex-row justify-between mb-6 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/3 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
              placeholder="Search fees..." 
              className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100" 
            />
          </div>
          <div className="flex items-center space-x-2">
            <FilterIcon className="h-5 w-5 text-gray-400" />
            <select 
              value={filter} 
              onChange={e => setFilter(e.target.value as 'all' | 'Paid' | 'Pending' | 'Overdue')} 
              className="w-48 focus:ring-blue-500 focus:border-blue-500 shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
            >
              <option value="all">All Fees</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>
        </div>
        <Table columns={columns} data={filteredFees} />
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredFees.length} of {fees.length} fee records
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

export default FeesList;