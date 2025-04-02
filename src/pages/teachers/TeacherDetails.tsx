import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  UserIcon, 
  GraduationCapIcon, 
  PhoneIcon, 
  MailIcon, 
  MapPinIcon, 
  CalendarIcon, 
  BriefcaseIcon,
  ClockIcon,
  BookOpenIcon,
  AwardIcon,
  ShieldCheckIcon,
  ArrowLeftIcon,
  UsersIcon,
  BuildingIcon,
  FileTextIcon,
  CreditCardIcon,
  StarIcon,
  BookMarkedIcon,
  CalendarDaysIcon
} from 'lucide-react';

interface TeacherDetails {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  designation: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  joinDate: string;
  // Contact Information
  email: string;
  phone: string;
  address: string;
  // Professional Information
  qualification: string;
  specialization: string;
  experience: string;
  subjects: string[];
  classes: string[];
  // Employment Details
  employmentType: string;
  salary: number;
  bankAccount: string;
  // Performance Metrics
  performance: {
    rating: number;
    totalStudents: number;
    averageScore: number;
    attendance: number;
  };
  // Schedule
  schedule: {
    workingHours: string;
    officeHours: string;
    weeklyClasses: number;
  };
  // Documents
  documents: {
    idProof: string;
    addressProof: string;
    qualification: string;
    experience: string;
    appointment: string;
  };
}

const TeacherDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock data - Replace with actual API call
  const teacher: TeacherDetails = {
    id: id || '1',
    name: 'Dr. Sarah Johnson',
    employeeId: 'T2024001',
    department: 'Science',
    designation: 'Senior Teacher',
    dateOfBirth: '1985-08-20',
    gender: 'Female',
    bloodGroup: 'A+',
    joinDate: '2020-06-15',
    email: 'sarah.johnson@school.edu',
    phone: '+1234567890',
    address: '456 Oak Street, City, State - 12345',
    qualification: 'Ph.D. in Physics',
    specialization: 'Quantum Mechanics',
    experience: '15 years',
    subjects: ['Physics', 'Advanced Physics', 'Mathematics'],
    classes: ['10th A', '10th B', '11th A'],
    employmentType: 'Full Time',
    salary: 75000,
    bankAccount: 'XXXX-XXXX-1234',
    performance: {
      rating: 4.8,
      totalStudents: 120,
      averageScore: 85,
      attendance: 98
    },
    schedule: {
      workingHours: '8:00 AM - 4:00 PM',
      officeHours: '2:00 PM - 4:00 PM',
      weeklyClasses: 24
    },
    documents: {
      idProof: 'Verified',
      addressProof: 'Verified',
      qualification: 'Verified',
      experience: 'Verified',
      appointment: 'Verified'
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate('/teachers')}
            className="flex items-center"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Teachers
          </Button>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Teacher Details</h1>
        </div>
        <div className="flex space-x-3">
          <Button variant="secondary">Print Details</Button>
          <Button variant="primary">Edit Details</Button>
        </div>
      </div>

      {/* Main Information Card */}
      <Card>
        <div className="flex items-start space-x-6">
          <div className="relative">
            <div className="h-32 w-32 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
              <UserIcon className="h-16 w-16 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-2">
              <ShieldCheckIcon className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{teacher.name}</h2>
                <p className="text-gray-500 dark:text-gray-400">Employee ID: {teacher.employeeId}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400">
                  <AwardIcon className="h-4 w-4 mr-1" />
                  {teacher.designation}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400">
                  <BuildingIcon className="h-4 w-4 mr-1" />
                  {teacher.department}
                </span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <UsersIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Students: {teacher.performance.totalStudents}</span>
              </div>
              <div className="flex items-center space-x-2">
                <StarIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Rating: {teacher.performance.rating}/5</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Experience: {teacher.experience}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Performance Metrics Card */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
          <AwardIcon className="h-5 w-5 mr-2 text-primary-500" />
          Performance Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">Performance Rating</div>
            <div className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400">{teacher.performance.rating}/5</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">Total Students</div>
            <div className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{teacher.performance.totalStudents}</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">Average Score</div>
            <div className="text-2xl font-semibold text-green-600 dark:text-green-400">{teacher.performance.averageScore}%</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">Attendance</div>
            <div className="text-2xl font-semibold text-purple-600 dark:text-purple-400">{teacher.performance.attendance}%</div>
          </div>
        </div>
      </Card>

      {/* Main Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Professional Information */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <GraduationCapIcon className="h-5 w-5 mr-2 text-primary-500" />
            Professional Information
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Qualification</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.qualification}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Specialization</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.specialization}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Experience</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.experience}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Employment Type</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.employmentType}</p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Subjects Taught</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {teacher.subjects.map((subject, index) => (
                  <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Classes Assigned</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {teacher.classes.map((cls, index) => (
                  <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400">
                    {cls}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <PhoneIcon className="h-5 w-5 mr-2 text-primary-500" />
            Contact Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MailIcon className="h-5 w-5 text-gray-400" />
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="h-5 w-5 text-gray-400" />
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.phone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPinIcon className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Address</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.address}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Schedule Information */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <CalendarDaysIcon className="h-5 w-5 mr-2 text-primary-500" />
            Schedule Information
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Working Hours</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.schedule.workingHours}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Office Hours</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.schedule.officeHours}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Weekly Classes</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.schedule.weeklyClasses}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Join Date</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.joinDate}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Employment Details */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <BriefcaseIcon className="h-5 w-5 mr-2 text-primary-500" />
            Employment Details
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Salary</label>
                <p className="text-gray-900 dark:text-gray-100">₹{teacher.salary.toLocaleString()}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Bank Account</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.bankAccount}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Date of Birth</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.dateOfBirth}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Blood Group</label>
                <p className="text-gray-900 dark:text-gray-100">{teacher.bloodGroup}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Documents Status */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
          <ShieldCheckIcon className="h-5 w-5 mr-2 text-primary-500" />
          Documents Status
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {Object.entries(teacher.documents).map(([key, value]) => (
            <div key={key} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileTextIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </span>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  value === 'Verified' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                    : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                }`}>
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TeacherDetails; 