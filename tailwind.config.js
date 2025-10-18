module.exports = {
    content: [
        "./pages/**/*.{vue,js}",
        "./components/**/*.{vue,js}",
        "./layouts/**/*.{vue,js}",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}"
    ],
    darkMode: '.p-dark',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '20px',   // по умолчанию (мобилки)
                sm: '20px',
                md: '20px',
                lg: '20px',
                xl: '20px',
                '2xl': '20px'
            },
            screens: {
                sm: '640px',
                md: '1024px',
                lg: '1240px',
                xl: '1360px',
                '2xl': '1660px'
            }
        },
        extend: {
            colors: {
                primary: '#B71D31', // Добавляем свой основной цвет
                secondary: '#9333EA', // Добавляем второй цвет
                grey2c: '#2c2c2c', // Добавляем пользовательский серый
            },
        },
    },
    plugins: [require('tailwindcss-primeui')]
}
