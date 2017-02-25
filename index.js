function pxPerUnit (unit, sample) {
  sample = sample || 100
  var con = document.createElement('div')
  con.style.width = 0
  con.style.height = 0
  con.style.visibility = 'hidden'
  con.style.overflow = 'hidden'

  var el = document.createElement('div')
  el.style.width = sample + unit

  con.appendChild(el)
  document.body.appendChild(con)
  var dimension = el.getBoundingClientRect()
  el.parentNode.removeChild(el)
  con.parentNode.removeChild(con)
  return dimension.width / sample
}

function toPx (length) {
  var unitRe = /^\s*([+-]?[\d\.]*)\s*(.*)\s*$/i
  var match = unitRe.exec(length)
  while (1) {
    if (!match || match.length < 3) break
    var val = Number(match[1])
    if (isNaN(val)) break
    var unit = match[2]
    if (!unit) break
    var valid = true
    break
  }
  if (!valid) throw new TypeError('Error parsing length')
  var perUnit = pxPerUnit(unit)
  return val ? perUnit * val : perUnit
}

module.exports = toPx
