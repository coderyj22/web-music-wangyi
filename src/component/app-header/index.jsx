import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { headerLinks } from '@/common/local-data';
import { HeaderWrapper } from './style';
export default memo(function AppHeader(props) {
  console.log(props)
  const showHeaderList = (item, index) => {
    if (index < 3) {
      return (
        <NavLink exact key={item.title} className="item" to={item.link}>
          {item.title}
          <i className="icon sprite-topbar"></i>
        </NavLink>
      );
    } else {
      return (
        <a key={item.title} className="item" href={item.link}>
          {item.title}
        </a>
      );
    }
  };
  return (
    <HeaderWrapper>
      <div className="content">
        <h1 className="logo">
          <a className="sprite-topbar"></a>
        </h1>
        <div className="select-list">
          {headerLinks.map((item, index) => {
            return showHeaderList(item, index);
          })}
        </div>
        <div className="search">
          <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined/>}/>
        </div>
        <a className="bilog">创作者中心</a>
        <a className='login'>登陆</a>
      </div>
    </HeaderWrapper>
  );
});
