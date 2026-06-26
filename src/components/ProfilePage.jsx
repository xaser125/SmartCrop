import React, { useState } from 'react';
import { UserCircle, Award, Target, Sprout, TrendingUp, Sun, Droplets, X } from 'lucide-react';

const achievements = [
  { id: 1, title: 'First Harvest', description: 'Successfully harvest your first crop.', icon: <Sprout className="w-6 h-6 text-green-600" />, color: 'bg-green-100' },
  { id: 2, title: 'Water Saver', description: 'Save 100L of water using smart irrigation.', icon: <Droplets className="w-6 h-6 text-blue-600" />, color: 'bg-blue-100' },
  { id: 3, title: 'Solar Master', description: 'Optimize planting based on sun zones 5 times.', icon: <Sun className="w-6 h-6 text-yellow-600" />, color: 'bg-yellow-100' },
  { id: 4, title: 'Community Helper', description: 'Help 10 users with AI diagnostics.', icon: <Award className="w-6 h-6 text-purple-600" />, color: 'bg-purple-100' },
];

const ProfilePage = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="animate-in fade-in zoom-in-95 duration-300 max-w-5xl mx-auto space-y-8">
      
      <div className="bg-white rounded-2xl shadow-sm border border-earth-100 p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="relative">
          <div className="w-32 h-32 bg-earth-100 rounded-full flex items-center justify-center text-6xl shadow-inner">
            👨‍🌾
          </div>
          <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm border-2 border-white">
            Level 5
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-earth-900 mb-2">Alex Planter</h2>
          <p className="text-earth-600 font-medium mb-6">Urban Farmer • Joined March 2026</p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="bg-earth-50 px-4 py-2 rounded-xl border border-earth-200">
              <span className="block text-xl font-bold text-earth-900">12</span>
              <span className="text-xs text-earth-600 uppercase font-medium tracking-wider">Crops Harvested</span>
            </div>
            <div className="bg-earth-50 px-4 py-2 rounded-xl border border-earth-200">
              <span className="block text-xl font-bold text-earth-900">85%</span>
              <span className="text-xs text-earth-600 uppercase font-medium tracking-wider">Plant Health</span>
            </div>
            <div className="bg-earth-50 px-4 py-2 rounded-xl border border-earth-200">
              <span className="block text-xl font-bold text-earth-900">4</span>
              <span className="text-xs text-earth-600 uppercase font-medium tracking-wider">Active Zones</span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setIsEditModalOpen(true)}
          className="hidden md:flex items-center space-x-2 px-6 py-3 bg-earth-100 text-earth-800 hover:bg-earth-200 rounded-xl font-medium transition-colors"
        >
          <UserCircle className="w-5 h-5" />
          <span>Edit Profile</span>
        </button>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-earth-900 flex items-center space-x-2">
            <Target className="w-6 h-6 text-earth-500" />
            <span>Achievements</span>
          </h3>
          <button className="text-sm font-medium text-earth-600 hover:text-earth-900">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((ach) => (
            <div key={ach.id} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-earth-100 hover:border-earth-300 transition-colors">
              <div className={`p-4 rounded-full mr-4 ${ach.color}`}>
                {ach.icon}
              </div>
              <div>
                <h4 className="font-bold text-earth-900">{ach.title}</h4>
                <p className="text-sm text-earth-600 leading-snug mt-0.5">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-earth-900/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 border-b border-earth-100 bg-earth-50">
              <h3 className="font-bold text-lg text-earth-900">Edit Profile</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="text-earth-500 hover:text-earth-800 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-earth-800 mb-1.5">Name</label>
                <input type="text" defaultValue="Márcio" className="w-full bg-white border border-earth-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-earth-800 mb-1.5">Location</label>
                <input type="text" defaultValue="S.B. Messines" className="w-full bg-white border border-earth-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800" />
              </div>

              <div>
                <label className="block text-sm font-medium text-earth-800 mb-1.5">Experience Level</label>
                <select defaultValue="Urban Farmer" className="w-full bg-white border border-earth-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800">
                  <option>Beginner Planter</option>
                  <option>Urban Farmer</option>
                  <option>Master Botanist</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-earth-800 mb-1.5">Change Email</label>
                <input type="email" defaultValue="alex@planter.com" className="w-full bg-white border border-earth-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800" />
              </div>

              <div>
                <label className="block text-sm font-medium text-earth-800 mb-1.5">Change Password</label>
                <input type="password" defaultValue="********" className="w-full bg-white border border-earth-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800" />
              </div>
            </div>
            <div className="p-5 border-t border-earth-100 bg-earth-50 flex items-center justify-end space-x-3">
              <button onClick={() => setIsEditModalOpen(false)} className="px-5 py-2.5 text-sm font-medium text-earth-600 hover:text-earth-900 transition-colors">
                Cancel
              </button>
              <button onClick={() => setIsEditModalOpen(false)} className="px-5 py-2.5 text-sm font-medium bg-earth-700 hover:bg-earth-800 text-white rounded-xl transition-colors shadow-sm">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
