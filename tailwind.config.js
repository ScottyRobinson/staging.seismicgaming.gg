import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(179 40 26)',
                secondary: '#fff',
                'action-border': 'rgb(74 90 121)',
                divider: 'rgb(48 47 47)',
                dark: 'rgb(20 20 20)',
                'dark-gray': 'rgb(29 28 28)',
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            container: {
                center: true,
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            strokeWidth: {
                0.5: 0.5,
                1.5: 1.5,
                2.5: 2.5,
            },
        },
    },
    plugins: [forms],
};
