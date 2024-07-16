const XLSX = require('xlsx');

// const fileNameFullData = './excel/DATA CUST YG SUDAH ORDER BERAS.xlsx';
// const fileNameTheData = './excel/DAFTAR PELANGGAN BABY SHOP.xlsx';

function readDatafile(fileName, sheetName = 'Sheet1', haveHeader = 1) {
  const workbook = XLSX.readFile(fileName);
  const worksheet = workbook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json(worksheet, { header: haveHeader });
  return data;
}

function getDataWIthHeaderA(dataObject) {
  const dataArray = dataObject.map(data => {
    return data.A;
  })

  return dataArray;
}

const fileName = 'TestExcel.xlsx';

const dataFull = readDatafile(fileName, 'Sheet1', "A");
const dataArray = getDataWIthHeaderA(dataFull);

console.log(dataArray);


// const hasil = dataA.map(rowA => {
//   const ada = dataB.some(rowB => rowB[1] === rowA[0]);
//   return { ...rowA, Ada: ada };
// });

// console.log(hasil);

// const updatedWorksheet = XLSX.utils.json_to_sheet(hasil);
// const updatedWorkbook = XLSX.utils.book_new();
// XLSX.utils.book_append_sheet(updatedWorkbook, updatedWorksheet, 'Data_dengan_Hasil');

// XLSX.writeFile(updatedWorkbook, 'data_dengan_hasil.xlsx');
