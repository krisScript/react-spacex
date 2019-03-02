import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
const RocketDetail = props => {
  return (
    <Typography paragraph>
      {props.detailName}:{' '}
      {props.detailName === 'wikipedia' ? (
        <Button color="primary" href={props.detailValue}>
          Article Link
        </Button>
      ) : (
        props.detailValue
      )}
    </Typography>
  );
};

RocketDetail.propTypes = {
  detailName: PropTypes.string.isRequired,
  detailValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired
};
export default RocketDetail;
