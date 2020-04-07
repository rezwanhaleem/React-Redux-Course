import React from 'react';

class SearchBar extends React.Component {

    render(){
        return (
            <div className='ui segment'>
                <form action="" method="get" className='ui form'>
                    <div className='field'>           
                        <label htmlFor='search'>Image Search</label>       
                        <input list="search-items" name="search" autoComplete='off'/>
                        {/* Datalist may not be fully supported on all browsers. Autocomplete turned off to avoid known bugs */}
                        <datalist id="search-items">
                            <option value="Internet Explorer" />
                            <option value="Firefox" />
                            <option value="Chrome" />
                            <option value="Opera" />
                            <option value="Safari" />
                        </datalist>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;