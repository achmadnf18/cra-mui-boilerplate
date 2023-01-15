/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */
import { css } from '@emotion/react';
import { Typography } from '@mui/material';
import { AppContext } from 'contexts/app-context';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

import logo from '../logo.svg';
import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';

export function Home() {
  const context = useContext(AppContext);
  const { user } = context;

  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
      </Helmet>
      <Typography variant="h4">{`Hello, ${user.name}`}</Typography>
      <div
        css={css`
          text-align: center;
          margin-top: 6rem;
        `}
      >
        <img
          css={css`
            height: 40vmin;
            pointer-events: none;
            @media (prefers-reduced-motion: no-preference) {
              animation: App-logo-spin infinite 15s linear;
            }
            @keyframes App-logo-spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `}
          src={logo}
          alt="logo"
        />
      </div>
    </>
  );
}
