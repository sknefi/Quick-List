
export function changeColorTheme() {
	const htmlElement = document.documentElement; // Get the <html> element
	
	// Check if the data-bs-theme attribute exists
	const currentTheme = htmlElement.getAttribute("data-bs-theme");
  
	if (currentTheme === "dark") {
	  // If the current theme is "dark", switch to "light"
	  htmlElement.setAttribute("data-bs-theme", "light");
	} else if (currentTheme === "light") {
	  // If the current theme is "light", switch to "black"
	  htmlElement.setAttribute("data-bs-theme", "dark");
	}
}
  