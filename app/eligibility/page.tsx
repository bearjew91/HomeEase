'use client'

export default function EligibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Eligibility Guide</h1>
        <p className="text-xl text-gray-600">
          Understand if you qualify for Israeli housing lotteries and what it means to be eligible.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
        <p className="text-lg">
          <strong>📝 Note:</strong> This is placeholder content. Your research data will be added here with official eligibility requirements from the Ministry of Housing.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Who Can Apply?</h2>
          <p className="text-gray-700 mb-4">
            Placeholder: Information about general eligibility criteria will be filled in based on research data.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• Age requirements</li>
              <li>• Citizenship and residency requirements</li>
              <li>• Income eligibility caps</li>
              <li>• Prior ownership restrictions</li>
              <li>• Military service requirements (if applicable)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Required Documents</h2>
          <p className="text-gray-700 mb-4">
            You'll need to prepare certain documents. Here's what to gather:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Personal Documents:</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• ID card or passport</li>
              <li>• Marriage certificate (if applicable)</li>
              <li>• Birth certificates for children</li>
            </ul>
            
            <h3 className="font-semibold mb-3">Financial Documents:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Bank statements (last 12 months)</li>
              <li>• Income tax returns</li>
              <li>• Salary slips</li>
              <li>• List of existing debts</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Registration Process</h2>
          <p className="text-gray-700 mb-4">
            The eligibility process typically follows these steps:
          </p>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold">Step {step}</h3>
                <p className="text-gray-600">Detailed steps will be added based on research data</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-12 p-6 bg-accent/10 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Next Step</h3>
        <p className="text-gray-700 mb-4">
          Once you confirm you're eligible, move on to understanding your budget and mortgage capacity.
        </p>
        <a href="/budget-calculator" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors">
          Go to Budget Calculator
        </a>
      </div>
    </div>
  )
}
