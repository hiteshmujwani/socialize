/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.js", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
   extend: {
      colors: {
        // 🌿 Background gradient color for profile/header sections
        mint: '#C2F0E8',

        // 🟢 Floating Action Button (FAB), Add Story button
        brightMint: '#00E0B8',

        // 🕊️ Card backgrounds, search box, story backgrounds
        softGray: '#F9F9F9',

        // ⚫ Main text color: names, post content, titles
        darkText: '#1C1C1E',

        // 🩶 Secondary text: timestamps, labels, light info
        lightText: '#7F8C8D',

        // 🔴 Notification dots, error indicators, alert icons
        danger: '#FF3B30',

        // ✅ Hashtags, handles (@username), small status labels
        success: '#2ECC71',
      },
    },
  },
  plugins: [],
}