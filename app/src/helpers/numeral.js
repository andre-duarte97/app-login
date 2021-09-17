import numeral from 'numeral'

numeral.register('locale', 'brasil', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'mil',
    million: 'milhões',
    billion: 'b',
    trillion: 't'
  },
  ordinal: () => '°',
  currency: {
    symbol: 'R$'
  }
})

numeral.locale('brasil')

// export default numeral
export const formatCurrency = value => numeral(Number(value)).format('$ 0,0.00')
// export const formatNumber = value => numeral(Number(value)).format('0,0.00')
