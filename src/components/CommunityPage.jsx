import React, { useState } from 'react';
import { Users, Send, Image as ImageIcon, Heart, MessageCircle, Share2, Award, Zap } from 'lucide-react';

const posts = [
  {
    id: 1,
    author: 'Elena Gardens',
    avatar: '👩‍🌾',
    time: '2 hours ago',
    content: 'My balcony tomatoes are absolutely thriving using the SmartCrop irrigation schedule! Highly recommend adjusting the water volume by -10% during these humid weeks.',
    likes: 24,
    comments: 5,
    tag: 'Success Story'
  },
  {
    id: 2,
    author: 'Urban Planter 88',
    avatar: '👨‍🌾',
    time: '5 hours ago',
    content: 'The Pathologist Agent flagged my basil for "Early blight", but I think it might just be sunburn from the recent heatwave. Can someone take a look at these spots?',
    likes: 8,
    comments: 12,
    tag: 'Looking for human second opinion',
    image: true
  }
];

const leaders = [
  { name: 'Dr. Sprout', score: 1450, rank: 1, badge: '🥇' },
  { name: 'Elena Gardens', score: 980, rank: 2, badge: '🥈' },
  { name: 'GreenThumb99', score: 750, rank: 3, badge: '🥉' },
  { name: 'BotanyBob', score: 420, rank: 4, badge: '🏅' },
];

const CommunityPage = () => {
  const [replies, setReplies] = useState({});

  const handleAiDraft = (postId) => {
    setReplies(prev => ({
      ...prev,
      [postId]: 'I had a similar issue last season! Ensure good airflow and maybe try a diluted neem oil spray. Let the community know how it goes!'
    }));
  };

  const handleReplyChange = (postId, text) => {
    setReplies(prev => ({ ...prev, [postId]: text }));
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-300">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-earth-900">Community & AI Training Hub</h2>
        <p className="text-earth-600 mt-1">Connect with growers and help improve the collective agronomic AI.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Input Box */}
          <div className="bg-white rounded-2xl shadow-sm border border-earth-100 p-5">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-earth-200 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                👤
              </div>
              <div className="flex-1">
                <textarea 
                  className="w-full bg-earth-50 border border-earth-100 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500 resize-none"
                  rows="3"
                  placeholder="Share an update, ask a question, or request a second opinion..."
                ></textarea>
                <div className="flex items-center justify-between mt-3">
                  <button className="text-earth-500 hover:text-earth-700 p-2 rounded-full hover:bg-earth-50 transition-colors">
                    <ImageIcon className="w-5 h-5" />
                  </button>
                  <button className="bg-earth-700 hover:bg-earth-800 text-white px-5 py-2 rounded-full font-medium transition-colors flex items-center space-x-2 text-sm">
                    <span>Post</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-earth-100 overflow-hidden">
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-clay-100 rounded-full flex items-center justify-center text-xl">
                      {post.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-earth-900">{post.author}</h4>
                      <p className="text-xs text-earth-500">{post.time}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-earth-600 bg-earth-100 px-2.5 py-1 rounded-md border border-earth-200">
                    {post.tag}
                  </span>
                </div>
                
                <p className="text-earth-800 text-sm leading-relaxed mb-4">{post.content}</p>
                
                {post.image && (
                  <div className="w-full h-48 bg-clay-200 rounded-xl mb-4 flex items-center justify-center border border-earth-100">
                    <span className="text-clay-500 text-sm flex flex-col items-center">
                      <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                      [Attached Image: Basil leaves with brown spots]
                    </span>
                  </div>
                )}
                
                <div className="flex items-center space-x-6 border-t border-earth-50 pt-4 mt-2">
                  <button className="flex items-center space-x-1.5 text-earth-500 hover:text-red-500 transition-colors text-sm font-medium">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1.5 text-earth-500 hover:text-earth-800 transition-colors text-sm font-medium">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1.5 text-earth-500 hover:text-earth-800 transition-colors text-sm font-medium">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>

                {/* Quick Reply */}
                <div className="mt-4 pt-4 border-t border-earth-50 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-earth-200 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                    👤
                  </div>
                  <div className="flex-1 relative">
                    <input 
                      type="text" 
                      value={replies[post.id] || ''}
                      onChange={(e) => handleReplyChange(post.id, e.target.value)}
                      placeholder="Write a quick reply..." 
                      className="w-full bg-earth-50 border border-earth-100 rounded-full py-2 pl-4 pr-[100px] text-sm focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                      <button 
                        onClick={() => handleAiDraft(post.id)}
                        className="text-[10px] font-medium text-clay-700 bg-clay-100 hover:bg-clay-200 px-2 py-1 rounded-full transition-colors flex items-center space-x-1 border border-clay-200"
                      >
                        <Zap className="w-3 h-3 text-yellow-500" />
                        <span>AI Draft</span>
                      </button>
                      <button className="text-earth-400 hover:text-earth-600 transition-colors p-1.5 rounded-full hover:bg-earth-100">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-earth-100 p-5">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-earth-900">AI Trainers Leaderboard</h3>
            </div>
            
            <p className="text-xs text-earth-600 mb-5 leading-relaxed">
              Earn points by submitting successful corrections to the Pathologist Agent or improving crop schedules!
            </p>

            <div className="space-y-4">
              {leaders.map(leader => (
                <div key={leader.rank} className="flex items-center justify-between p-3 rounded-xl hover:bg-earth-50 transition-colors border border-transparent hover:border-earth-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{leader.badge}</span>
                    <span className="font-semibold text-earth-800 text-sm">{leader.name}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-earth-600">
                    <Zap className="w-3 h-3 text-yellow-500" />
                    <span className="text-sm font-bold">{leader.score}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-2 bg-earth-50 hover:bg-earth-100 text-earth-700 font-medium rounded-lg text-sm transition-colors border border-earth-200">
              View All Contributors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage
