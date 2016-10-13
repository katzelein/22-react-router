'use strict';

import React from 'react';
import {fetchAndGoToAlbum} from '../action-creators/albums';
import {Link} from 'react-router';

export default class Albums extends React.Component {
  componentDidMount() {
    console.log(this.props.params)
  }
  render () {
    const albums = this.props.albums || []
    console.log(albums)
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
          {
            albums.map(album => (
              <div className="col-xs-4" key={ album.id }>
                <Link to={`/albums/${album.id}`} className="thumbnail">
                  <img src={ album.imageUrl } />
                  <div className="caption">
                    <h5>
                      <span>{ album.name }</span>
                    </h5>
                    <small>{ album.songs.length } songs</small>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
};

// function fetchThisPuppy (nextState) {
//   console.log(nextState);
//   fetch(`/api/puppies/${nextState.params.puppyName}`)
//   .then(response => response.json())
//   .then(puppy => {
//     store.dispatch({
//       type: 'RECEIVE_PUPPY',
//       puppy
//     });
//   })
//   .catch(err => console.error(err.stack));
// }