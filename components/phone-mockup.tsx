'use client';

import { useState } from 'react';

export function PhoneMockup() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
      {/* Floating accent circle */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white dark:border-gray-900 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center shadow-lg overflow-hidden">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>

      {/* Phone frame */}
      <div className="relative w-80 aspect-[1/2] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
        {/* Phone screen */}
        <div className="w-full h-full bg-white dark:bg-gray-950 rounded-[2.5rem] overflow-hidden relative flex flex-col items-center pt-10 px-6">
          {/* Notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full" />

          {/* Form content */}
          <div className="w-full space-y-4 mt-8">
            {/* Phone number input */}
            <div className="flex gap-2">
              <div className="w-16 h-12 border border-gray-300 dark:border-gray-700 rounded-xl flex items-center justify-center text-sm font-medium bg-gray-50 dark:bg-gray-900">
                +1 <span className="ml-1 text-xs">▼</span>
              </div>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 h-12 border border-gray-300 dark:border-gray-700 rounded-xl px-4 text-sm placeholder:text-gray-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
            </div>

            {/* Name input */}
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 border border-gray-300 dark:border-gray-700 rounded-xl px-4 text-sm placeholder:text-gray-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />

            {/* Email input */}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 border border-gray-300 dark:border-gray-700 rounded-xl px-4 text-sm placeholder:text-gray-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>

          {/* Demo counter */}
          <div className="mt-8 text-center">
            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium mb-4">Demo calls remaining: 3/3</p>
          </div>

          {/* CTA Button */}
          <div className="absolute bottom-12 w-[110%] left-[-5%]">
            <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-950 py-5 rounded-full flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-transform group font-bold text-xl">
              <span className="text-2xl">☎️</span>
              Get an AI Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
