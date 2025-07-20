import React from 'react';
import logo from '../../assets/logo.png';

const DayPage = ({ day, dayNumber }) => {
  return (
    <div className="pdf-page bg-white w-full min-h-screen">
      
      <div className="bg-[#291F5D] text-white p-3 flex justify-center">
        <img src={logo} alt="Vigovia Logo" className="h-8 w-auto" />
      </div>

      <div className="flex h-full">
        
        <div className="bg-[#291F5D] text-white w-24 flex flex-col items-center justify-start p-4">
          <div className="text-xl font-bold mb-2">Day {dayNumber}</div>
          <div className="text-sm mb-4">{day.date || '-'}</div>
          <div className="text-xs text-center mb-4">{day.title || 'Day Activities'}</div>

          
          {day.image && (
            <div className="w-16 h-16 rounded overflow-hidden">
              <img src={day.image} alt={`Day ${dayNumber}`} className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        
        <div className="flex-1 p-6">
          <div className="relative">
            
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-400"></div>

            
            {['morning', 'afternoon', 'evening'].map((timeOfDay, index) => (
              <div key={timeOfDay} className="relative mb-12">
               
                <div className="absolute left-5 w-3 h-3 bg-white border-2 border-blue-500 rounded-full"></div>

                
                <div className="ml-12">
                  <h3 className="text-lg font-bold capitalize mb-3 text-gray-800">{timeOfDay}</h3>

                  {day[timeOfDay] && Array.isArray(day[timeOfDay]) && (
                    <ul className="space-y-2">
                      {day[timeOfDay].map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start text-sm">
                          <span className="mr-2 text-blue-500 font-bold">•</span>
                          <span className="text-gray-700">{activity}</span>
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
    </div>
  );
};

export default DayPage;
