/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                h1: "3.05rem",
                h2: "2.44rem",
                h3: "1.95rem",
                h4: "1.56rem",
                h5: "1.25rem",
                body: "1rem",
                caption: "0.8rem",
                small: "0.64rem",
            },
        },
    },
    plugins: [],
};
