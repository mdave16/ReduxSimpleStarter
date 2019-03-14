import React from 'react';
import ReactDOM from 'react-dom';
// create a new component
// which will output html
const App = () => {
	return <div>i work now</div>
}
// gonna put it on the page/dom
ReactDOM.render(<App />, document.querySelector('.container'))
