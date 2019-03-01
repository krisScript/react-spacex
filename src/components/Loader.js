import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
const Loader = () => (
    <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '5rem',
        }}
      >
        <CircularProgress />
      </div>
)
export default Loader
