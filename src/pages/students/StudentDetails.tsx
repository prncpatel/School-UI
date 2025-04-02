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
  UsersIcon, 
  BriefcaseIcon,
  BusIcon, 
  CreditCardIcon,
  ArrowLeftIcon,
  ClockIcon,
  BookOpenIcon,
  AwardIcon,
  ShieldCheckIcon
} from 'lucide-react';

interface StudentDetails {
  id: string;
  name: string;
  rollNo: string;
  class: string;
  section: string;
  grade: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  admissionDate: string;
  // Contact Information
  email: string;
  phone: string;
  address: string;
  // Parent Information
  fatherName: string;
  motherName: string;
  fatherOccupation: string;
  motherOccupation: string;
  parentPhone: string;
  parentEmail: string;
  // Academic Information
  previousSchool: string;
  subjects: string[];
  // Transport Information
  transportRoute: string;
  pickupPoint: string;
  dropPoint: string;
  // Fee Information
  feeStatus: string;
  lastPaymentDate: string;
  nextPaymentDue: string;
  // Additional Information
  attendance: {
    present: number;
    absent: number;
    late: number;
    percentage: number;
  };
  academicPerformance: {
    currentGrade: string;
    lastExamScore: number;
    rank: number;
    totalStudents: number;
  };
  documents: {
    idProof: string;
    addressProof: string;
    birthCertificate: string;
    previousMarksheet: string;
  };
}

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock data - Replace with actual API call
  const student: StudentDetails = {
    id: id || '1',
    name: 'John Doe',
    rollNo: 'STU2024001',
    class: '10th',
    section: 'A',
    grade: 'A+',
    dateOfBirth: '2008-05-15',
    gender: 'Male',
    bloodGroup: 'O+',
    admissionDate: '2020-06-01',
    email: 'john.doe@school.edu',
    phone: '+1234567890',
    address: '123 Main Street, City, State - 12345',
    fatherName: 'James Doe',
    motherName: 'Mary Doe',
    fatherOccupation: 'Engineer',
    motherOccupation: 'Teacher',
    parentPhone: '+1234567891',
    parentEmail: 'parents.doe@email.com',
    previousSchool: 'ABC Public School',
    subjects: ['Mathematics', 'Science', 'English', 'History'],
    transportRoute: 'Route 1',
    pickupPoint: 'Main Street Bus Stop',
    dropPoint: 'School Gate',
    feeStatus: 'Paid',
    lastPaymentDate: '2024-03-01',
    nextPaymentDue: '2024-04-01',
    attendance: {
      present: 85,
      absent: 10,
      late: 5,
      percentage: 85
    },
    academicPerformance: {
      currentGrade: 'A+',
      lastExamScore: 92,
      rank: 3,
      totalStudents: 45
    },
    documents: {
      idProof: 'Verified',
      addressProof: 'Verified',
      birthCertificate: 'Verified',
      previousMarksheet: 'Verified'
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
            onClick={() => navigate('/students')}
            className="flex items-center"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Students
          </Button>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Student Details</h1>
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
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{student.name}</h2>
                <p className="text-gray-500 dark:text-gray-400">Roll No: {student.rollNo}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                  <AwardIcon className="h-4 w-4 mr-1" />
                  {student.grade}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400">
                  <GraduationCapIcon className="h-4 w-4 mr-1" />
                  {student.class} - {student.section}
                </span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Attendance: {student.attendance.percentage}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpenIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Rank: {student.academicPerformance.rank}/{student.academicPerformance.totalStudents}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCardIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Fee Status: {student.feeStatus}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Academic Performance Card */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
          <AwardIcon className="h-5 w-5 mr-2 text-primary-500" />
          Academic Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">Current Grade</div>
            <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{student.academicPerformance.currentGrade}</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">Last Exam Score</div>
            <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{student.academicPerformance.lastExamScore}%</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">Class Rank</div>
            <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{student.academicPerformance.rank}</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">Total Students</div>
            <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{student.academicPerformance.totalStudents}</div>
          </div>
        </div>
      </Card>

      {/* Main Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Academic Information */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <GraduationCapIcon className="h-5 w-5 mr-2 text-primary-500" />
            Academic Information
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Date of Birth</label>
                <p className="text-gray-900 dark:text-gray-100">{student.dateOfBirth}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Gender</label>
                <p className="text-gray-900 dark:text-gray-100">{student.gender}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Blood Group</label>
                <p className="text-gray-900 dark:text-gray-100">{student.bloodGroup}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Admission Date</label>
                <p className="text-gray-900 dark:text-gray-100">{student.admissionDate}</p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Previous School</label>
              <p className="text-gray-900 dark:text-gray-100">{student.previousSchool}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Subjects</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {student.subjects.map((subject, index) => (
                  <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                    {subject}
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
                <p className="text-gray-900 dark:text-gray-100">{student.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="h-5 w-5 text-gray-400" />
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</label>
                <p className="text-gray-900 dark:text-gray-100">{student.phone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPinIcon className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Address</label>
                <p className="text-gray-900 dark:text-gray-100">{student.address}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Parent Information */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <UsersIcon className="h-5 w-5 mr-2 text-primary-500" />
            Parent Information
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Father's Name</label>
                <p className="text-gray-900 dark:text-gray-100">{student.fatherName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Mother's Name</label>
                <p className="text-gray-900 dark:text-gray-100">{student.motherName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Father's Occupation</label>
                <p className="text-gray-900 dark:text-gray-100">{student.fatherOccupation}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Mother's Occupation</label>
                <p className="text-gray-900 dark:text-gray-100">{student.motherOccupation}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="h-5 w-5 text-gray-400" />
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Parent's Contact</label>
                <p className="text-gray-900 dark:text-gray-100">{student.parentPhone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MailIcon className="h-5 w-5 text-gray-400" />
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Parent's Email</label>
                <p className="text-gray-900 dark:text-gray-100">{student.parentEmail}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Transport & Fee Information */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <BusIcon className="h-5 w-5 mr-2 text-primary-500" />
            Transport & Fee Information
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Transport Route</label>
                <p className="text-gray-900 dark:text-gray-100">{student.transportRoute}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Pickup Point</label>
                <p className="text-gray-900 dark:text-gray-100">{student.pickupPoint}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Drop Point</label>
                <p className="text-gray-900 dark:text-gray-100">{student.dropPoint}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Fee Status</label>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  student.feeStatus === 'Paid' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
                }`}>
                  {student.feeStatus}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Payment Date</label>
                <p className="text-gray-900 dark:text-gray-100">{student.lastPaymentDate}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Next Payment Due</label>
                <p className="text-gray-900 dark:text-gray-100">{student.nextPaymentDue}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Attendance & Documents Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Attendance Information */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <ClockIcon className="h-5 w-5 mr-2 text-primary-500" />
            Attendance Information
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400">Present Days</div>
              <div className="text-2xl font-semibold text-green-600 dark:text-green-400">{student.attendance.present}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400">Absent Days</div>
              <div className="text-2xl font-semibold text-red-600 dark:text-red-400">{student.attendance.absent}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400">Late Days</div>
              <div className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400">{student.attendance.late}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400">Attendance %</div>
              <div className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{student.attendance.percentage}%</div>
            </div>
          </div>
        </Card>

        {/* Documents Status */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <ShieldCheckIcon className="h-5 w-5 mr-2 text-primary-500" />
            Documents Status
          </h3>
          <div className="space-y-4">
            {Object.entries(student.documents).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ShieldCheckIcon className="h-5 w-5 text-gray-400" />
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
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StudentDetails; 