import { Flare, NightsStay } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { ThemeModeContext } from 'contexts/theme-mode-context';
import { useContext } from 'react';

import { LIGHT_MODE_THEME } from '../../../utils/constants';
import { ActionItem } from '../../Actions/ActionItem';

export function ThemeSwitcher({ disableTooltip = false }: { disableTooltip?: boolean }) {
  const theme = useTheme();
  const { toggleThemeMode } = useContext(ThemeModeContext);

  return (
    <ActionItem
      title="Toggle Theme"
      icon={theme.palette.mode === LIGHT_MODE_THEME ? Flare : NightsStay}
      onClick={toggleThemeMode}
      disableTooltip={disableTooltip}
    />
  );
}
