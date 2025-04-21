
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    subject: '',
    message: '',
    source: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // In a real implementation, you would send this data to your backend
    // For demo purposes, we'll simulate a successful submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      // This would normally send an email to sales@nexusglobal.sa
      
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        subject: '',
        message: '',
        source: ''
      });
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const resetForm = () => {
    setIsSuccess(false);
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left side - Content */}
              <div className="bg-primary text-white p-8 lg:p-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Talk to Us & Kickstart Your Project Today!
                </h1>
                <p className="text-lg mb-8 text-gray-100">
                  Connect with our experts and take your vision from concept to reality. Here's what you can expect:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span>Fast Response: Get a reply within 24 hours—no delays, just action.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span>Direct Access to Experts: Speak with product strategists and tech specialists, not account managers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span>Tailored Guidance: Receive customized recommendations aligned with your business goals.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span>Clear Roadmap: Get a structured plan to accelerate your project's success.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span>End-to-End Support: From ideation to deployment, we're with you at every step.</span>
                  </li>
                </ul>
                <p className="mt-8 text-lg font-medium">
                  Let's build something great together—reach out today!
                </p>
              </div>
              
              {/* Right side - Form */}
              <div className="p-8 lg:p-12">
                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="text-green-500 text-5xl mb-4">✓</div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">Thank You!</h2>
                    <p className="text-gray-600 mb-8">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={resetForm}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6 text-primary">Contact Us</h2>
                    
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Cell Number</label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          required
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Enquiry Details</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                        ></textarea>
                      </div>
                      
                      <div>
                        <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                        <select
                          id="source"
                          name="source"
                          value={formData.source}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                        >
                          <option value="">Please select...</option>
                          <option value="Search">Search Engine</option>
                          <option value="Social">Social Media</option>
                          <option value="Referral">Referral</option>
                          <option value="Event">Event/Conference</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      {error && (
                        <div className="text-red-600 bg-red-50 p-3 rounded-md">{error}</div>
                      )}
                      
                      <div className="flex justify-end space-x-4">
                        <Button type="button" variant="outline" onClick={() => setFormData({
                          name: '',
                          email: '',
                          phoneNumber: '',
                          companyName: '',
                          subject: '',
                          message: '',
                          source: ''
                        })}>
                          Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
