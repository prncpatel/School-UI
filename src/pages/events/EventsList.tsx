import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  organizer: string;
  description: string;
  status: 'Upcoming' | 'Completed';
  [key: string]: string | number | 'Upcoming' | 'Completed'; // Index signature for RowData compatibility
}

const EventsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'Upcoming' | 'Completed'>('all');

  const events: Event[] = [{
    id: 1,
    title: 'Annual Sports Day',
    startDate: '2023-05-15',
    endDate: '2023-05-15',
    location: 'School Ground',
    organizer: 'Physical Education Department',
    description: 'Annual sports competition for all students',
    status: 'Upcoming'
  }, {
    id: 2,
    title: 'Science Exhibition',
    startDate: '2023-04-10',
    endDate: '2023-04-12',
    location: 'School Hall',
    organizer: 'Science Department',
    description: 'Exhibition showcasing student science projects',
    status: 'Completed'
  }, {
    id: 3,
    title: 'Parent-Teacher Meeting',
    startDate: '2023-05-20',
    endDate: '2023-05-20',
    location: 'School Auditorium',
    organizer: 'School Administration',
    description: 'Meeting between parents and teachers to discuss student progress',
    status: 'Upcoming'
  }, {
    id: 4,
    title: 'Annual Day Celebration',
    startDate: '2023-06-15',
    endDate: '2023-06-15',
    location: 'School Auditorium',
    organizer: 'Cultural Committee',
    description: 'Annual cultural program showcasing student talents',
    status: 'Upcoming'
  }, {
    id: 5,
    title: 'Mathematics Olympiad',
    startDate: '2023-03-25',
    endDate: '2023-03-25',
    location: 'School Hall',
    organizer: 'Mathematics Department',
    description: 'Mathematics competition for talented students',
    status: 'Completed'
  }, {
    id: 6,
    title: 'Career Counseling Workshop',
    startDate: '2023-05-30',
    endDate: '2023-05-31',
    location: 'School Library',
    organizer: 'Guidance Counselor',
    description: 'Workshop to guide students about career options',
    status: 'Upcoming'
  }, {
    id: 7,
    title: 'Inter-School Debate Competition',
    startDate: '2023-07-10',
    endDate: '2023-07-10',
    location: 'School Auditorium',
    organizer: 'English Department',
    description: 'Debate competition between various schools',
    status: 'Upcoming'
  }];

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
    event.organizer.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(event => filter === 'all' || event.status === filter);

  const columns = [
    {
      header: 'Event Title',
      accessor: 'title',
      render: (value: unknown) => (
        <div className="text-gray-900 dark:text-gray-100">{String(value)}</div>
      ),
    },
    {
      header: 'Date',
      accessor: 'startDate',
      render: (_: unknown, row: Event) => (
        <div className="text-gray-900 dark:text-gray-100">
          {row.startDate === row.endDate ? row.startDate : `${row.startDate} to ${row.endDate}`}
        </div>
      ),
    },
    {
      header: 'Location',
      accessor: 'location',
      render: (value: unknown) => (
        <div className="text-gray-900 dark:text-gray-100">{String(value)}</div>
      ),
    },
    {
      header: 'Organizer',
      accessor: 'organizer',
      render: (value: unknown) => (
        <div className="text-gray-900 dark:text-gray-100">{String(value)}</div>
      ),
    },
    {
      header: 'Description',
      accessor: 'description',
      render: (value: unknown) => (
        <div className="max-w-xs truncate text-gray-900 dark:text-gray-100">{String(value)}</div>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (value: unknown) => (
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          String(value) === 'Upcoming' 
            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' 
            : 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
        }`}>
          {String(value)}
        </div>
      ),
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: (_: unknown, row: Event) => (
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm">
            View
          </Button>
          <Button variant="secondary" size="sm">
            Edit
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Events</h1>
        <Button>
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Event
        </Button>
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
              placeholder="Search events..." 
              className="pl-10 w-64 focus:ring-primary-500 focus:border-primary-500 block shadow-sm text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-800 dark:text-gray-100" 
            />
          </div>
          <div className="flex items-center space-x-2">
            <Select
              icon={<FilterIcon className="h-5 w-5 text-gray-400" />}
              value={filter}
              onChange={e => setFilter(e.target.value as 'all' | 'Upcoming' | 'Completed')}
              className="w-48 dark:bg-gray-800 dark:text-gray-100 rounded-lg"
            >
              <option value="all">All Events</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed</option>
            </Select>
          </div>
        </div>
        <Table 
          data={filteredEvents} 
          columns={columns} 
          className="w-full"
        />
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredEvents.length} of {events.length} events
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

export default EventsList;