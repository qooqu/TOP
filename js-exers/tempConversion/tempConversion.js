const ftoc = function (f) {
  return Math.round(10 * ((f - 32) / 1.8)) / 10;
}

const ctof = function (c) {
  return Math.round(10 * (c * 1.8 + 32)) / 10;
}

module.exports = {
  ftoc,
  ctof
}
