// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideFooterLayout from './layouts/HeaderAsideFooterLayout';
import LoanPageLayout from './layouts/LoanPageLayout';
import Home from './pages/Home';

import Regist from './pages/Regist';
import Login from './pages/Login';
import LoanManager from './pages/LoanManager';
import UserPage from './pages/UserPage';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: HeaderAsideFooterLayout,
    component: Home,
  },
  {
    path: '/regist',
    layout: HeaderAsideFooterLayout,
    component: Regist,
  },
  {
    path: '/login',
    layout: HeaderAsideFooterLayout,
    component: Login,
  },
  {
    path: '/LoanManager',
    layout: HeaderAsideFooterLayout,
    component: LoanManager,
  },
  {
    path: '/userPage',
    layout: LoanPageLayout,
    component: UserPage,
  },
  {
    path: '*',
    layout: HeaderAsideFooterLayout,
    component: NotFound,
  },
];

export default routerConfig;
