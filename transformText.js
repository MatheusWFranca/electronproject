const XLSX = require('xlsx')
const fs = require('fs')

function txtToExcel(txtFile, excelFile) {
  // Lê o arquivo .txt
  const data = fs.readFileSync(txtFile, 'utf8')

  // Divide o conteúdo do arquivo em linhas
  const lines = data.split('\n')

  // Cria um array de objetos com os dados do arquivo
  const dataArray = lines.map(line => {
    const cells = line.split('\t')
    return {
      Coluna1: cells[0],
      Coluna2: cells[1],
      Coluna3: cells[2]
    }
  })

  const worksheet = XLSX.utils.json_to_sheet(dataArray)

  // Cria um workbook com a planilha
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados')

  // Salva o arquivo Excel
  XLSX.writeFile(workbook, excelFile)
}

// Executa a função
txtToExcel('arquivo.txt', 'arquivo.xlsx')
