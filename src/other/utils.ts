/** Object literal checker */
export function isObjectLiteral(x: any): boolean {
  if (!x) return false;
  return typeof x === 'object' && !x.filter;
}

/** Whether it is production */
export function isProdMode(): boolean {
  return process.env.NODE_ENV && process.env.NODE_ENV === 'production';
}
