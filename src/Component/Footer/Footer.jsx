import React from 'react';

const Footer = () => {
    return (
          <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold text-white">BrightPath Training Center</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Learn coding, languages, music, and wellness with expert trainers. 
              We focus on practical skills and real-world training.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-4">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" 
              className='w-10 h-10 rounded-2xl object-cover'
              alt="" />
              <img src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-392.jpg?semt=ais_hybrid&w=740&q=80" 
              className='w-10 h-10 rounded-2xl object-cover'
              alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHqvUv15Yv-jy95oOHmX9eCXRlfjW8jZIag&s" 
              className='w-10 h-10 rounded-2xl object-cover'
              alt="" />
             
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>

            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                📍 <span>123 Knowledge Road, Dhaka, Bangladesh</span>
              </li>
              <li className="flex gap-3">
                📞 <a href="tel:+8801712345678" className="hover:underline">+880 1708 954 352</a>
              </li>
              <li className="flex gap-3">
                ✉️ <a href="mailto:info@brightpath.com" className="hover:underline">info@brightpath.com</a>
              </li>
            </ul>

            <p className="mt-4 text-xs text-gray-400">
              Office Hours: Mon–Fri 10AM – 6PM
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#" className="hover:underline">Courses</a>
              <a href="#" className="hover:underline">Schedule</a>
              <a href="#" className="hover:underline">Instructors</a>
              <a href="#" className="hover:underline">Pricing</a>
              <a href="#" className="hover:underline">Blog</a>
              <a href="#privacy" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} BrightPath Training Center — All rights reserved.</p>

          <div className="flex gap-4 text-sm">
            <a href="/terms" className="hover:underline">Terms</a>
            <a href="/privacy" className="hover:underline">Privacy</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </div>

      </div>
    </footer>
    );
};

export default Footer;