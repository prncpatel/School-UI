import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  UserIcon, 
  GraduationCapIcon, 
  TagIcon, 
  DollarSignIcon,
  CalendarIcon,
  CheckCircleIcon
} from 'lucide-react';

const AddFees = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Add New Fee</h1>
          <p className="page-subtitle">
            Add a new fee record to the school fee system
          </p>
        </div>
        <Link
          to="/fees"
          className="btn-secondary"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to List
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Student Information */}
        <div className="form-card">
          <h2 className="form-section-title">Student Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="studentName" className="form-label required">
                Student Name
              </label>
              <div className="input-with-icon">
                <UserIcon className="icon" />
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  className="input"
                  placeholder="Enter student name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="class" className="form-label required">
                Class
              </label>
              <div className="input-with-icon">
                <GraduationCapIcon className="icon" />
                <input
                  type="text"
                  id="class"
                  name="class"
                  className="input"
                  placeholder="Enter class"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="rollNo" className="form-label required">
                Roll Number
              </label>
              <div className="input-with-icon">
                <TagIcon className="icon" />
                <input
                  type="text"
                  id="rollNo"
                  name="rollNo"
                  className="input"
                  placeholder="Enter roll number"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fee Details */}
        <div className="form-card">
          <h2 className="form-section-title">Fee Details</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="feeType" className="form-label required">
                Fee Type
              </label>
              <div className="input-with-icon">
                <TagIcon className="icon" />
                <select
                  id="feeType"
                  name="feeType"
                  className="input"
                  required
                >
                  <option value="">Select fee type</option>
                  <option value="Tuition Fee">Tuition Fee</option>
                  <option value="Library Fee">Library Fee</option>
                  <option value="Computer Lab Fee">Computer Lab Fee</option>
                  <option value="Transport Fee">Transport Fee</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="amount" className="form-label required">
                Amount
              </label>
              <div className="input-with-icon">
                <DollarSignIcon className="icon" />
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="input"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="dueDate" className="form-label required">
                Due Date
              </label>
              <div className="input-with-icon">
                <CalendarIcon className="icon" />
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  className="input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="status" className="form-label required">
                Status
              </label>
              <div className="input-with-icon">
                <CheckCircleIcon className="icon" />
                <select
                  id="status"
                  name="status"
                  className="input"
                  required
                >
                  <option value="">Select status</option>
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="paidDate" className="form-label">
                Paid Date
              </label>
              <div className="input-with-icon">
                <CalendarIcon className="icon" />
                <input
                  type="date"
                  id="paidDate"
                  name="paidDate"
                  className="input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <Link
            to="/fees"
            className="btn-secondary"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="btn-primary"
          >
            Add Fee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFees; 