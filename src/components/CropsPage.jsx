import React, { useState } from 'react';
import { Sprout, MessageSquare, Droplets, Sun, AlertCircle, BookOpen, Send, Brain } from 'lucide-react';
import AddCropModal from './AddCropModal';

const initialCrops = [
  { id: 1, name: 'Tomato (Roma)', emoji: '🍅', stage: 'Flowering', day: 45, totalDays: 85, status: '🟢 Optimal', progressColor: 'bg-green-500' },
  { id: 2, name: 'Potato (Russet)', emoji: '🥔', stage: 'Vegetative', day: 30, totalDays: 120, status: '🟡 Needs Water', progressColor: 'bg-yellow-500' },
  { id: 3, name: 'Onion (Red)', emoji: '🧅', stage: 'Ready to Harvest', day: 100, totalDays: 100, status: '✨ Perfect', progressColor: 'bg-earth-600', readyToHarvest: true },
  { id: 4, name: 'Mint (Peppermint)', emoji: '🌿', stage: 'Harvesting', day: 40, totalDays: 40, status: '🟢 Optimal', progressColor: 'bg-green-500' },
];

const CropsPage = () => {
  const [expandedJournalId, setExpandedJournalId] = useState(1);
  const [cropsList, setCropsList] = useState(initialCrops);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [chatState, setAiChatState] = useState({});

  const handleAddCrop = (newCrop) => {
    setCropsList([...cropsList, { ...newCrop, id: Date.now() }]);
  };

  const handleAskAI = (cropId) => {
    setAiChatState(prev => ({ ...prev, [cropId]: 'typing' }));
    setTimeout(() => {
      setAiChatState(prev => ({ ...prev, [cropId]: 'done' }));
    }, 2000);
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-300">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-earth-900">My Active Plantations</h2>
          <p className="text-earth-600 mt-1">Track and manage your current crops across all areas.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-earth-700 hover:bg-earth-800 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <Sprout className="w-5 h-5" />
          <span className="hidden sm:inline">Add New Crop</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cropsList.map((crop) => (
          <div key={crop.id} className={`bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow ${crop.readyToHarvest ? 'border-2 border-earth-500' : 'border border-earth-100'}`}>
            <div className={`p-5 border-b flex items-center justify-between ${crop.readyToHarvest ? 'bg-earth-100/50 border-earth-200' : 'bg-earth-50/50 border-earth-50'}`}>
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{crop.emoji}</span>
                <div>
                  <h3 className="font-semibold text-earth-900">{crop.name}</h3>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${crop.readyToHarvest ? 'bg-earth-600 text-white shadow-sm' : 'bg-earth-200/50 text-earth-600'}`}>
                    {crop.stage}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-5 space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-earth-600">Harvest Progress</span>
                  <span className="font-medium text-earth-900">Day {crop.day} of {crop.totalDays}</span>
                </div>
                <div className="w-full bg-clay-100 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className={`h-2.5 rounded-full ${crop.progressColor}`} 
                    style={{ width: `${Math.min(100, (crop.day / crop.totalDays) * 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-earth-50 rounded-xl border border-earth-100">
                <span className="text-sm font-medium text-earth-700">AI Health Status:</span>
                <span className="text-sm font-semibold">{crop.status}</span>
              </div>

              {crop.readyToHarvest && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex items-start space-x-3 animate-pulse">
                  <div className="text-xl">💡</div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 text-sm">Storage Tip</h4>
                    <p className="text-xs text-yellow-800 mt-0.5 leading-relaxed">Cure in a dry, well-ventilated area for 2 weeks, then store in a cool, dark place to prevent sprouting.</p>
                  </div>
                </div>
              )}

              <div className="pt-2 flex flex-col space-y-2">
                <button 
                  onClick={() => setExpandedJournalId(expandedJournalId === crop.id ? null : crop.id)}
                  className="w-full py-2 px-4 bg-earth-50 border border-earth-200 hover:bg-earth-100 text-earth-700 rounded-xl text-sm font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <BookOpen className="w-4 h-4 text-earth-600" />
                  <span>{expandedJournalId === crop.id ? 'Hide Care Journal' : 'View Care Journal'}</span>
                </button>
                <button 
                  onClick={() => handleAskAI(crop.id)}
                  className="w-full py-2 px-4 bg-white border border-earth-200 hover:bg-earth-50 text-earth-700 rounded-xl text-sm font-medium transition-colors flex items-center justify-center space-x-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-earth-500" />
                  <span>Ask AI about my {crop.name.split(' ')[0]}</span>
                </button>
              </div>

              {chatState[crop.id] && (
                <div className="mt-4 pt-4 border-t border-earth-100 animate-in slide-in-from-top-2 duration-300 space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-earth-100 text-earth-800 text-sm px-3 py-2 rounded-xl rounded-tr-sm max-w-[90%]">
                      Why are the bottom leaves turning yellow?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-clay-50 border border-clay-100 text-clay-900 text-sm px-3 py-2 rounded-xl rounded-tl-sm max-w-[95%]">
                      {chatState[crop.id] === 'typing' ? (
                        <div className="flex space-x-1.5 items-center h-5">
                          <div className="w-1.5 h-1.5 bg-clay-500 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-clay-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                          <div className="w-1.5 h-1.5 bg-clay-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                        </div>
                      ) : (
                        <span>Based on your Care Journal, you watered 1.5L yesterday. Yellowing bottom leaves typically indicate overwatering for this growth stage. Hold off watering for 3 days.</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-[10px] text-gray-400 text-center pt-2">
                    🔒 SmartCrop AI Guardrails active: specialized exclusively in agriculture and botany.
                  </p>
                </div>
              )}

              {expandedJournalId === crop.id && (
                <div className="mt-4 pt-4 border-t border-earth-100 animate-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <Brain className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span className="text-[11px] italic text-earth-600 font-medium leading-tight">SmartCrop AI reads this journal to provide highly personalized diagnostics.</span>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <div className="bg-clay-50 border border-clay-100 p-2.5 rounded-lg text-xs flex items-start space-x-2">
                      <span className="text-clay-600 font-medium whitespace-nowrap">Yesterday:</span>
                      <span className="text-earth-800">Watered 1.5L</span>
                    </div>
                    <div className="bg-clay-50 border border-clay-100 p-2.5 rounded-lg text-xs flex items-start space-x-2">
                      <span className="text-clay-600 font-medium whitespace-nowrap">3 days ago:</span>
                      <span className="text-earth-800">Added organic fertilizer</span>
                    </div>
                  </div>

                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Log a new action..." 
                      className="w-full bg-white border border-earth-200 rounded-lg py-2 pl-3 pr-8 text-xs focus:outline-none focus:ring-1 focus:ring-earth-500 text-earth-800"
                    />
                    <button className="absolute right-1 top-1/2 transform -translate-y-1/2 text-earth-400 hover:text-earth-600 p-1 transition-colors">
                      <Send className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

      <AddCropModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onAddCrop={handleAddCrop} 
      />
    </div>
  );
};

export default CropsPage;
