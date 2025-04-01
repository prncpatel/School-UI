import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';

interface Leave {
  id: string;
  employeeName: string;
  type: 'Sick' | 'Casual' | 'Annual' | 'Maternity' | 'Paternity';
  startDate: string;
  endDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  reason: string;
  [key: string]: any;
}

const LeavesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'Pending' | 'Approved' | 'Rejected'>('all');

  // Sample data - replace with actual data from your backend
  const leaves: Leave[] = [
    {
      id: '1',
      employeeName: 'John Doe',
      type: 'Sick',
      startDate: '2024-04-15',
      endDate: '2024-04-17',
      status: 'Approved',
      reason: 'Medical treatment'
    },
    {
      id: '2',
      employeeName: 'Jane Smith',
      type: 'Annual',
      startDate: '2024-04-20',
      endDate: '2024-04-25',
      status: 'Pending',
      reason: 'Family vacation'
    },
    {
      id: '3',
      employeeName: 'Mike Johnson',
      type: 'Casual',
      startDate: '2024-04-10',
      endDate: '2024-04-11',
      status: 'Rejected',
      reason: 'Personal work'
    }
  ];

  const filteredLeaves = leaves.filter(leave => 
    (filter === 'all' || leave.status === filter) &&
    (leave.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    leave.type.toLowerCase().includes(searchTerm.toLowerCase()) || 
    leave.reason.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const columns = [{
    header: 'Employee Name',
    accessor: 'employeeName',
    render: (value: unknown, row: Leave) => (
      <div className="text-gray-900 dark:text-gray-100">{row.employeeName}</div>
    )
  }, {
    header: 'Leave Type',
    accessor: 'type',
    render: (value: unknown, row: Leave) => (
      <div className="text-gray-900 dark:text-gray-100">{row.type}</div>
    )
  }, {
    header: 'Start Date',
    accessor: 'startDate',
    render: (value: unknown, row: Leave) => (
      <div className="text-gray-900 dark:text-gray-100">{row.startDate}</div>
    )
  }, {
    header: 'End Date',
    accessor: 'endDate',
    render: (value: unknown, row: Leave) => (
      <div className="text-gray-900 dark:text-gray-100">{row.endDate}</div>
    )
  }, {
    header: 'Status',
    accessor: 'status',
    render: (value: unknown, row: Leave) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium
        ${row.status === 'Approved' ? 'bg-green-100 text-green-800' :
          row.status === 'Rejected' ? 'bg-red-100 text-red-800' :
            'bg-yellow-100 text-yellow-800'}`}>
        {row.status}
      </span>
    )
  }, {
    header: 'Actions',
    accessor: 'actions',
    render: (value: unknown, row: Leave) => (
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
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Leave Management</h1>
        <Link to="/leaves/add">
          <Button>
            <PlusIcon className="h-5 w-5 mr-2" />
            Apply Leave
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
              placeholder="Search leaves..." 
              className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100" 
            />
          </div>
          <div className="flex items-center space-x-2">
            <Select
              icon={<FilterIcon className="h-5 w-5 text-gray-400" />}
              value={filter}
              onChange={e => setFilter(e.target.value as 'all' | 'Pending' | 'Approved' | 'Rejected')}
              className="w-48"
            >
              <option value="all">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </Select>
          </div>
        </div>
        <Table columns={columns} data={filteredLeaves} />
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredLeaves.length} of {leaves.length} leaves
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

export default LeavesList; 