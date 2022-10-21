import React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Link } from "@mui/material";

export default function LinkOut({ children, href, target }: any) {
  // const theme = useTheme();

  const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  }));

  return(
    <StyledLink href={href} target={target || '_blank'}>
      {children}
    </StyledLink>
  )
}

