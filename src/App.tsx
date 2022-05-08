import { useState } from "react";
import "./App.css";
import FooterComponent from "./components/Footer";
import NavComponent from "./components/Navbar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			{/* <TabComponent/> */}
			<NavComponent />
			{/* <BodyComponent/> */}
			<FooterComponent />
		</div>
	);
}

export default App;
