import React from 'react';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import axios from 'axios';


class App extends Component {
  state = {
    imageName: '',
    images :[],
    page :1,
    error :false,
    loading:false,
  };
componentDidUpdate(_,prevState){

  if(this.state.imageName !== prevState.imageName){
    this.setState({loading: true})
    axios.get(`https://pixabay.com/api/?q=${this.state.imageName}&page=${this.state.page}&key=28680775-d5d2c94020fa583a98c0796ee&image_type=photo&orientation=horizontal&per_page=12`)
    .then(({data}) => {
      this.setState({
        images : data.hits
      })
    })
    .catch(alert("Ничего не найдено :("))
    .finally(this.setState({loading: false}))

  }




}
  handleSearchFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery images ={this.state.images}/>
      </>
    );
  }
}

export default App;
