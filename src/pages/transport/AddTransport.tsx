import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  BusIcon, 
  UserIcon, 
  PhoneIcon, 
  MapPinIcon,
  HashIcon
} from 'lucide-react';

const AddTransport = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Add New Transport Route</h1>
          <p className="page-subtitle">
            Add a new transport route to the school transport system
          </p>
        </div>
        <Link
          to="/transport"
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
          <h2 className="form-section-title">Route Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="routeNumber" className="form-label required">
                Route Number
              </label>
              <div className="input-with-icon">
                <HashIcon className="icon" />
                <input
                  type="text"
                  id="routeNumber"
                  name="routeNumber"
                  className="input"
                  placeholder="Enter route number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="routeName" className="form-label required">
                Route Name
              </label>
              <div className="input-with-icon">
                <MapPinIcon className="icon" />
                <input
                  type="text"
                  id="routeName"
                  name="routeName"
                  className="input"
                  placeholder="Enter route name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="vehicle" className="form-label required">
                Vehicle
              </label>
              <div className="input-with-icon">
                <BusIcon className="icon" />
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  className="input"
                  placeholder="Enter vehicle number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="stops" className="form-label required">
                Number of Stops
              </label>
              <input
                type="number"
                id="stops"
                name="stops"
                className="input"
                min="1"
                required
              />
            </div>
          </div>
        </div>

        {/* Driver Information */}
        <div className="form-card">
          <h2 className="form-section-title">Driver Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="driver" className="form-label required">
                Driver Name
              </label>
              <div className="input-with-icon">
                <UserIcon className="icon" />
                <input
                  type="text"
                  id="driver"
                  name="driver"
                  className="input"
                  placeholder="Enter driver name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contactNo" className="form-label required">
                Contact Number
              </label>
              <div className="input-with-icon">
                <PhoneIcon className="icon" />
                <input
                  type="tel"
                  id="contactNo"
                  name="contactNo"
                  className="input"
                  placeholder="Enter contact number"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Route Details */}
        <div className="form-card">
          <h2 className="form-section-title">Route Details</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="startLocation" className="form-label required">
                Start Location
              </label>
              <div className="input-with-icon">
                <MapPinIcon className="icon" />
                <input
                  type="text"
                  id="startLocation"
                  name="startLocation"
                  className="input"
                  placeholder="Enter start location"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="endLocation" className="form-label required">
                End Location
              </label>
              <div className="input-with-icon">
                <MapPinIcon className="icon" />
                <input
                  type="text"
                  id="endLocation"
                  name="endLocation"
                  className="input"
                  placeholder="Enter end location"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="students" className="form-label">
                Number of Students
              </label>
              <input
                type="number"
                id="students"
                name="students"
                className="input"
                min="0"
              />
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <Link
            to="/transport"
            className="btn-secondary"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="btn-primary"
          >
            Add Route
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransport; 