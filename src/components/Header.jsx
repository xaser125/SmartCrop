import React from 'react';
import { Leaf, User, Settings, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-earth-800 text-earth-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-earth-600 p-2 rounded-lg">
            <Leaf className="w-6 h-6 text-earth-100" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">SmartCrop</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button className="text-earth-200 hover:text-earth-50 transition-colors">Dashboard</button>
          <button className="text-earth-200 hover:text-earth-50 transition-colors">Crops</button>
          <button className="text-earth-200 hover:text-earth-50 transition-colors">Community</button>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-earth-700 transition-colors relative">
            <Bell className="w-5 h-5 text-earth-200" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 rounded-full hover:bg-earth-700 transition-colors">
            <Settings className="w-5 h-5 text-earth-200" />
          </button>
          <button className="flex items-center space-x-2 p-1 pl-2 pr-3 bg-earth-700 rounded-full hover:bg-earth-600 transition-colors">
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
