export const getValueAsArray = <T>(value: T | T[]): T[] =>
  Array.isArray(value) ? value : [value]
