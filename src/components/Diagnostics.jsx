import React, { useState } from 'react';
import { UploadCloud, AlertCircle, Loader2, AlertTriangle } from 'lucide-react';

const Diagnostics = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'complete'

  const handleUpload = () => {
    setStatus('loading');
    setTimeout(() => {
      setStatus('complete');
    }, 3000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-earth-100 overflow-hidden p-6">
      <div className="mb-6">
        <p className="text-earth-700">Upload a photo of a diseased leaf or pest to receive an immediate AI-generated diagnosis.</p>
      </div>

      {status === 'idle' && (
        <div 
          className={`border-2 border-dashed rounded-2xl p-8 transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer ${
            isHovering ? 'border-earth-500 bg-earth-50' : 'border-earth-200 hover:border-earth-400 hover:bg-earth-50/50'
          }`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleUpload}
        >
          <div className="bg-earth-100 p-4 rounded-full mb-4 text-earth-600">
            <UploadCloud className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-earth-900 mb-2">Click or drag an image</h3>
          <p className="text-sm text-earth-600 max-w-sm">
            Supported formats: JPG, PNG. Max size: 5MB. Ensure the image is well-lit.
          </p>
        </div>
      )}

      {status === 'loading' && (
        <div className="border-2 border-dashed border-earth-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-earth-50 min-h-[250px]">
          <Loader2 className="w-10 h-10 text-earth-600 animate-spin mb-4" />
          <h3 className="text-lg font-semibold text-earth-900">Pathologist Agent analyzing image...</h3>
        </div>
      )}

      {status === 'complete' && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-red-100 p-3 rounded-xl text-red-600 flex-shrink-0">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-semibold text-red-900 text-lg mb-1">Diagnosis Complete: Early-stage Powdery Mildew detected.</h3>
              <p className="text-red-700">Action required: Apply organic neem oil solution and ensure adequate airflow.</p>
            </div>
          </div>
          <button 
            onClick={() => setStatus('idle')}
            className="w-full bg-white border border-red-300 hover:bg-red-100 text-red-700 font-medium py-2.5 rounded-xl transition-colors shadow-sm flex items-center justify-center"
          >
            Reset
          </button>
        </div>
      )}
      
      <div className="mt-6 flex items-start space-x-3 text-sm text-earth-600 bg-earth-50 p-4 rounded-xl">
        <AlertCircle className="w-5 h-5 text-earth-500 flex-shrink-0" />
        <p>For best results, take the photo focusing on the affected area of the plant with a neutral background.</p>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] text-gray-400">🔒 SmartCrop AI Guardrails active: specialized exclusively in agriculture and botany.</p>
      </div>
    </div>
  );
};

export default Diagnostics;
