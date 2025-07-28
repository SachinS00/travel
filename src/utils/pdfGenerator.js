import html2pdf from 'html2pdf.js';

export const generateItineraryPDF = (formData) => {
  const pages = document.querySelectorAll('.pdf-page');
  if (!pages.length) {
    console.error('No elements with class "pdf-page" found.');
    return;
  }

  const options = {
    margin: 0,
    filename: `${formData.title || 'Travel_Itinerary'}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['css', 'legacy'] }
  };

  // Start with the first page
  let worker = html2pdf().set(options).from(pages[0]);

  // Add the rest as new pages
  for (let i = 1; i < pages.length; i++) {
    worker = worker.toContainer().from(pages[i]).toCanvas().toImg().toPdf().get('pdf').then(pdf => {
      pdf.addPage();
    });
  }

  // Save the PDF
  worker.save()
    .then(() => {
      console.log('PDF successfully generated and saved.');
    })
    .catch(err => {
      console.error('PDF generation failed:', err);
    });
};