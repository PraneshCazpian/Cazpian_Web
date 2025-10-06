import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { trackFormSubmission, trackEngagement } from '../components/Analytics';
import { FormValidation, FormField, SubmitButton, useFormValidation } from '../components/FormValidation';
import { ScrollAnimation, StaggerContainer } from '../components/ScrollAnimations';

// Form validation rules
const contactValidationRules = {
  name: {
    required: true,
    minLength: 2,
    custom: (value: string) => {
      if (!value.trim()) return 'Name is required';
      if (value.length < 2) return 'Name must be at least 2 characters';
      return null;
    }
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    custom: (value: string) => {
      if (!value.trim()) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
      return null;
    }
  },
  company: {
    required: false
  },
  topic: {
    required: true,
    custom: (value: string) => {
      if (!value) return 'Please select a topic';
      return null;
    }
  },
  message: {
    required: true,
    minLength: 10,
    custom: (value: string) => {
      if (!value.trim()) return 'Message is required';
      if (value.length < 10) return 'Message must be at least 10 characters';
      return null;
    }
  }
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur
  } = useFormValidation(contactValidationRules);

  const onSubmit = async (data: Record<string, string>) => {
    setSubmitError(null);
    
    try {
      // Track form submission attempt
      trackEngagement('contact_form_submission_attempt', data.topic);

      // In a real application, you would send this to your backend
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For now, log to console and localStorage as fallback
      console.log('Form submitted:', data);
      
      // Store submission in localStorage for demonstration
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...data,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      // Track successful submission
      trackFormSubmission('contact_form', true);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly.');
      trackFormSubmission('contact_form', false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center p-4">
        <SEO
          title="Thank You - Contact Cazpian"
          description="Thank you for contacting Cazpian. We'll get back to you shortly."
          url="/contact"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full mx-auto text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Thank You!</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We've received your message and will get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Another Message
            </button>
            <a
              href="/"
              className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
            >
              Back to Home
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <SEO
        title="Contact Us - Cazpian"
        description="Get in touch with Cazpian. Schedule a demo, ask questions, or learn more about our AI-powered data analytics platform. We're here to help."
        keywords="contact Cazpian, schedule demo, data analytics support, enterprise data platform"
        url="/contact"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Get in <span className="text-indigo-600">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0">
                Have questions about Cazpian? Want to schedule a demo? We're here to help you succeed with your data initiatives.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/vector_svg/email-capture-animate.svg" 
                alt="Contact Us"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-10 shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-500/5">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Get in Touch
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Send us a message
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>
                <FormValidation
                  rules={contactValidationRules}
                  onSubmit={onSubmit}
                  className="space-y-6"
                >
                  {/* Error Alert */}
                  <AnimatePresence>
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start space-x-3"
                        role="alert"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700 dark:text-red-300">{submitError}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      label="Full Name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={values.name || ''}
                      onChange={(value) => handleChange('name', value)}
                      onBlur={() => handleBlur('name')}
                      error={errors.name}
                      touched={touched.name}
                      required
                      className="group"
                    />
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={values.email || ''}
                      onChange={(value) => handleChange('email', value)}
                      onBlur={() => handleBlur('email')}
                      error={errors.email}
                      touched={touched.email}
                      required
                      className="group"
                    />
                  </div>
                  
                  <FormField
                    label="Company Name"
                    name="company"
                    type="text"
                    placeholder="Enter your company name (optional)"
                    value={values.company || ''}
                    onChange={(value) => handleChange('company', value)}
                    onBlur={() => handleBlur('company')}
                    error={errors.company}
                    touched={touched.company}
                    className="group"
                  />

                  <div className="space-y-3">
                    <label htmlFor="topic" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="topic"
                        value={values.topic || ''}
                        onChange={(e) => handleChange('topic', e.target.value)}
                        onBlur={() => handleBlur('topic')}
                        className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all duration-300 appearance-none cursor-pointer ${
                          errors.topic 
                            ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900/20' 
                            : touched.topic && !errors.topic && values.topic
                            ? 'border-green-500 dark:border-green-500 bg-green-50 dark:bg-green-900/20'
                            : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500'
                        }`}
                        aria-invalid={errors.topic ? 'true' : 'false'}
                      >
                        <option value="">Choose an inquiry type</option>
                        <option value="general">General Inquiry</option>
                        <option value="demo">Schedule Demo</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.topic && touched.topic && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 flex items-start space-x-2"
                        role="alert"
                      >
                        <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-600 dark:text-red-400">{errors.topic}</p>
                      </motion.div>
                    )}
                    {touched.topic && !errors.topic && values.topic && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 flex items-start space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-green-600 dark:text-green-400">Looks good!</p>
                      </motion.div>
                    )}
                  </div>

                  <FormField
                    label="Your Message"
                    name="message"
                    type="textarea"
                    placeholder="Tell us about your data challenges and how we can help you succeed..."
                    value={values.message || ''}
                    onChange={(value) => handleChange('message', value)}
                    onBlur={() => handleBlur('message')}
                    error={errors.message}
                    touched={touched.message}
                    required
                    rows={6}
                    className="group"
                  />

                  <div className="pt-4">
                    <SubmitButton
                      isSubmitting={isSubmitting}
                      className="w-full py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send Message
                        </div>
                      )}
                    </SubmitButton>
                  </div>
                </FormValidation>
              </div>
            </ScrollAnimation>

            {/* Contact Information */}
            <ScrollAnimation direction="right" delay={0.4}>
              <div className="space-y-10">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Information
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Let's start a conversation
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                    Our team of data experts is ready to help you transform your analytics. Choose the most convenient way to reach us.
                  </p>
                  <div className="flex justify-center lg:justify-start mb-10">
                    <div className="relative">
                      <img 
                        src="/vector_svg/file-searching-animate.svg" 
                        alt="Contact Support"
                        className="w-full max-w-sm h-auto drop-shadow-lg"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <StaggerContainer staggerDelay={0.1}>
                  <div className="space-y-6">
                    <motion.div 
                      className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
                      whileHover={{ x: 4, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Mail className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Support</h3>
                          <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">info@cazpian.ai</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">We'll respond within 24 hours</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
                      whileHover={{ x: 4, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Phone className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Phone Support</h3>
                          <p className="text-lg font-medium text-green-600 dark:text-green-400 mb-2">+1 (555) 123-4567</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri, 9AM-6PM PST</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                      whileHover={{ x: 4, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Office Location</h3>
                          <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">San Francisco, CA</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Remote-first company</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
                      whileHover={{ x: 4, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Clock className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Support Hours</h3>
                          <p className="text-lg font-medium text-orange-600 dark:text-orange-400 mb-2">24/7 Available</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Round-the-clock assistance</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </StaggerContainer>

                {/* Quick Links */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200/50 dark:border-indigo-700/50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Quick Actions</h3>
                  </div>
                  <div className="space-y-4">
                    <motion.a 
                      href="/book-meeting" 
                      className="group flex items-center justify-between p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                          <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Schedule a Demo</span>
                      </div>
                      <svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                    
                    <motion.a 
                      href="/resources" 
                      className="group flex items-center justify-between p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                          <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Documentation</span>
                      </div>
                      <svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                    
                    <motion.a 
                      href="/product" 
                      className="group flex items-center justify-between p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                          <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Product Overview</span>
                      </div>
                      <svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                How quickly can I get started?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can deploy Cazpian Cloud in under 5 minutes. For self-hosted deployments, our team can help you get up and running in a day.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                What kind of support do you offer?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enterprise customers get 24/7 support with dedicated success managers. Community users have access to our documentation and community forums.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Can I migrate from my current platform?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! We provide migration tools and support for moving from Snowflake, Databricks, BigQuery, and other platforms.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Is there a free trial available?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can start with our Agent Studio for free, or try Cazpian Cloud with a 14-day free trial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;