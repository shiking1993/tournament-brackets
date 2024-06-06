// import './App.css';

// // import SingleElimination from './SingleElimination';
// // import DoubleElimination from './DoubleElimination';
// import CustomBracket from './CustomBracket';
// // import Bracket from './Bracket';

// function App() {
// 	return (
// 		<div className="App">

// 			<header className="App-header">
// 				<h1>Tournament Bracket</h1>
// 			</header>

// 			<main>
// 				<h2>Single Elimination</h2>
// 				{/* <SingleElimination /> */}

// 				<h2>Double Elimination</h2>
// 				{/* <DoubleElimination /> */}
// 				<h2>Custom </h2>
// 				<CustomBracket />
// 			</main>

// 		</div>
// 	);
// }

// export default App;

// src/App.jsx
// src/App.jsx


import './App.css';
import CustomMatchBracket from './CustomBracket';
// import DoubleElimination from './DoubleElimination';
// import SingleElimination from './SingleElimination';

function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
                <h1>Tournament Bracket</h1>
            </header> */}
            <main>
                <h2>Custom</h2>
                {/* <DoubleElimination /> */}
                {/* <SingleElimination /> */}
                <CustomMatchBracket />
            </main>
        </div>
    );
}

export default App;



