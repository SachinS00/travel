import React from 'react';

const FlightSummary = ({ flights = [] }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Flight <span className="text-purple">Summary</span></h2>
      
      <div className="space-y-4">
        {flights && flights.length > 0 ? (
          flights.map((flight, index) => (
            <div key={index} className="bg-[#f8f0ff] rounded-lg p-4 flex items-center">
              <div className="w-28 text-sm text-gray-700 font-medium">
                {flight.date || 'Thu 10 Jan\'24'}
              </div>
              <div className="flex-1">
                Fly Air India From {flight.from || 'Delhi'} ({flight.fromCode || 'DEL'}) To {flight.to || 'Singapore'} ({flight.toCode || 'SIN'}).
              </div>
            </div>
          ))
        ) : (
          
          [...Array(4)].map((_, index) => (
            <div key={index} className="bg-[#f8f0ff] rounded-lg p-4 flex items-center">
              <div className="w-28 text-sm text-gray-700 font-medium">
                Thu 10 Jan'24
              </div>
              <div className="flex-1">
                Fly Air India From Delhi (DEL) To Singapore (SIN).
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-4 text-xs text-gray-600">
        Note: All Flights Include Meals, Seat Choice (Excluding XL), And 23kg/25kg Checked Baggage.
      </div>
    </div>
  );
};

export default FlightSummary;