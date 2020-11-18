import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    OnInputChange = (e) => {
      this.setState({term: e.target.value});
    }

    OnFormSubmit = (e) => {
      e.preventDefault();
      this.props.OnSearchSubmit(this.state.term);  
    }

    render(){
        return (
            <div className="search-bar ui segment">
             <form className="ui form" onSubmit={this.OnFormSubmit}>
                <div className="field">
                    <label htmlFor="videoSearch">Video Search</label>
                    <input type="text" 
                    id="videoSearch" 
                    value={this.state.term} 
                    onChange={this.OnInputChange}/>
                </div>

             </form>
            </div>
        );
    }
}

export default SearchBar;