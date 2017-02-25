// cache con, el for reused
var con, el
// high sample will more accurate?
var sample = 100

function initElements () {
  con = document.createElement('div')
  con.style.width = 0
  con.style.height = 0
  con.style.visibility = 'hidden'
  con.style.overflow = 'hidden'

  el = document.createElement('div')

  con.appendChild(el)
}

function pxPerUnit (unit) {
  if (!con) initElements()
  el.style.width = sample + unit
  document.body.appendChild(con)
  var dimension = el.getBoundingClientRect()
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
    val = val || 1
    break
  }
  if (!valid) throw new TypeError('Error parsing length')
  return unit == 'px' ? val : pxPerUnit(unit) * val
}

module.exports = toPx
