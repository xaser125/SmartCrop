import React, { useState } from 'react';
import { Wifi, Droplets, Clock, Activity } from 'lucide-react';

const SmartIrrigation = () => {
  const [wifiEnabled, setWifiEnabled] = useState(true);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-clay-200 overflow-hidden">
      <div className="p-4 border-b border-clay-100 flex items-center justify-between bg-earth-50">
        <div className="flex items-center space-x-2">
          <Droplets className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold text-earth-900">Automated Watering</h3>
        </div>
        
        {/* Toggle Switch */}
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-earth-600">Wi-Fi Sync</span>
          <button 
            onClick={() => setWifiEnabled(!wifiEnabled)}
            className={`w-10 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${wifiEnabled ? 'bg-earth-600' : 'bg-clay-300'}`}
          >
            <div className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform duration-200 ease-in-out ${wifiEnabled ? 'translate-x-4' : 'translate-x-0'}`}></div>
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${wifiEnabled ? 'bg-blue-50 text-blue-600' : 'bg-clay-100 text-clay-400'}`}>
              <Wifi className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium text-earth-900">Controller Status</p>
              <p className={`text-sm ${wifiEnabled ? 'text-green-600 font-medium' : 'text-clay-500'}`}>
                {wifiEnabled ? 'Online & Synced' : 'Offline Mode'}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-earth-800">Upcoming Cycles</h4>
          
          <div className="bg-clay-50 border border-clay-100 rounded-xl p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-earth-500" />
              <div>
                <p className="font-medium text-earth-900">Zone 1: Tomatoes</p>
                <p className="text-xs text-earth-600">Today, 18:00 PM</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-blue-600">15 min</p>
              <p className="text-xs text-earth-500">2.5 L</p>
            </div>
          </div>

          <div className="bg-clay-50 border border-clay-100 rounded-xl p-4 flex justify-between items-center opacity-70">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-earth-500" />
              <div>
                <p className="font-medium text-earth-900">Zone 2: Potatoes</p>
                <p className="text-xs text-earth-600">Tomorrow, 06:00 AM</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-blue-600">20 min</p>
              <p className="text-xs text-earth-500">3.8 L</p>
            </div>
          </div>
        </div>
        
        <div className="mt-5 flex items-center space-x-2 text-xs text-earth-600 bg-earth-50 p-3 rounded-lg border border-earth-100">
          <Activity className="w-4 h-4 text-earth-500" />
          <p>Schedules are automatically adjusted based on local weather forecasts.</p>
        </div>
      </div>
    </div>
  );
};

export default SmartIrrigation;
