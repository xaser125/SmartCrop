import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sun, CloudRain, Cloud, Sprout, CheckCircle2 } from 'lucide-react';

const CalendarWidget = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const [selectedDate, setSelectedDate] = useState(null);

  const getWeatherIcon = (day) => {
    if (day % 3 === 0) return <CloudRain className="w-5 h-5 text-blue-400" />;
    if (day % 5 === 0) return <Cloud className="w-5 h-5 text-gray-400" />;
    return <Sun className="w-5 h-5 text-yellow-500" />;
  };

  const handleDateClick = (date) => {
    setSelectedDate(`Oct ${date}, 2026`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-clay-200 overflow-hidden">
      <div className="p-4 border-b border-clay-100 flex items-center justify-between bg-earth-50">
        <h3 className="font-semibold text-earth-900">October 2026</h3>
        <div className="flex space-x-2">
          <button className="p-1 rounded hover:bg-earth-200 text-earth-700">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-1 rounded hover:bg-earth-200 text-earth-700">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <div className="grid grid-cols-7 gap-2 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-xs font-medium text-earth-600">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {/* Empty days for offset - October 2026 starts on Thursday (index 3 if Monday is 0) */}
          <div className="h-12 lg:h-14"></div>
          <div className="h-12 lg:h-14"></div>
          <div className="h-12 lg:h-14"></div>
          
          {dates.map(date => (
            <div 
              key={date} 
              onClick={() => handleDateClick(date)}
              className={`h-12 lg:h-14 rounded-lg flex flex-col items-center justify-center relative cursor-pointer hover:bg-earth-100 transition-colors ${
                date === 15 ? 'bg-earth-600 text-white font-bold hover:bg-earth-700' : 'text-earth-800 bg-clay-50'
              } ${selectedDate === 'Oct ' + date + ', 2026' ? 'ring-2 ring-earth-500 ring-offset-1' : ''}`}
            >
              <span className="text-sm z-10">{date}</span>
              
              {/* Event Indicators */}
              <div className="absolute top-1 right-1 opacity-60">
                {getWeatherIcon(date)}
              </div>
              <div className="absolute bottom-1.5 flex space-x-1">
                {date === 18 && <div className="w-1.5 h-1.5 rounded-full bg-green-500" title="Tomato Seeding"></div>}
                {date === 22 && <div className="w-1.5 h-1.5 rounded-full bg-orange-500" title="Onion Harvest"></div>}
              </div>
            </div>
          ))}
        </div>

        {selectedDate && (
          <div className="mt-4 p-3 bg-earth-50 rounded-lg text-sm text-earth-700 text-center border border-earth-200 animate-in fade-in slide-in-from-top-2 duration-200">
            <span className="font-semibold">Selected Date: {selectedDate}</span> - No specific actions scheduled.
          </div>
        )}

        <div className="mt-5 border-t border-clay-100 pt-4 space-y-3">
          <h4 className="text-sm font-semibold text-earth-800">Upcoming Milestones</h4>
          <div className="flex items-center space-x-3 text-sm">
            <div className="bg-earth-100 p-1.5 rounded-md">
              <Sprout className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-earth-900">Oct 18: Tomato Seeding</p>
              <p className="text-xs text-earth-600">Raised beds area</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <div className="bg-earth-100 p-1.5 rounded-md">
              <CheckCircle2 className="w-4 h-4 text-earth-600" />
            </div>
            <div>
              <p className="font-medium text-earth-900">Oct 22: Onion Harvest</p>
              <p className="text-xs text-earth-600">Expected 1.5kg yield</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
