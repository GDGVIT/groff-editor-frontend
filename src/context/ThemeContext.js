import React, { useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { backgroundColor, textColor } from "./theme";
import storage from "local-storage-fallback";
const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

function getInitialTheme() {
	const savedTheme = storage.getItem("theme");
	return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
}
export const MyThemeProvider = ({ children }) => {
	const [themeState, setThemeState] = React.useState(getInitialTheme);
	useEffect(() => {
		storage.setItem("theme", JSON.stringify(themeState));
	}, [themeState]);

	// const Wrapper = styled.div`
	//   background-color: ${backgroundColor};
	//   color: ${textColor};
	// `;
	const GlobalStyle = createGlobalStyle`
  .EditorBackground{
    background-color: ${(props) =>
		props.theme.mode === "dark" ? "#111" : "#eee"};
    color: ${(props) => (props.theme.mode === "dark" ? "#eee" : "#111")};
  }
  .EditorBackground > div> div, input{
    background-color: ${(props) =>
		props.theme.mode === "dark" ? "#111" : "#eee"};
    color: ${(props) =>
		props.theme.mode === "dark" ? "#eee !important" : "#111"};
  }
  `;

	const toggle = () => {
		const mode = themeState.mode === "light" ? `dark` : `light`;
		setThemeState({ mode: mode });
	};

	return (
		<ThemeToggleContext.Provider value={{ toggle: toggle }}>
			<ThemeProvider
				theme={{
					mode: themeState.mode,
				}}
			>
				<>
					<GlobalStyle />
					{children}
				</>
				{/* </Wrapper> */}
			</ThemeProvider>
		</ThemeToggleContext.Provider>
	);
};

export default ThemeProvider;
