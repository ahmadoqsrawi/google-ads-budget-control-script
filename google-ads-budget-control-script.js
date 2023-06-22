function main() {
  var budgetThreshold = 100; // Set your budget threshold in your account's currency
  var campaignStatus = 'ENABLED'; // Specify the campaign status to be monitored (e.g., 'ENABLED')
  var recipientEmail = 'your-email@example.com'; // Set the email address where notifications will be sent

  var campaignsIterator = AdsApp.campaigns()
    .withCondition("Status = '" + campaignStatus + "'")
    .get();

  while (campaignsIterator.hasNext()) {
    var campaign = campaignsIterator.next();
    var budget = campaign.getBudget();
    var campaignName = campaign.getName();

    if (budget.getAmount().microAmount >= budgetThreshold * 1000000) {
      campaign.pause();
      Logger.log('Campaign "' + campaignName + '" paused due to budget threshold reached.');
      sendEmailNotification(campaignName);
    }
  }
}

function sendEmailNotification(campaignName) {
  var subject = 'Campaign Paused: Budget Threshold Reached';
  var body = 'The campaign "' + campaignName + '" has been paused because it exceeded the budget threshold.';
  MailApp.sendEmail({
    to: recipientEmail,
    subject: subject,
    body: body
  });
}
