import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon, CalendarIcon, FileTextIcon, ClockIcon, UsersIcon } from 'lucide-react';
import { Input, Select } from '../../components/forms';

const AddAssignment = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Add New Assignment</h1>
          <p className="page-subtitle">
            Create a new assignment for students
          </p>
        </div>
        <Link
          to="/assignments"
          className="btn-secondary"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to List
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div className="form-card">
          <h2 className="form-section-title">Assignment Information</h2>
          <div className="form-grid">
            <Input
              id="title"
              name="title"
              label="Assignment Title"
              icon={FileTextIcon}
              placeholder="Enter assignment title"
              required
            />

            <Select
              id="subject"
              name="subject"
              label="Subject"
              icon={BookOpenIcon}
              options={[
                { value: '', label: 'Select subject' },
                { value: 'mathematics', label: 'Mathematics' },
                { value: 'science', label: 'Science' },
                { value: 'english', label: 'English' },
                { value: 'history', label: 'History' }
              ]}
              required
            />

            <Select
              id="class"
              name="class"
              label="Class"
              icon={UsersIcon}
              options={[
                { value: '', label: 'Select class' },
                { value: '10', label: 'Class 10' },
                { value: '9', label: 'Class 9' },
                { value: '8', label: 'Class 8' },
                { value: '7', label: 'Class 7' }
              ]}
              required
            />

            <Input
              id="dueDate"
              name="dueDate"
              type="date"
              label="Due Date"
              icon={CalendarIcon}
              required
            />

            <Input
              id="maxScore"
              name="maxScore"
              type="number"
              label="Maximum Score"
              icon={ClockIcon}
              placeholder="Enter maximum score"
              required
            />

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-gray-100 sm:text-sm"
                placeholder="Enter assignment description"
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Attachment
              </label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                className="block w-full text-sm text-gray-500 dark:text-gray-400
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-primary-50 file:text-primary-700
                  hover:file:bg-primary-100
                  dark:file:bg-primary-900/50 dark:file:text-primary-300
                  dark:hover:file:bg-primary-900/70"
              />
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            Add Assignment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAssignment; 