// src/components/Header.js
import React from 'react';
import "./style.css";

import { Flex, View, Text } from '@adobe/react-spectrum';

const Header = () => {
  return (
    <View UNSAFE_className='header'>
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <Text UNSAFE_className='comapany-name'>hava havai</Text>
        <img className='profile' src="/hava havai profile.jpeg" alt="User Avatar"/>
      </Flex>
    </View>
    
  );
};

export default Header;
