import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon, CalendarIcon, ClockIcon, GroupIcon } from 'lucide-react';
import { Input, Select, TextArea } from '../../components/forms';

const AddExam = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Add New Exam</h1>
          <p className="page-subtitle">
            Schedule a new examination in the school management system
          </p>
        </div>
        <Link
          to="/exams"
          className="btn-secondary"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to List
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div className="form-card">
          <h2 className="form-section-title">Exam Information</h2>
          <div className="form-grid">
            <Input
              id="examName"
              name="examName"
              label="Exam Name"
              icon={BookOpenIcon}
              placeholder="Enter exam name"
              required
            />

            <Select
              id="examType"
              name="examType"
              label="Exam Type"
              icon={BookOpenIcon}
              options={[
                { value: '', label: 'Select exam type' },
                { value: 'midterm', label: 'Mid Term' },
                { value: 'final', label: 'Final Term' },
                { value: 'quiz', label: 'Quiz' },
                { value: 'practical', label: 'Practical' }
              ]}
              required
            />

            <Input
              id="examDate"
              name="examDate"
              type="date"
              label="Exam Date"
              icon={CalendarIcon}
              required
            />

            <Input
              id="startTime"
              name="startTime"
              type="time"
              label="Start Time"
              icon={ClockIcon}
              required
            />

            <Input
              id="duration"
              name="duration"
              type="number"
              label="Duration (minutes)"
              icon={ClockIcon}
              placeholder="Enter duration"
              required
            />

            <Input
              id="totalMarks"
              name="totalMarks"
              type="number"
              label="Total Marks"
              icon={BookOpenIcon}
              placeholder="Enter total marks"
              required
            />

            <Select
              id="subject"
              name="subject"
              label="Subject"
              icon={BookOpenIcon}
              options={[
                { value: '', label: 'Select subject' },
                { value: 'math', label: 'Mathematics' },
                { value: 'science', label: 'Science' },
                { value: 'english', label: 'English' },
                { value: 'history', label: 'History' }
              ]}
              required
            />

            <Select
              id="examRoom"
              name="examRoom"
              label="Exam Room"
              icon={GroupIcon}
              options={[
                { value: '', label: 'Select room' },
                { value: 'R101', label: 'Room 101' },
                { value: 'R102', label: 'Room 102' },
                { value: 'R103', label: 'Room 103' },
                { value: 'LAB1', label: 'Computer Lab 1' }
              ]}
              required
            />
          </div>

          <div className="mt-6">
            <TextArea
              id="instructions"
              name="instructions"
              label="Exam Instructions"
              placeholder="Enter exam instructions"
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
            Schedule Exam
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExam;