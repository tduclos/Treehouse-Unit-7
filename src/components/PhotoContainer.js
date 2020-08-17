import React, { Component } from 'react';
import PropTypes from 'prop-types';

//components

import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {

  static propTypes = {
    search: PropTypes.string,
    loading: PropTypes.bool,
    title: PropTypes.string,
    data: PropTypes.array
  }

  state = {
    loading: true,
  }

  search = () => {
    this.props.query(this.props.search);
  }

  //After loading into the dom, run the default search

  componentDidMount() {
    this.search();
  }

  // Re-render upon update

  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      this.search();
    }
  }

  //Render to DOM

  render() {

    const { loading, title, data } = this.props;
    const results = data;
    let photos;
    let notFound;

    if (results.length > 6) {
      photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} />);
    } else {
      notFound = <NotFound />
    }

    if (loading === false) {
      return (
        <div className="photo-container">
          <h2>{title}</h2>
          <ul>
            {photos}
          </ul>
          {notFound}
        </div>
      );
    } else {
      return (
        <div className="photo-container">
          <h2>'Loading...'</h2>
        </div>
      );
    }
  }
};

export default PhotoContainer;