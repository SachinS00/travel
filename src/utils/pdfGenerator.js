import html2pdf from 'html2pdf.js';

export const generateItineraryPDF = (formData) => {
  const element = document.getElementById('pdf-content');

  if (!element) {
    console.error('PDF content element not found');
    return;
  }

  const options = {
    margin: [8, 0, 0, 0],
    filename: `${formData.title || 'Travel_Itinerary'}.pdf`,
    image: { type: 'jpeg', quality: 1 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: true,
      allowTaint: true
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: { mode: 'css', before: '.pdf-page', avoid: '.pdf-footer' }
  };

  
  html2pdf()
    .from(element)
    .set(options)
    .save()
    .catch(error => {
      console.error('Error generating PDF:', error);
    });
};