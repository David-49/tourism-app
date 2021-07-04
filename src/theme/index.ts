import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#fff',
        },
      },
    },
  },
});
