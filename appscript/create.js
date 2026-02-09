import "google-apps-script";
// NOTE: console.log is not available... this is Google AppsScript

/**
 *
 * @param {string} formName
 */
function demo(formName) {

  // create form
  const form = FormApp.create(formName)
    .setTitle(formName);
  form.addTextItem()
    .setTitle("Enter your name!")
    .setRequired(true);

  // create receiver sheet
  const receiver = SpreadsheetApp.create(`receiver__${formName}`);
    // .setTitle(`receiver__${formName}`);

  form.setDestination(GoogleAppsScript.Forms.DestinationType.SPREADSHEET, receiver.getId())
}
