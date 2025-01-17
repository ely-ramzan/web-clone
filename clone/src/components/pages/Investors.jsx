const Investors = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Investors</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8 text-center">
            Join us in revolutionizing sustainable lithium production for a cleaner future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Investment Highlights</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Patented DLE-R Technology</li>
                <li>Strong Market Position</li>
                <li>Experienced Management Team</li>
                <li>Sustainable Business Model</li>
                <li>Global Growth Potential</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Market Opportunity</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Growing EV Market</li>
                <li>Increasing Lithium Demand</li>
                <li>Focus on Sustainability</li>
                <li>Government Support</li>
                <li>Industry Partnerships</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Investor Relations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
