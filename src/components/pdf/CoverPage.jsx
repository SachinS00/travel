import React from 'react';
import logo from '../../assets/logo.png';

const CoverPage = ({ formData }) => {
  return (
    <div className="pdf-page bg-white w-full min-h-screen">
    
      <div className="bg-gradient-to-b from-[#56A3FF] to-[#567AFF] text-white p-8 text-center">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Vigovia Logo" className="h-12 w-auto" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Hi, {formData.travelerName || 'Traveler'}!</h1>
        <h2 className="text-2xl mb-2">{formData.destination || 'Travel'} Itinerary</h2>
        <p className="text-lg">{formData.numberOfDays || 0} Days {formData.numberOfNights || 0} Nights</p>

        
        <div className="flex justify-center space-x-4 mt-4 text-2xl">
          <span>✈️</span>
          <span>🏨</span>
          <span>🧳</span>
          <span>🚗</span>
          <span>🚢</span>
        </div>
      </div>

     
      <div className="p-6">
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-bold text-sm">Departure From</th>
                <th className="p-3 text-left font-bold text-sm">Departure</th>
                <th className="p-3 text-left font-bold text-sm">Arrival</th>
                <th className="p-3 text-left font-bold text-sm">Destination</th>
                <th className="p-3 text-left font-bold text-sm">No. Of Travellers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 text-sm">{formData.departureFrom || '-'}</td>
                <td className="p-3 text-sm">{formData.departureDate || '-'}</td>
                <td className="p-3 text-sm">{formData.arrivalDate || '-'}</td>
                <td className="p-3 text-sm">{formData.destination || '-'}</td>
                <td className="p-3 text-sm">{formData.numberOfTravelers || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        
        <div className="mt-8 space-y-6">
          {formData.days && formData.days.slice(0, 2).map((day, index) => (
            <div key={index} className="flex border border-gray-200 rounded-lg overflow-hidden">
              
              <div className="bg-[#291F5D] text-white p-4 flex flex-col items-center justify-center w-24">
                <div className="text-lg font-bold">Day {index + 1}</div>
                <div className="text-xs mt-1">{day.date || '-'}</div>
                <div className="text-xs mt-2 text-center">{day.title || 'Activities'}</div>
              </div>

              
              <div className="flex-1 p-4">
                <div className="relative">
                  
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-300"></div>

                
                  {['morning', 'afternoon', 'evening'].map((timeOfDay, timeIndex) => (
                    <div key={timeOfDay} className="relative flex items-start mb-6">
                      
                      <div className="absolute left-3 w-2 h-2 bg-white border-2 border-blue-500 rounded-full"></div>

                      
                      <div className="ml-8">
                        <h4 className="font-bold text-sm capitalize mb-1">{timeOfDay}</h4>
                        {day[timeOfDay] && Array.isArray(day[timeOfDay]) && (
                          <ul className="text-xs space-y-1">
                            {day[timeOfDay].slice(0, 2).map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start">
                                <span className="mr-1">•</span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
