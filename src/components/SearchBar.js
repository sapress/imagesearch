import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }
    
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form"> {/* here, onFS knows what instance "this" is, but when it goes into itself as a callback fucntion to execute, it doesn't remember which instance to work with */}
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({term: e.target.value})}
                        />  {/*do not put () on the method in a prop unless you want it to be called every time it renders*/}
                    </div>
                </form>
            </div>
        ) 
    }
}

export default SearchBar;