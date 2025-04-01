import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import Card from '../ui/Card';

const Calendar: React.FC = () => {
  // Sample events data - replace with your actual events
  const events = [
    {
      title: 'Parent-Teacher Meeting',
      start: '2024-04-15T10:00:00',
      end: '2024-04-15T12:00:00',
      backgroundColor: '#4F46E5',
      borderColor: '#4F46E5',
      category: 'Meeting'
    },
    {
      title: 'Sports Day',
      start: '2024-04-20',
      end: '2024-04-20',
      backgroundColor: '#10B981',
      borderColor: '#10B981',
      category: 'Event'
    },
    {
      title: 'Exam Week',
      start: '2024-04-25',
      end: '2024-04-30',
      backgroundColor: '#EF4444',
      borderColor: '#EF4444',
      category: 'Exam'
    },
    {
      title: 'School Holiday',
      start: '2024-05-01',
      end: '2024-05-03',
      backgroundColor: '#F59E0B',
      borderColor: '#F59E0B',
      category: 'Holiday'
    },
  ];

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">School Calendar</h2>
          <div className="flex items-center space-x-2">
            {['Meeting', 'Event', 'Exam', 'Holiday'].map((category) => (
              <div key={category} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{
                    backgroundColor: events.find(e => e.category === category)?.backgroundColor
                  }}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">{category}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="fc-no-borders">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,dayGridWeek,dayGridDay'
            }}
            events={events}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEventRows={3}
            height="auto"
            eventClassNames="cursor-pointer"
            eventClick={(info) => {
              console.log('Event clicked:', info.event);
            }}
            select={(info) => {
              console.log('Date range selected:', info);
            }}
            themeSystem="standard"
            eventTimeFormat={{
              hour: '2-digit',
              minute: '2-digit',
              meridiem: false,
              hour12: false
            }}
            slotMinTime="06:00:00"
            slotMaxTime="20:00:00"
            weekends={true}
            firstDay={1}
            titleFormat={{ year: 'numeric', month: 'long' }}
            buttonText={{
              today: 'Today',
              month: 'Month',
              week: 'Week',
              day: 'Day',
              list: 'List'
            }}
            eventDidMount={(info) => {
              info.el.title = `${info.event.title}\n${info.event.start?.toLocaleTimeString()} - ${info.event.end?.toLocaleTimeString()}`;
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default Calendar; 