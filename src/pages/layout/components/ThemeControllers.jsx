import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { ColorModeContext } from '../context/ColorMode';

function ThemeControllers() {
  const theme = useTheme();
  console.log(theme);
  // let modeContext = React.useContext(ColorModeContext);
  // console.log(modeContext);

  const [mode, setMode] = React.useContext(ColorModeContext);
  console.log(mode);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        
      },
    }),
    [mode],
  );
 

  console.log(colorMode)
  
  return (
    <Box  sx={{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: '../../assets/BackgroundWhite.webp',
      color: 'text.primary',
      borderRadius: 1,
      p: 3,
    }}>

      {mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default ThemeControllers;
