import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "390px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Bolicina mobile tokens
        selce: "hsl(var(--c-selce))",
        forest: {
          DEFAULT: "hsl(var(--c-forest))",
          mid: "hsl(var(--c-forest-mid))",
          light: "hsl(var(--c-forest-light))",
        },
        cotto: {
          DEFAULT: "hsl(var(--c-cotto))",
          light: "hsl(var(--c-cotto-light))",
        },
        oro: {
          DEFAULT: "hsl(var(--c-oro))",
          light: "hsl(var(--c-oro-light))",
          deep: "hsl(var(--c-oro-deep))",
          tint: "hsl(var(--c-oro-tint))",
        },
        salvia: {
          DEFAULT: "hsl(var(--c-salvia))",
          light: "hsl(var(--c-salvia-light))",
        },
        blush: {
          DEFAULT: "hsl(var(--c-blush))",
          deep: "hsl(var(--c-blush-deep))",
        },
        parchment: "hsl(var(--c-parchment))",
        cream: {
          DEFAULT: "hsl(var(--c-cream))",
          deep: "hsl(var(--c-cream-deep))",
        },
        stone: {
          DEFAULT: "hsl(var(--c-stone))",
          mid: "hsl(var(--c-stone-mid))",
        },
        ink: {
          DEFAULT: "hsl(var(--c-ink))",
          2: "hsl(var(--c-ink-2))",
          3: "hsl(var(--c-ink-3))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out forwards",
        "slide-up": "slide-up 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
