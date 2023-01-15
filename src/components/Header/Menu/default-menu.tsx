import { Divider, Menu, MenuItem } from '@mui/material';

import { Preferences, Settings, SignOut } from '../../Actions';

interface DefaultMenuProps {
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  anchorEl: HTMLElement | null;
}

export function DefaultMenu({ isMenuOpen, handleMenuClose, anchorEl }: DefaultMenuProps) {
  return <Menu
    anchorEl={anchorEl}
    id="primary-search-account-menu"
    keepMounted
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>
      <Settings disableTooltip />
      Settings
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <Preferences disableTooltip />
      Preferences
    </MenuItem>
    <Divider />
    <MenuItem onClick={handleMenuClose}>
      <SignOut disableTooltip />
      Sign Out
    </MenuItem>
  </Menu>
}
