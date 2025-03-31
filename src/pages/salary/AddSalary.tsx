import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  UserIcon, 
  CalendarIcon, 
  DollarSignIcon,
  MinusIcon,
  PlusIcon,
  CheckCircleIcon
} from 'lucide-react';

const AddSalary = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Add New Salary Record</h1>
          <p className="page-subtitle">
            Add a new salary record for an employee
          </p>
        </div>
        <Link
          to="/salary"
          className="btn-secondary"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to List
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Employee Information */}
        <div className="form-card">
          <h2 className="form-section-title">Employee Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="employee" className="form-label required">
                Employee
              </label>
              <div className="input-with-icon">
                <UserIcon className="icon" />
                <select
                  id="employee"
                  name="employee"
                  className="input"
                  required
                >
                  <option value="">Select employee</option>
                  <option value="1">John Smith - Teacher</option>
                  <option value="2">Mary Johnson - Administrator</option>
                  <option value="3">Robert Brown - Teacher</option>
                  <option value="4">Patricia Davis - Staff</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="month" className="form-label required">
                Month
              </label>
              <div className="input-with-icon">
                <CalendarIcon className="icon" />
                <input
                  type="month"
                  id="month"
                  name="month"
                  className="input"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Salary Details */}
        <div className="form-card">
          <h2 className="form-section-title">Salary Details</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="basicSalary" className="form-label required">
                Basic Salary
              </label>
              <div className="input-with-icon">
                <DollarSignIcon className="icon" />
                <input
                  type="number"
                  id="basicSalary"
                  name="basicSalary"
                  className="input"
                  required
                  min="0"
                  step="100"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="allowances" className="form-label">
                Allowances
              </label>
              <div className="input-with-icon">
                <PlusIcon className="icon" />
                <input
                  type="number"
                  id="allowances"
                  name="allowances"
                  className="input"
                  min="0"
                  step="100"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="deductions" className="form-label">
                Deductions
              </label>
              <div className="input-with-icon">
                <MinusIcon className="icon" />
                <input
                  type="number"
                  id="deductions"
                  name="deductions"
                  className="input"
                  min="0"
                  step="100"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="netSalary" className="form-label">
                Net Salary
              </label>
              <div className="input-with-icon">
                <DollarSignIcon className="icon" />
                <input
                  type="number"
                  id="netSalary"
                  name="netSalary"
                  className="input"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="form-card">
          <h2 className="form-section-title">Payment Information</h2>
          <div className="form-grid">
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
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="paymentDate" className="form-label">
                Payment Date
              </label>
              <div className="input-with-icon">
                <CalendarIcon className="icon" />
                <input
                  type="date"
                  id="paymentDate"
                  name="paymentDate"
                  className="input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <Link
            to="/salary"
            className="btn-secondary"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="btn-primary"
          >
            Add Salary Record
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSalary; 