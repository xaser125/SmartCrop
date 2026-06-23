import React, { useState } from 'react';
import { Sprout, Calendar, Droplets, ThermometerSun, Plus, Calculator, Lightbulb } from 'lucide-react';

const cropData = {
  onion: {
    name: 'Onion',
    soil: 'Well-drained soil, rich in organic matter. pH 6.0 - 6.8.',
    planting: 'April to June (Autumn/Winter)',
    plantingMethod: 'Raised beds, 10cm spacing',
    harvest: '100 to 150 days after planting.',
    yieldPerPlant: 0.15, // kg
    icon: <Sprout className="w-5 h-5" />
  },
  potato: {
    name: 'Potato',
    soil: 'Light, deep and well-drained soil. Avoid waterlogged soils.',
    planting: 'August to October (Spring)',
    plantingMethod: 'Trenches, 30cm spacing',
    harvest: '80 to 120 days after planting.',
    yieldPerPlant: 1.2, // kg
    icon: <Sprout className="w-5 h-5" />
  },
  tomato: {
    name: 'Tomato',
    soil: 'Deep soil, rich in nutrients, pH 5.5 - 6.8. Requires staking.',
    planting: 'August to January',
    plantingMethod: 'Pots or raised beds, 60cm spacing',
    harvest: '90 to 110 days after planting.',
    yieldPerPlant: 4.5, // kg
    proTips: [
      'Use stakes for vertical support',
      'Install wire netting to protect from deer and large pests'
    ],
    icon: <Sprout className="w-5 h-5" />
  },
  mint: {
    name: 'Mint',
    soil: 'Moist, well-draining soil. Adapts well to many soil types but prefers slightly acidic pH.',
    planting: 'Spring or Autumn',
    plantingMethod: 'Pots (Highly recommended to prevent spreading)',
    harvest: '60 to 90 days after planting, then continuous.',
    yieldPerPlant: 0.5, // kg
    icon: <Sprout className="w-5 h-5" />
  }
};

const CropSelector = () => {
  const [selectedCrop, setSelectedCrop] = useState('onion');
  const [plantQuantity, setPlantQuantity] = useState(10);

  const currentData = cropData[selectedCrop];
  const estimatedYield = (plantQuantity * currentData.yieldPerPlant).toFixed(1);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-earth-100 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <div className="flex flex-wrap gap-3">
            {Object.entries(cropData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setSelectedCrop(key)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                  selectedCrop === key
                    ? 'bg-earth-600 text-earth-50 shadow-md transform scale-105'
                    : 'bg-earth-50 text-earth-700 hover:bg-earth-100'
                }`}
              >
                {data.icon}
                <span>{data.name}</span>
              </button>
            ))}
          </div>
          
          <button className="flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium bg-clay-600 text-white hover:bg-clay-700 transition-colors shadow-sm">
            <Plus className="w-5 h-5" />
            <span>Add Crop</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-clay-50 p-5 rounded-xl border border-clay-100 flex flex-col justify-between">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-clay-200 p-3 rounded-lg text-clay-800 mt-1">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-clay-900 mb-1">Soil Requirements</h3>
                <p className="text-sm text-clay-700 leading-relaxed">{currentData.soil}</p>
              </div>
            </div>
            <div className="bg-white/60 p-3 rounded-lg border border-clay-200 text-xs text-clay-800 flex items-start space-x-2">
              <Lightbulb className="w-4 h-4 text-clay-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold block mb-0.5 text-clay-900">Pro Tip for Balcony/Pots:</span>
                <span className="leading-relaxed">Do not use garden dirt. Use a lightweight, moisture-retaining potting mix with perlite to ensure proper drainage.</span>
              </div>
            </div>
          </div>

          <div className="bg-earth-50 p-5 rounded-xl border border-earth-100 flex items-start space-x-4">
            <div className="bg-earth-200 p-3 rounded-lg text-earth-800 mt-1">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-earth-900 mb-1">Planting Season & Method</h3>
              <p className="text-sm text-earth-700 leading-relaxed font-medium mb-1">{currentData.planting}</p>
              <p className="text-sm text-earth-600 leading-relaxed">Method: {currentData.plantingMethod}</p>
            </div>
          </div>
          
          <div className="md:col-span-1 bg-clay-50 p-5 rounded-xl border border-clay-100 flex items-start space-x-4">
            <div className="bg-clay-200 p-3 rounded-lg text-clay-800 mt-1">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-clay-900 mb-1">Estimated Harvest</h3>
              <p className="text-sm text-clay-700 leading-relaxed">{currentData.harvest}</p>
            </div>
          </div>

          <div className="md:col-span-1 bg-gradient-to-br from-earth-50 to-clay-50 p-5 rounded-xl border border-earth-200 flex flex-col justify-between">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-earth-200 p-2 rounded-lg text-earth-800">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-earth-900">Yield Calculator</h3>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex-1">
                <label className="block text-xs font-medium text-earth-700 mb-1">Plants Quantity</label>
                <input 
                  type="number" 
                  min="1"
                  value={plantQuantity}
                  onChange={(e) => setPlantQuantity(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 text-sm"
                />
              </div>
              <div className="flex-1 text-right">
                <span className="block text-xs font-medium text-earth-700 mb-1">Estimated Yield</span>
                <span className="text-xl font-bold text-earth-900">{estimatedYield} kg</span>
              </div>
            </div>
          </div>
          
          {currentData.proTips && (
            <div className="md:col-span-2 bg-yellow-50 p-5 rounded-xl border border-yellow-200 flex items-start space-x-4 mt-2">
              <div className="bg-yellow-200 p-2 rounded-lg text-yellow-800 mt-0.5">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">Pro Tips</h3>
                <ul className="list-disc list-inside text-sm text-yellow-800 space-y-1">
                  {currentData.proTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CropSelector;
