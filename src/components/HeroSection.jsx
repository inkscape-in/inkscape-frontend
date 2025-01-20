import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-36">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-8">
          Where Stories Meet Ink ✍️
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-12">
          Something extraordinary is coming. We're crafting a space where creativity knows no bounds.
        </p>

        {/* Notification Form */}
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
                required
              />
              <button
                type="submit"
                className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                <span>Notify Me</span>
              </button>
            </form>
          ) : (
            <div className="text-green-600 text-lg">
              Thank you! We'll notify you when we launch.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
