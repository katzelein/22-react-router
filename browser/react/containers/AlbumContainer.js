'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import { fetchAlbum } from '../action-creators/albums';

const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

const mapDispatchToProps = dispatch => ({
  fetch: album => dispatch(fetchAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);