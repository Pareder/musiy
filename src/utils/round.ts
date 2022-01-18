function getFixedNumber(number: number, divider: number, precision: number = 1): string {
  return (number / divider).toFixed(precision)
}

export default function round(number: number): string {
  const degree = Math.log10(number)
  if (degree > 9) {
    return `${getFixedNumber(number, 10 ** 9)}B`
  }

  if (degree > 6) {
    return `${getFixedNumber(number, 10 ** 6)}M`
  }

  if (degree > 3) {
    return `${getFixedNumber(number, 10 ** 3)}K`
  }

  return number.toString()
}
