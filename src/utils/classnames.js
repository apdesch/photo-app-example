const classNames = (obj = {}) => {
  return Object
    .keys(obj)
    .filter((key) => obj[key])
    .join(" ");
}

export default classNames