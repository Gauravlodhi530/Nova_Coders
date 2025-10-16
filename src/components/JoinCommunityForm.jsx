import React, { useState } from 'react';
import Button from './ui/Button';
import InputField from './ui/InputField';

// Simple select component using existing InputField styling
const FormSelect = ({ 
  label, 
  options, 
  value, 
  onChange, 
  error,
  required = false,
  placeholder = 'Select an option'
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`py-2 px-2 w-full bg-transparent border-b-2 border-gray-400 text-white focus:outline-none focus:border-[#60a5fa] transition-all duration-300 rounded-xl ${
          error ? "border-red-500 focus:ring-red-500" : ""
        }`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-gray-800">
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
};

// Main JoinCommunityForm component
const JoinCommunityForm = () => {
  // Simplified form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    year: '',
    interests: '',
    motivation: '',
    experience: '',
    github: '',
    linkedin: '',
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Static options - no need for useMemo for simple arrays
  const yearOptions = [
    { value: '1st', label: '1st Year' },
    { value: '2nd', label: '2nd Year' },
    { value: '3rd', label: '3rd Year' },
    { value: '4th', label: '4th Year' },
    { value: 'graduate', label: 'Graduate' },
    { value: 'other', label: 'Other' }
  ];

  const experienceOptions = [
    { value: 'beginner', label: 'Beginner (0-1 years)' },
    { value: 'intermediate', label: 'Intermediate (1-3 years)' },
    { value: 'advanced', label: 'Advanced (3+ years)' },
    { value: 'professional', label: 'Professional (5+ years)' }
  ];

  // Simplified validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.university.trim()) newErrors.university = 'University name is required';
    if (!formData.year) newErrors.year = 'Please select your year';
    if (!formData.interests.trim()) newErrors.interests = 'Tech interests required';
    if (!formData.motivation.trim()) newErrors.motivation = 'Motivation required';
    if (!formData.experience) newErrors.experience = 'Experience level required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Simple input change handler
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Simplified form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        fullName: '', email: '', phone: '', university: '',
        year: '', interests: '', motivation: '', experience: '',
        github: '', linkedin: '', newsletter: false
      });
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Join Our Community</h2>
        <p className="text-gray-400">
          Become part of Nova Coders and connect with fellow tech enthusiasts
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information Section */}
        <div className="bg-[#1a1a1f] rounded-xl p-6 border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              error={errors.fullName ? { message: errors.fullName } : null}
            />
            <InputField
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email ? { message: errors.email } : null}
            />
            <InputField
              label="Phone Number"
              type="tel"
              placeholder="+91 00000000"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              error={errors.phone ? { message: errors.phone } : null}
            />
            <InputField
              label="University/College"
              placeholder="Your university or college name"
              value={formData.university}
              onChange={(e) => handleInputChange('university', e.target.value)}
              error={errors.university ? { message: errors.university } : null}
            />
          </div>
        </div>

        {/* Academic & Experience Section */}
        <div className="bg-[#1a1a1f] rounded-xl p-6 border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Academic & Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormSelect
              label="Current Year"
              options={yearOptions}
              value={formData.year}
              onChange={(value) => handleInputChange('year', value)}
              error={errors.year}
              required
              placeholder="Select your current year"
            />
            <FormSelect
              label="Experience Level"
              options={experienceOptions}
              value={formData.experience}
              onChange={(value) => handleInputChange('experience', value)}
              error={errors.experience}
              required
              placeholder="Select your experience level"
            />
          </div>
        </div>

        {/* Tech Interests & Motivation Section */}
        <div className="bg-[#1a1a1f] rounded-xl p-6 border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Tech Interests & Motivation</h3>
          <div className="space-y-4">
            <InputField
              label="Tech Interests"
              placeholder="e.g., Web Development, AI/ML, Mobile Apps, Data Science..."
              value={formData.interests}
              onChange={(e) => handleInputChange('interests', e.target.value)}
              error={errors.interests ? { message: errors.interests } : null}
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Why do you want to join Nova Coders? <span className="text-red-400">*</span>
              </label>
              <textarea
                placeholder="Tell us about your motivation and what you hope to achieve..."
                value={formData.motivation}
                onChange={(e) => handleInputChange('motivation', e.target.value)}
                rows={4}
                className={`py-2 px-2 w-full bg-transparent border-b-2 border-gray-400 text-white placeholder-gray-200 focus:outline-none focus:border-[#60a5fa] transition-all duration-300 rounded-xl resize-none ${
                  errors.motivation ? "border-red-500 focus:ring-red-500" : ""
                }`}
              />
              {errors.motivation && (
                <p className="text-sm text-red-400 mt-1">{errors.motivation}</p>
              )}
            </div>
          </div>
        </div>

        {/* Social Links & Newsletter Section */}
        <div className="bg-[#1a1a1f] rounded-xl p-6 border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Social Links & Newsletter</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="GitHub Profile"
                placeholder="https://github.com/yourusername"
                value={formData.github}
                onChange={(e) => handleInputChange('github', e.target.value)}
              />
              <InputField
                label="LinkedIn Profile"
                placeholder="https://linkedin.com/in/yourusername"
                value={formData.linkedin}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
              />
            </div>
            <div className="flex items-start space-x-3 pt-2">
              <input
                type="checkbox"
                id="newsletter"
                checked={formData.newsletter}
                onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                className="mt-1 h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-700 bg-transparent rounded"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-300">
                I would like to receive updates about Nova Coders events, workshops, and opportunities via email.
              </label>
            </div>
          </div>
        </div>


        {/* Submit Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-900/50 border border-green-500 rounded-lg p-4">
            <p className="text-green-400 font-medium">
              🎉 Welcome to Nova Coders! Your application has been submitted successfully.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-4">
            <p className="text-red-400 font-medium">
              ❌ Something went wrong. Please try again later.
            </p>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            type="submit"
            variant="secondary"
            disabled={isSubmitting}
            className="px-8 py-3 text-lg"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              'Join the Community 🚀'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JoinCommunityForm;
