import { useState } from "react";

export const App = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>Contador : {count}</h1>
			<button onClick={() => setCount(count + 1)}>+1</button>
		</>
	);
};
