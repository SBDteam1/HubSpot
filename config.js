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
  // Positions are percentages of the supplied Deal screenshot canvas.
  overlayPositions: {
   amount:         [1.8, 10.6, 12.2, 1.8],
  pipeline:       [1.8, 14.4, 12.2, 1.8],
  stage:          [1.8, 18.1, 12.2, 1.8],

  products:       [1.8, 46.5, 12.2, 1.8],
  priority:       [1.8, 56.5, 12.2, 1.8],
  forecast:       [1.8, 64.6, 12.2, 1.8],

  notes:          [1.8, 82.8, 12.2, 4.8],
  representative: [1.8, 96.2, 12.2, 1.8],

  submit:         [11.2, 0.4, 3.0, 2.2]
  }
};
