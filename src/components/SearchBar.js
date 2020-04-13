import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: '',
        suggestions: ['cars','flowers','people','dogs','cats','tech','react']
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    onFormChange = e => {
        this.setState({term: e.target.value});
    }

    onOptionSelect = e => {
        if(this.state.suggestions.includes(e.target.value))
            this.props.onSubmit(e.target.value);
    }

    render(){
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} method="get" className='ui form'>
                    <div className='field'>           
                        <label htmlFor='search'>Image Search</label>       
                        <input 
                            list="search-items" 
                            name="search" 
                            autoComplete='off' 
                            onChange={this.onFormChange}
                            onInput={this.onOptionSelect}
                        />
                        {/* Datalist may not be fully supported on all browsers. Autocomplete turned off to avoid known bugs */}
                        <datalist id="search-items">
                            {this.state.suggestions.map((suggestion, key)=> <option key ={key} value={suggestion}/>)}
                        </datalist>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;