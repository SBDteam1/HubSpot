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
    amount: [0.7, 12.0, 13.6, 2.3], pipeline: [2.6, 13.5, 13.2, 2.3], stage: [3.8, 15.6, 12.7, 2.3],
    products: [0.7, 52.8, 13.7, 2.3], priority: [0.7, 57.3, 13.7, 2.3], forecast: [0.7, 65.8, 13.7, 2.3],
    notes: [0.7, 83.0, 13.7, 5.2], representative: [0.7, 95.8, 13.7, 2.3], submit: [12.4, 1.1, 3.0, 2.5]
  }
};
