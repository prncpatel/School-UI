import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, UserIcon, MailIcon, PhoneIcon, BookOpenIcon, CalendarIcon, HashIcon } from 'lucide-react';

const AddStudent = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Add New Student</h1>
          <p className="page-subtitle">
            Add a new student to the school management system
          </p>
        </div>
        <Link
          to="/students"
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

            <div className="form-group">
              <label htmlFor="bloodGroup" className="form-label">
                Blood Group
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                className="input"
              >
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="religion" className="form-label">
                Religion
              </label>
              <input
                type="text"
                id="religion"
                name="religion"
                className="input"
                placeholder="Enter religion"
              />
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="form-card">
          <h2 className="form-section-title">Academic Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="rollNumber" className="form-label required">
                Roll Number
              </label>
              <div className="input-with-icon">
                <HashIcon className="icon" />
                <input
                  type="text"
                  id="rollNumber"
                  name="rollNumber"
                  className="input"
                  placeholder="Enter roll number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="class" className="form-label required">
                Class
              </label>
              <div className="input-with-icon">
                <BookOpenIcon className="icon" />
                <select
                  id="class"
                  name="class"
                  className="input"
                  required
                >
                  <option value="">Select class</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="section" className="form-label">
                Section
              </label>
              <select
                id="section"
                name="section"
                className="input"
              >
                <option value="">Select section</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
                <option value="D">Section D</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="admissionNumber" className="form-label">
                Admission Number
              </label>
              <div className="input-with-icon">
                <HashIcon className="icon" />
                <input
                  type="text"
                  id="admissionNumber"
                  name="admissionNumber"
                  className="input"
                  placeholder="Enter admission number"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="admissionDate" className="form-label">
                Admission Date
              </label>
              <div className="input-with-icon">
                <CalendarIcon className="icon" />
                <input
                  type="date"
                  id="admissionDate"
                  name="admissionDate"
                  className="input"
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
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;