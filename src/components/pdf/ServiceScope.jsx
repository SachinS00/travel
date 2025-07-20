import React from 'react';

const ServiceScope = () => {
  return (
    <div className="w-full mb-12">
      <h2 className="text-2xl font-bold mb-6">Scope Of <span className="text-purple">Service</span></h2>
      
      <div className="rounded-lg overflow-hidden mb-8">
        <table className="w-full">
          <thead>
            <tr className="bg-[#291F5D] text-white">
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#F5F0FA]">
              <td className="p-4">Flight Tickets And Hotel Vouchers</td>
              <td className="p-4">Delivered 3 Days Post Full Payment</td>
            </tr>
            <tr>
              <td className="p-4">Web Check-In</td>
              <td className="p-4">Boarding Pass Delivery Via Email/Whatsapp</td>
            </tr>
            <tr className="bg-[#F5F0FA]">
              <td className="p-4">Support</td>
              <td className="p-4">Chat Support - Response Time: 4 Hours</td>
            </tr>
            <tr>
              <td className="p-4">Cancellation Support</td>
              <td className="p-4">Provided</td>
            </tr>
            <tr className="bg-[#F5F0FA]">
              <td className="p-4">Trip Support</td>
              <td className="p-4">Response Time: 5 Minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceScope;