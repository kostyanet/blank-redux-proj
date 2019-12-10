import moment, { Moment } from 'moment';
import { TAction, TEpic, TEpicDeps, TStore } from '../types/store/store';
import { Observer, Subject, Subscription } from 'rxjs';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { toArray } from 'rxjs/operators';

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

/**
 * Converts Moment date object into ISO date string;
 * @param momentObject
 */
export function momentToIso(momentObject: Moment): string {
  if (!moment.isMoment(momentObject)) return momentObject;
  return momentObject.toISOString();
}

/**
 * Converts ISO date string into Moment.
 * @param isoDate
 */
export function isoDateToMoment(isoDate: string): Moment | string {
  const date: Moment = moment(isoDate);
  return date.isValid() ? date.utcOffset(0) : isoDate;
}

export function noop(...args) {
  window.console.log('NOOP ARGS: ', ...args)
}
