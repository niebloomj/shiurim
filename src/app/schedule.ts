import RRule from 'rrule/dist/esm/rrule';

interface RecurringEvent {
  title: string;
  color: any;
  start: number;
  end: number;
  rrule?: {
    freq: any;
    bymonth?: number;
    bymonthday?: number;
    byweekday?: any;
  };
}

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#3764cf',
    secondary: '#ffffff'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

export const recurringEvents: RecurringEvent[] = [
  {
    title: 'Gemara, R. Lisbon @ BL',
    color: colors.blue,
    start: 60 * 5 + 50,
    end: 60 * 6 + 30,
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.MO, RRule.TU, RRule.WE, RRule.TH, RRule.FR]
    },
  },
  {
    title: 'Gemara, R. Lisbon @ BL',
    color: colors.blue,
    start: 60 * 6 + 50,
    end: 60 * 7 + 30,
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.SU]
    },
  },
  {
    title: 'Gemara, R. Shaffer',
    color: colors.blue,
    start: 60 * 18 + 0,
    end: 60 * 19 + 0,
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.SU]
    },
  },
  {
    title: 'Gemara, R. Shaffer',
    color: colors.blue,
    start: 60 * 19,
    end: 60 * 20,
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.TU]
    },
  },
  {
    title: 'Samech Vav, R. Avraham Levitan',
    color: colors.blue,
    start: 60 * 20 + 30,
    end: 60 * 21 + 30,
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.SU]
    },
  },
  {
    title: 'Understanding Tefillah, Slavatiscki',
    color: colors.blue,
    start: 60 * 21 + 15,
    end: 60 * 22 + 15,
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.MO]
    },
  },
  {
    title: 'Shir and Beer, R. Raices @ 6912 Dorset Pl',
    color: colors.blue,
    start: 60 * 21 + 15,
    end: 60 * 22 + 30,
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.WE]
    },
  },
  {
    title: 'Kolel Erev @ YOUng Anash',
    color: colors.blue,
    start: 60 * 21,
    end: 60 * 22,
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.TH]
    },
  },
  {
    title: 'Ayin Beis, R. Kaplan',
    color: colors.blue,
    start: 60 * 21,
    end: 60 * 22,
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.SA]
    },
  },
  {
    title: 'Lady’s Chassidus, R. Lisbon',
    color: colors.red,
    start: 60 * 13,
    end: 60 * 14,
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.MO]
    },
  },
  {
    title: 'Lady’s Tanya, R. Lisbon',
    color: colors.red,
    start: 60 * 19 + 30,
    end: 60 * 20 + 30,
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.WE]
    },
  },
  {
    title: 'Chassidus, R. Lisbon',
    color: colors.blue,
    start: 60 * 8 + 45,
    end: 60 * 9 + 30,
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.SA]
    },
  },
  {
    title: 'Tehilim @ Weintraubs',
    color: colors.blue,
    start: 60 * 10 + 30,
    end: 60 * 11 + 30,
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.SU]
    },
  },
];
