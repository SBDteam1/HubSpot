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
     amount:         [0.6, 12.2, 13.5, 2.1],
  pipeline:       [2.7, 15.2, 12.8, 2.1],
  stage:          [2.7, 18.9, 12.8, 2.1],

  products:       [0.6, 52.0, 13.5, 2.1],
  priority:       [0.6, 57.1, 13.5, 2.1],
  forecast:       [0.6, 66.2, 13.5, 2.1],

  notes:          [0.6, 84.5, 13.5, 4.8],
  representative: [0.6, 96.2, 13.5, 2.1],

  submit:         [11.8, 0.3, 3.1, 2.3]
  }
};
