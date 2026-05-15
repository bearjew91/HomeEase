'use client'

export default function WinnerRoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Winner Roadmap</h1>
        <p className="text-xl text-gray-600">
          Congratulations! Here's exactly what to do after winning a housing lottery.
        </p>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
        <p className="text-lg">
          <strong>🎉 Important:</strong> Placeholder content. This will include detailed timeline, documents, and critical deadlines once research is complete.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-6">Critical Timeline (First 30 Days)</h2>
          <div className="space-y-4">
            {[
              { days: 'Day 1-3', title: 'Notification & Confirmation', tasks: ['Receive official notification', 'Confirm your interest in the unit', 'Get reference number'] },
              { days: 'Day 4-7', title: 'Document Gathering', tasks: ['Prepare all documents', 'Organize financial records', 'Get pre-approval letter from bank'] },
              { days: 'Day 8-14', title: 'Bank & Mortgage', tasks: ['Submit full mortgage application', 'Provide all financial documentation', 'Schedule building inspection'] },
              { days: 'Day 15-21', title: 'Building Inspection', tasks: ['Inspect apartment condition', 'Review contract terms', 'Approve building inspection report'] },
              { days: 'Day 22-30', title: 'Contract & Closing', tasks: ['Sign purchase agreement', 'Sign mortgage documents', 'Transfer funds'] },
            ].map((phase, idx) => (
              <div key={idx} className="border-l-4 border-primary pl-6 py-4">
                <h3 className="font-bold text-lg text-primary mb-2">{phase.days}</h3>
                <h4 className="font-semibold text-lg mb-3">{phase.title}</h4>
                <ul className="space-y-1">
                  {phase.tasks.map((task, tidx) => (
                    <li key={tidx} className="text-gray-700">• {task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Essential Documents You'll Need</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Personal</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ ID card/passport</li>
                <li>✓ Marriage certificate</li>
                <li>✓ Birth certificates (children)</li>
                <li>✓ Divorce decree (if applicable)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Financial</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Bank statements (3 months)</li>
                <li>✓ Tax returns (last 2 years)</li>
                <li>✓ Salary slips</li>
                <li>✓ Employment letter</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Housing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Building inspection report</li>
                <li>✓ Mortgage pre-approval</li>
                <li>✓ Property insurance quote</li>
                <li>✓ Purchase agreement</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Criminal background check</li>
                <li>✓ Credit report authorization</li>
                <li>✓ Loan documents</li>
                <li>✓ Final closing papers</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            {[
              { mistake: 'Missing deadlines', solution: 'Mark all dates on your calendar immediately. Most deadlines cannot be extended.' },
              { mistake: 'Making major purchases', solution: 'Do NOT make any large purchases or credit applications during this period. It affects your debt-to-income ratio.' },
              { mistake: 'Changing jobs', solution: 'Stay in your current employment if possible. Job changes can delay mortgage approval.' },
              { mistake: 'Not reviewing documents', solution: 'Read everything carefully. Errors now can cause problems later.' },
              { mistake: 'Skipping the inspection', solution: 'Always inspect the apartment. You\'re investing hundreds of thousands of shekels.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                <h3 className="font-semibold text-red-900 mb-1">❌ {item.mistake}</h3>
                <p className="text-red-800">✓ {item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">After Closing</h2>
          <div className="bg-accent/10 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Once you've closed the deal, here's what comes next:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>1. Receive keys:</strong> Take possession of your new home</li>
              <li><strong>2. Register property:</strong> Update your ID and tax records</li>
              <li><strong>3. Set up utilities:</strong> Arrange electric, water, internet</li>
              <li><strong>4. Arrange moving:</strong> Move into your new home</li>
              <li><strong>5. First mortgage payment:</strong> Typically due 30-60 days after closing</li>
              <li><strong>6. Property taxes:</strong> Enroll in municipal property tax system</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-12 p-6 bg-accent/10 rounded-lg">
        <h3 className="font-bold text-lg mb-2">You're Ready!</h3>
        <p className="text-gray-700 mb-4">
          You've now completed the entire HomeEase planning journey. Go back and review each section anytime, or prepare to apply for lotteries.
        </p>
        <a href="/" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors">
          Back to Home
        </a>
      </div>
    </div>
  )
}
