import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './CategoriesMenu.css'
import { SportsSoccer } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { pathRoutes } from '../../../routes/PathRoutes';


const items = [
  {
    label: 'Accesorios',
    key: 'mail',
    icon: <SportsSoccer />,
    children: [
      {
        type: 'group',
        label: 'Deportes',
        children: [
          {
            label: (<Link to={`${pathRoutes.products}/16`}>Balon mano</Link>),
            key: '16',
          },
          {
            label:  (<Link to={`${pathRoutes.products}/12`}>Futbol</Link>),
            key: '12',
          },
          {
            label:  (<Link to={`${pathRoutes.products}/14`}>Voleibol</Link>),
            key: '14',
          },
        ],
      }
    ]
  },
  {
    label: 'Ropa deportiva (en construcción)',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Fitness (en construcción) ',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    disabled: true,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
    ],
  },
 
];
const CategoriesMenu = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className="menu-container">
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </div>
  )


};
export default CategoriesMenu;