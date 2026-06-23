import React from 'react';
import { ChevronLeft, ChevronRight, Sun, CloudRain, Cloud, Sprout, CheckCircle2 } from 'lucide-react';

const CalendarWidget = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  const getWeatherIcon = (day) => {
    if (day % 3 === 0) return <CloudRain className="w-3 h-3 text-blue-400" />;
    if (day % 5 === 0) return <Cloud className="w-3 h-3 text-gray-400" />;
    return <Sun className="w-3 h-3 text-yellow-500" />;
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
              className={`h-12 lg:h-14 rounded-lg flex flex-col items-center justify-center relative cursor-pointer hover:bg-earth-100 transition-colors ${
                date === 15 ? 'bg-earth-600 text-white font-bold hover:bg-earth-700' : 'text-earth-800 bg-clay-50'
              }`}
            >
              <span className="text-sm z-10">{date}</span>
              
              {/* Event Indicators */}
              <div className="absolute top-1 right-1 opacity-70">
                {getWeatherIcon(date)}
              </div>
              <div className="absolute bottom-1 flex space-x-0.5">
                {date === 18 && <Sprout className="w-3 h-3 text-green-500" />}
                {date === 22 && <CheckCircle2 className="w-3 h-3 text-earth-500" />}
              </div>
            </div>
          ))}
        </div>

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
