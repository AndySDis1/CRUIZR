import { RealmType, REALM_COLORS } from './types';

export const cn = (...classes: Array<string | undefined | false>) => classes.filter(Boolean).join(' ');

export const getRealmColor = (realm: RealmType) => REALM_COLORS[realm];

export const formatAttendees = (value: number) =>
  Intl.NumberFormat('en', { notation: value > 999 ? 'compact' : 'standard' }).format(value);
