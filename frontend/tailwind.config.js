/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // ---- FONTES ----
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                serif: ['Montserrat'],
            },

            // ---- TAMANHOS FIÉIS (px → rem) ----
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
                sm: ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
                base: ['1rem', { lineHeight: '1.5rem' }],      // 16px
                lg: ['1.125rem', { lineHeight: '1.75rem' }],   // 18px
                xl: ['1.25rem', { lineHeight: '1.75rem' }],    // 20px
                '2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],// 30px
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
                '5xl': ['3rem', { lineHeight: '3.5rem' }],     // 48px
                '6xl': ['3.75rem', { lineHeight: '1' }],       // 60px
            },

            // ---- LETTER-SPACING ----
            letterSpacing: {
                tighter: '-0.05em',
                tight: '-0.025em',
                normal: '0',
                wide: '0.025em',
                wider: '0.05em',
            },
        },
    },
    plugins: [],
};