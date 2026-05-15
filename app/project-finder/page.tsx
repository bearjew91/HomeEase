'use client'

export default function ProjectFinderPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Project Finder</h1>
        <p className="text-xl text-gray-600">
          Discover lottery projects that match your budget and lifestyle.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
        <p className="text-lg">
          <strong>📝 Note:</strong> Project listings will be populated with real data from Israeli housing lotteries once research is complete. This includes cities, apartment sizes, prices, and subsidy amounts.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">How Project Matching Works</h2>
          <p className="text-gray-700 mb-6">
            HomeEase helps you find the right projects by considering:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-3">Your Preferences</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Budget range</li>
                <li>✓ Preferred cities</li>
                <li>✓ Apartment size</li>
                <li>✓ Distance from work</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-3">Project Factors</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Price fit</li>
                <li>✓ Location suitability</li>
                <li>✓ Competition level</li>
                <li>✓ Timeline to completion</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Available Projects</h2>
          <p className="text-gray-700 mb-6">
            Projects will appear here once research data is collected. Each project will show:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-4">
              {[1, 2, 3].map((idx) => (
                <div key={idx} className="bg-white p-4 rounded border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">Project Name Placeholder</h3>
                      <p className="text-gray-600">📍 City, Neighborhood</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">
                      Good Fit
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Price Range</p>
                      <p className="font-semibold">₪1.5M - ₪2.5M</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Sizes</p>
                      <p className="font-semibold">2-3 bedrooms</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Competition</p>
                      <p className="font-semibold">Medium</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <p className="text-gray-700 mb-6">
            Soon you'll be able to filter projects by:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">Budget Range</p>
              <p className="text-sm text-gray-600">From-to price range</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">Location</p>
              <p className="text-sm text-gray-600">Select cities or regions</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">Apartment Size</p>
              <p className="text-sm text-gray-600">Number of bedrooms</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">Competition Level</p>
              <p className="text-sm text-gray-600">Your winning probability</p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 p-6 bg-accent/10 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Next Step</h3>
        <p className="text-gray-700 mb-4">
          Once you've found projects that interest you, learn what to expect after winning.
        </p>
        <a href="/winner-roadmap" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors">
          View Winner Roadmap
        </a>
      </div>
    </div>
  )
}
