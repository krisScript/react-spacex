import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

class ImageGallery extends Component {
  state = {
    open: false,
    currentImg: ''
  };

  handleOpen = img => {
    this.setState(prevState => ({
      open: true,
      currentImg: img
    }));
  };

  handleClose = () => {
    this.setState(prevState => ({
      open: false
    }));
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3} style={{ width: '100%' }}>
          {images.map(img => (
            <GridListTile key={img}>
              <img src={img} alt="" onClick={() => this.handleOpen(img)} />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    const actions = [
      <Button label="Close" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          open={this.state.open}
          onBackdropClick={this.handleClose}
        >
          <img
            src={this.state.currentImg}
            alt="Launch IMage"
            style={{ width: '100%' }}
          />
        </Dialog>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageGallery;
