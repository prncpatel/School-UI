import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { PlusIcon, SearchIcon, FilterIcon, CalendarIcon } from 'lucide-react';

interface Attendance {
  id: number;
  date: string;
  studentName: string;
  class: string;
  rollNo: string;
  status: 'Present' | 'Absent' | 'Late';
  remarks: string;
  [key: string]: string | number;
}

const AttendanceList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'Present' | 'Absent' | 'Late'>('all');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const attendance: Attendance[] = [
    {
      id: 1,
      date: '2024-03-20',
      studentName: 'John Smith',
      class: '10A',
      rollNo: '10A01',
      status: 'Present',
      remarks: ''
    },
    {
      id: 2,
      date: '2024-03-20',
      studentName: 'Mary Johnson',
      class: '10A',
      rollNo: '10A02',
      status: 'Late',
      remarks: 'Arrived 15 minutes late'
    },
    {
      id: 3,
      date: '2024-03-20',
      studentName: 'Robert Brown',
      class: '10B',
      rollNo: '10B01',
      status: 'Present',
      remarks: ''
    },
    {
      id: 4,
      date: '2024-03-20',
      studentName: 'Patricia Davis',
      class: '10B',
      rollNo: '10B02',
      status: 'Absent',
      remarks: 'Called in sick'
    },
    {
      id: 5,
      date: '2024-03-19',
      studentName: 'John Smith',
      class: '10A',
      rollNo: '10A01',
      status: 'Present',
      remarks: ''
    },
    {
      id: 6,
      date: '2024-03-19',
      studentName: 'Mary Johnson',
      class: '10A',
      rollNo: '10A02',
      status: 'Present',
      remarks: ''
    },
    {
      id: 7,
      date: '2024-03-19',
      studentName: 'Robert Brown',
      class: '10B',
      rollNo: '10B01',
      status: 'Late',
      remarks: 'Arrived 10 minutes late'
    },
    {
      id: 8,
      date: '2024-03-19',
      studentName: 'Patricia Davis',
      class: '10B',
      rollNo: '10B02',
      status: 'Present',
      remarks: ''
    }
  ];

  const filteredAttendance = attendance.filter(record => 
    (record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
     record.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) || 
     record.class.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filter === 'all' || record.status === filter) &&
    record.date === selectedDate
  );

  const columns = [
    {
      header: 'Student',
      accessor: 'studentName',
      render: (value: unknown, row: Attendance) => (
        <div>
          <div className="text-gray-900 dark:text-gray-100">{row.studentName}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {row.class} | {row.rollNo}
          </div>
        </div>
      )
    },
    {
      header: 'Date',
      accessor: 'date'
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (value: unknown, row: Attendance) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          row.status === 'Present' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 
          row.status === 'Late' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' : 
          'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
        }`}>
          {row.status}
        </span>
      )
    },
    {
      header: 'Remarks',
      accessor: 'remarks',
      render: (value: unknown, row: Attendance) => (
        <div className="text-gray-900 dark:text-gray-100">{row.remarks || '-'}</div>
      )
    },
    {
      header: 'Actions',
      accessor: 'actions',
      render: (value: unknown, row: Attendance) => (
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
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Attendance</h1>
        <Link to="/attendance/add">
          <Button>
            <PlusIcon className="h-5 w-5 mr-2" />
            Mark Attendance
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
              placeholder="Search attendance..." 
              className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100" 
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
                className="focus:ring-blue-500 focus:border-blue-500 shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
            </div>
            <div className="flex items-center space-x-2">
              <FilterIcon className="h-5 w-5 text-gray-400" />
              <select 
                value={filter} 
                onChange={e => setFilter(e.target.value as 'all' | 'Present' | 'Absent' | 'Late')} 
                className="w-48 focus:ring-blue-500 focus:border-blue-500 shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              >
                <option value="all">All Status</option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
                <option value="Late">Late</option>
              </select>
            </div>
          </div>
        </div>
        <Table columns={columns} data={filteredAttendance} />
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredAttendance.length} of {attendance.length} attendance records
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

export default AttendanceList; 