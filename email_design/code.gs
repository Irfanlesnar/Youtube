function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getRange("A:A").getValues().flat().filter(email => email.includes("@"));
  
  if (data.length === 0) {
    Logger.log("No valid email addresses found.");
    return;
  }

  var subject = "AppDaddy - The Ultimate App Publishing Tool";
  var htmlBody = getHtmlTemplate(); // Load the HTML content
  
  data.forEach(email => {
    GmailApp.sendEmail(email, subject, "", { htmlBody: htmlBody });
  });

  Logger.log("Emails sent successfully.");
}

// Function to get the full HTML content
function getHtmlTemplate() {
  return ` Remove this_text_and_paste_your_html_code_here `;
}
