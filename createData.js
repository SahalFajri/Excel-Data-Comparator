const XLSX = require('xlsx');

const data = [
  { name: 'John Doe', email: 'johndoe@example.com' },
  { name: 'Jane Doe', email: 'janedoe@example.com' },
];

const worksheet = XLSX.utils.json_to_sheet(data);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

XLSX.writeFile(workbook, 'data_baru.xlsx');
