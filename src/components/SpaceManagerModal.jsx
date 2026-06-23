import React from 'react';
import { X, MapPin, Plus } from 'lucide-react';

const SpaceManagerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-earth-900/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-earth-100 bg-earth-50 flex-shrink-0">
          <h3 className="font-bold text-lg text-earth-900">Manage Growing Zones</h3>
          <button onClick={onClose} className="text-earth-500 hover:text-earth-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-5 overflow-y-auto flex-1 space-y-6">
          
          <div>
            <h4 className="text-sm font-semibold text-earth-900 mb-3 uppercase tracking-wide">Existing Zones</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border border-earth-200 rounded-xl bg-earth-50/50">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-earth-500" />
                  <span className="font-medium text-earth-800">Balcony 1 - South Facing</span>
                </div>
                <button className="text-xs text-earth-500 hover:text-earth-800 underline">Edit</button>
              </div>
              <div className="flex items-center justify-between p-3 border border-earth-200 rounded-xl bg-earth-50/50">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-earth-500" />
                  <span className="font-medium text-earth-800">Garden Raised Bed</span>
                </div>
                <button className="text-xs text-earth-500 hover:text-earth-800 underline">Edit</button>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-earth-100">
            <h4 className="text-sm font-semibold text-earth-900 mb-4 flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create New Zone</span>
            </h4>
            
            <div className="space-y-4 bg-earth-50 p-4 rounded-xl border border-earth-100">
              <div>
                <label className="block text-xs font-medium text-earth-700 mb-1">Custom Name</label>
                <input type="text" placeholder="e.g. Kitchen Window" className="w-full bg-white border border-earth-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-earth-700 mb-1">Zone Type</label>
                  <select className="w-full bg-white border border-earth-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800">
                    <option>Balcony</option>
                    <option>Greenhouse</option>
                    <option>Open Field</option>
                    <option>Indoors</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-earth-700 mb-1">Sunlight Exposure</label>
                  <select className="w-full bg-white border border-earth-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800">
                    <option>Full Sun / South</option>
                    <option>Morning Sun / East</option>
                    <option>Partial Shade / North</option>
                    <option>Afternoon Sun / West</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="p-5 border-t border-earth-100 bg-white flex-shrink-0 flex items-center justify-end space-x-3">
          <button onClick={onClose} className="px-5 py-2.5 text-sm font-medium text-earth-600 hover:text-earth-900 transition-colors">
            Cancel
          </button>
          <button onClick={onClose} className="px-5 py-2.5 text-sm font-medium bg-earth-800 hover:bg-earth-900 text-white rounded-xl transition-colors shadow-sm">
            Save & Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpaceManagerModal;
