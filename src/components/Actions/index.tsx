/* eslint-disable react/no-unused-prop-types */
import {
  Fingerprint as FingerprintIcon,
  List as PreferencesIcon,
  Logout as LogoutIcon,
  Mail as MailIcon,
  MoreVert as MoreIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import React from 'react';

import { ActionItem } from './ActionItem';

interface ActionProps {
  total?: number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  disableTooltip?: boolean;
}

export function Messages({ onClick, disableTooltip = false, total }: ActionProps) {
  return (
    <ActionItem
      title="My Messages"
      icon={MailIcon}
      onClick={onClick}
      badgeContent={total}
      disableTooltip={disableTooltip}
    />
  );
}

export function More({ onClick, disableTooltip = false }: ActionProps) {
  return (
    <ActionItem title="More" icon={MoreIcon} onClick={onClick} disableTooltip={disableTooltip} />
  );
}

export function Notifications({ total, onClick, disableTooltip = false }: ActionProps) {
  return (
    <ActionItem
      title="Notifications"
      icon={NotificationsIcon}
      onClick={onClick}
      badgeContent={total}
      disableTooltip={disableTooltip}
    />
  );
}

export function UserAccount({ onClick, disableTooltip = false }: ActionProps) {
  return (
    <ActionItem
      title="My Account"
      icon={FingerprintIcon}
      onClick={onClick}
      disableTooltip={disableTooltip}
    />
  );
}

export function SignOut({ onClick, disableTooltip = false }: ActionProps) {
  return (
    <ActionItem
      title="Sign Out"
      icon={LogoutIcon}
      onClick={onClick}
      disableTooltip={disableTooltip}
    />
  );
}

export function Settings({ onClick, disableTooltip = false }: ActionProps) {
  return (
    <ActionItem
      title="Settings"
      icon={SettingsIcon}
      onClick={onClick}
      disableTooltip={disableTooltip}
    />
  );
}

export function Preferences({ onClick, disableTooltip = false }: ActionProps) {
  return (
    <ActionItem
      title="Preferences"
      icon={PreferencesIcon}
      onClick={onClick}
      disableTooltip={disableTooltip}
    />
  );
}
