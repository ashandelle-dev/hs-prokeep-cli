/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./src/index.js",
        "./src/js/*.js",
        "./src/layouts/**/*.html",
        "./src/modules/*.module/*.{html,js}",
        "./src/partials/**/*.html",
        "./src/templates/**/*.html",
        "./src/sections/**/*.html",
        "./src/system/**/*.html",

    ],
    theme: {
        fontFamily: {
            // k: ["Karla", "san-serif"],
            // "k-bold": ["Karla-700", "san-serif"],
        },
        extend: {
            colors: {
                pk: {
                    // grey: "#232323",
                    // blue: "#0060ff",
                    orange: "#DA5039",
                    orange100: "#FF7E69",
                    grey: "#F2F5F7",
                    blue: "#173A53",
                }
            },
            gridTemplateColumns: {
                '24': 'repeat(24, minmax(0, 1fr))',
                'blog-2-posts': '440px 1fr',
            },
            animation: {
                "slide-down": "slide-down .1s ease-out both",
            },
            keyframes: {
                "slide-down": {
                    "0%": { opacity: 0, transform: "translateY(-8px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
            }
        },
        container: {
            center: true,
            screens: {
                "2xl": "1440px",
            },
            padding: {
                "DEFAULT": '1rem',
                lg: "0"

              },
        },
    },
    plugins: [
        function({ addUtilities }) {
            const newUtilities = {
                '.text-heading-xxl': {
                    fontSize: 'clamp(40px, 5vw + 20px, 80px)',
                    lineHeight: 'clamp(120%, 0.5vw + 110%, 100%)',
                    letterSpacing: 'clamp(-3px, -0.2vw - 1px, -1px)',
                    fontWeight: 'bold',
                },
                '.text-heading-xl': {
                    fontSize: 'clamp(32px, 4vw + 16px, 60px)',
                    lineHeight: 'clamp(125%, 0.3vw + 112%, 110%)',
                    letterSpacing: 'clamp(-1.5px, -0.1vw - 0.5px, -0.5px)',
                    fontWeight: 'bold',
                },
                '.text-heading-l': {
                    fontSize: 'clamp(28px, 2.5vw + 18px, 40px)',
                    lineHeight: 'clamp(130%, 0.2vw + 125%, 120%)',
                    letterSpacing: 'clamp(-1px, -0.1vw - 0.4px, -0.4px)',
                    fontWeight: 'bold',
                },
                '.text-heading-m': {
                    fontSize: 'clamp(24px, 1.5vw + 20px, 32px)',
                    lineHeight: 'clamp(133%, 0.1vw + 130%, 125%)',
                    letterSpacing: 'clamp(-0.5px, -0.05vw - 0.4px, -0.4px)',
                    fontWeight: 'bold',
                },
                '.text-heading-sm': {
                    fontSize: 'clamp(22px, 0.5vw + 20px, 24px)',
                    lineHeight: 'clamp(136%, 0.1vw + 133%, 133%)',
                    letterSpacing: 'clamp(-0.4px, -0.02vw - 0.3px, -0.3px)',
                    fontWeight: 'bold',
                },
                '.text-heading-xs': {
                    fontSize: '20px',
                    lineHeight: '138%',
                    fontWeight: 'bold',
                },
                '.text-heading-xxs': {
                    fontSize: '18px',
                    lineHeight: '133%',
                    fontWeight: 'bold',
                }
            }
            addUtilities(newUtilities)
        }
    ],
};
