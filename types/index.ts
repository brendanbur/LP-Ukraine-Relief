export type Donation = {
    payment_date: string
    payer_email: string
    first_name: string
    last_name: string
    mc_currency: string
    mc_gross: string
    mc_fee: string
    ipn_track_id: string
    JSON: string
    name: string
    date: string
    comment?: string
  }