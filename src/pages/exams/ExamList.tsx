import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';

interface Exam {
  id: number;
  name: string;
  examType: string;
  startDate: string;
  endDate: string;
  classes: string[];
  status: 'Upcoming' | 'Scheduled' | 'Completed';
  [key: string]: string | number | string[] | 'Upcoming' | 'Scheduled' | 'Completed';
}

const ExamList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'Upcoming' | 'Scheduled' | 'Completed'>('all');

  const exams: Exam[] = [{
    id: 1,
    name: 'First Term Examination',
    examType: 'Term Exam',
    startDate: '2023-05-15',
    endDate: '2023-05-25',
    classes: ['10A', '10B', '9A', '9B'],
    status: 'Upcoming'
  }, {
    id: 2,
    name: 'Mathematics Mid-Term Test',
    examType: 'Mid-Term',
    startDate: '2023-04-10',
    endDate: '2023-04-10',
    classes: ['10A', '10B'],
    status: 'Completed'
  }, {
    id: 3,
    name: 'Science Project Evaluation',
    examType: 'Project',
    startDate: '2023-06-05',
    endDate: '2023-06-05',
    classes: ['9A', '9B'],
    status: 'Upcoming'
  }, {
    id: 4,
    name: 'English Language Assessment',
    examType: 'Assessment',
    startDate: '2023-04-20',
    endDate: '2023-04-20',
    classes: ['10A', '10B', '9A', '9B'],
    status: 'Completed'
  }, {
    id: 5,
    name: 'Computer Science Practical',
    examType: 'Practical',
    startDate: '2023-05-30',
    endDate: '2023-06-02',
    classes: ['10A', '10B'],
    status: 'Upcoming'
  }, {
    id: 6,
    name: 'History Quiz',
    examType: 'Quiz',
    startDate: '2023-04-15',
    endDate: '2023-04-15',
    classes: ['9A', '9B'],
    status: 'Completed'
  }, {
    id: 7,
    name: 'Final Term Examination',
    examType: 'Term Exam',
    startDate: '2023-07-10',
    endDate: '2023-07-20',
    classes: ['10A', '10B', '9A', '9B'],
    status: 'Scheduled'
  }];

  const filteredExams = exams.filter(exam => 
    exam.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    exam.examType.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(exam => filter === 'all' || exam.status === filter);

  const columns = [{
    header: 'Exam Name',
    accessor: 'name'
  }, {
    header: 'Type',
    accessor: 'examType'
  }, {
    header: 'Date',
    accessor: 'startDate',
    render: (value: unknown, row: Exam) => (
      <div>
        {row.startDate === row.endDate ? row.startDate : `${row.startDate} to ${row.endDate}`}
      </div>
    )
  }, {
    header: 'Classes',
    accessor: 'classes',
    render: (value: unknown, row: Exam) => (
      <div>{row.classes.join(', ')}</div>
    )
  }, {
    header: 'Status',
    accessor: 'status',
    render: (value: unknown, row: Exam) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        row.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800' : 
        row.status === 'Completed' ? 'bg-green-100 text-green-800' : 
        'bg-blue-100 text-blue-800'
      }`}>
        {row.status}
      </span>
    )
  }, {
    header: 'Actions',
    accessor: 'actions',
    render: (value: unknown, row: Exam) => (
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
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Exams</h1>
        <Link to="/exams/add">
          <Button>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Exam
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
              placeholder="Search exams..." 
              className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100" 
            />
          </div>
          <div className="flex items-center space-x-2">
            <FilterIcon className="h-5 w-5 text-gray-400" />
            <select 
              value={filter} 
              onChange={e => setFilter(e.target.value as 'all' | 'Upcoming' | 'Scheduled' | 'Completed')} 
              className="w-48 focus:ring-blue-500 focus:border-blue-500 shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
            >
              <option value="all">All Exams</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        <Table columns={columns} data={filteredExams} />
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredExams.length} of {exams.length} exams
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

export default ExamList;