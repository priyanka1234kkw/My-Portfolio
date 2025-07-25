// src/components/Contact.js
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create form data for submission
    const form = e.target;
    const formDataObj = new FormData(form);
    
    // Submit to Formspree
    fetch('https://formspree.io/f/mzzvbbyo', {
      method: 'POST',
      body: formDataObj,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Error sending message. Please try again.');
      }
    }).catch(error => {
      alert('Error sending message. Please try again.');
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white text-center"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-gray-600 text-sm font-semibold tracking-widest uppercase mb-2 block">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
          </div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Ready to discuss opportunities or have a project in mind? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg space-y-6 border border-gray-200">
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-vertical"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6 pt-4">
            <button
              type="button"
              onClick={() => {
                // Simple form submission simulation
                if (formData.name && formData.email && formData.message) {
                  alert('Message sent successfully! (Demo)');
                  setFormData({ name: '', email: '', message: '' });
                } else {
                  alert('Please fill in all fields.');
                }
              }}
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Send Message
            </button>

            <div className="flex justify-center sm:justify-end gap-6">
              <a
                href="https://linkedin.com/in/priyanka-kshirsagar-2a526329a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base font-medium group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:pskshirsagar370122@kkwagh.edu.in?subject=Let's Connect via Portfolio"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base font-medium group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.273L12 12.364l10.091-8.543h.273A1.636 1.636 0 0 1 24 5.457z"/>
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
}