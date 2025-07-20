import React from 'react';
import CoverPage from './CoverPage';
import DayPage from './DayPage';
import HotelBookings from './HotelBookings';
import ActivityTable from './ActivityTable';
import PaymentPlan from './PaymentPlan';
import Footer from './Footer';
import FlightSummary from './FlightSummary';
import Notes from './Notes';
import ServiceScope from './ServiceScope';
import InclusionSummary from './InclusionSummary';

const PDFTemplate = ({ formData }) => {
  return (
    <div id="pdf-content" className="pdf-container">
      
      <div className="pdf-page">
        <CoverPage formData={formData} />
        <Footer />
      </div>

      
      {formData.days && formData.days.map((day, index) => (
        <div key={index} className="pdf-page">
          <DayPage day={day} dayNumber={index + 1} />
          <Footer />
        </div>
      ))}
      
      
      <div className="pdf-page">
        <div className="p-6">
          <FlightSummary flights={formData.flights} />
        </div>
        <Footer />
      </div>
      
      
      <div className="pdf-page">
        <div className="p-6">
          <HotelBookings hotels={formData.hotels} />
        </div>
        <Footer />
      </div>
      
      
      <div className="pdf-page">
        <div className="p-6">
          <ActivityTable activities={formData.activities} />
        </div>
        <Footer />
      </div>
      
      
      <div className="pdf-page">
        <div className="p-6">
          <PaymentPlan paymentPlan={formData.paymentPlan} />
        </div>
        <Footer />
      </div>
      
     
      <div className="pdf-page">
        <div className="p-6">
          <Notes />
        </div>
        <Footer />
      </div>
      
      
      <div className="pdf-page">
        <div className="p-6">
          <ServiceScope />
          <InclusionSummary inclusions={formData.inclusions} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PDFTemplate;