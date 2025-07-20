import React from 'react';

const ActivityTable = ({ activities }) => {
  return (
    <div className="pdf-page bg-white w-full min-h-screen p-6">
      <h2 className="text-2xl font-bold text-[#9333EA] mb-6">Activity Table</h2>

      {/* Activities Table */}
      <div className="overflow-hidden border border-gray-300 rounded-lg mb-8">
        <table className="w-full">
          <thead>
            <tr className="bg-[#291F5D] text-white">
              <th className="p-3 text-left text-sm font-bold">City</th>
              <th className="p-3 text-left text-sm font-bold">Activity</th>
              <th className="p-3 text-left text-sm font-bold">Type</th>
              <th className="p-3 text-left text-sm font-bold">Time Required</th>
            </tr>
          </thead>
          <tbody>
            {activities && activities.map((activity, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-[#F5F0FA]' : 'bg-white'}>
                <td className="p-3 text-sm">{activity.city || '-'}</td>
                <td className="p-3 text-sm">{activity.name || '-'}</td>
                <td className="p-3 text-sm">{activity.type || '-'}</td>
                <td className="p-3 text-sm">{activity.duration || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Terms and Conditions */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Terms and Conditions</h3>
        <div className="text-[#9333EA] text-sm underline cursor-pointer">
          View all terms and conditions
        </div>
      </div>
    </div>
  );
};

export default ActivityTable;
