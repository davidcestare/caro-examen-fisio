export const fisioQuestions = [
    {
        text: 'Hematocrito - Hombre',
        symbol: '%',
        range: {
            min: 42,
            max: 52
        }
    },
    {
        text: 'Hematocrito - mujer',
        symbol: '%',
        range: {
            min: 37,
            max: 47
        }
    },
    {
        text: 'Hematocrito - recien nacido',
        symbol: '%',
        range: {
            min: 40,
            max: 61
        }
    },
    {
        text: 'Hb - hombre',
        symbol: 'g/dl',
        range: {
            min: 13,
            max: 17
        }
    },
    {
        text: 'Hb - mujer',
        symbol: 'g/dl',
        range: {
            min: 12,
            max: 16
        }
    },
    {
        text: 'Hb - recien nacido',
        symbol: 'g/dl',
        range: {
            min: 15,
            max: 20
        }
    },
    {
        text: 'GR - hombre',
        symbol: '/mm3',
        range: {
            min: 4500000,
            max: 5500000
        }
    },
    {
        text: 'GR - mujer',
        symbol: '/mm3',
        range: {
            min: 4000000,
            max: 5000000
        }
    },
    {
        text: 'Ferremia - hombre',
        symbol: 'µg/dl',
        range: {
            min: 70,
            max: 120
        }
    },
    {
        text: 'Ferremia - mujer',
        symbol: 'µg/dl',
        range: {
            min: 60,
            max: 120
        }
    },
    {
        text: 'Ferritina sérica - hombre',
        symbol: 'ng/ml',
        range: {
            min: 15,
            max: 300
        }
    },
    {
        text: 'Ferritina sérica - mujer',
        symbol: 'ng/ml',
        range: {
            min: 12,
            max: 150
        }
    },
    { text: 'TIBC', symbol: 'µg/dl', range: { min: 250, max: 400 } },
    { text: 'Sat. de Tf', symbol: '%', range: { min: 20, max: 35 } },
    { text: 'GB - Adulto', symbol: '/mm3', range: { min: 4000, max: 10000 } },
    { text: 'GB - Recién nacido', symbol: '/mm3', range: { min: 9000, max: 30000 } },
    { text: 'Plaquetas', symbol: '/mm3', range: { min: 150000, max: 400000 } },
    { text: 'Reticulocitos', symbol: '/mm3', range: { min: 50000, max: 100000 } },
    { text: 'Haptoglobina', symbol: 'mg/ml', range: { min: 41, max: 165 } },
    { text: 'LDH', symbol: 'UI/L', range: { min: 190, max: 390 } },
    { text: 'Homocisteína', symbol: 'µmol/L', range: { min: 5, max: 12 } },
    { text: 'Frecuencia respiratoria', symbol: '/minuto', range: { min: 12, max: 20 } },
    { text: '[HCO3-]', symbol: 'mEq/L', range: { min: 22, max: 26 } },
    { text: '[Na+]', symbol: 'µmol/L', range: { min: 135, max: 145 } },
    { text: '[K+]', symbol: 'µmol/L', range: { min: 3.5, max: 5 } },
    { text: 'Creatinina', symbol: 'mg/dl', range: { min: 0.5, max: 1.3 } },
    { text: 'pCO2', symbol: 'mmHg', range: { min: 35, max: 45 } },
    { text: 'pH', symbol: '', range: { min: 7.35, max: 7.45 } },
];

export const fisioOptions = {
    mayor: 'Mayor a lo normal',
    normal: 'Normal',
    menor: 'Menor a lo normal'
};