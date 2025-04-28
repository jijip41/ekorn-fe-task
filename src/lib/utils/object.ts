export function getObjectValues<T extends object>(obj: T): Array<T[keyof T]> {
  return Object.values(obj);
}
