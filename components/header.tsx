'use client';

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">
      <nav className="backdrop-blur-md bg-white/70 dark:bg-black/70 border border-gray-200/50 dark:border-gray-800/50 rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-black dark:bg-white text-white dark:text-black font-bold px-2 py-1 rounded flex items-center justify-center text-xl w-8 h-8">
            ✨
          </div>
          <span className="font-bold tracking-widest text-lg ml-1">super</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400 transition-colors" href="#pricing">
            Pricing
          </a>
          <a className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400 transition-colors" href="#solutions">
            Solutions
          </a>
          <a className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400 transition-colors" href="#resources">
            Resources
          </a>
          <a className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400 transition-colors" href="#contact">
            Contact Us
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400 transition-colors" href="#login">
            Login
          </a>
          <a className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105" href="#cta">
            Get Free Calls
          </a>
        </div>
      </nav>
    </header>
  );
}
