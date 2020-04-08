import React from 'react';
import SearchBar from './SearchBar';
import './css/App.css';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
    }
    
    render() {
        return (
            <div className='ui container App'>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;