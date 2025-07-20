import { useState, useEffect } from 'react';
import { generateItineraryPDF } from '../utils/pdfGenerator';

const ItineraryForm = ({ onPreview }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    title: 'Singapore Itinerary',
    travelerName: 'Rahul',
    destination: 'Singapore',
    departureFrom: 'Delhi',
    departureDate: '2025-06-09',
    arrivalDate: '2025-06-15',
    numberOfDays: 6,
    numberOfNights: 5,
    numberOfTravelers: 4,

    // Days
    days: [
      {
        date: '2025-06-09',
        title: 'Arrival in Singapore & City Exploration',
        morning: ['Arrive In Singapore. Transfer From Airport To Hotel.'],
        afternoon: [
          'Check Into Your Hotel.',
          'Visit Marina Bay Sands Sky Park (2-3 Hours).',
          'Optional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.'
        ],
        evening: ['Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)'],
        image: null
      }
    ],

    // Hotels
    hotels: [
      {
        city: 'Singapore',
        hotelName: 'Super Townhouse Oak Vashi Formerly Blue Diamond',
        checkIn: '2025-06-09',
        checkOut: '2025-06-15',
        nights: 5
      }
    ],

    // Activities
    activities: [
      {
        city: 'Singapore',
        name: 'Marina Bay Sands Sky Park',
        type: 'Nature/Sightseeing',
        duration: '2-3 Hours'
      },
      {
        city: 'Singapore',
        name: 'Gardens By The Bay',
        type: 'Nature/Sightseeing',
        duration: '3-4 Hours'
      }
    ],

    // Payment Plan
    paymentPlan: {
      totalAmount: '₹ 9,00,000 For 3 Pax (Inclusive Of GST)',
      tcs: 'Not Collected',
      installments: [
        { name: 'Installment 1', amount: '₹3,50,000', dueDate: 'Initial Payment' },
        { name: 'Installment 2', amount: '₹4,00,000', dueDate: 'Post Visa Approval' },
        { name: 'Installment 3', amount: 'Remaining', dueDate: '20 Days Before Departure' }
      ],
      visa: {
        type: 'Tourist',
        validity: '30 Days',
        processingDate: '14/06/2025'
      }
    },

    // Inclusion Summary
    inclusions: [
      { category: 'Flight', count: 2, details: 'All Flights Mentioned', status: 'Awaiting Confirmation' },
      { category: 'Tourist Tax', count: 2, details: 'Yotel (Singapore), Oakwood (Sydney), Mercure (Cairns), Novotel (Gold Coast), Holiday inn (Melbourne)', status: 'Awaiting Confirmation' },
      { category: 'Hotel', count: 5, details: 'Airport To Hotel - Hotel To Attractions - Day Trips If Any', status: 'Included' }
    ],

    // Services
    services: [
      { service: 'Flight Tickets And Hotel Vouchers', details: 'Delivered 3 Days Post Full Payment' },
      { service: 'Web Check-in', details: 'Boarding Pass Delivery Via Email/WhatsApp' },
      { service: 'Support', details: 'Chat Support - Response Time: 4 Hours' },
      { service: 'Cancellation Support', details: 'Provided' },
      { service: 'Trip Support', details: 'Response Time: 5 Minutes' }
    ],

    // Important Notes
    notes: [
      { point: 'Airlines Standard Policy', details: 'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancelable Component Cannot Be Reimbursed At Any Cost.' },
      { point: 'Flight/Hotel Cancellation', details: 'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancelable Component Cannot Be Reimbursed At Any Cost.' },
      { point: 'Trip Insurance', details: 'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancelable Component Cannot Be Reimbursed At Any Cost.' },
      { point: 'Hotel Check-In & Check Out', details: 'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancelable Component Cannot Be Reimbursed At Any Cost.' },
      { point: 'Visa Rejection', details: 'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancelable Component Cannot Be Reimbursed At Any Cost.' }
    ]
  });

  const totalSteps = 6;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleInputChange = (section, field, value) => {
    if (section) {
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [field]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [field]: value
      });
    }
  };

  const handleDayChange = (dayIndex, field, value) => {
    const updatedDays = [...formData.days];
    updatedDays[dayIndex][field] = value;

    setFormData({
      ...formData,
      days: updatedDays
    });
  };

  const handleDayActivityChange = (dayIndex, timeOfDay, activityIndex, value) => {
    const updatedDays = [...formData.days];
    const activities = [...updatedDays[dayIndex][timeOfDay]];
    activities[activityIndex] = value;

    updatedDays[dayIndex][timeOfDay] = activities;

    setFormData({
      ...formData,
      days: updatedDays
    });
  };

  const addDayActivity = (dayIndex, timeOfDay) => {
    const updatedDays = [...formData.days];
    updatedDays[dayIndex][timeOfDay].push('');

    setFormData({
      ...formData,
      days: updatedDays
    });
  };

  const removeDayActivity = (dayIndex, timeOfDay, activityIndex) => {
    const updatedDays = [...formData.days];
    updatedDays[dayIndex][timeOfDay].splice(activityIndex, 1);

    setFormData({
      ...formData,
      days: updatedDays
    });
  };

  const addDay = () => {
    const newDayNumber = formData.days.length + 1;

    setFormData({
      ...formData,
      days: [
        ...formData.days,
        {
          date: '',
          title: `Day ${newDayNumber} Activities`,
          morning: [''],
          afternoon: [''],
          evening: [''],
          image: null
        }
      ],
      numberOfDays: newDayNumber
    });
  };

  const removeDay = (dayIndex) => {
    if (formData.days.length > 1) {
      const updatedDays = [...formData.days];
      updatedDays.splice(dayIndex, 1);

      setFormData({
        ...formData,
        days: updatedDays,
        numberOfDays: updatedDays.length
      });
    }
  };

  const addHotel = () => {
    setFormData({
      ...formData,
      hotels: [
        ...formData.hotels,
        {
          city: '',
          hotelName: '',
          checkIn: '',
          checkOut: '',
          nights: 1
        }
      ]
    });
  };

  const handleHotelChange = (hotelIndex, field, value) => {
    const updatedHotels = [...formData.hotels];
    updatedHotels[hotelIndex][field] = value;

    setFormData({
      ...formData,
      hotels: updatedHotels
    });
  };

  const removeHotel = (hotelIndex) => {
    const updatedHotels = [...formData.hotels];
    updatedHotels.splice(hotelIndex, 1);

    setFormData({
      ...formData,
      hotels: updatedHotels
    });
  };

  const addActivity = () => {
    setFormData({
      ...formData,
      activities: [
        ...formData.activities,
        {
          city: '',
          name: '',
          type: '',
          duration: ''
        }
      ]
    });
  };

  const handleActivityChange = (activityIndex, field, value) => {
    const updatedActivities = [...formData.activities];
    updatedActivities[activityIndex][field] = value;

    setFormData({
      ...formData,
      activities: updatedActivities
    });
  };

  const removeActivity = (activityIndex) => {
    const updatedActivities = [...formData.activities];
    updatedActivities.splice(activityIndex, 1);

    setFormData({
      ...formData,
      activities: updatedActivities
    });
  };

  const handleGeneratePDF = () => {
    generateItineraryPDF(formData);
  };

  const stepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-purple-800">Basic Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Itinerary Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange(null, 'title', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Traveler Name
                </label>
                <input
                  type="text"
                  value={formData.travelerName}
                  onChange={(e) => handleInputChange(null, 'travelerName', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Destination
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => handleInputChange(null, 'destination', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Departure From
                </label>
                <input
                  type="text"
                  value={formData.departureFrom}
                  onChange={(e) => handleInputChange(null, 'departureFrom', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Departure Date
                </label>
                <input
                  type="date"
                  value={formData.departureDate}
                  onChange={(e) => handleInputChange(null, 'departureDate', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Arrival Date
                </label>
                <input
                  type="date"
                  value={formData.arrivalDate}
                  onChange={(e) => handleInputChange(null, 'arrivalDate', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Number of Days
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.numberOfDays}
                  onChange={(e) => {
                    const days = parseInt(e.target.value) || 1;

                    // Update current days array
                    let updatedDays = [...formData.days];

                    if (days > updatedDays.length) {
                      // Add new days
                      for (let i = updatedDays.length; i < days; i++) {
                        updatedDays.push({
                          date: '',
                          title: `Day ${i + 1} Activities`,
                          morning: [''],
                          afternoon: [''],
                          evening: [''],
                          image: null
                        });
                      }
                    } else if (days < updatedDays.length) {
                      // Remove days
                      updatedDays = updatedDays.slice(0, days);
                    }

                    setFormData({
                      ...formData,
                      numberOfDays: days,
                      days: updatedDays
                    });
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Number of Nights
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.numberOfNights}
                  onChange={(e) => handleInputChange(null, 'numberOfNights', parseInt(e.target.value) || 0)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Number of Travelers
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.numberOfTravelers}
                  onChange={(e) => handleInputChange(null, 'numberOfTravelers', parseInt(e.target.value) || 1)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-purple-800">Itinerary Days</h2>
              <button
                onClick={addDay}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
              >
                Add Day
              </button>
            </div>

            {formData.days.map((day, dayIndex) => (
              <div key={dayIndex} className="mb-8 border-b pb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Day {dayIndex + 1}</h3>
                  {formData.days.length > 1 && (
                    <button
                      onClick={() => removeDay(dayIndex)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove Day
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      value={day.date}
                      onChange={(e) => handleDayChange(dayIndex, 'date', e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Title/Description
                    </label>
                    <input
                      type="text"
                      value={day.title}
                      onChange={(e) => handleDayChange(dayIndex, 'title', e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>

                {/* Morning Activities */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-gray-700 text-sm font-bold">
                      Morning Activities
                    </label>
                    <button
                      onClick={() => addDayActivity(dayIndex, 'morning')}
                      className="text-purple-600 hover:text-purple-800 text-sm"
                    >
                      Add Activity
                    </button>
                  </div>

                  {day.morning.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={activity}
                        onChange={(e) => handleDayActivityChange(dayIndex, 'morning', actIndex, e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {day.morning.length > 1 && (
                        <button
                          onClick={() => removeDayActivity(dayIndex, 'morning', actIndex)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Afternoon Activities */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-gray-700 text-sm font-bold">
                      Afternoon Activities
                    </label>
                    <button
                      onClick={() => addDayActivity(dayIndex, 'afternoon')}
                      className="text-purple-600 hover:text-purple-800 text-sm"
                    >
                      Add Activity
                    </button>
                  </div>

                  {day.afternoon.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={activity}
                        onChange={(e) => handleDayActivityChange(dayIndex, 'afternoon', actIndex, e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {day.afternoon.length > 1 && (
                        <button
                          onClick={() => removeDayActivity(dayIndex, 'afternoon', actIndex)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Evening Activities */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-gray-700 text-sm font-bold">
                      Evening Activities
                    </label>
                    <button
                      onClick={() => addDayActivity(dayIndex, 'evening')}
                      className="text-purple-600 hover:text-purple-800 text-sm"
                    >
                      Add Activity
                    </button>
                  </div>

                  {day.evening.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={activity}
                        onChange={(e) => handleDayActivityChange(dayIndex, 'evening', actIndex, e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {day.evening.length > 1 && (
                        <button
                          onClick={() => removeDayActivity(dayIndex, 'evening', actIndex)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Image Upload - In a real app you'd handle file uploads */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Day Image (Optional)
                  </label>
                  <input
                    type="file"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <p className="text-xs text-gray-500 mt-1">This will be displayed in the day sidebar.</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 3:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-purple-800">Hotel Bookings</h2>
              <button
                onClick={addHotel}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
              >
                Add Hotel
              </button>
            </div>

            {formData.hotels.map((hotel, hotelIndex) => (
              <div key={hotelIndex} className="mb-6 border-b pb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Hotel {hotelIndex + 1}</h3>
                  {formData.hotels.length > 1 && (
                    <button
                      onClick={() => removeHotel(hotelIndex)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove Hotel
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={hotel.city}
                      onChange={(e) => handleHotelChange(hotelIndex, 'city', e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Hotel Name
                    </label>
                    <input
                      type="text"
                      value={hotel.hotelName}
                      onChange={(e) => handleHotelChange(hotelIndex, 'hotelName', e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Check In
                    </label>
                    <input
                      type="date"
                      value={hotel.checkIn}
                      onChange={(e) => handleHotelChange(hotelIndex, 'checkIn', e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Check Out
                    </label>
                    <input
                      type="date"
                      value={hotel.checkOut}
                      onChange={(e) => handleHotelChange(hotelIndex, 'checkOut', e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Nights
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={hotel.nights}
                      onChange={(e) => handleHotelChange(hotelIndex, 'nights', parseInt(e.target.value) || 1)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-purple-800">Activities</h2>
              <button
                onClick={addActivity}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
              >
                Add Activity
              </button>
            </div>

            {formData.activities.map((activity, activityIndex) => (
              <div key={activityIndex} className="mb-6 border-b pb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Activity {activityIndex + 1}</h3>
                  {formData.activities.length > 1 && (
                    <button
                      onClick={() => removeActivity(activityIndex)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove Activity
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={activity.city}
                      onChange={(e) => handleActivityChange(activityIndex, 'city', e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Activity Name
                    </label>
                    <input
                      type="text"
                      value={activity.name}
                      onChange={(e) => handleActivityChange(activityIndex, 'name', e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Type
                    </label>
                    <select
                      value={activity.type}
                      onChange={(e) => handleActivityChange(activityIndex, 'type', e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">Select type</option>
                      <option value="Nature/Sightseeing">Nature/Sightseeing</option>
                      <option value="Adventure">Adventure</option>
                      <option value="Cultural">Cultural</option>
                      <option value="Leisure">Leisure</option>
                      <option value="Airlines Standard">Airlines Standard</option>
                      <option value="Shopping">Shopping</option>
                      <option value="Food Tour">Food Tour</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Duration
                    </label>
                    <input
                      type="text"
                      value={activity.duration}
                      onChange={(e) => handleActivityChange(activityIndex, 'duration', e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="e.g., 2-3 Hours"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 5:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-purple-800">Payment Details</h2>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Total Amount
              </label>
              <input
                type="text"
                value={formData.paymentPlan.totalAmount}
                onChange={(e) => handleInputChange('paymentPlan', 'totalAmount', e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g., ₹ 9,00,000 For 3 Pax (Inclusive Of GST)"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                TCS
              </label>
              <input
                type="text"
                value={formData.paymentPlan.tcs}
                onChange={(e) => handleInputChange('paymentPlan', 'tcs', e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <h3 className="font-medium text-lg mt-8 mb-4">Installments</h3>

            {formData.paymentPlan.installments.map((installment, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Installment Name
                  </label>
                  <input
                    type="text"
                    value={installment.name}
                    onChange={(e) => {
                      const updatedInstallments = [...formData.paymentPlan.installments];
                      updatedInstallments[index].name = e.target.value;

                      handleInputChange('paymentPlan', 'installments', updatedInstallments);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Amount
                  </label>
                  <input
                    type="text"
                    value={installment.amount}
                    onChange={(e) => {
                      const updatedInstallments = [...formData.paymentPlan.installments];
                      updatedInstallments[index].amount = e.target.value;

                      handleInputChange('paymentPlan', 'installments', updatedInstallments);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Due Date
                  </label>
                  <input
                    type="text"
                    value={installment.dueDate}
                    onChange={(e) => {
                      const updatedInstallments = [...formData.paymentPlan.installments];
                      updatedInstallments[index].dueDate = e.target.value;

                      handleInputChange('paymentPlan', 'installments', updatedInstallments);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            ))}

            <h3 className="font-medium text-lg mt-8 mb-4">Visa Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Visa Type
                </label>
                <input
                  type="text"
                  value={formData.paymentPlan.visa.type}
                  onChange={(e) => {
                    const updatedVisa = { ...formData.paymentPlan.visa, type: e.target.value };
                    handleInputChange('paymentPlan', 'visa', updatedVisa);
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Validity
                </label>
                <input
                  type="text"
                  value={formData.paymentPlan.visa.validity}
                  onChange={(e) => {
                    const updatedVisa = { ...formData.paymentPlan.visa, validity: e.target.value };
                    handleInputChange('paymentPlan', 'visa', updatedVisa);
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Processing Date
                </label>
                <input
                  type="text"
                  value={formData.paymentPlan.visa.processingDate}
                  onChange={(e) => {
                    const updatedVisa = { ...formData.paymentPlan.visa, processingDate: e.target.value };
                    handleInputChange('paymentPlan', 'visa', updatedVisa);
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-purple-800">Generate Itinerary</h2>

            <div className="p-4 bg-purple-50 mb-6 rounded-md">
              <h3 className="font-medium text-lg mb-2">Preview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold">Itinerary Title:</p>
                  <p className="text-gray-700">{formData.title}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold">Traveler:</p>
                  <p className="text-gray-700">{formData.travelerName}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold">Destination:</p>
                  <p className="text-gray-700">{formData.destination}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold">Duration:</p>
                  <p className="text-gray-700">{formData.numberOfDays} days, {formData.numberOfNights} nights</p>
                </div>

                <div>
                  <p className="text-sm font-semibold">Travel Dates:</p>
                  <p className="text-gray-700">{formData.departureDate} - {formData.arrivalDate}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold">Number of Travelers:</p>
                  <p className="text-gray-700">{formData.numberOfTravelers}</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm font-semibold">Summary:</p>
                <p className="text-gray-700">
                  This itinerary includes {formData.hotels.length} hotel(s),
                  {formData.activities.length} activities across {formData.numberOfDays} days.
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              {onPreview && (
                <button
                  onClick={() => onPreview(formData)}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-lg focus:outline-none focus:shadow-outline"
                >
                  Preview Itinerary
                </button>
              )}

              <button
                onClick={handleGeneratePDF}
                className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full shadow-lg focus:outline-none focus:shadow-outline"
              >
                Generate Itinerary PDF
              </button>
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">
              Preview your itinerary or generate it as a downloadable PDF.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 my-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-800">Create Your Travel Itinerary</h1>
        <p className="text-gray-600">Complete each section to generate your customized travel plan</p>
      </header>

      <div className="mb-8">
        <div className="flex items-center">
          {[...Array(totalSteps)].map((_, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep > index
                    ? 'bg-purple-600 text-white'
                    : currentStep === index + 1
                      ? 'bg-purple-200 border-2 border-purple-600 text-purple-800'
                      : 'bg-gray-200 text-gray-600'
                  }`}
              >
                {index + 1}
              </div>
              {index < totalSteps - 1 && (
                <div
                  className={`h-1 w-16 mx-1 ${currentStep > index + 1 ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-2 flex justify-between">
          <div className="text-sm font-medium text-purple-800">Basic Info</div>
          <div className="text-sm font-medium text-purple-800">Days</div>
          <div className="text-sm font-medium text-purple-800">Hotels</div>
          <div className="text-sm font-medium text-purple-800">Activities</div>
          <div className="text-sm font-medium text-purple-800">Payment</div>
          <div className="text-sm font-medium text-purple-800">Generate</div>
        </div>
      </div>

      {stepContent()}

      <div className="mt-8 flex justify-between">
        {currentStep > 1 && (
          <button
            onClick={prevStep}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full"
          >
            Previous
          </button>
        )}
        {currentStep < totalSteps && (
          <button
            onClick={nextStep}
            className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-full ml-auto"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ItineraryForm;