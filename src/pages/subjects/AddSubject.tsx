import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon, ClockIcon, GroupIcon } from 'lucide-react';
import { Input, Select, TextArea } from '../../components/forms';

const AddSubject = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Add New Subject</h1>
          <p className="page-subtitle">
            Create a new subject in the school management system
          </p>
        </div>
        <Link
          to="/subjects"
          className="btn-secondary"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to List
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div className="form-card">
          <h2 className="form-section-title">Subject Information</h2>
          <div className="form-grid">
            <Input
              id="subjectName"
              name="subjectName"
              label="Subject Name"
              icon={BookOpenIcon}
              placeholder="Enter subject name"
              required
            />

            <Input
              id="subjectCode"
              name="subjectCode"
              label="Subject Code"
              icon={BookOpenIcon}
              placeholder="Enter subject code"
              required
            />

            <Select
              id="subjectType"
              name="subjectType"
              label="Subject Type"
              icon={BookOpenIcon}
              options={[
                { value: '', label: 'Select subject type' },
                { value: 'theory', label: 'Theory' },
                { value: 'practical', label: 'Practical' },
                { value: 'both', label: 'Both' }
              ]}
              required
            />

            <Input
              id="credits"
              name="credits"
              type="number"
              label="Credits"
              icon={ClockIcon}
              placeholder="Enter credits"
              required
            />

            <Select
              id="department"
              name="department"
              label="Department"
              icon={GroupIcon}
              options={[
                { value: '', label: 'Select department' },
                { value: 'science', label: 'Science' },
                { value: 'mathematics', label: 'Mathematics' },
                { value: 'english', label: 'English' },
                { value: 'history', label: 'History' },
                { value: 'computer', label: 'Computer Science' }
              ]}
              required
            />

            <Select
              id="assignedTeacher"
              name="assignedTeacher"
              label="Assigned Teacher"
              icon={GroupIcon}
              options={[
                { value: '', label: 'Select teacher' },
                { value: 'T001', label: 'Dr. Robert Johnson' },
                { value: 'T002', label: 'Mrs. Sarah Williams' },
                { value: 'T003', label: 'Mr. James Brown' }
              ]}
              required
            />
          </div>

          <div className="mt-6">
            <TextArea
              id="description"
              name="description"
              label="Subject Description"
              placeholder="Enter subject description"
              rows={4}
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
            Add Subject
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSubject;