import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { AppBar, Toolbar, Typography, Link, Button, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// Slider: import { DarkModeIcon, LightModeIcon } from 'react-icons/bs';

import { ColorModeContext } from './layout';
import { FC } from '../../utils/types';


export interface HeaderProps {
    siteTitle?: string;
}

const Header: FC<HeaderProps> = (props) => {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <AppBar component="header" position="static" style={{minHeight: '42px'}}>
            <Toolbar style={{minHeight: '36px', paddingTop: theme.spacing(1), paddingBottom: theme.spacing(1)}}>
                <Typography variant="h6" style={{flexGrow: '1'}}>
                    <Link to="/" component={GatsbyLink} color="inherit" style={{textDecoration: 'none'}}>
                        {props.siteTitle || ''}
                    </Link>
                </Typography>
                {/* <div style={{flexGrow: '1'}} /> */}
                <Tooltip title="Switch theme (light/dark)">
                    <Button color='inherit' onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'light' ? <DarkModeIcon /> : <LightModeIcon  />}
                    </Button>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};
export default Header;