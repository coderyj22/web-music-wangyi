import React from 'react'
import Discover from "@/pages/discover/index.jsx"
import Friend from '@/pages/friend/index.jsx'
import Mine from '@/pages/mine/index.jsx'
import { Redirect } from "react-router-dom"
const routes = [
  {
    path: '/',
    exact: true,
    // component: Discover  
    render: () => <Redirect to='/discover' /> // 直接写component也行，或者写render函数
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    path: '/mine',
    component: Mine
  }
]

export default routes
