import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  BookIcon, 
  UserIcon, 
  TagIcon, 
  BuildingIcon,
  HashIcon,
  CopyIcon
} from 'lucide-react';

const AddLibrary = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Add New Book</h1>
          <p className="page-subtitle">
            Add a new book to the school library
          </p>
        </div>
        <Link
          to="/library"
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
          <h2 className="form-section-title">Book Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="title" className="form-label required">
                Book Title
              </label>
              <div className="input-with-icon">
                <BookIcon className="icon" />
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="input"
                  placeholder="Enter book title"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="author" className="form-label required">
                Author
              </label>
              <div className="input-with-icon">
                <UserIcon className="icon" />
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="input"
                  placeholder="Enter author name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label required">
                Category
              </label>
              <div className="input-with-icon">
                <TagIcon className="icon" />
                <select
                  id="category"
                  name="category"
                  className="input"
                  required
                >
                  <option value="">Select category</option>
                  <option value="Academic">Academic</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Science">Science</option>
                  <option value="History">History</option>
                  <option value="Biography">Biography</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="publisher" className="form-label required">
                Publisher
              </label>
              <div className="input-with-icon">
                <BuildingIcon className="icon" />
                <input
                  type="text"
                  id="publisher"
                  name="publisher"
                  className="input"
                  placeholder="Enter publisher name"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Book Details */}
        <div className="form-card">
          <h2 className="form-section-title">Book Details</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="isbn" className="form-label required">
                ISBN
              </label>
              <div className="input-with-icon">
                <HashIcon className="icon" />
                <input
                  type="text"
                  id="isbn"
                  name="isbn"
                  className="input"
                  placeholder="Enter ISBN number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="copies" className="form-label required">
                Total Copies
              </label>
              <div className="input-with-icon">
                <CopyIcon className="icon" />
                <input
                  type="number"
                  id="copies"
                  name="copies"
                  className="input"
                  min="1"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="available" className="form-label required">
                Available Copies
              </label>
              <div className="input-with-icon">
                <CopyIcon className="icon" />
                <input
                  type="number"
                  id="available"
                  name="available"
                  className="input"
                  min="0"
                  required
                />
              </div>
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
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <Link
            to="/library"
            className="btn-secondary"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="btn-primary"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLibrary; 