window.SIM_CONFIG = {
  appTitle: 'POST-DEMO HUBSPOT SIMULATOR',
  timerSeconds: 600,
  sharePointUrl: 'https://ingredientsonline1.sharepoint.com/:f:/s/SellerDocuments/IgBsXbXqZGdyTqUeXHN6-MrrAUdL65lg9aA148uTQ9eabVo?e=w257G4',
  scoreToPass: 80,
  currentValues: { pipeline: 'Seller Services', stage: 'Appointment Scheduled', forecast: 'Not Forecasted' },
  correctAnswers: {
    pipeline: 'Seller Programs', stage: 'Quote Sent to Prospect', forecast: 'Pipeline',
    amount: '10108.60', notesTerms: ['Growth Subscription', '10108.60']
  },
  options: {
    pipeline: ['Seller Programs', 'Sample Order Opportunities', 'Seller Marketing Services', 'Seller Services', 'Sales Online NSM', 'Sales Online Plus NSM'],
    stage: ['Appointment Scheduled', 'Initial Outreach Successful', 'Discovery Meeting Scheduled', 'Discovery Meeting Completed', 'Quote Sent to Prospect', 'Contract Issued - Pending Signature', 'Contract Signed', '1st Payment Collected', 'QC Approval Pending', 'QC Approved / Pending 2nd Payment', '2nd Payment Collected', 'Closed Won', 'Closed Lost'],
    forecast: ['Not Forecasted', 'Pipeline', 'Best Case', 'Commit', 'Closed Won'],
    representative: ['Allen Dy', 'Daniel Panes', 'Erica Cobian', 'Frank Winchester', 'Hezen Estrera', 'Laurice San Juan', 'Pooja Salgaonkar', 'Safwat Wahib', 'Sally Morgan'],
    priority: ['High', 'Medium', 'Low']
  },
 // Pixel coordinates based on a 1920 × 1080 design canvas.
// Format: [left, top, width, height]

overlayPositions: {

  amount:         [2.1, 10.9, 12.2, 1.8],
  pipeline:       [2.1, 14.7, 12.2, 1.8],
  stage:          [2.1, 18.5, 12.2, 1.8],

  products:       [2.1, 46.9, 12.2, 1.8],
  priority:       [2.1, 56.9, 12.2, 1.8],
  forecast:       [2.1, 65.0, 12.2, 1.8],

  notes:          [2.1, 83.2, 12.2, 4.8],
  representative: [2.1, 96.5, 12.2, 1.8],

  submit:         [11.2, 0.4, 3.0, 2.2]

}
};
