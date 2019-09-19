const uniq = arr => arr.filter((x, i, self) => i === self.findIndex(t => t.id === x.id))
export default uniq
