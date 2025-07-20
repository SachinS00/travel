import React from 'react';
import CoverPage from './CoverPage';
import DayPage from './DayPage';
import HotelBookings from './HotelBookings';
import ActivityTable from './ActivityTable';
import PaymentPlan from './PaymentPlan';
import Footer from './Footer';

const PDFTemplate = ({ formData }) => {
  return (
    <div id="pdf-content" className="bg-white">
      {/* Cover Page */}
      <CoverPage formData={formData} />
      <Footer />

      {/* Day Pages */}
      {formData.days && formData.days.map((day, index) => (
        <div key={index} className="page-break">
          <DayPage day={day} dayNumber={index + 1} />
          <Footer />
        </div>
      ))}

      {/* Hotel Bookings Page */}
      {formData.hotels && formData.hotels.length > 0 && (
        <div className="page-break">
          <HotelBookings hotels={formData.hotels} />
          <Footer />
        </div>
      )}

      {/* Activity Table Page */}
      {formData.activities && formData.activities.length > 0 && (
        <div className="page-break">
          <ActivityTable activities={formData.activities} />
          <Footer />
        </div>
      )}

      {/* Payment Plan Page */}
      {formData.paymentPlan && (
        <div className="page-break">
          <PaymentPlan paymentPlan={formData.paymentPlan} />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default PDFTemplate;
