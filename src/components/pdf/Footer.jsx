import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="pdf-footer">
      <div className="flex justify-between items-center">
       
        <div className="flex-1">
          <div className="font-bold text-gray-800 text-sm">Vigovia Tech Pvt. Ltd</div>
          <div className="text-gray-600 text-xs">
            Registered Office: Hd-109 Cinnabar Hills,
          </div>
          <div className="text-gray-600 text-xs">
            Links Business Park, Karnataka, India.
          </div>
        </div>

        
        <div className="flex-1 text-center">
          <div>
            <div className="text-sm">
              <span className="font-semibold">Phone:</span> +91-99X9999999
            </div>
            <div className="text-sm">
              <span className="font-semibold">Email ID:</span> Contact@Vigovia.Com
            </div>
          </div>
        </div>

        
        <div className="flex-1 flex justify-end">
          <img 
            src={logo} 
            alt="Vigovia Logo" 
            className="h-10" 
            style={{
              maxWidth: "120px",
              objectFit: "contain"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;