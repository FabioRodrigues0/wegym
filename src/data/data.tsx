import formatDate from "../assets/mjs/date/formatDate.mjs";
import {DaysWeek} from "../assets/mjs/DaysWeek/daysWeek.mjs"

export type InfoClasses = {
    name: string
    instrutor: string
    date: string
    hour: number
    description: string
    tag_instructor: string
    tag_class: string
}
export type TableDaysWeek = {
    headerDayWeek: string
    headerDay: string
    infoClass?: InfoClasses[]
}

export const defaultData: InfoClasses[] = [
    {
        name: 'iCycle',
        instrutor: 'Pedro Almeida',
        date: formatDate(new Date('05 Aug 2024 15:00:00 GMT')),
        hour: 15,
        description: '',
        tag_instructor: 'pedro-almeida',
        tag_class: 'icycle'
    },
    {
        name: 'Power Step',
        instrutor: 'Pedro Almeida',
        date: formatDate(new Date('06 Aug 2024 9:00:00 GMT')),
        hour: 9,
        description: '',
        tag_instructor: 'pedro-almeida',
        tag_class: 'power-step'
    },
    {
        name: 'Bum Bum Fit',
        instrutor: 'Ana Costa',
        date: formatDate(new Date('07 Aug 2024 14:00:00 GMT')),
        hour: 14,
        description: '',
        tag_instructor: 'ana-costa',
        tag_class: 'bum-bum-fit'
    },
    {
        name: 'Zumba',
        instrutor: 'Ana Costa',
        date: formatDate(new Date('08 Aug 2024 17:00:00 GMT')),
        hour: 17,
        description: '',
        tag_instructor: 'ana-costa',
        tag_class: 'zumba'
    },
    {
        name: 'Pump',
        instrutor: 'João Martins',
        date: formatDate(new Date('05 Aug 2024 8:00:00 GMT')),
        hour: 8,
        description: '',
        tag_instructor: 'joao-martins',
        tag_class: 'pump'
    },
    {
        name: 'Kickbox',
        instrutor: 'João Martins',
        date: formatDate(new Date('10 Aug 2024 10:00:00 GMT')),
        hour: 10,
        description: '',
        tag_instructor: 'joao-martins',
        tag_class: 'kickbox'
    },
    {
        name: 'Yoga',
        instrutor: 'Mariana Sousa',
        date: formatDate(new Date('07 Aug 2024 9:00:00 GMT')),
        hour: 9,
        description: '',
        tag_instructor: 'mariana-sousa',
        tag_class: 'yoga'
    },
    {
        name: 'Jump',
        instrutor: 'Mariana Sousa',
        date: formatDate(new Date('11 Aug 2024 11:00:00 GMT')),
        hour: 11,
        description: '',
        tag_instructor: 'mariana-sousa',
        tag_class: 'jump'
    },
    {
        name: 'iCycle',
        instrutor: 'Pedro Almeida',
        date: formatDate(new Date('29 Jul 2024 15:00:00 GMT')),
        hour: 15,
        description: '',
        tag_instructor: 'pedro-almeida',
        tag_class: 'icycle'
    },
    {
        name: 'Power Step',
        instrutor: 'Pedro Almeida',
        date: formatDate(new Date('01 Aug 2024 9:00:00 GMT')),
        hour: 9,
        description: '',
        tag_instructor: 'pedro-almeida',
        tag_class: 'power-step'
    },
    {
        name: 'Bum Bum Fit',
        instrutor: 'Ana Costa',
        date: formatDate(new Date('02 Aug 2024 14:00:00 GMT')),
        hour: 14,
        description: '',
        tag_instructor: 'ana-costa',
        tag_class: 'bum-bum-fit'
    },
    {
        name: 'Zumba',
        instrutor: 'Ana Costa',
        date: formatDate(new Date('31 Jul 2024 17:00:00 GMT')),
        hour: 17,
        description: '',
        tag_instructor: 'ana-costa',
        tag_class: 'zumba'
    },
    {
        name: 'Pump',
        instrutor: 'João Martins',
        date: formatDate(new Date('30 Jul 2024 8:00:00 GMT')),
        hour: 8,
        description: '',
        tag_instructor: 'joao-martins',
        tag_class: 'pump'
    },
    {
        name: 'Kickbox',
        instrutor: 'João Martins',
        date: formatDate(new Date('03 Aug 2024 10:00:00 GMT')),
        hour: 10,
        description: '',
        tag_instructor: 'joao-martins',
        tag_class: 'kickbox'
    },
    {
        name: 'Yoga',
        instrutor: 'Mariana Sousa',
        date: formatDate(new Date('04 Aug 2024 9:00:00 GMT')),
        hour: 9,
        description: '',
        tag_instructor: 'mariana-sousa',
        tag_class: 'yoga'
    },
    {
        name: 'Jump',
        instrutor: 'Mariana Sousa',
        date: formatDate(new Date('31 Jul 2024 11:00:00 GMT')),
        hour: 11,
        description: '',
        tag_instructor: 'mariana-sousa',
        tag_class: 'jump'
    },
    {
        name: 'iCycle',
        instrutor: 'Pedro Almeida',
        date: formatDate(new Date('16 Jul 2024 15:00:00 GMT')),
        hour: 15,
        description: '',
        tag_instructor: 'pedro-almeida',
        tag_class: 'icycle'
    },
    {
        name: 'Power Step',
        instrutor: 'Pedro Almeida',
        date: formatDate(new Date('17 Aug 2024 9:00:00 GMT')),
        hour: 9,
        description: '',
        tag_instructor: 'pedro-almeida',
        tag_class: 'power-step'
    },
    {
        name: 'Bum Bum Fit',
        instrutor: 'Ana Costa',
        date: formatDate(new Date('18 Aug 2024 14:00:00 GMT')),
        hour: 14,
        description: '',
        tag_instructor: 'ana-costa',
        tag_class: 'bum-bum-fit'
    },
    {
        name: 'Zumba',
        instrutor: 'Ana Costa',
        date: formatDate(new Date('12 Jul 2024 17:00:00 GMT')),
        hour: 17,
        description: '',
        tag_instructor: 'ana-costa',
        tag_class: 'zumba'
    },
    {
        name: 'Pump',
        instrutor: 'João Martins',
        date: formatDate(new Date('15 Jul 2024 8:00:00 GMT')),
        hour: 8,
        description: '',
        tag_instructor: 'joao-martins',
        tag_class: 'pump'
    },
    {
        name: 'Kickbox',
        instrutor: 'João Martins',
        date: formatDate(new Date('14 Aug 2024 10:00:00 GMT')),
        hour: 10,
        description: '',
        tag_instructor: 'joao-martins',
        tag_class: 'kickbox'
    },
    {
        name: 'Yoga',
        instrutor: 'Mariana Sousa',
        date: formatDate(new Date('13 Aug 2024 9:00:00 GMT')),
        hour: 9,
        description: '',
        tag_instructor: 'mariana-sousa',
        tag_class: 'yoga'
    },
    {
        name: 'Jump',
        instrutor: 'Mariana Sousa',
        date: formatDate(new Date('18 Jul 2024 11:00:00 GMT')),
        hour: 11,
        description: '',
        tag_instructor: 'mariana-sousa',
        tag_class: 'jump'
    },
    {
        name: 'iCycle',
        instrutor: 'Pedro Almeida',
        date: formatDate(new Date('21 Jul 2024 15:00:00 GMT')),
        hour: 15,
        description: '',
        tag_instructor: 'pedro-almeida',
        tag_class: 'icycle'
    },
    {
        name: 'Power Step',
        instrutor: 'Pedro Almeida',
        date: formatDate(new Date('25 Aug 2024 9:00:00 GMT')),
        hour: 9,
        description: '',
        tag_instructor: 'pedro-almeida',
        tag_class: 'power-step'
    },
    {
        name: 'Bum Bum Fit',
        instrutor: 'Ana Costa',
        date: formatDate(new Date('25 Aug 2024 14:00:00 GMT')),
        hour: 14,
        description: '',
        tag_instructor: 'ana-costa',
        tag_class: 'bum-bum-fit'
    },
    {
        name: 'Zumba',
        instrutor: 'Ana Costa',
        date: formatDate(new Date('24 Jul 2024 17:00:00 GMT')),
        hour: 17,
        description: '',
        tag_instructor: 'ana-costa',
        tag_class: 'zumba'
    },
    {
        name: 'Pump',
        instrutor: 'João Martins',
        date: formatDate(new Date('22 Jul 2024 8:00:00 GMT')),
        hour: 8,
        description: '',
        tag_instructor: 'joao-martins',
        tag_class: 'pump'
    },
    {
        name: 'Kickbox',
        instrutor: 'João Martins',
        date: formatDate(new Date('21 Aug 2024 10:00:00 GMT')),
        hour: 10,
        description: '',
        tag_instructor: 'joao-martins',
        tag_class: 'kickbox'
    },
    {
        name: 'Yoga',
        instrutor: 'Mariana Sousa',
        date: formatDate(new Date('23 Aug 2024 9:00:00 GMT')),
        hour: 9,
        description: '',
        tag_instructor: 'mariana-sousa',
        tag_class: 'yoga'
    },
    {
        name: 'Jump',
        instrutor: 'Mariana Sousa',
        date: formatDate(new Date('25 Jul 2024 11:00:00 GMT')),
        hour: 11,
        description: '',
        tag_instructor: 'mariana-sousa',
        tag_class: 'jump'
    },
]

export const defaultTable: TableDaysWeek[] = [
    {
        headerDayWeek: 'Seg',
        headerDay: DaysWeek()[0],
        infoClass: defaultData.filter((classroom) => classroom.date === DaysWeek()[0]),
    },
    {
        headerDayWeek: 'Ter',
        headerDay: DaysWeek()[1],
        infoClass: defaultData.filter((classroom) => classroom.date === DaysWeek()[1]),
    },
    {
        headerDayWeek: 'Qua',
        headerDay: DaysWeek()[2],
        infoClass: defaultData.filter((classroom) => classroom.date === DaysWeek()[2]),
    },
    {
        headerDayWeek: 'Qui',
        headerDay: DaysWeek()[3],
        infoClass: defaultData.filter((classroom) => classroom.date === DaysWeek()[3]),
    },
    {
        headerDayWeek: 'Sex',
        headerDay: DaysWeek()[4],
        infoClass: defaultData.filter((classroom) => classroom.date === DaysWeek()[4]),
    },
    {
        headerDayWeek: 'Sab',
        headerDay: DaysWeek()[5],
        infoClass: defaultData.filter((classroom) => classroom.date === DaysWeek()[5]),
    },
    {
        headerDayWeek: 'Dom',
        headerDay: DaysWeek()[6],
        infoClass: defaultData.filter((classroom) => classroom.date === DaysWeek()[6]),
    },
]