const hexToRgb = hexString => {
  // Source: https://gist.github.com/jed/983661
  hexString = +(
    '0x' + hexString.slice(1).replace(hexString.length > 4 && /./g, '$&$&')
  )
  return [hexString >> 16, (hexString >> 8) & 255, hexString & 255]
}

const rgbToHsp = rgb => {
  const red = rgb[0]
  const blue = rgb[1]
  const green = rgb[2]
  return Math.sqrt(0.299 * red ** 2 + 0.587 * blue ** 2 + 0.114 * green ** 2)
}

export const isDarkColor = hex => {
  const rgb = hexToRgb(hex)
  const hsp = rgbToHsp(rgb)
  return hsp < 127.5
}

export const getTextClassByBgColor = hex => {
  const hasDarkBg = isDarkColor(hex)
  return hasDarkBg ? 'text-white' : 'text-body'
}
