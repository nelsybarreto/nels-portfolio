/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        lavender: {
          50:  "#F6F1FF",
          100: "#EEE6FF",
          200: "#DDCEFF",
          300: "#C6AEFF",
          400: "#AD87FF",
          500: "#9160FF",
          600: "#7C3AED", // acento
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        // Fondo principal como tu screenshot (lila suave)
        heroBg: "#8E7BFF", // úsalo si querés un fondo más sólido
      

        // Fondo “calma” para secciones individuales (tu regla de marca)
        calm: {
          DEFAULT: "#F1E6FA", // VERY LIGHT LILAC
        },

        // Sistema de UI (para look senior y consistente)
        surface: {
          DEFAULT: "#FFFFFF",   // cards
          soft: "#F7F7FA",      // fondo general
          muted: "#F3F4F6",     // secciones suaves
        },

        text: {
          primary: "#0F172A",   // slate-900
          secondary: "#334155", // slate-700
          muted: "#64748B",     // slate-500
        },

        border: {
          DEFAULT: "#E2E8F0",   // slate-200
        },
      },

      fontFamily: {
        // Usa system-ui por defecto (más “senior” y rápido)
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },

      borderRadius: {
        // Esquinas más suaves tipo “SaaS moderno”
        xl: "0.9rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },

      boxShadow: {
        // Sombras suaves (nada “gamer”)
        soft: "0 8px 24px rgba(15, 23, 42, 0.08)",
        card: "0 10px 30px rgba(15, 23, 42, 0.10)",
      },

      backgroundImage: {
        // Gradiente editorial muy sutil para el hero
        "hero-grad":
          "radial-gradient(80% 60% at 20% 10%, rgba(124,58,237,0.12) 0%, rgba(255,255,255,0) 60%), radial-gradient(70% 60% at 90% 0%, rgba(124,58,237,0.08) 0%, rgba(255,255,255,0) 55%)",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        fadeUp: "fadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      boxShadow: {
        'glow-soft': '0 18px 40px rgba(140,108,216,.14)',
      },
    },
  },
  plugins: [],
};
