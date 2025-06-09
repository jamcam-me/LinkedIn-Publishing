import React from 'react';

const ContentFramework = () => {
  return (
    <div className="flex flex-col p-6 gap-8 bg-gray-50 text-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">Secure the Deal: Enhanced Series Framework</h1>
        <p className="text-gray-600 text-center mb-4">A cohesive M&A cybersecurity content strategy with progressive poker metaphors</p>

        {/* Series Progression */}
        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <h2 className="text-lg font-bold text-blue-900 mb-3">Series Narrative Progression</h2>
          <div className="relative">
            <div className="absolute left-5 top-0 w-1 h-full bg-blue-700"></div>
            
            <div className="relative pl-10 pb-10">
              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center border-4 border-blue-100">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-blue-900">Cybersecurity Due Diligence <span className="text-blue-600 font-normal">(Published)</span></h3>
                <p className="text-sm italic text-blue-600 mt-1">The ante to play the M&A game</p>
                <p className="text-sm mt-2">Establishes why cybersecurity assessment is the table stakes for M&A transactions, focusing on risk discovery and valuation protection.</p>
                <div className="mt-3 bg-blue-100 p-3 rounded-lg">
                  <p className="text-xs italic text-blue-800">"In M&A, security, observability and inherited risk are the cards that no one takes a look at… until the hand's already over. 62% of deals over $250M show security, data and policy red flags — many discovered only post-close."</p>
                </div>
              </div>
            </div>
            
            <div className="relative pl-10 pb-10">
              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center border-4 border-blue-100">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-blue-900">Five Cyber Traps <span className="text-blue-600 font-normal">(Published)</span></h3>
                <p className="text-sm italic text-blue-600 mt-1">Wildcards that sink deals</p>
                <p className="text-sm mt-2">Reveals the hidden risks that can derail transactions, emphasizing identification and mitigation strategies.</p>
                <div className="mt-3 bg-blue-100 p-3 rounded-lg">
                  <p className="text-xs italic text-blue-800">"Some hands look incredibly strong—until you flip the last card. Poker and M&A deals are the same in that regard. And when you consider the cyber traps? They're the wildcards that turn a sure thing into a sunk cost."</p>
                </div>
              </div>
            </div>
            
            <div className="relative pl-10 pb-10">
              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center border-4 border-green-100">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-green-800">The River Card <span className="text-green-600 font-normal">(Ready)</span></h3>
                <p className="text-sm italic text-green-600 mt-1">The transformative reveal that changes everything</p>
                <p className="text-sm mt-2">Pivots from risk to strategic advantage, showing how security maturity creates valuation premiums and investor confidence.</p>
                <div className="mt-3 bg-green-100 p-3 rounded-lg">
                  <p className="text-xs italic text-green-800">"Founders, if you're chasing investment but skipping cybersecurity, you're not building value—you're building a bluff. Valuations get cut when confidence cracks—and it only takes one unanswered risk to fold the hand."</p>
                </div>
              </div>
            </div>
            
            <div className="relative pl-10">
              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center border-4 border-gray-100">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-700">From Due Diligence to Value <span className="text-gray-500 font-normal">(Ready)</span></h3>
                <p className="text-sm italic text-gray-500 mt-1">Secure integration wins the pot</p>
                <p className="text-sm mt-2">Completes the journey by showing how post-merger integration secures and extends the value created through due diligence.</p>
                <div className="mt-3 bg-gray-100 p-3 rounded-lg">
                  <p className="text-xs italic text-gray-800">"You closed the deal. Congrats… now what? The final signature doesn't mean the game is over. Anyone who's lived through post-merger regret knows—the biggest losses show up after the win."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* River Card Blog Structure */}
        <div className="bg-white border border-green-200 p-5 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-bold mb-4 text-green-800">Blog Post 3: The River Card That Changes Everything</h2>
          
          <div className="mb-6 bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800">Video Lead-In (Completed)</h3>
            <p className="text-sm mt-2 italic">
              "Founders, if you're chasing investment but skipping cybersecurity, you're not building value—you're building a bluff. Valuations get cut when confidence gets cracked—and it only takes one unanswered risk to fold the hand."
            </p>
            <p className="text-sm mt-2 italic">
              "Investors aren't just betting on your growth—they're checking how many blind spots you've built your business on and scaled with."
            </p>
            <p className="text-sm mt-2 italic">
              "This post breaks down how your cybersecurity— lack of it— or ability to visibly demonstrate it's one of your business priorities - directly impacts how attractive you are to investors or buyers."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <div className="bg-green-50 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-800">Section 1</h4>
              <p className="text-sm font-medium text-green-700">Reading the Table: What Sophisticated Investors Evaluate Beyond Growth Metrics</p>
              <ul className="mt-2 text-sm list-disc pl-5">
                <li>Risk posture evaluation frameworks</li>
                <li>Data and access governance maturity signals</li>
                <li>AI security as strategic IP protection</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-800">Section 2</h4>
              <p className="text-sm font-medium text-green-700">Betting Blind: How Security Unknowns Create Valuation Discounts</p>
              <ul className="mt-2 text-sm list-disc pl-5">
                <li>Access chaos = downstream liability risk</li>
                <li>Unprotected AI assets = IP valuation erosion</li>
                <li>Shadow IT systems = hidden integration costs</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-800">Section 3</h4>
              <p className="text-sm font-medium text-green-700">Playing with an Edge: How Security Maturity Creates Valuation Premiums</p>
              <ul className="mt-2 text-sm list-disc pl-5">
                <li>Buyer trust acceleration metrics</li>
                <li>Audit-ready security certification value</li>
                <li>Integration readiness as value multiplier</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-green-800 mb-2">Key Takeaways Table</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-green-200 rounded-lg">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-4 py-2 text-left border-b border-green-200 text-green-800">Focus Area</th>
                    <th className="px-4 py-2 text-left border-b border-green-200 text-green-800">Strategic Insight</th>
                    <th className="px-4 py-2 text-left border-b border-green-200 text-green-800">Business Impact</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-2 border-b border-green-100 font-medium">Founders</td>
                    <td className="px-4 py-2 border-b border-green-100">Visibility wins trust</td>
                    <td className="px-4 py-2 border-b border-green-100">22% faster deal closure</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-green-100 font-medium">AI/IP Control</td>
                    <td className="px-4 py-2 border-b border-green-100">Clean input = stronger valuation</td>
                    <td className="px-4 py-2 border-b border-green-100">15-20% valuation premium</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">Vendor Risk</td>
                    <td className="px-4 py-2">Trimmed SaaS = integration-ready</td>
                    <td className="px-4 py-2">28% reduction in post-close costs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-green-800 mb-2">Video Call-to-Action (Completed)</h3>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm italic">"Read the post. Because knowing your security risks—and owning them—isn't just smart defense. It's how you raise on your terms."</p>
            </div>
          </div>
        </div>
        
        {/* Blog Post 4 Structure */}
        <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Blog Post 4: From Due Diligence to Durable Value</h2>
          
          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-700">Video Lead-In (Completed)</h3>
            <p className="text-sm mt-2 italic">
              "You closed the deal. Congrats… now what? James Cameron here, and I'm here to tell you that a lot of folks behave like the final signature means the game is over. But anyone who's lived through post-merger regret knows—the biggest losses show up after the win."
            </p>
            <p className="text-sm mt-2 italic">
              "This one's for founders, investors, acquirers, entrepreneurs—everyone with chips in the pot. If IAM isn't aligned, if the infrastructure is tangled, if the company uses public Generative AI tools to develop business secrets with no constraints or controls - if your compliance playbook starts with 'To be determined'— you haven't secured the deal, you've just moved the risk into your own house."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-700">Section 1</h4>
              <p className="text-sm font-medium text-gray-600">Post-Close Risk Landscape: What Changes After Signatures</p>
              <ul className="mt-2 text-sm list-disc pl-5">
                <li>Access consolidation challenges</li>
                <li>Governance integration hurdles</li>
                <li>System boundary blurring</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-700">Section 2</h4>
              <p className="text-sm font-medium text-gray-600">Integration Accelerators: Security as Value Enabler</p>
              <ul className="mt-2 text-sm list-disc pl-5">
                <li>100-day security roadmap elements</li>
                <li>IAM consolidation patterns</li>
                <li>Data governance unified approach</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-700">Section 3</h4>
              <p className="text-sm font-medium text-gray-600">Long-term Value Creation: Building on Secure Foundations</p>
              <ul className="mt-2 text-sm list-disc pl-5">
                <li>Measuring security-driven value</li>
                <li>Platform approach for future M&A</li>
                <li>Creating security as competitive moat</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-gray-700 mb-2">Video Call-to-Action (Completed)</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm italic">"Read the article. Because the best closers don't just win—they make sure the house doesn't burn down after the deal."</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Flow Visualization */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6 text-blue-900">Series Flow: From Risk to Value</h2>
        
        <div className="relative h-24 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-400 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-between px-6">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-4 border-blue-500 z-10">
                <span className="text-blue-800 font-bold">1</span>
              </div>
              <p className="text-white font-bold mt-1">Ante</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-4 border-blue-500 z-10">
                <span className="text-blue-800 font-bold">2</span>
              </div>
              <p className="text-white font-bold mt-1">Traps</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-4 border-green-500 z-10">
                <span className="text-green-800 font-bold">3</span>
              </div>
              <p className="text-white font-bold mt-1">River</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-4 border-gray-400 z-10">
                <span className="text-gray-800 font-bold">4</span>
              </div>
              <p className="text-white font-bold mt-1">Value</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">Narrative Evolution</h3>
            <div className="space-y-3">
              <div className="flex">
                <div className="w-24 shrink-0 font-bold text-blue-900">Post 1:</div>
                <div>"You need security to play" <span className="text-gray-500">(table stakes)</span></div>
              </div>
              <div className="flex">
                <div className="w-24 shrink-0 font-bold text-blue-900">Post 2:</div>
                <div>"Hidden risks can sink you" <span className="text-gray-500">(threat awareness)</span></div>
              </div>
              <div className="flex">
                <div className="w-24 shrink-0 font-bold text-green-700">Post 3:</div>
                <div>"Security creates deal confidence" <span className="text-gray-500">(value creation)</span></div>
              </div>
              <div className="flex">
                <div className="w-24 shrink-0 font-bold text-gray-500">Post 4:</div>
                <div>"Protect and enhance the win" <span className="text-gray-500">(value realization)</span></div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">Focus Shift</h3>
            <div className="space-y-3">
              <div className="flex">
                <div className="w-24 shrink-0 font-bold text-blue-900">Post 1:</div>
                <div>Risk identification and assessment</div>
              </div>
              <div className="flex">
                <div className="w-24 shrink-0 font-bold text-blue-900">Post 2:</div>
                <div>Common failure points and detection</div>
              </div>
              <div className="flex">
                <div className="w-24 shrink-0 font-bold text-green-700">Post 3:</div>
                <div>Valuation improvement and acceleration</div>
              </div>
              <div className="flex">
                <div className="w-24 shrink-0 font-bold text-gray-500">Post 4:</div>
                <div>Post-merger integration and execution</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-bold text-yellow-800 mb-2">River Card: Key Differentiation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-yellow-800">Previous Posts (1-2)</h4>
              <ul className="mt-1 list-disc pl-5 text-sm">
                <li>Focused on risk and protection</li>
                <li>Emphasized technical assessment</li>
                <li>Targeted security professionals</li>
                <li>Defensive posture and perspective</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-yellow-800">River Card Post (3)</h4>
              <ul className="mt-1 list-disc pl-5 text-sm">
                <li>Focuses on opportunity and valuation</li>
                <li>Emphasizes strategic business impact</li>
                <li>Targets founders and investors</li>
                <li>Proactive, value-creation perspective</li>
              </ul>
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
