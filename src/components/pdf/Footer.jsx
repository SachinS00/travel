import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="border-t border-gray-300 pt-4 mt-8 text-xs text-gray-600">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold">Vigovia Tech Pvt. Ltd</div>
          <div>Registered Office: HD-109 Cinnabar Hills, Links Business Park, Karnataka, India</div>
        </div>
        <div className="text-right">
          <div>Phone: +91-99X9999999</div>
          <div>Email ID: Contact@Vigovia.Com</div>
        </div>
        <div className="flex items-center">
          <img src={logo} alt="Vigovia Logo" className="h-6 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
