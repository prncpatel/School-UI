import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { ArrowLeftIcon, UploadIcon } from 'lucide-react';

interface NoticeForm {
  title: string;
  content: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  attachments: File[];
}

const AddNotice = () => {
  const [formData, setFormData] = useState<NoticeForm>({
    title: '',
    content: '',
    category: '',
    priority: 'Medium',
    attachments: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        attachments: [...prev.attachments, ...Array.from(e.target.files || [])]
      }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/notices">
            <Button variant="secondary" size="sm" className="flex items-center">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Notices
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Add New Notice
          </h1>
        </div>
      </div>

      {/* Form */}
      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="mt-1 block w-full focus:ring-primary-500 focus:border-primary-500 block shadow-sm text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-800 dark:text-gray-100"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Content
            </label>
            <textarea
              id="content"
              rows={6}
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              className="mt-1 block w-full focus:ring-primary-500 focus:border-primary-500 block shadow-sm text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-800 dark:text-gray-100"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Category
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="mt-1 block w-full focus:ring-primary-500 focus:border-primary-500 block shadow-sm text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-800 dark:text-gray-100"
                required
              >
                <option value="">Select Category</option>
                <option value="Academic">Academic</option>
                <option value="Sports">Sports</option>
                <option value="Library">Library</option>
                <option value="Events">Events</option>
                <option value="General">General</option>
              </select>
            </div>

            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Priority
              </label>
              <select
                id="priority"
                value={formData.priority}
                onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value as 'High' | 'Medium' | 'Low' }))}
                className="mt-1 block w-full focus:ring-primary-500 focus:border-primary-500 block shadow-sm text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-800 dark:text-gray-100"
                required
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Attachments
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                  >
                    <span>Upload files</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      multiple
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PDF, DOC, DOCX up to 10MB
                </p>
              </div>
            </div>
            {formData.attachments.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Selected Files:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {formData.attachments.map((file, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {file.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-3">
            <Link to="/notices">
              <Button variant="secondary" type="button">
                Cancel
              </Button>
            </Link>
            <Button type="submit">
              Publish Notice
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddNotice; 