const DleR = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">DLE-R Technology</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            Our Direct Lithium Extraction and Refining (DLE-R) technology represents a breakthrough in sustainable lithium production.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Zero water consumption</li>
                <li>Chemical-free process</li>
                <li>Renewable energy powered</li>
                <li>High recovery rates</li>
                <li>Modular and scalable</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Benefits</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Environmentally friendly</li>
                <li>Cost-efficient</li>
                <li>Rapid deployment</li>
                <li>Flexible application</li>
                <li>High-quality output</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DleR;
