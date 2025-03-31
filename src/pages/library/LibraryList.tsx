import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';
import Select from '../../components/ui/Select';

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  publisher: string;
  isbn: string;
  copies: number;
  available: number;
  status: string;
  [key: string]: string | number; // Add index signature for RowData compatibility
}

const LibraryList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const books: Book[] = [
    {
      id: 1,
      title: 'Mathematics for Class 10',
      author: 'R.D. Sharma',
      category: 'Academic',
      publisher: 'Dhanpat Rai Publications',
      isbn: '9788193663010',
      copies: 25,
      available: 18,
      status: 'Available'
    },
    {
      id: 2,
      title: 'Physics for Class 10',
      author: 'S.L. Arora',
      category: 'Academic',
      publisher: 'Dhanpat Rai Publications',
      isbn: '9788193663027',
      copies: 20,
      available: 15,
      status: 'Available'
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Fiction',
      publisher: 'J. B. Lippincott & Co.',
      isbn: '9780061120084',
      copies: 10,
      available: 0,
      status: 'Not Available'
    },
    {
      id: 4,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      publisher: "Charles Scribner's Sons",
      isbn: '9780743273565',
      copies: 8,
      available: 5,
      status: 'Available'
    },
    {
      id: 5,
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      category: 'Science',
      publisher: 'Bantam Books',
      isbn: '9780553380163',
      copies: 5,
      available: 2,
      status: 'Available'
    },
    {
      id: 6,
      title: 'English Grammar in Use',
      author: 'Raymond Murphy',
      category: 'Academic',
      publisher: 'Cambridge University Press',
      isbn: '9780521189064',
      copies: 15,
      available: 0,
      status: 'Not Available'
    },
    {
      id: 7,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      category: 'Fiction',
      publisher: 'HarperOne',
      isbn: '9780062315007',
      copies: 12,
      available: 8,
      status: 'Available'
    },
    {
      id: 8,
      title: 'Computer Science for Class 10',
      author: 'Sumita Arora',
      category: 'Academic',
      publisher: 'Dhanpat Rai Publications',
      isbn: '9788193663034',
      copies: 18,
      available: 12,
      status: 'Available'
    }
  ];

  const filteredBooks = books.filter(book => 
    (book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     book.author.toLowerCase().includes(searchTerm.toLowerCase()) || 
     book.category.toLowerCase().includes(searchTerm.toLowerCase()) || 
     book.isbn.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filter === 'all' || book.status === filter)
  );

  const columns = [
    {
      header: 'Title',
      accessor: 'title',
      render: (value: unknown) => (
        <div className="text-gray-900 dark:text-gray-100">{String(value)}</div>
      ),
    },
    {
      header: 'Author',
      accessor: 'author',
      render: (value: unknown) => (
        <div className="text-gray-900 dark:text-gray-100">{String(value)}</div>
      ),
    },
    {
      header: 'Category',
      accessor: 'category',
      render: (value: unknown) => (
        <div className="text-gray-900 dark:text-gray-100">{String(value)}</div>
      ),
    },
    {
      header: 'ISBN',
      accessor: 'isbn',
      render: (value: unknown) => (
        <div className="text-gray-900 dark:text-gray-100">{String(value)}</div>
      ),
    },
    {
      header: 'Copies',
      accessor: 'copies',
      render: (value: unknown) => (
        <div className="text-gray-900 dark:text-gray-100">{String(value)}</div>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (value: unknown) => (
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          String(value) === 'Available' 
            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' 
            : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
        }`}>
          {String(value)}
        </div>
      ),
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: (_: unknown, row: Book) => (
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm">
            View
          </Button>
          <Button variant="secondary" size="sm" disabled={row.status !== 'Available'}>
            Issue
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Library</h1>
        <Link to="/library/add">
          <Button>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Book
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
              placeholder="Search books..." 
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
              <option value="all">All Books</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </Select>
          </div>
        </div>
        <Table 
          data={filteredBooks} 
          columns={columns} 
          className="w-full"
        />
      </Card>
    </div>
  );
};

export default LibraryList;