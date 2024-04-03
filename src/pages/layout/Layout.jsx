import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import LayoutImage from '@assets/BackgroundWhite.webp';
import { ColorModeContext } from './context/ColorMode';
import LayoutImaged from '@assets/BackgroundWhite.webp';
import ThemeControllers from './components/ThemeControllers';
import Header from '../../components/Header/Header';
import ShoppingCartButton from '../../components/shoppingCartButton/ShoppingCartButton';
import './Layout.css'

function Layout(props) {

  // let modeContext = React.useContext(ColorModeContext);
  // console.log(modeContext);

  return (
    <div className='layout' >
      <Header />
      {props.children}
      <ShoppingCartButton />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
