const Impact = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Impact</h1>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Environmental</h3>
              <p>No water consumption</p>
              <p>No chemicals</p>
              <p>Renewably powered</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <p>Sustainable communities</p>
              <p>Local employment</p>
              <p>Clean energy transition</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Economic</h3>
              <p>Cost-efficient</p>
              <p>Scalable technology</p>
              <p>Market competitive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
