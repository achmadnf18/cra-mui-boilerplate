/* eslint-disable unicorn/consistent-function-scoping */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { IconButton, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export function SignOutRoute() {
  const handleSignOutClick = () => {
    alert('Signing Out...');
  };

  return (
    <ListItemButton
      css={css`
        position: absolute;
        bottom: 0;
        width: 100%;
      `}
      onClick={handleSignOutClick}
    >
      <ListItemIcon>
        <IconButton size="small">
          <ExitToApp />
        </IconButton>
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItemButton>
  );
}
