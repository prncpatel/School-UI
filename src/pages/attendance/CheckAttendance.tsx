import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import Table from '../../components/ui/Table';
import { ArrowLeftIcon, SearchIcon, CalendarIcon, FilterIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';

interface AttendanceRecord {
  id: number;
  date: string;
  status: 'Present' | 'Absent' | 'Late';
  subject?: string;
  teacher?: string;
  time?: string;
  remarks?: string;
  [key: string]: string | number | undefined;
}

const CheckAttendance = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for attendance records
  const attendanceRecords: AttendanceRecord[] = [
    {
      id: 1,
      date: '2024-03-01',
      status: 'Present',
      subject: 'Mathematics',
      teacher: 'Dr. Sarah Johnson',
      time: '09:00 AM',
      remarks: 'On time'
    },
    {
      id: 2,
      date: '2024-03-02',
      status: 'Present',
      subject: 'Physics',
      teacher: 'Mr. Robert Wilson',
      time: '10:30 AM',
      remarks: 'Active participation'
    },
    {
      id: 3,
      date: '2024-03-03',
      status: 'Absent',
      subject: 'Chemistry',
      teacher: 'Mrs. Emily Brown',
      time: '11:45 AM',
      remarks: 'Medical leave'
    },
    {
      id: 4,
      date: '2024-03-04',
      status: 'Late',
      subject: 'English',
      teacher: 'Ms. Jennifer Davis',
      time: '09:15 AM',
      remarks: '15 minutes late'
    },
    {
      id: 5,
      date: '2024-03-05',
      status: 'Present',
      subject: 'History',
      teacher: 'Mr. Michael Clark',
      time: '02:00 PM',
      remarks: 'Good performance'
    }
  ];

  const columns = [
    {
      header: 'Date',
      accessor: 'date',
      render: (value: unknown, row: Record<string, any>) => (
        <div className="flex items-center">
          <CalendarIcon className="h-4 w-4 mr-2 text-gray-400" />
          <span>{new Date(row.date as string).toLocaleDateString()}</span>
        </div>
      )
    },
    {
      header: 'Subject',
      accessor: 'subject'
    },
    {
      header: 'Teacher',
      accessor: 'teacher'
    },
    {
      header: 'Time',
      accessor: 'time'
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (value: unknown, row: Record<string, any>) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          row.status === 'Present' 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
            : row.status === 'Absent'
            ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
        }`}>
          {row.status === 'Present' && <CheckCircleIcon className="w-4 h-4 mr-1" />}
          {row.status === 'Absent' && <XCircleIcon className="w-4 h-4 mr-1" />}
          {row.status}
        </span>
      )
    },
    {
      header: 'Remarks',
      accessor: 'remarks'
    }
  ];

  // Calculate attendance statistics
  const totalDays = attendanceRecords.length;
  const presentDays = attendanceRecords.filter(record => record.status === 'Present').length;
  const absentDays = attendanceRecords.filter(record => record.status === 'Absent').length;
  const lateDays = attendanceRecords.filter(record => record.status === 'Late').length;
  const attendancePercentage = (presentDays / totalDays) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/attendance">
            <Button variant="secondary" size="sm" className="flex items-center">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Attendance
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Check Attendance
          </h1>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircleIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Present Days</h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{presentDays}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <XCircleIcon className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Absent Days</h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{absentDays}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              <CalendarIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Late Days</h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{lateDays}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <div className="text-blue-600 dark:text-blue-400 font-semibold">%</div>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Attendance Rate</h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {attendancePercentage.toFixed(1)}%
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Month
            </label>
            <Select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full"
            >
              <option value="">Select Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              {/* Add more months */}
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Class
            </label>
            <Select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full"
            >
              <option value="">Select Class</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject
            </label>
            <Select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full"
            >
              <option value="">Select Subject</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="pl-10 w-full focus:ring-primary-500 focus:border-primary-500 block shadow-sm text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Attendance Records Table */}
      <Card>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Attendance Records
          </h2>
        </div>

        <Table columns={columns} data={attendanceRecords} />

        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {attendanceRecords.length} records
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

export default CheckAttendance; 