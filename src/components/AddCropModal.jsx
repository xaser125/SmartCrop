import React from 'react';
import { X, Sparkles } from 'lucide-react';

const AddCropModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-earth-900/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-5 border-b border-earth-100 bg-earth-50">
          <h3 className="font-bold text-lg text-earth-900">Add New Crop</h3>
          <button onClick={onClose} className="text-earth-500 hover:text-earth-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-5 space-y-5">
          <div>
            <label className="block text-sm font-medium text-earth-800 mb-1.5">Plant Type</label>
            <select className="w-full bg-white border border-earth-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800">
              <option>Tomato</option>
              <option>Potato</option>
              <option>Onion</option>
              <option>Mint</option>
              <option>Basil</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-earth-800 mb-1.5">Assign to Zone</label>
            <select className="w-full bg-white border border-earth-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800">
              <option>Main Balcony</option>
              <option>Kitchen Window</option>
              <option>Garden Raised Bed</option>
            </select>
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-clay-100 to-clay-200 hover:from-clay-200 hover:to-clay-300 border border-clay-300 text-clay-900 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all shadow-sm">
            <Sparkles className="w-4 h-4 text-clay-700" />
            <span>Ask AI for optimal planting time</span>
          </button>
        </div>

        <div className="p-5 border-t border-earth-100 bg-earth-50 flex items-center justify-end space-x-3">
          <button onClick={onClose} className="px-5 py-2.5 text-sm font-medium text-earth-600 hover:text-earth-900 transition-colors">
            Cancel
          </button>
          <button onClick={onClose} className="px-5 py-2.5 text-sm font-medium bg-earth-700 hover:bg-earth-800 text-white rounded-xl transition-colors shadow-sm">
            Save Crop
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCropModal;
