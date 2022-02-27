import { extractSheets } from 'spreadsheet-to-json'

const credentials = JSON.parse(
  Buffer.from(process.env.GOOGLE_SERVICE_KEY, 'base64').toString()
)

export default function handler(
  req,
  res
) {
  extractSheets(
    {
      spreadsheetKey: process.env.SHEET_KEY,
      credentials: credentials,
      sheetsToExtract: ['Orders'],
    },
    (err, data) =>
      res.status(200).json({
        ...data,
      })
  )
}
