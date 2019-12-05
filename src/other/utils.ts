import moment from 'moment';

/** Object literal checker */
export function isObjectLiteral(x: any): boolean {
  if (!x) return false;
  return typeof x === 'object' && !x.filter;
}

/** Whether it is production */
export function isProdMode(): boolean {
  return process.env.NODE_ENV && process.env.NODE_ENV === 'production';
}

/**
 * Rounds given ms date to the midnight, as if you were located in the UTC time zone.
 * @param date
 * @returns {*}
 */
export function convertMsToISOMidnightAsUTC(date: Date): string {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)).toISOString();
}

export function momentToIso(momentObject) {
  if (!moment.isMoment(momentObject)) return momentObject;
  return momentObject.toISOString();
}

export function isoDateToMoment(isoDate) {
  const date = moment(isoDate);
  return date.isValid() ? date.utcOffset(0) : isoDate;
}

export function noop(...args) {
  window.console.log('NOOP ARGS: ', ...args)
}
