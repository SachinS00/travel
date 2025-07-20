import React from 'react';

const InclusionSummary = ({ inclusions = [] }) => {
  
  const defaultInclusions = [
    {
      category: 'Flight',
      count: 2,
      details: 'All Flights Mentioned',
      status: 'Awaiting Confirmation'
    },
    {
      category: 'Tourist Tax',
      count: 2,
      details: 'Yotel (Singapore), Oakwood (Sydney), Mercure (Cairns), Novotel (Gold Coast), Holiday Inn (Melbourne)',
      status: 'Awaiting Confirmation'
    },
    {
      category: 'Hotel',
      count: 2,
      details: 'Airport To Hotel - Hotel To Attractions - Day Trips If Any',
      status: 'Included'
    }
  ];

  const displayInclusions = inclusions.length > 0 ? inclusions : defaultInclusions;

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Inclusion <span className="text-purple">Summary</span></h2>
      
      <div className="rounded-lg overflow-hidden mb-8">
        <table className="w-full">
          <thead>
            <tr className="bg-[#291F5D] text-white">
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Count</th>
              <th className="p-4 text-left">Details</th>
              <th className="p-4 text-left">Status / Comments</th>
            </tr>
          </thead>
          <tbody>
            {displayInclusions.map((inclusion, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-[#F5F0FA]" : ""}>
                <td className="p-4">{inclusion.category}</td>
                <td className="p-4">{inclusion.count}</td>
                <td className="p-4">{inclusion.details}</td>
                <td className="p-4">{inclusion.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-sm border-t border-gray-200 pt-4">
        <p className="font-semibold">Transfer Policy/Refundable (Upon Claim)</p>
        <p className="text-gray-600">If Any Transfer Is Delayed Beyond 15 Minutes, Customers May Book An App-Based Or Radio Taxi And Claim A Refund For That Specific Leg.</p>
      </div>
    </div>
  );
};

export default InclusionSummary;