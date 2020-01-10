const smartgrid = require('smart-grid');

const settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* число колонок */
    offset: '30px', /* расстояние между колонками */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1170px', /* max-width оn very large screen */
        fields: '30px' /* paddingи контейнера */
    },
    breakPoints: {
        lg: {
            width: '1280px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '1024px'
        },
        sm: {
            width: '768px',
            // fields: '15px'  paddingи контейнера 
        },
        xs: {
            width: '600px'
        },
        ex: {
            width: '480px'
        },
        exs: {
            width: '320px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

smartgrid('./src/less', settings);