import React from 'react';

const ContentFramework = () => {
  return (
    <div className="flex flex-col p-6 gap-6 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">Secure the Deal: End-to-End Content Framework</h1>
        <p className="text-gray-600 text-center mb-6">M&A Cybersecurity Series with Poker Metaphors</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {/* Blog 1 */}
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
            <h3 className="font-bold text-blue-900">Blog 1: Cybersecurity Due Diligence</h3>
            <p className="text-sm italic text-gray-600">The ante to play the M&A game</p>
            <div className="mt-2 bg-white p-2 rounded text-sm">
              <p className="font-medium">Key Video Script Excerpts:</p>
              <ul className="list-disc ml-4 mt-1 text-gray-700 text-xs">
                <li>"62% of deals over $250M show security, data and policy red flags — many discovered only post-close."</li>
                <li>"This isn't about tech debt. It's about deal value. And sometimes, survival."</li>
              </ul>
            </div>
          </div>
          
          {/* Blog 2 */}
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-700">
            <h3 className="font-bold text-green-900">Blog 2: Five Cyber Traps</h3>
            <p className="text-sm italic text-gray-600">Wildcards that sink deals</p>
            <div className="mt-2 bg-white p-2 rounded text-sm">
              <p className="font-medium">Key Video Script Excerpts:</p>
              <ul className="list-disc ml-4 mt-1 text-gray-700 text-xs">
                <li>"Some hands look incredibly strong—until you flip the last card."</li>
                <li>"These aren't edge cases— I've seen some variation of these at nearly every client."</li>
              </ul>
            </div>
          </div>
          
          {/* Blog 3 */}
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-700">
            <h3 className="font-bold text-purple-900">Blog 3: The River Card</h3>
            <p className="text-sm italic text-gray-600">The reveal that changes everything</p>
            <div className="mt-2 bg-white p-2 rounded text-sm">
              <p className="font-medium">Key Video Script Excerpts:</p>
              <ul className="list-disc ml-4 mt-1 text-gray-700 text-xs">
                <li>"Founders, if you're chasing investment but skipping cybersecurity, you're not building value—you're building a bluff."</li>
                <li>"Knowing your security risks—and owning them—isn't just smart defense. It's how you raise on your terms."</li>
              </ul>
            </div>
          </div>
          
          {/* Blog 4 */}
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-700">
            <h3 className="font-bold text-yellow-900">Blog 4: Due Diligence to Value</h3>
            <p className="text-sm italic text-gray-600">Secure integration wins the pot</p>
            <div className="mt-2 bg-white p-2 rounded text-sm">
              <p className="font-medium">Key Video Script Excerpts:</p>
              <ul className="list-disc ml-4 mt-1 text-gray-700 text-xs">
                <li>"The biggest losses show up after the win."</li>
                <li>"Post-merger cybersecurity isn't overhead. It's where value compounds—or collapses."</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Flow */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6 text-blue-900">Content Publication Flow</h2>
        
        <div className="relative pl-8 pb-8">
          <div className="absolute left-3.5 top-0 h-full w-1 bg-blue-200"></div>
          
          <div className="mb-8 relative">
            <div className="absolute left-0 -ml-3.5 h-7 w-7 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">1</span>
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-blue-800">Day 1 Morning: Video Lead-In</h3>
              <p className="text-sm text-gray-600">60-second talking head with poker theme</p>
              <div className="mt-2 bg-blue-50 p-3 rounded">
                <h4 className="text-sm font-bold">Example (Blog 1):</h4>
                <p className="text-xs italic mt-1">"Hi everyone, James Cameron here… I actually dropped this post back in December thinking it might go viral. It didn't. Which is weird, because it's basically a playbook for understanding how not to torch millions in a deal. But maybe the holidays weren't the right time to talk about exploding costs due to overseen liabilities and what ends up as down-round disasters."</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8 relative">
            <div className="absolute left-0 -ml-3.5 h-7 w-7 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">2</span>
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-blue-800">Day 1 Morning: Blog Post</h3>
              <p className="text-sm text-gray-600">Full article with "I just published" announcement</p>
              <div className="mt-2 bg-blue-50 p-3 rounded">
                <h4 className="text-sm font-bold">Structure:</h4>
                <p className="text-xs mt-1">Vertical liftoff → Core sections → Takeaways table → Recommendations → CTA</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8 relative">
            <div className="absolute left-0 -ml-3.5 h-7 w-7 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">3</span>
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-blue-800">Day 1 Afternoon: Carousel</h3>
              <p className="text-sm text-gray-600">5-8 slide visual summary</p>
              <div className="mt-2 bg-blue-50 p-3 rounded">
                <h4 className="text-sm font-bold">Example (Blog 3):</h4>
                <p className="text-xs mt-1">Slide 1: "The River Card" showing security impacting deal valuation</p>
                <p className="text-xs mt-1">Slide 2: Chart showing 15-20% valuation premium for security-mature companies</p>
                <p className="text-xs mt-1">Slide 3: Key signals investors look for in security maturity</p>
                <p className="text-xs mt-1">Slide 4: CTA with playing card motif</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8 relative">
            <div className="absolute left-0 -ml-3.5 h-7 w-7 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white font-bold">4</span>
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-green-800">Day 2-3: Engagement</h3>
              <p className="text-sm text-gray-600">Follow-up comments/questions</p>
              <div className="mt-2 bg-green-50 p-3 rounded">
                <p className="text-xs mt-1">Comment on post with additional insight or question to drive conversation</p>
                <p className="text-xs mt-1">Respond to comments within 24 hours with additional value</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8 relative">
            <div className="absolute left-0 -ml-3.5 h-7 w-7 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-white font-bold">5</span>
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-purple-800">Day 3-4: Carousel Reuse</h3>
              <p className="text-sm text-gray-600">Same carousel with new caption</p>
              <div className="mt-2 bg-purple-50 p-3 rounded">
                <p className="text-xs mt-1">Repost carousel with fresh perspective or insight</p>
                <p className="text-xs mt-1">Tag relevant connections who might find value in the content</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute left-0 -ml-3.5 h-7 w-7 rounded-full bg-red-500 flex items-center justify-center">
              <span className="text-white font-bold">6</span>
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-red-800">Week 3-4: Standalone Asset</h3>
              <p className="text-sm text-gray-600">Transform into new content piece</p>
              <div className="mt-2 bg-red-50 p-3 rounded">
                <p className="text-xs mt-1">Options: Deep dive post, quote card, checklist graphic, short-form text</p>
                <p className="text-xs mt-1">Example: "5 Questions Every Deal Team Should Ask Before Signing" checklist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Structure */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6 text-blue-900">Video Script Structure</h2>
        
        <div className="flex flex-wrap gap-3">
          <div className="flex-1 min-w-64 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-900">1. Opening (10s)</h4>
            <p className="text-xs text-gray-500">(Hook + Context)</p>
            <div className="mt-2 bg-white p-2 rounded">
              <p className="text-xs italic">Example (Blog 3): "Founders, if you're chasing investment but skipping cybersecurity, you're not building value—you're building a bluff. Valuations get cut when confidence gets cracked—and it only takes one unanswered risk to fold the hand."</p>
            </div>
          </div>
          
          <div className="flex-1 min-w-64 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-900">2. Bridge (5s)</h4>
            <p className="text-xs text-gray-500">(Transition)</p>
            <div className="mt-2 bg-white p-2 rounded">
              <p className="text-xs italic">Example (Blog 3): "Investors aren't just betting on your growth—they're checking how many blind spots you've built your business on and scaled with."</p>
            </div>
          </div>
          
          <div className="flex-1 min-w-64 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-900">3. Core Message (30s)</h4>
            <p className="text-xs text-gray-500">(Main Content)</p>
            <div className="mt-2 bg-white p-2 rounded">
              <p className="text-xs italic">Example (Blog 4): "This one's for founders, investors, acquirers, entrepreneurs—everyone with chips in the pot. If IAM isn't aligned, if the infrastructure is tangled, if the company uses public Generative AI tools to develop business secrets with no constraints or controls - if your compliance playbook starts with 'To be determined'—you haven't secured the deal, you've just moved the risk into your own house."</p>
            </div>
          </div>
          
          <div className="flex-1 min-w-64 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-900">4. Call to Action (10s)</h4>
            <p className="text-xs text-gray-500">(Next Step)</p>
            <div className="mt-2 bg-white p-2 rounded">
              <p className="text-xs italic">Example (Blog 4): "Read the article. Because the best closers don't just win—they make sure the house doesn't burn down after the deal."</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Script */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Video Background & Visual Elements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800">Background Wallpapers</h3>
            <div className="mt-3 space-y-3">
              <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                <p className="font-bold text-sm text-blue-900">Blog 1: Cybersecurity Due Diligence</p>
                <p className="text-xs mt-1">Dark poker table with chips</p>
              </div>
              
              <div className="bg-white p-3 rounded border-l-4 border-green-400">
                <p className="font-bold text-sm text-green-900">Blog 2: Five Cyber Traps</p>
                <p className="text-xs mt-1">Five-card flop showing governance, risk, traps</p>
              </div>
              
              <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                <p className="font-bold text-sm text-yellow-900">Blog 3: The River Card</p>
                <p className="text-xs mt-1">River card reveals Four of a Kind tens vs Kings bluff</p>
              </div>
              
              <div className="bg-white p-3 rounded border-l-4 border-red-400">
                <p className="font-bold text-sm text-red-900">Blog 4: Durable Value</p>
                <p className="text-xs mt-1">Post-deal chips stacked, stunned opponent, vault icon in Evergreen Green</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-3">Hero Image Concepts</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                <p className="font-bold text-sm text-gray-800">Blog 1:</p>
                <p className="text-xs mt-1">Data cards (Prompt Library + API Keys) overlay with "Cybersecurity Due Diligence" title</p>
              </div>
              
              <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                <p className="font-bold text-sm text-gray-800">Blog 2:</p>
                <p className="text-xs mt-1">Five-card trap layout with shadow IT, AI leakage, credentials, vendor risk, data classification</p>
              </div>
              
              <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                <p className="font-bold text-sm text-gray-800">Blog 3:</p>
                <p className="text-xs mt-1">River card with premium valuation metrics vs discount metrics</p>
              </div>
              
              <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                <p className="font-bold text-sm text-gray-800">Blog 4:</p>
                <p className="text-xs mt-1">Post-deal integration secure architecture with cybersecurity vault</p>
              </div>
            </div>
            
            <div className="mt-4 bg-yellow-50 p-3 rounded">
              <p className="text-sm font-bold text-yellow-800">Color Palette:</p>
              <p className="text-xs mt-1">BRI Colors: Cyber Navy Blue (#0a1f44), Evergreen Green (#228B22), BRI Gold (#E2B34B)</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-500 mt-4">
        © 2025 James Cameron | Big Rock Intelligence | AI & Cybersecurity Executive Advisor
      </div>
    </div>
  );
};

export default ContentFramework;
