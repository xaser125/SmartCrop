import React, { useState } from 'react';
import { Bell, Droplet, BrainCircuit, Shield, Smartphone } from 'lucide-react';

const Toggle = ({ label, description, enabled, onChange }) => (
  <div className="flex items-center justify-between py-4">
    <div className="pr-4">
      <h4 className="font-semibold text-earth-900">{label}</h4>
      <p className="text-sm text-earth-600 leading-snug mt-0.5">{description}</p>
    </div>
    <button 
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${enabled ? 'bg-earth-600' : 'bg-earth-200'}`}
    >
      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${enabled ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
  </div>
);

const SettingsPage = () => {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [irrigationEnabled, setIrrigationEnabled] = useState(true);
  const [aiEnabled, setAiEnabled] = useState(false);

  return (
    <div className="animate-in fade-in zoom-in-95 duration-300 max-w-4xl mx-auto space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-earth-900">Application Settings</h2>
        <p className="text-earth-600 mt-1">Manage your preferences, notifications, and device sync.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-earth-100 overflow-hidden">
        <div className="p-6 border-b border-earth-100 flex items-center space-x-3 bg-earth-50/50">
          <Bell className="w-5 h-5 text-earth-600" />
          <h3 className="font-bold text-lg text-earth-900">Notifications</h3>
        </div>
        <div className="p-6">
          <Toggle 
            label="Push Notifications" 
            description="Receive real-time alerts for watering schedules, frost warnings, and harvest times."
            enabled={pushEnabled}
            onChange={setPushEnabled}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-earth-100 overflow-hidden">
        <div className="p-6 border-b border-earth-100 flex items-center space-x-3 bg-earth-50/50">
          <Droplet className="w-5 h-5 text-earth-600" />
          <h3 className="font-bold text-lg text-earth-900">Device Integration</h3>
        </div>
        <div className="p-6">
          <Toggle 
            label="Smart Irrigation Sync" 
            description="Automatically sync AI watering recommendations directly to your connected irrigation valves."
            enabled={irrigationEnabled}
            onChange={setIrrigationEnabled}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-earth-100 overflow-hidden">
        <div className="p-6 border-b border-earth-100 flex items-center space-x-3 bg-earth-50/50">
          <BrainCircuit className="w-5 h-5 text-earth-600" />
          <h3 className="font-bold text-lg text-earth-900">Pathologist Agent</h3>
        </div>
        <div className="p-6">
          <Toggle 
            label="AI Auto-Correct" 
            description="Allow the AI to automatically adjust your crop timeline based on reported diagnostics and local weather without asking for confirmation."
            enabled={aiEnabled}
            onChange={setAiEnabled}
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button className="px-6 py-3 bg-earth-800 hover:bg-earth-900 text-white font-medium rounded-xl transition-colors shadow-sm">
          Save All Settings
        </button>
      </div>

    </div>
  );
};

export default SettingsPage;
