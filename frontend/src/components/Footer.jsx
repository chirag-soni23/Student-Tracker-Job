import React from 'react'
import {
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-white border-t border-gray-200 mt-16">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-300">
        
        {/* Brand Info */}
        <div className="max-w-96">
          <h1 className="text-2xl font-bold text-indigo-600">JobTracker</h1>
          <p className="mt-6 text-sm text-gray-500">
            Track all your job applications in one place and take control of your career journey.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-between">
          <div className="mt-6 md:mt-0">
            <h2 className="font-semibold text-gray-900 mb-5">RESOURCES</h2>
            <ul className="text-sm text-gray-500 space-y-2">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="font-semibold text-gray-900 mb-5">COMPANY</h2>
            <ul className="text-sm text-gray-500 space-y-2">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>

      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        © 2025 JobTracker. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
