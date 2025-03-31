import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  UserIcon, 
  GraduationCapIcon, 
  TagIcon, 
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon
} from 'lucide-react';

const AddAttendance = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Mark Attendance</h1>
          <p className="page-subtitle">
            Mark attendance for students in a class
          </p>
        </div>
        <Link
          to="/attendance"
          className="btn-secondary"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to List
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Class Selection */}
        <div className="form-card">
          <h2 className="form-section-title">Class Selection</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="class" className="form-label required">
                Class
              </label>
              <div className="input-with-icon">
                <GraduationCapIcon className="icon" />
                <select
                  id="class"
                  name="class"
                  className="input"
                  required
                >
                  <option value="">Select class</option>
                  <option value="10A">10A</option>
                  <option value="10B">10B</option>
                  <option value="11A">11A</option>
                  <option value="11B">11B</option>
                  <option value="12A">12A</option>
                  <option value="12B">12B</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="date" className="form-label required">
                Date
              </label>
              <div className="input-with-icon">
                <CalendarIcon className="icon" />
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="input"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Student Attendance List */}
        <div className="form-card">
          <h2 className="form-section-title">Student Attendance</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Remarks
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {/* Sample student rows - in a real app, this would be mapped from actual student data */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          John Smith
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          10A01
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      name="status-1"
                      className="input"
                      required
                    >
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                      <option value="Late">Late</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="text"
                      name="remarks-1"
                      className="input"
                      placeholder="Add remarks..."
                    />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          Mary Johnson
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          10A02
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      name="status-2"
                      className="input"
                      required
                    >
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                      <option value="Late">Late</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="text"
                      name="remarks-2"
                      className="input"
                      placeholder="Add remarks..."
                    />
                  </td>
                </tr>
                {/* Add more student rows as needed */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <Link
            to="/attendance"
            className="btn-secondary"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="btn-primary"
          >
            Save Attendance
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAttendance; 