export default function classnames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}
