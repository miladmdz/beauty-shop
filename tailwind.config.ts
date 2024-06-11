import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center:true
      },
      fontFamily: {
        DanaDemiBold: "DanaDemiBold",
        DanaMedium: "DanaMedium",
        DanaRegular: "DanaRegular",
        MorabbaLight: "MorabbaLight",
        MorabbaBold: "MorabbaBold",
        MorabbaMedium: "MorabbaMedium",
      },
      colors:{
        primryBlack:"#212529",
        primryGray:"#6c757d",
        primryGreen:"#198754",
        primryGreen2:"#0a9a3f",
        primryYellow:"#ffc107",
        primryRed:"#dc3545",
        primryPink:"#d63384",
        primryOcean:"#0dcaf0",
        primryOcean2:"#0d6efd",
        primryCream:"#f96",
        primryCream2:"#f4b19f",
      },
      fontSize: {
        xxs: "0.625rem",
        xxxs: "0.5rem",
      },
      gridTemplateColumns:{
        "1/3":"repeat(3,1fr)"
      }
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    function ({ addVariant }: any) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
export default config;
