// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function get(obj: any, path: string, defaultValue?: any) {
  if (!obj) {
    return defaultValue
  }

  const arrPath = path.split('.')
  let temp = obj
  for (const piece of arrPath) {
    temp = temp[piece]
    if (!temp) {
      return defaultValue
    }
  }

  return temp
}
