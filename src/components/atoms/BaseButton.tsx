import React, { FC } from 'react';
import Button from '@material-ui/core/Button';

const BaseButton: FC = () => {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
};

export default BaseButton;
