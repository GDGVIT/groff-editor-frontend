import React, { useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
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
		props.theme.mode === "dark" ? "#1c1c1c" : "#DBDBDB"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  #nav> div:first-child, #nav>div> input, #navheading,#navsearch{
    background-color: ${(props) =>
		props.theme.mode === "dark" ? "#161616" : "#fff"};
    color: ${(props) =>
		props.theme.mode === "dark" ? "#fff !important" : "#000"};
  }
  #nav>div{
	box-shadow:0px 3px 6px #00000029;
	position:absolute;
  }
  #home {
	background-color: ${(props) =>
		props.theme.mode === "dark" ? "#1c1c1c !important" : "#fff"};
    color: ${(props) =>
		props.theme.mode === "dark" ? "#fff !important" : "#000"};
  }
  #documentcontainer{
	background-color: ${(props) =>
		props.theme.mode === "dark" ? "#222 !important" : "#fff"};
    color: ${(props) =>
		props.theme.mode === "dark" ? "#fff !important" : "#000"};
  }
  .LoaderText{
	color: ${(props) => (props.theme.mode === "dark" ? "#fff !important" : "#000")};
  }
  #newdocument{
	background-color: ${(props) =>
		props.theme.mode === "dark" ? "#4d4d4d" : "#f8f8f8"};
    color: ${(props) =>
		props.theme.mode === "dark" ? "#fff !important" : "#000"};
  }
  #document{
	background-color: ${(props) =>
		props.theme.mode === "dark" ? "#3a3a3a" : "#f8f8f8"};
    color: ${(props) =>
		props.theme.mode === "dark" ? "#fff !important" : "#000"};
  }
  #docdeets{
	background-color: ${(props) =>
		props.theme.mode === "dark" ? "#4d4d4d" : "#fff"};
    color: ${(props) =>
		props.theme.mode === "dark" ? "#fff !important" : "#000"};
  }
  .fa-chevron-left{
	color: ${(props) => (props.theme.mode === "dark" ? "#fff !important" : "#000")};
  }
  #dropdown{
	background-color: ${(props) =>
		props.theme.mode === "dark" ? "#161616" : "#fff"};
    color: ${(props) =>
		props.theme.mode === "dark" ? "#fff !important" : "#000"};
  }
  #dropdownTriangle{
	  border-bottom: ${(props) =>
			props.theme.mode === "dark"
				? "12px solid #161616"
				: "12px solid #fff"};
  }
  #dropdown>div:hover{
	  background-color: ${(props) =>
			props.theme.mode === "dark" ? "rgb(92,92,92)" : "rgb(241,241,241)"};
  }
  select{
	  color:black;
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
