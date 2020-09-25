import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <div className="copyright">
        <Typography variant="body2" align="center">
          {'Copyright © '}
            lofi-drops.com
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </div>
    );
}

export default Copyright;