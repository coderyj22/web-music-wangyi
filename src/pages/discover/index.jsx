import React, { memo, useEffect } from 'react';
import { TopHeader } from './style';
import { headerNavList } from '@/common/local-data';
import { NavLink } from 'react-router-dom';
export default memo(function discover() {
  const NavHeader = () => {
    useEffect(() => {

    }, []);

    return (
      <TopHeader>
        <div className="wrap-main">
          <ul className="nav">
            {headerNavList.map(item => {
              return (
                <li key={item.link} className="nav-item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </TopHeader>
    );
  };
  return <div>{NavHeader()}</div>;
});
