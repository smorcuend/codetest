/* 
    Entry point to send invoices to appropiate folder
*/
const Invoice = require("./Invoice");
const Folder = require("./Folder");

const Dispatcher = function() {
  const folder_list = new Map();
  const send = function (invoice) {
    const current_invoice = Invoice(invoice);
    const current_date = current_invoice.getDateIssued();
    const dateObj = new Date(current_date);

    const topLevelDate = getTopLevelDate(dateObj);
    const month = getMonth(dateObj);
    const year = getYear(dateObj);

    if (folder_list.has(topLevelDate)) {
      const current_folder = folder_list.get(topLevelDate);
      current_folder.setInvoice(current_invoice);
    } else {
      const folder = Folder(topLevelDate, { year, month });
      folder_list.set(topLevelDate, folder);
      orderFolders(); // Order folders by topLevelDate
      current_folder.setInvoice(current_invoice);
    }
  };

  // Get top level date as year+ month
  function getTopLevelDate(dateObj) {
    const month = getMonth(dateObj);
    const year = getYear(dateObj);
    return year + "_" + month;
  }

  function getYear(date) {
    return dateObj.getUTCFullYear();
  }

  function getMonth(date) {
    return dateObj.getUTCMonth() + 1; //months from 1-12
  }

  /* Order folders by year_month*/
  function orderFolders() {
    return folder_list.order();
  }

  return {
    send,
    getTopLevelDate,
  };
}

exports.Dispatcher = Dispatcher;
