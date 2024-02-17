import { useContext } from 'react';
import { DrawerContext } from 'contexts/drawerContext';

const useDrawer = () => {
  return useContext(DrawerContext);
};

export default useDrawer;
