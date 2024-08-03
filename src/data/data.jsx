import formatDate from "../assets/mjs/date/formatDate.mjs";

export const ProductService = {
    getAulasData() {
        return [
            {
                name: 'Icycle',
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
                name: 'Martial Arts - Kickbox',
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
        ];
    },

    /*getProductsMini() {
        return Promise.resolve(this.getAulasData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getAulasData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getAulasData());
    },*/
};
