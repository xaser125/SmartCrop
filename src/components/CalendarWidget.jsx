import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sun, CloudRain, Cloud, Sprout, CheckCircle2, Plus, Calendar, X, Sparkles } from 'lucide-react';

const CalendarWidget = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const [selectedDate, setSelectedDate] = useState(null);

  const [events, setEvents] = useState([
    { id: 1, date: 18, title: 'Tomato Seeding', location: 'Raised beds area', icon: 'Sprout', color: 'text-green-600', bg: 'bg-green-100', dot: 'bg-green-500' },
    { id: 2, date: 22, title: 'Onion Harvest', location: 'Expected 1.5kg yield', icon: 'CheckCircle2', color: 'text-earth-600', bg: 'bg-earth-100', dot: 'bg-orange-500' }
  ]);

  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventNote, setNewEventNote] = useState('');
  const [newEventCrop, setNewEventCrop] = useState('Tomato');

  const handleAutoSchedule = () => {
    setNewEventDate('25');
    setNewEventNote('Check soil moisture (Rain expected in 2 days)');
  };

  const handleSaveEvent = () => {
    if (!newEventDate || !newEventNote) return;
    
    setEvents([...events, {
      id: Date.now(),
      date: parseInt(newEventDate, 10),
      title: newEventNote,
      location: `Crop: ${newEventCrop}`,
      icon: 'Calendar',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      dot: 'bg-blue-500'
    }]);
    
    setIsEventModalOpen(false);
    setNewEventDate('');
    setNewEventNote('');
  };

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
        <div className="flex space-x-2 items-center">
          <button 
            onClick={() => setIsEventModalOpen(true)}
            className="hidden sm:flex items-center space-x-1 bg-earth-100 hover:bg-earth-200 text-earth-800 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors mr-2"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Event</span>
          </button>
          <div className="flex space-x-1">
            <button className="p-1 rounded hover:bg-earth-200 text-earth-700">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-1 rounded hover:bg-earth-200 text-earth-700">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
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
                {events.filter(e => e.date === date).map(e => (
                  <div key={e.id} className={`w-1.5 h-1.5 rounded-full ${e.dot}`} title={e.title}></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedDate && (
          <div className="mt-4 p-3 bg-earth-50 rounded-lg text-sm text-earth-700 text-center border border-earth-200 animate-in fade-in slide-in-from-top-2 duration-200 shadow-sm">
            <div className="font-semibold mb-2">Selected Date: {selectedDate}</div>
            <div className="bg-white/60 p-2.5 rounded-md border border-earth-100 text-xs text-earth-800 flex items-start space-x-2 text-left">
              <span className="text-sm leading-none mt-0.5">🌤️</span>
              <div>
                <span className="font-semibold text-earth-900 block mb-0.5">Weather Context: High 26°C / Low 16°C.</span>
                <span className="text-earth-600 font-medium">Optimal conditions for outdoor tasks.</span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-5 border-t border-clay-100 pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-earth-800">Upcoming Milestones</h4>
            <button 
              onClick={() => setIsEventModalOpen(true)}
              className="sm:hidden text-xs font-medium text-earth-600 bg-earth-100 px-2 py-1 rounded hover:bg-earth-200 flex items-center space-x-1"
            >
              <Plus className="w-3 h-3" />
              <span>Add</span>
            </button>
          </div>
          
          {events.sort((a, b) => a.date - b.date).map(event => (
            <div key={event.id} className="flex items-center space-x-3 text-sm">
              <div className={`${event.bg} p-1.5 rounded-md`}>
                {event.icon === 'Sprout' && <Sprout className={`w-4 h-4 ${event.color}`} />}
                {event.icon === 'CheckCircle2' && <CheckCircle2 className={`w-4 h-4 ${event.color}`} />}
                {event.icon === 'Calendar' && <Calendar className={`w-4 h-4 ${event.color}`} />}
              </div>
              <div>
                <p className="font-medium text-earth-900">Oct {event.date}: {event.title}</p>
                <p className="text-xs text-earth-600">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isEventModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-earth-900/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 border-b border-earth-100 bg-earth-50">
              <h3 className="font-bold text-lg text-earth-900">Add New Event</h3>
              <button onClick={() => setIsEventModalOpen(false)} className="text-earth-500 hover:text-earth-800 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-5 space-y-4">
              <button 
                onClick={handleAutoSchedule}
                className="w-full py-2.5 bg-gradient-to-r from-clay-100 to-clay-200 hover:from-clay-200 hover:to-clay-300 border border-clay-300 text-clay-900 rounded-xl text-sm font-medium flex items-center justify-center space-x-2 transition-all shadow-sm mb-2"
              >
                <Sparkles className="w-4 h-4 text-clay-700" />
                <span>✨ AI Auto-Schedule</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-earth-700 mb-1">Date (Oct)</label>
                  <input 
                    type="number" 
                    min="1" max="31"
                    value={newEventDate}
                    onChange={(e) => setNewEventDate(e.target.value)}
                    placeholder="e.g. 25" 
                    className="w-full bg-white border border-earth-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-earth-700 mb-1">Related Crop</label>
                  <select 
                    value={newEventCrop}
                    onChange={(e) => setNewEventCrop(e.target.value)}
                    className="w-full bg-white border border-earth-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800"
                  >
                    <option>Tomato</option>
                    <option>Potato</option>
                    <option>Onion</option>
                    <option>Mint</option>
                    <option>General</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-earth-700 mb-1">Note</label>
                <textarea 
                  value={newEventNote}
                  onChange={(e) => setNewEventNote(e.target.value)}
                  placeholder="What needs to be done?" 
                  rows="3"
                  className="w-full bg-white border border-earth-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800 resize-none"
                />
              </div>
            </div>

            <div className="p-5 border-t border-earth-100 bg-earth-50 flex items-center justify-end space-x-3">
              <button onClick={() => setIsEventModalOpen(false)} className="px-4 py-2 text-sm font-medium text-earth-600 hover:text-earth-900 transition-colors">
                Cancel
              </button>
              <button onClick={handleSaveEvent} className="px-4 py-2 text-sm font-medium bg-earth-700 hover:bg-earth-800 text-white rounded-xl transition-colors shadow-sm">
                Save Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarWidget;
