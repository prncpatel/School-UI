import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';

interface Route {
  id: number;
  routeNumber: string;
  routeName: string;
  vehicle: string;
  driver: string;
  contactNo: string;
  startLocation: string;
  endLocation: string;
  stops: number;
  students: number;
  [key: string]: string | number;
}

const TransportList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const routes: Route[] = [{
    id: 1,
    routeNumber: 'R001',
    routeName: 'North Route',
    vehicle: 'Bus 01',
    driver: 'John Smith',
    contactNo: '+1234567890',
    startLocation: 'School Campus',
    endLocation: 'North Suburb',
    stops: 8,
    students: 42
  }, {
    id: 2,
    routeNumber: 'R002',
    routeName: 'South Route',
    vehicle: 'Bus 02',
    driver: 'Michael Johnson',
    contactNo: '+1234567891',
    startLocation: 'School Campus',
    endLocation: 'South Suburb',
    stops: 7,
    students: 38
  }, {
    id: 3,
    routeNumber: 'R003',
    routeName: 'East Route',
    vehicle: 'Bus 03',
    driver: 'Robert Davis',
    contactNo: '+1234567892',
    startLocation: 'School Campus',
    endLocation: 'East Suburb',
    stops: 6,
    students: 35
  }, {
    id: 4,
    routeNumber: 'R004',
    routeName: 'West Route',
    vehicle: 'Bus 04',
    driver: 'James Wilson',
    contactNo: '+1234567893',
    startLocation: 'School Campus',
    endLocation: 'West Suburb',
    stops: 9,
    students: 45
  }, {
    id: 5,
    routeNumber: 'R005',
    routeName: 'Central Route',
    vehicle: 'Bus 05',
    driver: 'William Brown',
    contactNo: '+1234567894',
    startLocation: 'School Campus',
    endLocation: 'City Center',
    stops: 5,
    students: 30
  }, {
    id: 6,
    routeNumber: 'R006',
    routeName: 'Northeast Route',
    vehicle: 'Bus 06',
    driver: 'Thomas Anderson',
    contactNo: '+1234567895',
    startLocation: 'School Campus',
    endLocation: 'Northeast Suburb',
    stops: 7,
    students: 40
  }];

  const filteredRoutes = routes.filter(route => 
    route.routeName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    route.routeNumber.toLowerCase().includes(searchTerm.toLowerCase()) || 
    route.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) || 
    route.driver.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [{
    header: 'Route Number',
    accessor: 'routeNumber'
  }, {
    header: 'Route Name',
    accessor: 'routeName'
  }, {
    header: 'Vehicle',
    accessor: 'vehicle'
  }, {
    header: 'Driver',
    accessor: 'driver',
    render: (value: unknown, row: Route) => (
      <div>
        <div className="text-gray-900 dark:text-gray-100">{row.driver}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{row.contactNo}</div>
      </div>
    )
  }, {
    header: 'Route',
    accessor: 'startLocation',
    render: (value: unknown, row: Route) => (
      <div>
        <div className="text-gray-900 dark:text-gray-100">
          {row.startLocation} to {row.endLocation}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{row.stops} stops</div>
      </div>
    )
  }, {
    header: 'Students',
    accessor: 'students',
    render: (value: unknown, row: Route) => (
      <div className="text-gray-900 dark:text-gray-100">{row.students}</div>
    )
  }, {
    header: 'Actions',
    accessor: 'actions',
    render: (value: unknown, row: Route) => (
      <div className="flex space-x-2">
        <Button variant="secondary" size="sm">
          View
        </Button>
        <Button variant="primary" size="sm">
          Edit
        </Button>
      </div>
    )
  }];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Transport Routes
        </h1>
        <Link to="/transport/add">
          <Button>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Route
          </Button>
        </Link>
      </div>
      <Card>
        <div className="flex flex-col md:flex-row justify-between mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
              placeholder="Search routes..." 
              className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100" 
            />
          </div>
          <div className="flex items-center space-x-2">
            <Select
              icon={<FilterIcon className="h-5 w-5 text-gray-400" />}
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="w-48"
            >
              <option value="all">All Routes</option>
              <option value="north">North Routes</option>
              <option value="south">South Routes</option>
              <option value="east">East Routes</option>
              <option value="west">West Routes</option>
            </Select>
          </div>
        </div>
        <Table columns={columns} data={filteredRoutes} />
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredRoutes.length} of {routes.length} routes
          </div>
          <div className="flex space-x-2">
            <Button variant="secondary" size="sm" disabled>
              Previous
            </Button>
            <Button variant="secondary" size="sm">
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TransportList;