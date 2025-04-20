import React from "react";
import { useTheme } from "../context/Theme";

function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const toggleTheme = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <div
      onClick={toggleTheme}
      className={`relative w-16 h-8 flex items-center rounded-full cursor-pointer transition duration-300 ${
        themeMode === "dark" ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          themeMode === "dark" ? "translate-x-8.5" : "translate-x-1"
        }`}
      ></div>
      <span
        className={`absolute left-2 text-sm ${
          themeMode === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        🌞
      </span>
      <span
        className={`absolute right-3 text-sm ${
          themeMode === "dark" ? "text-gray-200" : "text-gray-800"
        }`}
      >
        🌙
      </span>
    </div>
  );
}

export default ThemeBtn;
