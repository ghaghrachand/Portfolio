import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Contact() {
  // Check if there is an access key in environment variables, else leave empty
  const defaultKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    access_key: defaultKey
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
    if (!key) {
      setStatus({
        loading: false,
        success: false,
        error: 'Web3Forms Access Key is missing. Please add it to your .env file.'
      });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: key,
          from_name: 'CHAND Portfolio',
          subject: formData.subject ? `Portfolio - ${formData.subject}` : `New message from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ loading: false, success: true, error: null });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: result.message || 'Submission failed. Please check your Access Key.'
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: 'Network error. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="pt-10 pb-24 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Decorative background light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Have a project in mind or want to hire me? Fill out the form below and it will send directly to my email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass p-8 rounded-2xl border border-slate-200/60 h-full flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Feel free to contact me via email or phone. I usually respond within 24 hours on weekdays.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-50 border border-purple-100 text-purple-600 rounded-xl">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</h4>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=ghaghrachand9798@gmail.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 font-semibold hover:text-purple-600 transition-colors"
                    >
                      ghaghrachand9798@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone Number</h4>
                    <a href="tel:+917984412148" className="text-slate-800 font-semibold hover:text-blue-600 transition-colors">
                      +91 7984412148
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-cyan-50 border border-cyan-100 text-cyan-600 rounded-xl">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</h4>
                    <p className="text-slate-800 font-semibold">Remote / India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 glass p-8 rounded-2xl border border-slate-200/60 space-y-6 shadow-sm">

            {/* Status Messages */}
            {status.success && (
              <div className="flex items-center bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-xl space-x-3 text-sm">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Thank you! Your message has been sent successfully. </span>
              </div>
            )}

            {status.error && (
              <div className="flex items-center bg-rose-50 border border-rose-100 text-rose-800 p-4 rounded-xl space-x-3 text-sm">
                <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0" />
                <span>{status.error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full bg-white border ${errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-200 focus:border-purple-600'} focus:ring-1 focus:ring-purple-600 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition duration-150 shadow-sm`}
                />
                {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full bg-white border ${errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-200 focus:border-purple-600'} focus:ring-1 focus:ring-purple-600 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition duration-150 shadow-sm`}
                />
                {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="w-full bg-white border border-slate-200 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition duration-150 shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me about your project..."
                className={`w-full bg-white border ${errors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-200 focus:border-purple-600'} focus:ring-1 focus:ring-purple-600 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition duration-150 resize-none shadow-sm`}
              />
              {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md shadow-purple-600/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status.loading ? (
                <span className="flex items-center space-x-2">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Sending Message...</span>
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </span>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
