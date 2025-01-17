const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-center mb-8">
            Get in touch with us to learn more about our sustainable lithium technology.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <select
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">Select a subject</option>
                <option value="business">Business Inquiry</option>
                <option value="investor">Investor Relations</option>
                <option value="media">Media Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Office Location</h3>
            <p className="text-gray-600">
              123 Technology Drive<br />
              Innovation District<br />
              Sydney, NSW 2000<br />
              Australia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
