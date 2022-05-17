module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        'xxs': '.50rem',
      },
      colors:{
        'greens' : '#F0F1EF',
        'white': '#ffffff',
        'metal': '#565584',
        'green':'#0C5721',
        'softgreen' : '#ADD0B7',
        'softgrey':'#33434a'
      },
      fontFamily: {
        'script': 'Playball',
        'oleo':'Oleo Script Swash Caps'
      },
      screens: {
        'xxs': '340px', // min-width
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    
  },
  plugins: [],
}
