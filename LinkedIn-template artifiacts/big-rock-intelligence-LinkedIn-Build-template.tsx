import React, { useState } from 'react';

const LinkedInSeriesPublisher = () => {
  // Demo articles data
  const articles = [
    {
      number: 1,
      title: "AI GOVERNANCE FOUNDATIONS",
      subtitle: "Establishing the framework",
      status: "Published",
      keyTheme: "Risk Management",
      focus: "Board-level guidance for AI governance models",
      publishDate: "2025-05-01"
    },
    {
      number: 2,
      title: "SECURITY STRATEGY METHODOLOGIES",
      subtitle: "Enterprise protection approach",
      status: "Ready",
      keyTheme: "Cyber Defense",
      focus: "Systematic frameworks for threat evaluation",
      publishDate: "2025-05-08"
    },
    {
      number: 3,
      title: "AI INTEGRATION ROADMAP",
      subtitle: "From innovation to implementation",
      status: "Draft",
      keyTheme: "Digital Transformation",
      focus: "Operationalizing AI with security by design",
      publishDate: "2025-05-15"
    }
  ];

  // Demo KPIs data
  const kpis = [
    { name: "Depth of Engagement", target: 4.5, unit: " min", actual: 5.2 },
    { name: "Content Authority Score", target: 85, unit: "", actual: 92 },
    { name: "LinkedIn Engagement Rate", target: 6.5, unit: "%", actual: 8.1 }
  ];

  // Implementation checklist phases
  const checklist = {
    planning: [
      'Strategic governance framework identified',
      'Executive personas and needs mapped',
      'Content calendar with validation points scheduled', 
      'Research methodology and sources finalized'
    ],
    creation: [
      'Visual assets aligned with brand guidelines',
      'Citations and methodology documented',
      'Executive summary crafted for board-level readers',
      'Key insights highlighted with outcome metrics'
    ],
    publication: [
      'Video executive briefing recorded',
      'Publication timeslot optimized for target audience',
      'Multi-format assets prepared for cross-platform',
      'Distribution channels configured for tracking'
    ],
    engagement: [
      'Response measurement framework active',
      'KPI real-time dashboard connected',
      'Content performance tracking initialized',
      'Follow-up conversation strategy prepared'
    ]
  };

  // Timeline data for distribution protocol
  const timeline = [
    { label: 'T+0 08:30', task: 'Executive Video Brief' },
    { label: 'T+0 09:00', task: 'Article Publication' },
    { label: 'T+0 14:00', task: 'Visual Asset Share' },
    { label: 'T+1 to T+2', task: 'Strategic Engagement' },
    { label: 'T+3 to T+5', task: 'Insight Amplification' }
  ];

  // State for active template and series data
  const [activeTemplate, setActiveTemplate] = useState("guide");
  const [title, setTitle] = useState("AI GOVERNANCE & SECURITY");
  const [pillar, setPillar] = useState("Strategic Cybersecurity");
  const [framework, setFramework] = useState("Digital Transformation Blueprint");
  const [selectedPhase, setSelectedPhase] = useState('planning');

  return (
    <div style={{fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f5f5f5', padding: '20px'}}>
      {/* Header */}
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#0a1f44', padding: '15px', borderRadius: '4px'}}>
        <div style={{backgroundColor: '#dab86e', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', borderRadius: '4px'}}>
          <span style={{color: '#0a1f44', fontWeight: 'bold', fontSize: '24px'}}>B</span>
        </div>
        <h1 style={{margin: 0, color: 'white'}}>BIG ROCK INTELLIGENCE</h1>
      </div>

      {/* Page Title */}
      <h2 style={{color: '#0a1f44', marginBottom: '20px'}}>LinkedIn Series Publishing Platform</h2>

      {/* Series Configuration */}
      <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
        <h3 style={{color: '#0a1f44', marginTop: 0}}>Series Configuration</h3>
        
        <div style={{marginBottom: '15px'}}>
          <label style={{display: 'block', color: '#333', marginBottom: '5px'}}>Series Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            style={{width: '100%', padding: '8px', border: '1px solid #5d9182', borderRadius: '4px'}}
          />
        </div>
        
        <div style={{marginBottom: '15px'}}>
          <label style={{display: 'block', color: '#333', marginBottom: '5px'}}>Content Pillar</label>
          <input 
            type="text" 
            value={pillar} 
            onChange={(e) => setPillar(e.target.value)} 
            style={{width: '100%', padding: '8px', border: '1px solid #5d9182', borderRadius: '4px'}}
          />
        </div>
        
        <div style={{marginBottom: '15px'}}>
          <label style={{display: 'block', color: '#333', marginBottom: '5px'}}>Strategic Framework</label>
          <input 
            type="text" 
            value={framework} 
            onChange={(e) => setFramework(e.target.value)} 
            style={{width: '100%', padding: '8px', border: '1px solid #5d9182', borderRadius: '4px'}}
          />
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px'}}>
        <button 
          onClick={() => setActiveTemplate("guide")}
          style={{
            padding: '10px 15px',
            backgroundColor: activeTemplate === "guide" ? '#dab86e' : '#0a1f44',
            color: activeTemplate === "guide" ? '#0a1f44' : 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Interactive Guide
        </button>
        <button 
          onClick={() => setActiveTemplate("framework")}
          style={{
            padding: '10px 15px',
            backgroundColor: activeTemplate === "framework" ? '#dab86e' : '#0a1f44',
            color: activeTemplate === "framework" ? '#0a1f44' : 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Strategic Framework
        </button>
        <button 
          onClick={() => setActiveTemplate("dashboard")}
          style={{
            padding: '10px 15px',
            backgroundColor: activeTemplate === "dashboard" ? '#dab86e' : '#0a1f44',
            color: activeTemplate === "dashboard" ? '#0a1f44' : 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Analytics Dashboard
        </button>
      </div>

      {/* Content Area */}
      <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
        {/* Interactive Guide Template */}
        {activeTemplate === "guide" && (
          <div style={{borderTop: '4px solid #dab86e', paddingTop: '20px'}}>
            <h2 style={{textAlign: 'center', color: '#0a1f44', marginBottom: '20px'}}>{title} – INTERACTIVE PUBLISHING GUIDE</h2>
            <p style={{textAlign: 'center', color: '#574536', marginBottom: '20px'}}>Strategic Framework: {pillar} • Approach: {framework}</p>
            
            {/* Phase Selection Buttons */}
            <div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px'}}>
              {Object.keys(checklist).map((phase) => (
                <button
                  key={phase}
                  onClick={() => setSelectedPhase(phase)}
                  style={{
                    padding: '8px 15px',
                    border: '2px solid',
                    borderColor: selectedPhase === phase ? '#dab86e' : '#5d9182',
                    backgroundColor: selectedPhase === phase ? '#dab86e' : 'white',
                    color: selectedPhase === phase ? '#0a1f44' : '#0a1f44',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  {phase.toUpperCase()}
                </button>
              ))}
            </div>
            
            {/* Implementation Checklist */}
            <div style={{border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '20px'}}>
              <h3 style={{color: '#0a1f44', marginTop: 0}}>{selectedPhase.toUpperCase()} IMPLEMENTATION MATRIX</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: '15px 0 0 0'}}>
                {checklist[selectedPhase].map((item, index) => (
                  <li key={index} style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{
                      width: '20px', 
                      height: '20px', 
                      border: '1px solid #dab86e', 
                      borderRadius: '3px', 
                      marginRight: '10px', 
                      position: 'relative'
                    }}></div>
                    <span style={{fontSize: '14px'}}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Article Table */}
            <div style={{border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden'}}>
              <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                  <tr style={{backgroundColor: '#0a1f44', color: 'white'}}>
                    <th style={{padding: '10px', textAlign: 'left'}}>#</th>
                    <th style={{padding: '10px', textAlign: 'left'}}>CONTENT ASSET</th>
                    <th style={{padding: '10px', textAlign: 'left'}}>TARGETING</th>
                    <th style={{padding: '10px', textAlign: 'left'}}>KEY FOCUS</th>
                    <th style={{padding: '10px', textAlign: 'left'}}>STATUS</th>
                    <th style={{padding: '10px', textAlign: 'left'}}>DEPLOY DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article, index) => (
                    <tr key={index} style={{borderBottom: index < articles.length - 1 ? '1px solid #eee' : 'none'}}>
                      <td style={{padding: '10px', color: '#dab86e', fontWeight: 'bold'}}>{article.number}</td>
                      <td style={{padding: '10px'}}>
                        <div style={{fontWeight: 'bold', color: '#0a1f44'}}>{article.title}</div>
                        <div style={{fontSize: '12px', color: '#666', marginTop: '3px'}}>{article.subtitle}</div>
                      </td>
                      <td style={{padding: '10px'}}>{article.focus}</td>
                      <td style={{padding: '10px'}}>{article.keyTheme}</td>
                      <td style={{padding: '10px'}}>
                        <span style={{
                          display: 'inline-block',
                          padding: '5px 10px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          backgroundColor: article.status === 'Published' ? '#5d9182' : 
                                          article.status === 'Ready' ? '#dab86e' : '#a4aba4',
                          color: article.status === 'Published' ? 'white' : '#0a1f44'
                        }}>
                          {article.status}
                        </span>
                      </td>
                      <td style={{padding: '10px'}}>
                        <input 
                          type="date" 
                          defaultValue={article.publishDate} 
                          style={{
                            padding: '5px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '12px'
                          }} 
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Strategic Framework Template */}
        {activeTemplate === "framework" && (
          <div style={{borderTop: '4px solid #dab86e', paddingTop: '20px'}}>
            <h2 style={{textAlign: 'center', color: '#0a1f44', marginBottom: '20px'}}>{title} – STRATEGIC FRAMEWORK</h2>
            
            <div style={{position: 'relative', paddingLeft: '40px'}}>
              {/* Timeline line */}
              <div style={{
                position: 'absolute',
                left: '15px',
                top: '0',
                bottom: '0',
                width: '4px',
                backgroundImage: 'linear-gradient(to bottom, #dab86e, #5d9182, #1f302d)'
              }}></div>
              
              {/* Article cards */}
              {articles.map((article, index) => (
                <div key={index} style={{position: 'relative', marginBottom: '40px'}}>
                  {/* Number marker */}
                  <div style={{
                    position: 'absolute',
                    left: '-25px',
                    top: '6px',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#dab86e',
                    color: '#0a1f44',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    {article.number}
                  </div>
                  
                  {/* Content card */}
                  <div style={{
                    marginLeft: '20px',
                    padding: '15px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}>
                    {/* Header with title and status */}
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px'}}>
                      <h3 style={{margin: '0', color: '#0a1f44', fontWeight: 'bold'}}>{article.title}</h3>
                      <span style={{
                        display: 'inline-block',
                        padding: '5px 10px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        backgroundColor: article.status === 'Published' ? '#5d9182' : 
                                        article.status === 'Ready' ? '#dab86e' : '#a4aba4',
                        color: article.status === 'Published' ? 'white' : '#0a1f44'
                      }}>
                        {article.status}
                      </span>
                    </div>
                    
                    {/* Subtitle */}
                    <p style={{margin: '0 0 15px 0', color: '#666', fontStyle: 'italic'}}>{article.subtitle}</p>
                    
                    {/* Details section */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '15px',
                      padding: '15px 0 0 0',
                      borderTop: '1px solid #eee'
                    }}>
                      <div>
                        <p style={{margin: '0 0 5px 0', fontSize: '12px', fontWeight: 'bold', color: '#574536'}}>KEY FOCUS</p>
                        <p style={{margin: '0', fontSize: '14px'}}>{article.keyTheme}</p>
                      </div>
                      <div>
                        <p style={{margin: '0 0 5px 0', fontSize: '12px', fontWeight: 'bold', color: '#574536'}}>TARGET AUDIENCE</p>
                        <p style={{margin: '0', fontSize: '14px'}}>{article.focus}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Analytics Dashboard Template */}
        {activeTemplate === "dashboard" && (
          <div style={{borderTop: '4px solid #dab86e', paddingTop: '20px'}}>
            <h2 style={{textAlign: 'center', color: '#0a1f44', marginBottom: '20px'}}>{title} – ANALYTICS DASHBOARD</h2>
            
            {/* Content Distribution Protocol */}
            <div style={{border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '20px'}}>
              <h3 style={{color: '#0a1f44', marginTop: 0}}>CONTENT DISTRIBUTION PROTOCOL</h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '15px'}}>
                {timeline.map((item, index) => (
                  <div key={index} style={{display: 'flex', alignItems: 'flex-start'}}>
                    <div style={{width: '80px', fontSize: '14px', fontWeight: 'bold', color: '#574536', paddingRight: '10px', borderRight: '1px solid #ccc'}}>
                      {item.label}
                    </div>
                    <div style={{flex: 1, marginLeft: '10px', padding: '8px', backgroundColor: '#f5f5f5', borderLeft: '3px solid #dab86e', borderRadius: '4px'}}>
                      {item.task}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Performance Metrics */}
            <div style={{border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '20px'}}>
              <h3 style={{color: '#0a1f44', marginTop: 0}}>PERFORMANCE METRICS</h3>
              <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '15px'}}>
                <thead>
                  <tr style={{backgroundColor: '#0a1f44', color: 'white'}}>
                    <th style={{padding: '10px', textAlign: 'left'}}>KEY METRIC</th>
                    <th style={{padding: '10px', textAlign: 'left'}}>TARGET</th>
                    <th style={{padding: '10px', textAlign: 'left'}}>ACTUAL</th>
                    <th style={{padding: '10px', textAlign: 'left'}}>VARIANCE</th>
                    <th style={{padding: '10px', textAlign: 'left'}}>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {kpis.map((kpi, index) => {
                    const variance = ((kpi.actual - kpi.target) / kpi.target * 100).toFixed(1);
                    const isPositive = parseFloat(variance) >= 0;
                    return (
                      <tr key={index} style={{borderBottom: '1px solid #eee'}}>
                        <td style={{padding: '10px', fontWeight: 'bold'}}>{kpi.name}</td>
                        <td style={{padding: '10px'}}>{kpi.target}{kpi.unit}</td>
                        <td style={{padding: '10px'}}>{kpi.actual}{kpi.unit}</td>
                        <td style={{padding: '10px', color: isPositive ? '#5d9182' : '#574536'}}>
                          {isPositive ? '+' : ''}{variance}%
                        </td>
                        <td style={{padding: '10px'}}>
                          <div style={{display: 'flex', alignItems: 'center'}}>
                            <div style={{
                              width: '12px', 
                              height: '12px', 
                              borderRadius: '50%', 
                              backgroundColor: isPositive ? '#5d9182' : '#574536', 
                              marginRight: '8px'
                            }}></div>
                            <span style={{fontSize: '14px', color: isPositive ? '#5d9182' : '#574536'}}>
                              {isPositive ? 'ON TARGET' : 'ATTENTION REQUIRED'}
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            {/* Content Assets */}
            <div style={{border: '1px solid #ccc', borderRadius: '8px', padding: '15px'}}>
              <h3 style={{color: '#0a1f44', marginTop: 0}}>CONTENT ASSETS</h3>
              <ul style={{listStyle: 'none', padding: 0, marginTop: '15px'}}>
                {articles.map((article, index) => (
                  <li key={index} style={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '10px', 
                    borderBottom: index < articles.length - 1 ? '1px solid #eee' : 'none'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <div style={{
                        width: '24px', 
                        height: '24px', 
                        backgroundColor: '#dab86e', 
                        color: '#0a1f44', 
                        borderRadius: '4px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        marginRight: '10px',
                        fontWeight: 'bold'
                      }}>
                        {article.number}
                      </div>
                      <span>{article.title}</span>
                    </div>
                    <div style={{
                      padding: '5px 10px', 
                      borderRadius: '4px', 
                      fontSize: '12px', 
                      fontWeight: 'bold',
                      backgroundColor: article.status === 'Published' ? '#5d9182' : 
                                      article.status === 'Ready' ? '#dab86e' : '#a4aba4',
                      color: article.status === 'Published' ? 'white' : '#0a1f44'
                    }}>
                      {article.status}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkedInSeriesPublisher;
