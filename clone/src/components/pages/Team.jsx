const Team = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Our Team</h1>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-center mb-12">
            Our team brings together world-leading expertise in electrochemistry, engineering, and sustainable technology development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full"></div>
              <h3 className="text-xl font-bold mb-2">Dr. John Smith</h3>
              <p className="text-gray-600 mb-2">Chief Executive Officer</p>
              <p className="text-sm">20+ years experience in clean technology</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full"></div>
              <h3 className="text-xl font-bold mb-2">Dr. Sarah Johnson</h3>
              <p className="text-gray-600 mb-2">Chief Technology Officer</p>
              <p className="text-sm">PhD in Electrochemistry</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full"></div>
              <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
              <p className="text-gray-600 mb-2">Head of Operations</p>
              <p className="text-sm">15+ years in sustainable manufacturing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
