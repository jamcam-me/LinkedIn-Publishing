import React, { useState } from 'react';

const LinkedInSeriesPublisher = () => {
  const [activeView, setActiveView] = useState('planner');
  const [seriesData, setSeriesData] = useState({
    title: '',
    pillar: '',
    metaphor: '',
    targetAudience: '',
    publishSchedule: ''
  });
  
  const [currentArticle, setCurrentArticle] = useState(1);
  const [articleData, setArticleData] = useState({
    1: { title: '', status: 'planning', wordCount: 0 },
    2: { title: '', status: 'planning', wordCount: 0 },
    3: { title: '', status: 'planning', wordCount: 0 },
    4: { title: '', status: 'planning', wordCount: 0 }
  });

  const contentPillars = [
    'Strategic Cybersecurity Leadership',
    'AI-Driven Cybersecurity Innovation', 
    'Cloud Security & Digital Transformation',
    'M&A, Venture Capital & Private Equity Advisory',
    'Regulatory Compliance & Governance',
    'Go-To-Market (GTM) Strategy & Execution',
    'Thought Leadership & Industry Trends'
  ];

  const articleProgression = [
    {
      number: 1,
      phase: 'Awareness & Discovery',
      purpose: 'Introduce topic and establish urgency',
      color: 'bg-blue-50 border-blue-500',
      textColor: 'text-blue-800',
      targetWords: '600-800'
    },
    {
      number: 2, 
      phase: 'Risks & Verified Impacts',
      purpose: 'Quantify real-world consequences',
      color: 'bg-orange-50 border-orange-500',
      textColor: 'text-orange-800',
      targetWords: '700-900'
    },
    {
      number: 3,
      phase: 'Protection & Solutions', 
      purpose: 'Provide actionable defense strategies',
      color: 'bg-green-50 border-green-500',
      textColor: 'text-green-800',
      targetWords: '800-1000'
    },
    {
      number: 4,
      phase: 'Value Creation & ROI',
      purpose: 'Transform defense into competitive advantage',
      color: 'bg-yellow-50 border-yellow-500',
      textColor: 'text-yellow-800',
      targetWords: '700-900'
    }
  ];

  const lvStyleRequirements = [
    'Fireside chat approach - conversational narrative',
    'Personal voice - explain like to colleague over coffee',
    'Minimal bullets - use narrative flow',
    'Strategic storytelling - weave data into stories',
    'Global perspective - European base with worldwide examples',
    '2-3 subtle humor elements (Norm MacDonald/Seinfeld style)',
    'Minimum 10 references per article with inline linking',
    'Executive-focused visuals with BRI brand colors'
  ];

  const templateSections = {
    1: {
      sections: [
        'The Current Reality (200-250 words)',
        'Why Traditional Approaches Fall Short (200-250 words)', 
        'The Path Forward Preview (150-200 words)'
      ],
      recommendations: [
        'Assess your current exposure',
        'Identify gaps in traditional approaches',
        'Build leadership awareness',
        'Benchmark against industry peers',
        'Prepare for deeper dive analysis'
      ]
    },
    2: {
      sections: [
        'The Quantified Threat Landscape (250-300 words)',
        'Attack Patterns & Case Studies (250-300 words)',
        'The Hidden Costs Beyond Headlines (200-250 words)'
      ],
      recommendations: [
        'Quantify your exposure using risk formula',
        'Map vulnerable processes',
        'Calculate potential impact across dimensions',
        'Benchmark against industry averages',
        'Build business case for protection investment'
      ]
    },
    3: {
      sections: [
        'Technical Protection Strategies (250-300 words)',
        'The Human Firewall (250-300 words)',
        'Implementation Roadmap (250-300 words)'
      ],
      recommendations: [
        'Start with multi-layered verification',
        'Implement AI-powered detection',
        'Deploy targeted training with simulations',
        'Establish clear security-efficiency protocols',
        'Create metrics to track KPIs and ROI'
      ]
    },
    4: {
      sections: [
        'The ROI Mathematics (250-300 words)',
        'Competitive Advantages (250-300 words)',
        'Strategic Value Creation (200-250 words)'
      ],
      recommendations: [
        'Calculate specific ROI formula',
        'Position security as strategic enabler',
        'Leverage compliance for market access',
        'Build security into value proposition',
        'Track and communicate value metrics'
      ]
    }
  };

  const updateSeriesData = (field, value) => {
    setSeriesData(prev => ({ ...prev, [field]: value }));
  };

  const updateArticleData = (articleNum, field, value) => {
    setArticleData(prev => ({
      ...prev,
      [articleNum]: { ...prev[articleNum], [field]: value }
    }));
  };

  const generateArticleTemplate = (articleNum) => {
    const article = articleProgression[articleNum - 1];
    const template = templateSections[articleNum];
    
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className={`p-4 rounded-lg border-l-4 ${article.color} mb-6`}>
          <h3 className={`text-xl font-bold ${article.textColor} mb-2`}>
            Article {articleNum}: {article.phase}
          </h3>
          <p className="text-gray-700 mb-2">{article.purpose}</p>
          <p className="text-sm text-gray-600">Target: {article.targetWords} words</p>
        </div>

        <div className="space-y-6">
          {/* Vertical Liftoff */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Vertical Liftoff (150-200 words)</h4>
            <div className="space-y-2 text-sm">
              <p><strong>Opening Hook:</strong> {articleNum === 1 ? 'Metaphor introducing the threat/opportunity' : 
                articleNum === 2 ? 'Build on Article 1 metaphor with urgency' :
                articleNum === 3 ? 'Shift from problem to solution mindset' : 
                'Flip from cost to value mindset'}</p>
              <p><strong>Context Bridge:</strong> {articleNum === 1 ? 'Connect to current events/statistics' : 'Reference previous article insights'}</p>
              <p><strong>Stakes/Promise:</strong> Why this matters now + what article delivers</p>
            </div>
          </div>

          {/* Core Sections */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Core Analysis Sections</h4>
            <div className="space-y-3">
              {template.sections.map((section, index) => (
                <div key={index} className="bg-white p-3 rounded border">
                  <p className="font-medium">Section {index + 1}: {section}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways Table */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Key Takeaways Table</h4>
            <div className="bg-white rounded border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 text-left">Focus Area</th>
                    <th className="p-2 text-left">Strategic Insight</th>
                    <th className="p-2 text-left">Business Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border-t">[Topic 1]</td><td className="p-2 border-t">[Data-backed insight]</td><td className="p-2 border-t">[Quantifiable outcome]</td></tr>
                  <tr><td className="p-2 border-t">[Topic 2]</td><td className="p-2 border-t">[Data-backed insight]</td><td className="p-2 border-t">[Quantifiable outcome]</td></tr>
                  <tr><td className="p-2 border-t">[Topic 3]</td><td className="p-2 border-t">[Data-backed insight]</td><td className="p-2 border-t">[Quantifiable outcome]</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategic Recommendations */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Strategic Recommendations</h4>
            <div className="space-y-2">
              {template.recommendations.map((rec, index) => (
                <div key={index} className="bg-white p-2 rounded border">
                  <span className="font-medium">{index + 1}.</span> {rec}
                </div>
              ))}
            </div>
          </div>

          {/* CTA & Series Navigation */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Conclusion & CTA</h4>
            <div className="text-sm space-y-2">
              <p><strong>Forward-looking statement:</strong> Connect to business strategy</p>
              <p><strong>Series navigation:</strong> {articleNum < 4 ? 'Preview next article' : 'Invitation to discuss implementation'}</p>
              <p><strong>Connection prompt:</strong> Question + #LV hashtags</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-bold mb-2">LinkedIn 4-Article Series Publisher</h1>
        <p className="text-blue-100">Interactive framework for creating strategic content series with #LV methodology</p>
        <div className="text-xs mt-2 text-blue-200">
          Created: 2025-01-09 14:30 (CEST) | Last Modified: 2025-01-09 14:30 | Last Commit: initial
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'planner', label: 'Series Planner' },
            { id: 'templates', label: 'Article Templates' },
            { id: 'calendar', label: 'Content Calendar' },
            { id: 'style', label: '#LV Style Guide' },
            { id: 'progress', label: 'Progress Tracker' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeView === tab.id 
                  ? 'bg-blue-700 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Series Planner */}
      {activeView === 'planner' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-900">Series Configuration</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Series Title</label>
                <input
                  type="text"
                  value={seriesData.title}
                  onChange={(e) => updateSeriesData('title', e.target.value)}
                  placeholder="e.g., The Deepfake Defense Series"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Content Pillar</label>
                <select
                  value={seriesData.pillar}
                  onChange={(e) => updateSeriesData('pillar', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select Content Pillar</option>
                  {contentPillars.map(pillar => (
                    <option key={pillar} value={pillar}>{pillar}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Series Metaphor/Theme</label>
                <input
                  type="text"
                  value={seriesData.metaphor}
                  onChange={(e) => updateSeriesData('metaphor', e.target.value)}
                  placeholder="e.g., Mirror/Reflection, Chess Game, Digital DNA"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Target Audience</label>
                <input
                  type="text"
                  value={seriesData.targetAudience}
                  onChange={(e) => updateSeriesData('targetAudience', e.target.value)}
                  placeholder="e.g., C-suite executives, M&A professionals"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Article Progression Overview */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4 text-blue-900">4-Article Progression Framework</h3>
            
            <div className="relative">
              <div className="absolute left-5 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-orange-500 via-green-500 to-yellow-500"></div>
              
              {articleProgression.map((article, index) => (
                <div key={article.number} className="relative pb-8">
                  <div className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-lg ${
                    article.number === 1 ? 'bg-blue-500' :
                    article.number === 2 ? 'bg-orange-500' :
                    article.number === 3 ? 'bg-green-500' : 'bg-yellow-500'
                  }`}>
                    <span className="text-white font-bold">{article.number}</span>
                  </div>
                  
                  <div className="ml-16 bg-white p-4 rounded-lg border shadow-sm">
                    <h4 className={`font-bold mb-1 ${article.textColor}`}>
                      Article {article.number}: {article.phase}
                    </h4>
                    <p className="text-gray-600 mb-2">{article.purpose}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Target: {article.targetWords} words</span>
                      <input
                        type="text"
                        placeholder="Article title..."
                        value={articleData[article.number].title}
                        onChange={(e) => updateArticleData(article.number, 'title', e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded text-sm flex-1 ml-4"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Article Templates */}
      {activeView === 'templates' && (
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-900">Article Template Generator</h2>
            
            <div className="flex gap-2 mb-6">
              {[1,2,3,4].map(num => (
                <button
                  key={num}
                  onClick={() => setCurrentArticle(num)}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentArticle === num 
                      ? 'bg-blue-700 text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Article {num}
                </button>
              ))}
            </div>
          </div>
          
          {generateArticleTemplate(currentArticle)}
        </div>
      )}

      {/* Content Calendar */}
      {activeView === 'calendar' && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Content Calendar & Publication Schedule</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">Publication Timeline</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Week 1: Article 1 (Awareness)</span>
                    <input type="date" className="px-2 py-1 border rounded text-sm" />
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-500">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Week 3: Article 2 (Risks)</span>
                    <input type="date" className="px-2 py-1 border rounded text-sm" />
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Week 5: Article 3 (Protection)</span>
                    <input type="date" className="px-2 py-1 border rounded text-sm" />
                  </div>
                </div>
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Week 7: Article 4 (Value)</span>
                    <input type="date" className="px-2 py-1 border rounded text-sm" />
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-3">Supporting Content per Article</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded">Day 1 AM: Video lead-in (60 seconds)</div>
                <div className="bg-gray-50 p-2 rounded">Day 1 AM: Main article publication</div>
                <div className="bg-gray-50 p-2 rounded">Day 1 PM: Carousel (5-8 slides)</div>
                <div className="bg-gray-50 p-2 rounded">Day 2-3: Engagement responses</div>
                <div className="bg-gray-50 p-2 rounded">Day 4: Carousel reuse with new angle</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Style Guide */}
      {activeView === 'style' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-900">#LV Style Requirements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3 text-green-800">Voice & Tone Guidelines</h3>
                <div className="space-y-2">
                  {lvStyleRequirements.map((req, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-3 text-blue-800">Content Structure</h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-blue-50 p-2 rounded">Word count: 600-1000 per article</div>
                  <div className="bg-blue-50 p-2 rounded">Vertical liftoff: Hook + urgency + bridge</div>
                  <div className="bg-blue-50 p-2 rounded">3 core sections with narrative flow</div>
                  <div className="bg-blue-50 p-2 rounded">Key takeaways table format</div>
                  <div className="bg-blue-50 p-2 rounded">5 strategic recommendations</div>
                  <div className="bg-blue-50 p-2 rounded">Series navigation + CTA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4 text-blue-900">Visual Consistency Framework</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Color Progression</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center"><div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>Article 1: Blue (Awareness)</div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>Article 2: Orange (Risk)</div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded mr-2"></div>Article 3: Green (Protection)</div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>Article 4: Gold (Value)</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Metaphor Evolution</h4>
                <div className="space-y-1 text-sm">
                  <div>Article 1: Pristine/whole</div>
                  <div>Article 2: Under threat</div>
                  <div>Article 3: Protected/secured</div>
                  <div>Article 4: Enhanced/valuable</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Brand Integration</h4>
                <div className="space-y-1 text-sm">
                  <div>BRI logo placement</div>
                  <div>Cyber Navy Blue (#0a1f44)</div>
                  <div>Executive BRI Gold (#dab86e)</div>
                  <div>Mobile optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Progress Tracker */}
      {activeView === 'progress' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-900">Series Progress Tracker</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Article Status</h3>
                <div className="space-y-3">
                  {[1,2,3,4].map(num => (
                    <div key={num} className="bg-gray-50 p-3 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Article {num}: {articleProgression[num-1].phase}</span>
                        <select
                          value={articleData[num].status}
                          onChange={(e) => updateArticleData(num, 'status', e.target.value)}
                          className="px-2 py-1 border rounded text-sm"
                        >
                          <option value="planning">Planning</option>
                          <option value="research">Research</option>
                          <option value="writing">Writing</option>
                          <option value="review">Review</option>
                          <option value="published">Published</option>
                        </select>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Word count:</span>
                        <input
                          type="number"
                          value={articleData[num].wordCount}
                          onChange={(e) => updateArticleData(num, 'wordCount', parseInt(e.target.value) || 0)}
                          className="px-2 py-1 border rounded text-sm w-20"
                        />
                        <span className="text-sm text-gray-500 ml-2">/ {articleProgression[num-1].targetWords}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-3">Quality Checklist</h3>
                <div className="space-y-2 text-sm">
                  {[
                    'Vertical liftoff with series context',
                    '3 core sections following template',
                    'Key takeaways table included',
                    '5 strategic recommendations',
                    '2-3 subtle humor elements',
                    '10+ references with inline links',
                    'Series navigation elements',
                    '#LV hashtags appropriate',
                    'Executive audience focus maintained',
                    'Mobile-friendly formatting'
                  ].map((item, index) => (
                    <label key={index} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4 text-blue-900">Series Performance Metrics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded text-center">
                <div className="text-2xl font-bold text-blue-700">--</div>
                <div className="text-sm text-gray-600">Series Completion Rate</div>
              </div>
              <div className="bg-green-50 p-4 rounded text-center">
                <div className="text-2xl font-bold text-green-700">--</div>
                <div className="text-sm text-gray-600">Average Engagement</div>
              </div>
              <div className="bg-orange-50 p-4 rounded text-center">
                <div className="text-2xl font-bold text-orange-700">--</div>
                <div className="text-sm text-gray-600">Lead Generation</div>
              </div>
              <div className="bg-purple-50 p-4 rounded text-center">
                <div className="text-2xl font-bold text-purple-700">--</div>
                <div className="text-sm text-gray-600">Share Velocity</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkedInSeriesPublisher;