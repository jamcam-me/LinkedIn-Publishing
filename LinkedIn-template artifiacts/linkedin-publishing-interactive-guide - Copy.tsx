import React, { useState } from 'react';

const LinkedInPublishingGuide = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedPhase, setSelectedPhase] = useState('planning');
  const [expandedSubsection, setExpandedSubsection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleSubsection = (subsection) => {
    setExpandedSubsection(expandedSubsection === subsection ? null : subsection);
  };

  const phases = [
    { id: 'planning', name: 'Planning', color: 'bg-blue-100 border-blue-600', textColor: 'text-blue-800' },
    { id: 'creation', name: 'Creation', color: 'bg-green-100 border-green-600', textColor: 'text-green-800' },
    { id: 'publication', name: 'Publication', color: 'bg-orange-100 border-orange-600', textColor: 'text-orange-800' },
    { id: 'engagement', name: 'Engagement', color: 'bg-purple-100 border-purple-600', textColor: 'text-purple-800' },
  ];

  const seriesInfo = {
    title: "Secure the Deal: M&A Cybersecurity Series",
    articles: [
      {
        number: 1,
        title: "Cybersecurity Due Diligence",
        subtitle: "The ante to play the M&A game",
        description: "Establishes why cybersecurity assessment is table stakes for M&A transactions",
        status: "Published",
        keyTheme: "You need security to play (table stakes)",
        focus: "Risk identification and assessment"
      },
      {
        number: 2,
        title: "Five Cyber Traps",
        subtitle: "Wildcards that sink deals",
        description: "Reveals hidden risks that derail transactions",
        status: "Published",
        keyTheme: "Hidden risks can sink you (threat awareness)",
        focus: "Common failure points and detection"
      },
      {
        number: 3,
        title: "The River Card",
        subtitle: "The transformative reveal that changes everything",
        description: "Shows how security maturity creates valuation premiums",
        status: "Published",
        keyTheme: "Security creates deal confidence (value creation)",
        focus: "Valuation improvement and acceleration"
      },
      {
        number: 4,
        title: "From Due Diligence to Value",
        subtitle: "Secure integration wins the pot",
        description: "Completes journey showing how post-merger integration secures value",
        status: "Ready",
        keyTheme: "Protect and enhance the win (value realization)",
        focus: "Post-merger integration and execution"
      }
    ]
  };

  const planningSteps = [
    {
      title: "Series Theme & Framework Development",
      description: "Define overarching theme with progressive narrative",
      secureTheDealApproach: "Created poker-themed metaphor progression (ante → traps → river card → winning pot)",
      bestPractice: "Develop a cohesive theme that can carry through multiple articles to build recognition"
    },
    {
      title: "Audience Segment Targeting",
      description: "Identify primary audience segments for the series",
      secureTheDealApproach: "Targeted C-suite executives, M&A professionals, founders seeking exit, PE/VC firms",
      bestPractice: "Tailor content to specific decision-makers' pain points rather than general audience"
    },
    {
      title: "Content Pillar Selection",
      description: "Choose primary content pillar(s) for the series",
      secureTheDealApproach: "Focused on M&A, Venture Capital & Private Equity Advisory pillar",
      bestPractice: "Concentrate series in one pillar for depth; cross-reference other pillars when relevant"
    },
    {
      title: "Progressive Narrative Structure",
      description: "Plan how articles build on each other",
      secureTheDealApproach: "Mapped journey from foundational needs → risks → value creation → value protection",
      bestPractice: "Create logical progression that guides reader through increasing sophistication"
    },
    {
      title: "Content Calendar Creation",
      description: "Schedule publication dates and promotion strategy",
      secureTheDealApproach: "Bi-weekly publication with interlinked promotion",
      bestPractice: "Maintain consistent cadence with 10-14 days between posts to build anticipation"
    }
  ];

  const creationSteps = [
    {
      title: "Research & Data Collection",
      description: "Gather statistics, case studies, and expert insights",
      secureTheDealApproach: "Sourced M&A-specific cybersecurity statistics, anonymized case studies from PE/VC firms",
      bestPractice: "Use industry-specific data rather than general cybersecurity statistics"
    },
    {
      title: "Vertical Liftoff Development",
      description: "Craft compelling introduction with hook and urgency",
      secureTheDealApproach: "Created poker-themed hooks for each article ('Some hands look great... until you flip the river card')",
      bestPractice: "Maintain thematic consistency while making each hook distinctive"
    },
    {
      title: "Article Structure Creation",
      description: "Organize sections, tables, and visual elements",
      secureTheDealApproach: "Used consistent structure: 3 main sections, data tables, 5 recommendations",
      bestPractice: "Establish recognizable format across series while allowing flexibility"
    },
    {
      title: "Visual Asset Development",
      description: "Create diagrams, charts, and graphic elements",
      secureTheDealApproach: "Developed poker-themed visuals (card tables, hands, chips) in BRI brand colors",
      bestPractice: "Use consistent visual language that reinforces the thematic framework"
    },
    {
      title: "Video Lead-In Script Creation",
      description: "Develop 60-second script for opening video",
      secureTheDealApproach: "Created scripts following Opening → Bridge → Core Message → CTA format",
      bestPractice: "Begin with attention-grabbing statement, maintain theme, end with clear CTA"
    },
    {
      title: "Carousel Design",
      description: "Plan 5-8 slide visual summary",
      secureTheDealApproach: "Designed progressive visual story with poker imagery for LinkedIn carousel",
      bestPractice: "Create standalone value while driving traffic to full article"
    }
  ];

  const publicationSteps = [
    {
      title: "Publication Package Assembly",
      description: "Prepare all assets for coordinated release",
      secureTheDealApproach: "Created package with article, video, carousel, and follow-up content",
      bestPractice: "Prepare all assets before first publication to ensure consistency"
    },
    {
      title: "Article Scheduling",
      description: "Time release for optimal visibility",
      secureTheDealApproach: "Published Tuesdays 8:30am CET for European morning/US evening visibility",
      bestPractice: "Maintain consistent day/time to build audience expectation"
    },
    {
      title: "Video Lead-In Publishing",
      description: "Post talking-head video with article introduction",
      secureTheDealApproach: "Released 60-second video simultaneously with article",
      bestPractice: "Use video to reach audience members who prefer video over text"
    },
    {
      title: "Article Publishing",
      description: "Post main article with proper formatting",
      secureTheDealApproach: "Published with 'I just published' introduction post linking to article",
      bestPractice: "Ensure all formatting, links, and tags are properly applied"
    },
    {
      title: "Same-Day Carousel Publishing",
      description: "Release carousel for additional visibility",
      secureTheDealApproach: "Published carousel 4-6 hours after main article",
      bestPractice: "Use afternoon timing to reach different segment of audience"
    }
  ];

  const engagementSteps = [
    {
      title: "Comment Engagement Strategy",
      description: "Plan for responding to discussions",
      secureTheDealApproach: "Responded to all comments within 2 hours, asked follow-up questions",
      bestPractice: "Prioritize substantive responses that advance the conversation"
    },
    {
      title: "Follow-Up Content Release",
      description: "Publish supplementary content to extend reach",
      secureTheDealApproach: "Reused carousel 48-72 hours later with new caption",
      bestPractice: "Create 'second wave' of visibility with minimal additional effort"
    },
    {
      title: "Performance Analysis",
      description: "Review metrics to understand engagement",
      secureTheDealApproach: "Tracked views, engagement by audience segment, comment quality",
      bestPractice: "Look beyond basic metrics to sentiment and quality of discussion"
    },
    {
      title: "Cross-Promotion Strategy",
      description: "Leverage article across platforms",
      secureTheDealApproach: "Shared key insights in other forums, referenced in conversations",
      bestPractice: "Extract standalone value points for use in different contexts"
    },
    {
      title: "Series Momentum Building",
      description: "Connect articles to maintain audience interest",
      secureTheDealApproach: "Referenced previous articles, previewed upcoming content",
      bestPractice: "Create anticipation for next installment while reinforcing earlier insights"
    }
  ];

  const getStepsForPhase = (phase) => {
    switch(phase) {
      case 'planning': return planningSteps;
      case 'creation': return creationSteps;
      case 'publication': return publicationSteps;
      case 'engagement': return engagementSteps;
      default: return [];
    }
  };

  const getPhaseClass = (phase) => {
    const selectedPhaseObj = phases.find(p => p.id === phase);
    return selectedPhaseObj ? selectedPhaseObj.color : '';
  };

  const getPhaseTextClass = (phase) => {
    const selectedPhaseObj = phases.find(p => p.id === phase);
    return selectedPhaseObj ? selectedPhaseObj.textColor : '';
  };
  
  const checklistItems = [
    {
      category: "Content Structure",
      items: [
        "Vertical liftoff follows thematic framework",
        "3 main sections with consistent structure",
        "Key takeaways in table format",
        "5 strategic recommendations",
        "Clear call-to-action"
      ]
    },
    {
      category: "Visual Elements",
      items: [
        "Poker-themed visual matches article position in series",
        "Data visualizations support key points",
        "Tables formatted for readability",
        "Color scheme matches BRI brand guidelines",
        "Mobile optimization verified"
      ]
    },
    {
      category: "Supporting Assets",
      items: [
        "60-second video script follows framework",
        "Carousel tells cohesive visual story",
        "Follow-up post drafted",
        "Cross-references to other articles in series",
        "Hashtag strategy includes series-specific tags"
      ]
    },
    {
      category: "#LV Style Elements",
      items: [
        "2-3 subtle humor elements included",
        "Global perspective with regional insights",
        "Technical depth balanced with accessibility",
        "Executive-level strategic framing",
        "Progressive insights building on previous content"
      ]
    }
  ];

  return (
    <div className="flex flex-col p-4 bg-gray-50 w-full text-gray-800 font-sans">
      {/* Series Overview Panel */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold mb-2 text-center">LinkedIn Article Series Publishing Guide</h1>
        <p className="text-gray-600 text-center mb-4">Interactive framework based on "Secure the Deal" M&A cybersecurity series</p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">Series Overview: {seriesInfo.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
              <p className="text-blue-700 mb-2"><span className="font-semibold">Content Pillar:</span> M&A, Venture Capital & Private Equity Advisory</p>
              <p className="text-blue-700"><span className="font-semibold">Thematic Framework:</span> Progressive poker metaphor (ante → wildcards → river card → winning pot)</p>
            </div>
            <div className="overflow-x-auto col-span-1 md:col-span-2">
              <table className="min-w-full divide-y divide-blue-200">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">#</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Article</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Subtitle</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Key Theme</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {seriesInfo.articles.map((article) => (
                    <tr key={article.number}>
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{article.number}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">{article.title}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700 italic">{article.subtitle}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">{article.keyTheme}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          article.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {article.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      {/* Process Flow */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Publishing Process Flow</h2>
        
        <div className="relative h-20 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 to-purple-500 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-between px-6">
            {phases.map((phase) => (
              <div 
                key={phase.id} 
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedPhase(phase.id)}
              >
                <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center border-4 ${
                  selectedPhase === phase.id ? 'border-gray-800' : `border-${phase.id === 'planning' ? 'blue' : phase.id === 'creation' ? 'green' : phase.id === 'publication' ? 'orange' : 'purple'}-500`
                } z-10`}>
                  <span className={`font-bold ${getPhaseTextClass(phase.id)}`}>
                    {phase.id === 'planning' ? 'P' : phase.id === 'creation' ? 'C' : phase.id === 'publication' ? 'Pb' : 'E'}
                  </span>
                </div>
                <p className="text-white font-bold mt-1">{phase.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`p-4 rounded-lg mb-4 ${getPhaseClass(selectedPhase)}`}>
          <h3 className={`text-lg font-bold mb-3 ${getPhaseTextClass(selectedPhase)}`}>
            {phases.find(p => p.id === selectedPhase)?.name} Phase: Key Steps
          </h3>
          
          <div className="space-y-3">
            {getStepsForPhase(selectedPhase).map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-3 rounded-lg shadow-sm cursor-pointer"
                onClick={() => toggleSubsection(`${selectedPhase}-${index}`)}
              >
                <div className="flex justify-between items-center">
                  <h4 className={`font-semibold ${getPhaseTextClass(selectedPhase)}`}>{step.title}</h4>
                  <span className={`text-${selectedPhase === 'planning' ? 'blue' : selectedPhase === 'creation' ? 'green' : selectedPhase === 'publication' ? 'orange' : 'purple'}-500`}>
                    {expandedSubsection === `${selectedPhase}-${index}` ? '−' : '+'}
                  </span>
                </div>
                
                {expandedSubsection === `${selectedPhase}-${index}` && (
                  <div className="mt-3 text-sm">
                    <p className="mb-2">{step.description}</p>
                    <div className={`p-2 rounded mt-2 bg-${selectedPhase === 'planning' ? 'blue' : selectedPhase === 'creation' ? 'green' : selectedPhase === 'publication' ? 'orange' : 'purple'}-50`}>
                      <p className="font-semibold mb-1">Secure the Deal Approach:</p>
                      <p>{step.secureTheDealApproach}</p>
                    </div>
                    <div className="p-2 rounded mt-2 bg-gray-50">
                      <p className="font-semibold mb-1">Best Practice:</p>
                      <p>{step.bestPractice}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Pre-Publication Checklist */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('checklist')}
        >
          <h2 className="text-xl font-bold">Pre-Publication Checklist</h2>
          <span className="text-blue-500">{expandedSection === 'checklist' ? '−' : '+'}</span>
        </div>
        
        {expandedSection === 'checklist' && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklistItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-3">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Video Lead-In Template */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('video')}
        >
          <h2 className="text-xl font-bold">Video Lead-In Framework</h2>
          <span className="text-blue-500">{expandedSection === 'video' ? '−' : '+'}</span>
        </div>
        
        {expandedSection === 'video' && (
          <div className="mt-4">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm">60-second talking head video structure used across all articles in the series</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h3 className="font-semibold text-blue-800 mb-2">Opening (10s)</h3>
                <p className="text-sm italic">Hook that grabs attention and introduces the poker metaphor</p>
                <p className="text-sm mt-2">Example: <span className="italic">"Some hands look great... until you flip the river card. I'm James Cameron, and in M&A deals, the same principle applies."</span></p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h3 className="font-semibold text-green-800 mb-2">Bridge (5s)</h3>
                <p className="text-sm italic">Transition statement linking to business value</p>
                <p className="text-sm mt-2">Example: <span className="italic">"What most founders miss is that security becomes the decisive factor that transforms valuations..."</span></p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <h3 className="font-semibold text-orange-800 mb-2">Core Message (30s)</h3>
                <p className="text-sm italic">Key article insights with supporting statistic</p>
                <p className="text-sm mt-2">Example: <span className="italic">"In my new article, I explore five critical cyber traps that routinely destroy M&A value. According to Gartner, hidden security issues reduce deal valuations by 28% on average when discovered late..."</span></p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                <h3 className="font-semibold text-purple-800 mb-2">Call to Action (15s)</h3>
                <p className="text-sm italic">Direct invitation to read the article</p>
                <p className="text-sm mt-2">Example: <span className="italic">"Check out the full article in the comments below to discover how to identify these traps before they impact your deal. After all, in both poker and M&A, knowing what you're looking at isn't just about avoiding bad hands—it's about maximizing value."</span></p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer with Timeline */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-xs text-center text-gray-500">
          Created for jamcam Inc. by Claude | Based on "Secure the Deal" M&A Cybersecurity Series (2025)
        </p>
      </div>
    </div>
  );
};

export default LinkedInPublishingGuide;