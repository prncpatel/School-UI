import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { BellIcon, CalendarIcon, UserIcon, TagIcon, SearchIcon, FilterIcon } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  attachments?: string[];
}

const NoticeBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');

  // Mock data for notices
  const notices: Notice[] = [
    {
      id: 1,
      title: 'Annual Sports Day Registration',
      content: 'Registration for the Annual Sports Day is now open. All students are encouraged to participate in various events. Please submit your registration forms to your respective class teachers by Friday.',
      author: 'Sports Department',
      date: '2024-03-15',
      category: 'Sports',
      priority: 'High',
      attachments: ['registration_form.pdf']
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting Schedule',
      content: 'The Parent-Teacher Meeting for all classes will be held on Saturday, March 20th, 2024. Please check the schedule posted on the school website.',
      author: 'Administration',
      date: '2024-03-10',
      category: 'Academic',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Library Maintenance Notice',
      content: 'The school library will be closed for maintenance work from March 25th to March 27th. Students are advised to borrow books before this period.',
      author: 'Library Department',
      date: '2024-03-05',
      category: 'Library',
      priority: 'Low'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Notice Board
          </h1>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                placeholder="Search notices..."
                className="pl-10 w-full focus:ring-primary-500 focus:border-primary-500 block shadow-sm text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full focus:ring-primary-500 focus:border-primary-500 block shadow-sm text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="">All Categories</option>
              <option value="Academic">Academic</option>
              <option value="Sports">Sports</option>
              <option value="Library">Library</option>
              <option value="Events">Events</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Priority
            </label>
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="w-full focus:ring-primary-500 focus:border-primary-500 block shadow-sm text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="">All Priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Notices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notices.map((notice) => (
          <Card key={notice.id} className="hover:shadow-lg transition-shadow duration-200">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <BellIcon className="h-5 w-5 text-primary-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {notice.title}
                  </h3>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  notice.priority === 'High'
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
                    : notice.priority === 'Medium'
                    ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                    : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                }`}>
                  {notice.priority}
                </span>
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {notice.content}
              </p>

              <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span>{notice.author}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{new Date(notice.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <TagIcon className="h-4 w-4 mr-1" />
                  <span>{notice.category}</span>
                </div>
              </div>

              {notice.attachments && notice.attachments.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Attachments:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {notice.attachments.map((attachment, index) => (
                      <Button
                        key={index}
                        variant="secondary"
                        size="sm"
                        className="flex items-center"
                      >
                        <span className="mr-2">{attachment}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard; 