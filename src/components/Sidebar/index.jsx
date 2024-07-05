// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Flex, View, Text } from '@adobe/react-spectrum';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('Home');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <View UNSAFE_className="sidebar-background">
      <Flex direction="column" gap="size-100">
        <Text UNSAFE_className='button-outline'>
          <Link
            to="/"
            className={`Text-link ${selectedItem === 'Home' ? 'selected' : ''}`}
            onClick={() => handleItemClick('Home')}
          >
            Home
          </Link>
        </Text>
        <Text UNSAFE_className='button-outline'>
          <Link
            to="/dashboard"
            className={`Text-link ${selectedItem === 'Dashboard' ? 'selected' : ''}`}
            onClick={() => handleItemClick('Dashboard')}
          >
            Dashboard
          </Link>
        </Text>
        <Text UNSAFE_className='heading'>Services</Text>
        <Flex direction="column" paddingStart="size-200">
          <Text UNSAFE_className='button-outline'>
            <Link
              to="/services/airports"
              className={`Text-link ${selectedItem === 'Airports' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Airports')}
            >
              Airports
            </Link>
          </Text>
          <Text UNSAFE_className='button-outline'>
            <Link
              to="/services/videos"
              className={`Text-link ${selectedItem === 'Videos' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Videos')}
            >
              Videos
            </Link>
          </Text>
        </Flex>
        <Text UNSAFE_className='heading'>Others</Text>
        <Flex direction="column" paddingStart="size-200">
          <Text UNSAFE_className='button-outline'>
            <Link
              to="/others/list1"
              className={`Text-link ${selectedItem === 'List 1' ? 'selected' : ''}`}
              onClick={() => handleItemClick('List 1')}
            >
              List 1
            </Link>
          </Text>
          <Text UNSAFE_className='button-outline'>
            <Link
              to="/others/list2"
              className={`Text-link ${selectedItem === 'List 2' ? 'selected' : ''}`}
              onClick={() => handleItemClick('List 2')}
            >
              List 2
            </Link>
          </Text>
        </Flex>
      </Flex>
    </View>
  );
};

export default Sidebar;
