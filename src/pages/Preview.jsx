import React from 'react';
import { generateItineraryPDF } from '../utils/pdfGenerator';
import PDFTemplate from '../components/pdf/PDFTemplate';

const Preview = ({ formData }) => {

  const handleGeneratePDF = () => {
    generateItineraryPDF(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with Generate Button */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Itinerary Preview</h1>
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
          <PDFTemplate formData={formData} />
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