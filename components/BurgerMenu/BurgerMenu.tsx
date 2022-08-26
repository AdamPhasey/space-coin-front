import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Link from 'next/link';
import Profile from '../Profile';
import { useUser } from "@auth0/nextjs-auth0";


export default function MenuPopupState(): JSX.Element {

  const { user, error, isLoading } = useUser();

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button size="small" variant="outlined" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Profile/></MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            {!user && (
            <MenuItem onClick={popupState.close}><Link href="/">Home</Link></MenuItem>
            )}
            {user && (
            <MenuItem onClick={popupState.close}><Link href="api/auth/logout">Logout</Link></MenuItem>
            )}
          </Menu>
        </>
      )}
    </PopupState>
  );
}
