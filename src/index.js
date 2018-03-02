import React from 'react'
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAhX3xDu9DVGrvxRxcM0QmAH6AZG_CA1kY';


// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in The DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
