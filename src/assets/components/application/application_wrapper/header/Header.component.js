import React from 'react';
import { header } from '../../../../styles/application.module.css';
import Filter from './filter/Filter.connector';

const Header = () => (
  <div className={header}>
    <Filter />
  </div>
);

export default Header;
