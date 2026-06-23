import React, { useState } from 'react';
import { UploadCloud, Bug, Leaf, AlertCircle, MessageSquareWarning } from 'lucide-react';

const Diagnostics = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [file, setFile] = useState(null);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-earth-100 overflow-hidden p-6">
      <div className="mb-6">
        <p className="text-earth-700">Upload a photo of a diseased leaf or pest to receive an immediate AI-generated diagnosis.</p>
      </div>

      {!file ? (
        <div 
          className={`border-2 border-dashed rounded-2xl p-8 transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer ${
            isHovering ? 'border-earth-500 bg-earth-50' : 'border-earth-200 hover:border-earth-400 hover:bg-earth-50/50'
          }`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => setFile('leaf_with_spots.jpg')}
        >
          <div className="bg-earth-100 p-4 rounded-full mb-4 text-earth-600">
            <UploadCloud className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-earth-900 mb-2">Click or drag an image</h3>
          <p className="text-sm text-earth-600 max-w-sm">
            Supported formats: JPG, PNG. Max size: 5MB. Ensure the image is well-lit.
          </p>
        </div>
      ) : (
        <div className="bg-clay-50 border border-clay-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-clay-200 p-2 rounded-lg text-clay-800">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-clay-900">{file}</h3>
                <span className="text-xs text-clay-600 font-medium px-2 py-0.5 bg-clay-200 rounded-full mt-1 inline-block">Ready for analysis</span>
              </div>
            </div>
            <button 
              onClick={() => setFile(null)}
              className="text-sm text-clay-600 hover:text-clay-900 underline"
            >
              Remove
            </button>
          </div>
          
          <div className="flex flex-col space-y-3">
            <button className="w-full bg-clay-700 hover:bg-clay-800 text-white font-medium py-3 rounded-xl transition-colors shadow-sm flex items-center justify-center space-x-2">
              <Bug className="w-5 h-5" />
              <span>Analyze Image</span>
            </button>
            <button className="w-full bg-white border border-clay-300 hover:bg-clay-50 text-clay-700 font-medium py-2.5 rounded-xl transition-colors shadow-sm flex items-center justify-center space-x-2">
              <MessageSquareWarning className="w-4 h-4 text-clay-500" />
              <span className="text-sm">Suggest Correction</span>
            </button>
          </div>
        </div>
      )}
      
      <div className="mt-6 flex items-start space-x-3 text-sm text-earth-600 bg-earth-50 p-4 rounded-xl">
        <AlertCircle className="w-5 h-5 text-earth-500 flex-shrink-0" />
        <p>For best results, take the photo focusing on the affected area of the plant with a neutral background.</p>
      </div>
    </div>
  );
};

export default Diagnostics;
