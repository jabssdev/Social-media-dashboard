import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(() => {
		const saved = localStorage.getItem("theme");
		return saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
	});

	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDark]);

	const toggleTheme = () => setIsDark(!isDark);

	return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
