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

const time = (h, m = 0) => 60 * h + m;

export const recurringEvents: RecurringEvent[] = [
  {
    title: 'Gemara, R. Lisbon @ BL',
    color: colors.blue,
    start: time(5, 50),
    end: time(6, 30),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.MO, RRule.TU, RRule.WE, RRule.TH, RRule.FR]
    },
  },
  {
    title: 'Gemara, R. Lisbon @ BL',
    color: colors.blue,
    start: time(6, 50),
    end: time(7, 30),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.SU]
    },
  },
  {
    title: 'Gemara, R. Shaffer',
    color: colors.blue,
    start: time(18, 0),
    end: time(19, 0),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.SU]
    },
  },
  {
    title: 'Gemara, R. Shaffer',
    color: colors.blue,
    start: time(19),
    end: time(20),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.TU]
    },
  },
  {
    title: 'Samech Vav, R. Avraham Levitan',
    color: colors.blue,
    start: time(20, 30),
    end: time(21, 30),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.SU]
    },
  },
  {
    title: 'Understanding Tefillah, Slavatiscki',
    color: colors.blue,
    start: time(21, 15),
    end: time(22, 15),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.MO]
    },
  },
  {
    title: 'Shiur and Biur, R. Raices @ 6912 Dorset Pl',
    color: colors.blue,
    start: time(21, 15),
    end: time(22, 30),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.WE]
    },
  },
  {
    title: 'Kolel Erev @ YOUng Anash',
    color: colors.blue,
    start: time(21),
    end: time(22),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.TH]
    },
  },
  {
    title: 'Ayin Beis, R. Kaplan',
    color: colors.blue,
    start: time(21),
    end: time(22),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.SA]
    },
  },
  {
    title: 'Lady’s Chassidus, R. Lisbon @ BL',
    color: colors.red,
    start: time(13),
    end: time(14),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.MO]
    },
  },
  {
    title: 'Lady’s Tanya, R. Lisbon @ BL',
    color: colors.red,
    start: time(19, 30),
    end: time(20, 30),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.WE]
    },
  },
  {
    title: 'Chassidus, R. Lisbon @ BL',
    color: colors.blue,
    start: time(8, 45),
    end: time(9, 30),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.SA]
    },
  },
  {
    title: 'Tehilim @ Weintraubs',
    color: colors.red,
    start: time(10, 30),
    end: time(11, 30),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.SU]
    },
  },
  {
    title: 'Boys learning w/ pizza, stories, and prizes @ BL',
    color: colors.blue,
    start: time(19, 15),
    end: time(20),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.SA]
    },
  },
  {
    title: 'Chassidus, R. Klyne @ BL',
    color: colors.blue,
    start: time(22, 30),
    end: time(23, 30),
    rrule: {
      freq: RRule.WEEKLY,
      byweekday: [RRule.TH]
    },
  },
];
