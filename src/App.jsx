import React from 'react';
import { LayoutGrid, Settings2 } from 'lucide-react';
import Header from './components/Header';
import CropSelector from './components/CropSelector';
import Diagnostics from './components/Diagnostics';
import WeatherAlerts from './components/WeatherAlerts';
import CalendarWidget from './components/CalendarWidget';
import SmartIrrigation from './components/SmartIrrigation';

function App() {
  return (
    <div className="min-h-screen bg-earth-50 flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            
            {/* Available Space Profiler */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-earth-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-clay-100 p-2 rounded-lg text-clay-700">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-earth-900">Configure Available Space</h3>
                  <p className="text-sm text-earth-600">Current: <span className="font-medium text-earth-800">Balcony / Pots</span></p>
                </div>
              </div>
              <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-earth-100 hover:bg-earth-200 text-earth-800 rounded-lg font-medium transition-colors text-sm border border-earth-200">
                <Settings2 className="w-4 h-4" />
                <span>Change Area</span>
              </button>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-earth-800 mb-4">My Crops</h2>
              <CropSelector />
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-earth-800 mb-4">Smart Irrigation</h2>
              <SmartIrrigation />
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-earth-800 mb-4">Quick Diagnostics</h2>
              <Diagnostics />
            </section>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-earth-800 mb-4">Weather & Alerts</h2>
              <WeatherAlerts />
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-earth-800 mb-4">Farm Calendar</h2>
              <CalendarWidget />
            </section>
          </div>

        </div>
      </main>

      <footer className="w-full py-6 text-center text-sm text-earth-600 px-4">
        <p>* Results are estimated and depend on external factors. Actual results may vary.</p>
      </footer>
    </div>
  );
}

export default App;
