# Excel Data Comparator

This program is designed to compare data between two Excel files, accommodating scenarios with and without headers.

⚠️ **Warning**: This program is currently under development and not fully completed. Use with caution and expect potential bugs or incomplete features.

## Overview

The Excel Data Comparator consists of several functions to facilitate the comparison process:

- `readDatafile(fileName, sheetName = 'Sheet1', headerAbsent = 1)`: Reads data from an Excel file.
- `arraysToData(arrays)`: Converts a 2D array to a 1D array.
- `compareExcelFiles(dataFull, columnDataFull, dataList)`: Compares data between two datasets.

## Usage

### Prerequisites

- Node.js installed
- `xlsx` module installed (`npm install xlsx`)

### Getting Started

1. Clone the repository: `git clone https://github.com/SahalFajri/Excel-Data-Comparator`

2. Install dependencies: `npm install`

3. Run the comparison script: `npm run dev`

4. Follow the prompts to input filenames and sheet names for the Excel files.

### Example

Suppose you have two Excel files:
- `DaftarPelangganFull.xlsx`: Contains full customer data.
- `DaftarCustSudahOrder.xlsx`: Contains data of customers who have placed orders.

```javascript
const dataFull = readDatafile('DaftarPelangganFull.xlsx', 'Daftar Pelanggan', 0);
let dataOrder = readDatafile('DaftarCustSudahOrder.xlsx', 'Sheet1');
dataOrder = arraysToData(dataOrder);

const hasil = compareExcelFiles(dataFull, 'Nama', dataOrder);
console.log('Hasil perbandingan:', hasil);
```

### Notes

- Ensure the Excel files are located in the `./excel/` directory relative to the script.
- Adjust the parameters (`fileName`, `sheetName`, `headerAbsent`) as needed based on your Excel file structure.