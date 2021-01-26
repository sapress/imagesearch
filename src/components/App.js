import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{

    state = { images: [] };

    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', { 
            params: {query: term}
            
        });

        this.setState({ images: response.data.results});
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/> {/* prop bc its part of a component */} {/* have to either define what "this" is on the line where the funciton is called or do it in the method header w => function bc it simply rips off the function call alone without the associated object */}
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}


export default App;