import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Top Navigation Links */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <a href="#" className="hover:text-purple-600">Bali Tour Packages</a>
                        <a href="#" className="hover:text-purple-600">Japan Tour Packages</a>
                        <a href="#" className="hover:text-purple-600">Vietnam Tour Packages</a>
                        <a href="#" className="hover:text-purple-600">Malaysia Tour Packages</a>
                        <a href="#" className="hover:text-purple-600">Thailand Tour Packages</a>
                        <a href="#" className="hover:text-purple-600">Europe Tour Packages</a>
                        <a href="#" className="hover:text-purple-600">Cultural Tour Packages</a>
                        <a href="#" className="hover:text-purple-600">Luxury Tour packages</a>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <a href="#" className="hover:text-purple-600">Dubai Tour Packages</a>
                        <a href="#" className="hover:text-purple-600">Turkey Tour Packages</a>
                        <a href="#" className="hover:text-purple-600">UAE Tour Packages</a>
                        <a href="#" className="hover:text-purple-600">Singapore Tour Packages</a>
                        <a href="#" className="hover:text-purple-600">Australia Tour Packages</a>
                        <a href="#" className="hover:text-purple-600">South Korea Tour Packages</a>
                        <a href="#" className="hover:text-purple-600">Honeymoon Tour packages</a>
                        <a href="#" className="hover:text-purple-600">Adventure Tour packages</a>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
                    {/* Our offerings */}
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">Our offerings</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-purple-600">Holidays</a></li>
                            <li><a href="#" className="hover:text-purple-600">Visa</a></li>
                            <li><a href="#" className="hover:text-purple-600">Forex</a></li>
                            <li><a href="#" className="hover:text-purple-600">Hotels</a></li>
                            <li><a href="#" className="hover:text-purple-600">Flights</a></li>
                        </ul>
                    </div>

                    {/* Popular destinations */}
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">Popular destinations</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-purple-600">Dubai</a></li>
                            <li><a href="#" className="hover:text-purple-600">Bali</a></li>
                            <li><a href="#" className="hover:text-purple-600">Thailand</a></li>
                            <li><a href="#" className="hover:text-purple-600">Singapore</a></li>
                            <li><a href="#" className="hover:text-purple-600">Malaysia</a></li>
                        </ul>
                    </div>

                    {/* Vigovia Specials */}
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">Vigovia Specials</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-purple-600">Featured Experience</a></li>
                            <li><a href="#" className="hover:text-purple-600">Group Tours</a></li>
                            <li><a href="#" className="hover:text-purple-600">Backpackers Club</a></li>
                            <li><a href="#" className="hover:text-purple-600">Offline Events</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-purple-600">About Us</a></li>
                            <li><a href="#" className="hover:text-purple-600">Careers</a></li>
                            <li><a href="#" className="hover:text-purple-600">Vigovia Blog</a></li>
                            <li><a href="#" className="hover:text-purple-600">Partner Portal</a></li>
                            <li><a href="#" className="hover:text-purple-600">Accreditations</a></li>
                        </ul>
                    </div>

                    {/* More */}
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">More</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-purple-600">Investor Relations</a></li>
                            <li><a href="#" className="hover:text-purple-600">Forex</a></li>
                            <li><a href="#" className="hover:text-purple-600">FAQs</a></li>
                            <li><a href="#" className="hover:text-purple-600">Domestic Holidays</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <div className="bg-purple-600 text-white p-4 rounded-lg mb-4">
                            <p className="text-sm mb-2">Need help? Call us</p>
                            <p className="font-bold">+91-98xxx64541</p>
                            <p className="text-sm mt-2">Email</p>
                            <p className="text-sm">contact@vigovia.com</p>
                        </div>
                        <div className="text-sm text-gray-600">
                            <p className="font-semibold mb-1">Address</p>
                            <p>HD-109 Cinnabar Hills,Links Business Park,Bangalore</p>
                            <p>North Bangalore,Karnataka,India-560071</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                        {/* Logo and Payments */}
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-4 lg:mb-0">
                            <div className="flex items-center">
                                <span className="text-2xl font-bold text-purple-600">vigovia</span>
                                <span className="text-xs text-gray-500 ml-2">PLAN.PACK.GO</span>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-2">Payments</p>
                                <div className="flex gap-2">
                                    <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Razorpay</div>
                                    <div className="bg-purple-600 text-white px-2 py-1 rounded text-xs">stripe</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4">
                            <a href="#" className="bg-white p-2 rounded-full border hover:bg-gray-50">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="bg-white p-2 rounded-full border hover:bg-gray-50">
                                <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                                </svg>
                            </a>
                            <a href="#" className="bg-white p-2 rounded-full border hover:bg-gray-50">
                                <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="#" className="bg-white p-2 rounded-full border hover:bg-gray-50">
                                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Copyright and Legal */}
                    <div className="flex flex-col lg:flex-row justify-between items-center mt-8 pt-4 border-t text-sm text-gray-600">
                        <p>© 2025 Vigovia Travel Technologies (P) Ltd. All rights reserved.</p>
                        <div className="flex gap-4 mt-2 lg:mt-0">
                            <a href="#" className="hover:text-purple-600">Privacy policy</a>
                            <a href="#" className="hover:text-purple-600">Legal notice</a>
                            <a href="#" className="hover:text-purple-600">Accessibility</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
