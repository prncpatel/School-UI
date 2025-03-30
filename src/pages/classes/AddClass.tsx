import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon, GroupIcon, ClockIcon } from 'lucide-react';
import { Input, Select } from '../../components/forms';

const AddClass = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Add New Class</h1>
          <p className="page-subtitle">
            Create a new class in the school management system
          </p>
        </div>
        <Link
          to="/classes"
          className="btn-secondary"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to List
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div className="form-card">
          <h2 className="form-section-title">Class Information</h2>
          <div className="form-grid">
            <Input
              id="className"
              name="className"
              label="Class Name"
              icon={BookOpenIcon}
              placeholder="Enter class name"
              required
            />

            <Select
              id="section"
              name="section"
              label="Section"
              icon={GroupIcon}
              options={[
                { value: '', label: 'Select section' },
                { value: 'A', label: 'Section A' },
                { value: 'B', label: 'Section B' },
                { value: 'C', label: 'Section C' },
                { value: 'D', label: 'Section D' }
              ]}
              required
            />

            <Input
              id="capacity"
              name="capacity"
              type="number"
              label="Class Capacity"
              icon={GroupIcon}
              placeholder="Enter maximum students"
              required
            />

            <Select
              id="shift"
              name="shift"
              label="Class Shift"
              icon={ClockIcon}
              options={[
                { value: '', label: 'Select shift' },
                { value: 'morning', label: 'Morning' },
                { value: 'afternoon', label: 'Afternoon' },
                { value: 'evening', label: 'Evening' }
              ]}
              required
            />

            <Select
              id="classTeacher"
              name="classTeacher"
              label="Class Teacher"
              icon={GroupIcon}
              options={[
                { value: '', label: 'Select class teacher' },
                { value: 'T001', label: 'Dr. Robert Johnson' },
                { value: 'T002', label: 'Mrs. Sarah Williams' },
                { value: 'T003', label: 'Mr. James Brown' }
              ]}
              required
            />
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
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;