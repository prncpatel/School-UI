import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalendarIcon, FileTextIcon, ClockIcon, UserIcon, ClipboardListIcon } from 'lucide-react';
import { Input, Select } from '../../components/forms';

const AddLeave = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Apply for Leave</h1>
          <p className="page-subtitle">
            Submit a new leave application
          </p>
        </div>
        <Link
          to="/leaves"
          className="btn-secondary"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to List
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div className="form-card">
          <h2 className="form-section-title">Leave Application Details</h2>
          <div className="form-grid">
            <Input
              id="employeeName"
              name="employeeName"
              label="Employee Name"
              icon={UserIcon}
              placeholder="Enter employee name"
              required
            />

            <Select
              id="leaveType"
              name="leaveType"
              label="Leave Type"
              icon={ClipboardListIcon}
              options={[
                { value: '', label: 'Select leave type' },
                { value: 'Sick', label: 'Sick Leave' },
                { value: 'Casual', label: 'Casual Leave' },
                { value: 'Annual', label: 'Annual Leave' },
                { value: 'Maternity', label: 'Maternity Leave' },
                { value: 'Paternity', label: 'Paternity Leave' }
              ]}
              required
            />

            <Input
              id="startDate"
              name="startDate"
              type="date"
              label="Start Date"
              icon={CalendarIcon}
              required
            />

            <Input
              id="endDate"
              name="endDate"
              type="date"
              label="End Date"
              icon={CalendarIcon}
              required
            />

            <Input
              id="totalDays"
              name="totalDays"
              type="number"
              label="Total Days"
              icon={ClockIcon}
              placeholder="Enter total number of days"
              required
            />

            <div className="col-span-full">
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Reason for Leave
              </label>
              <textarea
                id="reason"
                name="reason"
                rows={4}
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-gray-100 sm:text-sm"
                placeholder="Enter reason for leave"
                required
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Supporting Documents (if any)
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
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLeave; 