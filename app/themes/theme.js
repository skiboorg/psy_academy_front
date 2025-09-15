
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/lara';

const CustomTheme = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#fffbe6',
            100: '#f6cdba',
            200: '#e8a090',
            300: '#d77268',
            400: '#c33f42',
            500: '#a91f2c',
            600: '#8f2023',
            700: '#751f19',
            800: '#5c1d10',
            900: '#451a03',
            950: '#1a0000'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '#a91f2c',
                    inverseColor: '#ffffff',
                    hoverColor: '#8f2023',
                    activeColor: '#751f19'
                },
                highlight: {
                    background: '#f6cdba',
                    focusBackground: '#e8a090',
                    color: '#451a03',
                    focusColor: '#451a03'
                }
            },
            dark: {
                primary: {
                    color: '#e8a090',
                    inverseColor: '#451a03',
                    hoverColor: '#f6cdba',
                    activeColor: '#a91f2c'
                },
                highlight: {
                    background: 'rgba(255, 251, 235, .08)',
                    focusBackground: 'rgba(255, 251, 235, .12)',
                    color: 'rgba(255,251,235,.95)',
                    focusColor: 'rgba(255,251,235,.95)'
                }
            }
        }
    },
    rules: {
        global: {
            fontSize: '0.75rem',
            borderRadius: '0.2rem'
        },
        button: {
            fontSize: '0.75rem',
            padding: '0.25rem 0.5rem',
            gap: '0.3rem'
        },
        input: {
            fontSize: '0.75rem',
            padding: '0.3rem 0.5rem'
        },
        dropdown: {
            fontSize: '0.75rem',
            itemPadding: '0.25rem 0.5rem'
        },
        datatable: {
            cellPadding: '0.25rem 0.5rem',
            fontSize: '0.75rem'
        },
        dialog: {
            padding: '0.75rem',
            headerFontSize: '0.9rem',
            contentFontSize: '0.75rem'
        },
        card: {
            padding: '0.75rem'
        },
        tabview: {
            fontSize: '0.75rem'
        },
        checkbox: {
            size: '1rem'
        },
        radiobutton: {
            size: '1rem'
        }
    }
});

export default {
    preset: CustomTheme,
    options: {
        darkModeSelector: '.p-dark'
    }
};
