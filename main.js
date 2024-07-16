const XLSX = require('xlsx');

function readDatafile(fileName, sheetName = 'Sheet1', headerAbsent = 1) {
  const workbook = XLSX.readFile('./excel/' + fileName);
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: headerAbsent });
  return data;
}

function arraysToData(arrays) {
  let data = arrays.map((array) => array[0])
  return data;
}

const fileNameFull = 'DaftarPelangganFull.xlsx';
const fileNameOrder = 'DaftarCustSudahOrder.xlsx';

const dataFull = readDatafile(fileNameFull, 'Daftar Pelanggan', 0);
let dataOder = readDatafile(fileNameOrder, 'Sheet1');

dataOder = arraysToData(dataOder)

function compareExcelFiles(dataFull, columnDataFull, dataList) {
  let filteredData = dataFull.filter((data) => !dataList.includes(data[columnDataFull]));
  return filteredData;
}

const hasil = compareExcelFiles(dataFull, 'Nama', dataOder);

const updatedWorksheet = XLSX.utils.json_to_sheet(hasil);
const updatedWorkbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(updatedWorkbook, updatedWorksheet, 'Data_dengan_Hasil');

XLSX.writeFile(updatedWorkbook, 'data_dengan_hasil.xlsx');
