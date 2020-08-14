/* 
Entity Invoice: represents a single instance of invoice
fields :  {
    date_issued
    amount
}
*/

const Invoice = function(invoice_data) {
  const date_issued = 0;
  const amount = 0;

  const getDateIssued = function () {
    return date_issued;
  };

  const getAmount = function() {
    return amount;

  }

  return {
    getDateIssued,
    getAmount
  };
}

exports.Invoice = Invoice;
