import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  CalendarIcon, 
  MapPinIcon, 
  UserIcon, 
  FileTextIcon,
  ClockIcon
} from 'lucide-react';

const AddEvent = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Add New Event</h1>
          <p className="page-subtitle">
            Add a new event to the school calendar
          </p>
        </div>
        <Link
          to="/events"
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
          <h2 className="form-section-title">Event Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="title" className="form-label required">
                Event Title
              </label>
              <div className="input-with-icon">
                <FileTextIcon className="icon" />
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="input"
                  placeholder="Enter event title"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="startDate" className="form-label required">
                Start Date
              </label>
              <div className="input-with-icon">
                <CalendarIcon className="icon" />
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="endDate" className="form-label required">
                End Date
              </label>
              <div className="input-with-icon">
                <CalendarIcon className="icon" />
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  className="input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="time" className="form-label">
                Time
              </label>
              <div className="input-with-icon">
                <ClockIcon className="icon" />
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="location" className="form-label required">
                Location
              </label>
              <div className="input-with-icon">
                <MapPinIcon className="icon" />
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="input"
                  placeholder="Enter event location"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="organizer" className="form-label required">
                Organizer
              </label>
              <div className="input-with-icon">
                <UserIcon className="icon" />
                <input
                  type="text"
                  id="organizer"
                  name="organizer"
                  className="input"
                  placeholder="Enter organizer name"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="form-card">
          <h2 className="form-section-title">Event Details</h2>
          <div className="form-grid">
            <div className="form-group col-span-2">
              <label htmlFor="description" className="form-label required">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="input"
                rows={4}
                placeholder="Enter event description"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="status" className="form-label required">
                Status
              </label>
              <select
                id="status"
                name="status"
                className="input"
                required
              >
                <option value="">Select status</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="type" className="form-label">
                Event Type
              </label>
              <select
                id="type"
                name="type"
                className="input"
              >
                <option value="">Select type</option>
                <option value="academic">Academic</option>
                <option value="sports">Sports</option>
                <option value="cultural">Cultural</option>
                <option value="holiday">Holiday</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <Link
            to="/events"
            className="btn-secondary"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="btn-primary"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent; 