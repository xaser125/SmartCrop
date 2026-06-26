import React, { useState, useRef, useEffect } from 'react';
import { Leaf, User, Settings, Bell, ChevronDown } from 'lucide-react';

const Header = ({ currentView, setCurrentView }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefLevel, setPrefLevel] = useState('All Alerts');
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications]);

  const navClass = (view) => 
    `transition-colors font-medium ${currentView === view ? 'text-earth-50' : 'text-earth-200 hover:text-earth-50'}`;

  return (
    <header className="bg-earth-800 text-earth-50 shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer" 
          onClick={() => setCurrentView('dashboard')}
        >
          <div className="bg-earth-600 p-2 rounded-lg">
            <Leaf className="w-6 h-6 text-earth-100" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">SmartCrop</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => setCurrentView('dashboard')} className={navClass('dashboard')}>Dashboard</button>
          <button onClick={() => setCurrentView('crops')} className={navClass('crops')}>Crops</button>
          <button onClick={() => setCurrentView('community')} className={navClass('community')}>Community</button>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-full hover:bg-earth-700 transition-colors relative"
            >
              <Bell className="w-5 h-5 text-earth-200" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-earth-100 py-2 z-50 text-left">
                <div className="px-4 py-2 border-b border-earth-50 flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-earth-900">Notifications</h4>
                  <span className="text-xs bg-red-100 text-red-700 font-medium px-2 py-0.5 rounded-full">2 New</span>
                </div>
                <div className="px-4 py-3 hover:bg-earth-50 cursor-pointer">
                  <p className="text-sm text-earth-800 font-medium">Agronomic Alert: Watering Needed</p>
                  <p className="text-xs text-earth-600 mt-0.5">Tomatoes in raised bed are critically dry.</p>
                </div>
                <div className="px-4 py-3 hover:bg-earth-50 cursor-pointer border-t border-earth-50">
                  <p className="text-sm text-earth-800 font-medium">Agronomic Alert: Frost Warning</p>
                  <p className="text-xs text-earth-600 mt-0.5">Cover basil overnight, temperatures dropping.</p>
                </div>
                
                <div 
                  onClick={() => setShowPrefs(!showPrefs)}
                  className="px-4 py-2 border-t border-earth-100 bg-earth-50 hover:bg-earth-100 cursor-pointer flex items-center justify-between transition-colors"
                >
                  <span className="text-xs font-medium text-earth-700 flex items-center space-x-1">
                    <span>⚙️</span>
                    <span>Preferences</span>
                  </span>
                  <ChevronDown className={`w-3 h-3 text-earth-500 transition-transform ${showPrefs ? 'rotate-180' : ''}`} />
                </div>
                
                {showPrefs && (
                  <div className="px-4 py-3 bg-white border-t border-earth-100 animate-in slide-in-from-top-1 duration-200">
                    <label className="block text-xs font-medium text-earth-700 mb-1.5">Notification Level</label>
                    <select 
                      value={prefLevel}
                      onChange={(e) => setPrefLevel(e.target.value)}
                      className="w-full bg-white border border-earth-200 rounded-lg p-2 text-xs focus:outline-none focus:ring-1 focus:ring-earth-500 text-earth-800"
                    >
                      <option>All Alerts</option>
                      <option>Important Only</option>
                      <option>Mute All</option>
                    </select>
                  </div>
                )}
              </div>
            )}
          </div>
          <button 
            onClick={() => setCurrentView('settings')}
            className={`p-2 rounded-full transition-colors ${currentView === 'settings' ? 'bg-earth-700 text-earth-50' : 'hover:bg-earth-700 text-earth-200'}`}
          >
            <Settings className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setCurrentView('profile')}
            className={`flex items-center space-x-2 p-1 pl-2 pr-3 rounded-full transition-colors ${currentView === 'profile' ? 'bg-earth-600' : 'bg-earth-700 hover:bg-earth-600'}`}
          >
            <div className="w-7 h-7 bg-earth-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-earth-50" />
            </div>
            <span className="text-sm font-medium">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
