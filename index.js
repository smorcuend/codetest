console.log("codetest");

const csv = require("csv-parser");
const fs = require("fs");

const Dispatcher = require("./src/Dispatcher");
const dispatcher = Dispatcher();
/* First argument represents csv file that contains info related invoices */
// argv[0] = node env
// argv[1] = current folder execution
// argv[2] = csv file
// let invoice_list = []

let csvfile;
if (process.argv[2]) {
  csvfile = process.argv[2];
  fs.createReadStream(csvfile)
    .pipe(csv())
    .on("data", (row) => {
      console.log(row);
      dispatcher.send(row);
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
    });
} else {
  console.log("csv pathname is required");
}
