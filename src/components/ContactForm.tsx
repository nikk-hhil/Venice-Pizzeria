"use client";

import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_wjy89wf';
    const templateId = 'template_9nq5ol6';
    const publicKey = 'm4D796ukHQNqt4ThI';
    
    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then(() => {  // Remove the parameter entirely instead of using _result
          setSubmitStatus({
            submitted: true,
            success: true,
            message: 'Thank you for your message! We will get back to you soon.'
          });
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
          
          setIsSubmitting(false);
        })
        .catch(() => {  // Remove the parameter entirely instead of using _error
          setSubmitStatus({
            submitted: true,
            success: false,
            message: 'Something went wrong. Please try again later.'
          });
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-red-800 mb-6">Send Us a Message</h2>
      
      {submitStatus.submitted && (
        <div className={`p-4 mb-6 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {submitStatus.message}
        </div>
      )}
      
      <form ref={form} onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-gray-800 font-medium mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
            >
              <option value="" className="text-gray-800">Select a subject</option>
              <option value="general" className="text-gray-800">General Inquiry</option>
              <option value="reservation" className="text-gray-800">Reservation</option>
              <option value="feedback" className="text-gray-800">Feedback</option>
              <option value="catering" className="text-gray-800">Catering</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
          />
        </div>
        
        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-red-700 text-white font-bold rounded-md hover:bg-red-800 transition-colors disabled:bg-red-400"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;