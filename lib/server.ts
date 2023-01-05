import moment from 'moment'
import { extractSheets } from 'spreadsheet-to-json'
import { Donation } from 'types'

export const getDonations = async (serviceKey: string) => {
  const credentials = JSON.parse(Buffer.from(serviceKey, 'base64').toString())
  const donations: Donation[] = (
    await extractSheets({
      spreadsheetKey: process.env.SHEET_KEY,
      credentials: credentials,
      sheetsToExtract: ['donations'],
    })
  ).donations.map((d: any) => {
    return {
      id:
        Math.floor(Math.random() * 5000) +
        d.ipn_track_id +
        Math.floor(Math.random() * 500),
      name: d.first_name + ' ' + d.last_name,
      date: moment(d.payment_date).fromNow(),
      mc_gross: +d.mc_gross,
      payment_date: d.payment_date,
    }
  })

  return donations
}
