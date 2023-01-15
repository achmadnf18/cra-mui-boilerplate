/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from '@mui/material';

export function PageTitle({ title }: { title: string }) {
  return <Typography
    css={css`
      text-transform: uppercase;
    `}
    variant="h2"
    component="h3"
    color="textSecondary"
  >
    {title}
  </Typography>
}
