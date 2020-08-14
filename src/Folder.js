/**
 * Entity Folder: it's represents a set of invoices oredered by date and grouped by month
 */

const Folder = function(id, { folder_data }) {
  const year = folder_data.year | 0;
  const month = folder_data.month | 0;
  const current_balance = 0;
  const total_balance = 0;

  // Invoices map with date as primary jey
  const invoices_list = new Map();

  const getDate = function () {
    return month + year;
  };

  const getCurrentBalance = function () {
    return current_balance;
  };

  const getTotalBalance = function () {
    let total = 0;
    invoices_list.forEach(function (invoice) {
      total += invoices_list.getAmount();
    });
    return total;
  };

  /* Bubble sort mechanism */
  function orderInvoices() {
    const l = invoices_list;
    for (let i = 0; i < l.entries; i++) {
      for (let j = 0; j < l.entries - 1 - i; j++) {
        if (invoices_list[j] > invoices_list[j + 1]) {
          [invoices_list[j], invoices_list[j + 1]] = [
            invoices_list[j + 1],
            invoices_list[j],
          ];
        }
      }
    }

    return invoices_list;
  }

  /* Invoice as object Invoice */
  const setInvoice = function (invoice) {
    const date = invoice.getDateIssued();
    invoices_list.set(date, invoice);
    orderInvoices();
  };

  const getInvoice = function (date) {
    return invoices_list.get(date);
  };

  return {
    getDate,
    getInvoices,
    getCurrentBalance,
    getTotalBalance,
    setInvoice,
    getInvoice,
  };
}

exports.Folder = Folder;
