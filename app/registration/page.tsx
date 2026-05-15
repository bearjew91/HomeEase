'use client'

export default function RegistrationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Registration Guide</h1>
        <p className="text-xl text-gray-600">
          Step-by-step guide to registering for housing lotteries.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
        <p className="text-lg">
          <strong>📝 Note:</strong> Placeholder content. This will be filled with official registration steps and links once research is complete.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Registration Steps</h2>
          <p className="text-gray-700 mb-6">
            Here's how to register for a housing lottery:
          </p>
          
          <div className="space-y-4">
            {[
              { title: 'Choose Your Lottery', desc: 'Select which lottery program and projects you want to apply for' },
              { title: 'Gather Documents', desc: 'Prepare all required documents from the eligibility checklist' },
              { title: 'Register Online', desc: 'Visit the registration portal and complete the form' },
              { title: 'Submit Documents', desc: 'Upload or submit your documents as required' },
              { title: 'Receive Confirmation', desc: 'You\'ll get a confirmation number and timeline' },
              { title: 'Wait for Approval', desc: 'Your eligibility will be verified' },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 pb-6 border-b last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-600 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Where to Register</h2>
          <p className="text-gray-700 mb-4">
            Registration portals and addresses will be updated based on current lottery programs:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-2">
              <strong>Official Portal:</strong> Links to official government registration sites
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Local Offices:</strong> Contact information for municipal housing offices
            </p>
            <p className="text-gray-600">
              <strong>Documents Required:</strong> Checklist of what to bring
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">After Registration</h2>
          <div className="bg-accent/10 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              After you register, here's what happens next:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Week 1-2:</strong> Confirmation and reference number</li>
              <li><strong>Week 2-4:</strong> Document verification period</li>
              <li><strong>Week 4-6:</strong> Eligibility confirmation</li>
              <li><strong>Week 6+:</strong> Lottery drawing notification</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-12 p-6 bg-accent/10 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Next Step</h3>
        <p className="text-gray-700 mb-4">
          Ready to register? Make sure you've checked your eligibility and prepared your budget first.
        </p>
        <a href="/eligibility" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors">
          Back to Eligibility
        </a>
      </div>
    </div>
  )
}
