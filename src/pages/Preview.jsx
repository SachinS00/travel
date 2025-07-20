import React from 'react';
import { generateItineraryPDF } from '../utils/pdfGenerator';
import PDFTemplate from '../components/pdf/PDFTemplate';

const Preview = ({ formData, onBack }) => {
  // Default sample data 
  const defaultData = {
    title: 'Singapore Itinerary',
    travelerName: 'Rahul',
    destination: 'Singapore',
    departureFrom: 'Delhi',
    departureDate: '2025-06-09',
    arrivalDate: '2025-06-15',
    numberOfDays: 6,
    numberOfNights: 5,
    numberOfTravelers: 4,

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
      },
      {
        date: '2025-06-10',
        title: 'Singapore City Tour',
        morning: ['Visit Sentosa Island'],
        afternoon: ['Universal Studios Singapore'],
        evening: ['Clarke Quay Night Life'],
        image: null
      }
    ],

    hotels: [
      {
        city: 'Singapore',
        hotelName: 'Super Townhouse Oak Vashi Formerly Blue Diamond',
        checkIn: '2025-06-09',
        checkOut: '2025-06-15',
        nights: 5
      }
    ],

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
    }
  };

  const data = formData || defaultData;

  const handleGeneratePDF = () => {
    generateItineraryPDF(data);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with Generate Button */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {onBack && (
              <button
                onClick={onBack}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                ← Back to Form
              </button>
            )}
            <h1 className="text-2xl font-bold text-gray-800">Itinerary Preview</h1>
          </div>
          <button
            onClick={handleGeneratePDF}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors"
          >
            Generate PDF
          </button>
        </div>
      </div>

      {/* PDF Preview */}
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <PDFTemplate formData={data} />
        </div>
      </div>

      {/* CSS for page breaks and PDF styling */}
      <style jsx>{`
        .page-break {
          page-break-before: always;
        }
        
        @media print {
          .page-break {
            page-break-before: always;
          }
        }
        
        .pdf-page {
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          background: white;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default Preview;
