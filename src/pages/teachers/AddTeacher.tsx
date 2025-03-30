import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, UserIcon, MailIcon, PhoneIcon, BriefcaseIcon, CalendarIcon, GraduationCapIcon, BuildingIcon } from 'lucide-react';

const AddTeacher = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Add New Teacher</h1>
          <p className="page-subtitle">
            Add a new teacher to the school management system
          </p>
        </div>
        <Link
          to="/teachers"
          className="btn-secondary"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to List
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Basic Information */}
        <div className="form-card">
          <h2 className="form-section-title">Basic Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label required">
                First Name
              </label>
              <div className="input-with-icon">
                <UserIcon className="icon" />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="input"
                  placeholder="Enter first name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="form-label required">
                Last Name
              </label>
              <div className="input-with-icon">
                <UserIcon className="icon" />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="input"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="gender" className="form-label required">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="input"
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth" className="form-label required">
                Date of Birth
              </label>
              <div className="input-with-icon">
                <CalendarIcon className="icon" />
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="input"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="form-card">
          <h2 className="form-section-title">Professional Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="employeeId" className="form-label required">
                Employee ID
              </label>
              <div className="input-with-icon">
                <BriefcaseIcon className="icon" />
                <input
                  type="text"
                  id="employeeId"
                  name="employeeId"
                  className="input"
                  placeholder="Enter employee ID"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="department" className="form-label required">
                Department
              </label>
              <div className="input-with-icon">
                <BuildingIcon className="icon" />
                <select
                  id="department"
                  name="department"
                  className="input"
                  required
                >
                  <option value="">Select department</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="english">English</option>
                  <option value="history">History</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="qualification" className="form-label required">
                Qualification
              </label>
              <div className="input-with-icon">
                <GraduationCapIcon className="icon" />
                <input
                  type="text"
                  id="qualification"
                  name="qualification"
                  className="input"
                  placeholder="Enter qualification"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="experience" className="form-label">
                Experience (Years)
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                className="input"
                placeholder="Enter years of experience"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="joinDate" className="form-label required">
                Join Date
              </label>
              <div className="input-with-icon">
                <CalendarIcon className="icon" />
                <input
                  type="date"
                  id="joinDate"
                  name="joinDate"
                  className="input"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="form-card">
          <h2 className="form-section-title">Contact Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="email" className="form-label required">
                Email Address
              </label>
              <div className="input-with-icon">
                <MailIcon className="icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="Enter email address"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <div className="input-with-icon">
                <PhoneIcon className="icon" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div className="form-group sm:col-span-2">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                className="input !h-auto"
                placeholder="Enter full address"
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
            Add Teacher
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;