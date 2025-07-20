import React from 'react';

const HotelBookings = ({ hotels }) => {
  return (
    <div className="pdf-page bg-white w-full min-h-screen p-6">
      <h2 className="text-2xl font-bold text-[#9333EA] mb-6">Hotel Bookings</h2>

      {/* Hotels Table */}
      <div className="overflow-hidden border border-gray-300 rounded-lg mb-8">
        <table className="w-full">
          <thead>
            <tr className="bg-[#291F5D] text-white">
              <th className="p-3 text-left text-sm font-bold">City</th>
              <th className="p-3 text-left text-sm font-bold">Check In</th>
              <th className="p-3 text-left text-sm font-bold">Check Out</th>
              <th className="p-3 text-left text-sm font-bold">Nights</th>
              <th className="p-3 text-left text-sm font-bold">Hotel Name</th>
            </tr>
          </thead>
          <tbody>
            {hotels && hotels.map((hotel, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-[#F5F0FA]' : 'bg-white'}>
                <td className="p-3 text-sm">{hotel.city || '-'}</td>
                <td className="p-3 text-sm">{hotel.checkIn || '-'}</td>
                <td className="p-3 text-sm">{hotel.checkOut || '-'}</td>
                <td className="p-3 text-sm">{hotel.nights || '-'}</td>
                <td className="p-3 text-sm">{hotel.hotelName || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Hotel Notes */}
      <div className="space-y-2">
        <div className="text-sm">
          <span className="font-semibold">1.</span> All Hotels Are Tentative And Can Be Replaced With Similar.
        </div>
        <div className="text-sm">
          <span className="font-semibold">2.</span> Breakfast Included For All Hotel Stays.
        </div>
        <div className="text-sm">
          <span className="font-semibold">3.</span> All Hotels Will Be 4* And Above Category
        </div>
        <div className="text-sm">
          <span className="font-semibold">4.</span> A maximum occupancy of 2 people/room is allowed in most hotels.
        </div>
      </div>
    </div>
  );
};

export default HotelBookings;
