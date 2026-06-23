import React, { useState } from 'react';
import { Sun, CloudRain, Wind, AlertTriangle, Thermometer, Info, ChevronLeft, ChevronRight } from 'lucide-react';

const WeatherAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Risk of Sunburn',
      message: 'Warning: Do not water the plant leaves during peak sun hours (10 AM to 3 PM). Water drops act as magnifying glasses and can cause severe burns on the leaves, especially on tomatoes.',
      icon: <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
    },
    {
      id: 2,
      type: 'info',
      title: 'Optimal Soil Temp',
      message: 'The soil temperature is ideal for planting roots this week. Ensure consistent watering for best results.',
      icon: <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
    }
  ];

  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);

  const nextAlert = () => {
    setCurrentAlertIndex((prev) => (prev + 1) % alerts.length);
  };

  const prevAlert = () => {
    setCurrentAlertIndex((prev) => (prev === 0 ? alerts.length - 1 : prev - 1));
  };

  const currentAlert = alerts[currentAlertIndex];

  return (
    <div className="space-y-6">
      
      {/* Current Weather Card */}
      <div className="bg-gradient-to-br from-earth-600 to-earth-800 rounded-2xl shadow-md p-6 text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-earth-200 text-sm font-medium mb-1">Hope Farm</p>
            <h3 className="text-3xl font-bold">28°C</h3>
          </div>
          <Sun className="w-10 h-10 text-yellow-400" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 border-t border-earth-500/50 pt-4">
          <div className="flex items-center space-x-2">
            <CloudRain className="w-4 h-4 text-earth-200" />
            <span className="text-sm text-earth-100">0% Rain</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wind className="w-4 h-4 text-earth-200" />
            <span className="text-sm text-earth-100">12 km/h</span>
          </div>
          <div className="flex items-center space-x-2">
            <Thermometer className="w-4 h-4 text-earth-200" />
            <span className="text-sm text-earth-100">Humidity 45%</span>
          </div>
        </div>
      </div>

      {/* Alerts Carousel */}
      <div className="bg-white rounded-2xl shadow-sm border border-clay-200 overflow-hidden">
        <div className="p-4 border-b border-clay-100 flex items-center justify-between">
          <h3 className="font-semibold text-clay-900">Agronomic Alerts</h3>
          <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">{alerts.length} Alerts</span>
        </div>
        
        <div className="p-5">
          <div className={`border rounded-xl p-4 flex items-start space-x-3 shadow-sm min-h-[120px] transition-all duration-300 ${currentAlert.type === 'warning' ? 'bg-orange-50 border-orange-200' : 'bg-blue-50 border-blue-200'}`}>
            {currentAlert.icon}
            <div>
              <h4 className={`font-medium mb-1 ${currentAlert.type === 'warning' ? 'text-orange-900' : 'text-blue-900'}`}>{currentAlert.title}</h4>
              <p className={`text-sm leading-relaxed ${currentAlert.type === 'warning' ? 'text-orange-800' : 'text-blue-800'}`}>
                {currentAlert.message}
              </p>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <button onClick={prevAlert} className="p-1 rounded-full hover:bg-clay-100 text-clay-600">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-1.5">
              {alerts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAlertIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentAlertIndex ? 'bg-earth-600 w-4' : 'bg-earth-200 hover:bg-earth-400'
                  }`}
                />
              ))}
            </div>
            <button onClick={nextAlert} className="p-1 rounded-full hover:bg-clay-100 text-clay-600">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WeatherAlerts;
