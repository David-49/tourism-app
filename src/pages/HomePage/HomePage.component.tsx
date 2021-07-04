import React, { FC } from 'react';

import { createStyles, makeStyles } from '@material-ui/core';

export interface IProps {}

export const HomePage: FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

const useStyles = makeStyles((theme) => createStyles({}));
