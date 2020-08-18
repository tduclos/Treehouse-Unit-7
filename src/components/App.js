import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

//Components

import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import InvalidRoute from './InvalidRoute';

//API Key

import apiKey from './config';

class App extends Component {

  state = {
    photos: [],
    result: 'cats',
    loading: true
  }

  //API requests (defaults to 'kittens')

  performSearch = (query = 'kittens') => {
    this.setState({ loading: true });
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&sort=relevance&is_getty=true&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  // Update the results

  updateResult = (text) => { this.setState({ result: text }) };

  //render to DOM

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search data={this.state.result} search={this.updateResult} /> 
          <Nav />                                                        
          <Switch>
      
            <Route exact path="/" render={() => (<Redirect to="/kittens" loading={this.state.loading} />)} />
                                                 
            <Route path="/kittens" 
                   render={() => <PhotoContainer title='Kittens' 
                                                 search='kittens' 
                                                 query={this.performSearch} 
                                                 data={this.state.photos} 
                                                 loading={this.state.loading} 
                   />} 
            />
    
            <Route path="/puppies" 
                   render={() => <PhotoContainer title='Puppies' 
                                                 search='puppies' 
                                                 query={this.performSearch} 
                                                 data={this.state.photos} 
                                                 loading={this.state.loading} 
                   />} 
            />
    
            <Route path="/lizards" 
                   render={() => <PhotoContainer title='Lizards' 
                                                 search='lizards' 
                                                 query={this.performSearch} 
                                                 data={this.state.photos} 
                                                 loading={this.state.loading} 
                   />} 
            />
    
            <Route path="/search/:result" 
                   render={() => <PhotoContainer title='Your Search Results' 
                                                 search={this.state.result} 
                                                 query={this.performSearch} 
                                                 data={this.state.photos} 
                                                 loading={this.state.loading} 
                   />} 
            />
    
            <Route component={InvalidRoute} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;