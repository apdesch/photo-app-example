const diacretics = { æ: 'ae', Æ: 'ae', œ: 'o', Œ: 'o', Ø: 'o', ø: 'o', Þ: 'b', ð: 'd', Ð: 'd', Ł: 'l', ł: 'l', ſ: 's', ß: 'ss' }

const slug = (string, delineator = '-') => {
  if (string) return string
    .normalize('NFD')
    .replace(/('|\u2019|\u2018|[\u0300-\u036f])/g, '')
    .replace(/[^\w]/g, x => diacretics[x] || x)
    .toLowerCase()
    .match(/[A-Za-z0-9]+/g)
    .join(delineator)
  else return ''
}

export default slug
