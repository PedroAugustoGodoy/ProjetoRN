import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Tela3 from './Tela3';
import Tela4 from './Tela4';

const AppNavigator = createStackNavigator(
  {
    Tela1: { screen: Tela1 },
    Tela2: { screen: Tela2 },
    Tela3: { screen: Tela3 },
    Tela4: { screen: Tela4 },
  },
  {
    initialRouteName: 'Tela1',
  }
);

export default createAppContainer(AppNavigator);