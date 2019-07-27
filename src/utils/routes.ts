import Path from 'path';
import NotFound from '../components/NotFound';
import Home from '../containers/Home';
import { MenuType } from 'modules/types/account';
export interface RouteType {
  path: string;
  component: any;
  name?: string;
}

const EXAPMLE_MENUS = [
  {
    name: 'example',
    key: 'example',
  },
];

const otherRoutes = [
  { name: 'home', path: '/', component: Home },
  {
    name: '404',
    path: '/404/',
    component: NotFound,
  },
  {
    name: '404',
    path: '(.*)',
    component: NotFound,
  },
];

const makeRoutes = (menus: MenuType[] = EXAPMLE_MENUS) => {
  const routes: RouteType[] = [];
  console.log(menus);
  menus.forEach((menu: MenuType) => {
    const key = menu.key;
    const componentName = key[0].toUpperCase() + key.slice(1);
    const path = `/${key}`;

    const addComponentOrRoutes = (
      path: string,
      componentBashPath: string,
      name: string,
    ) => {
      let component;
      let routesTmp;

      try {
        routesTmp = require(`../containers/${componentBashPath}/routes`)
          .default;
      } catch (e) {
        try {
          component = require(`../containers/${componentBashPath}/index`)
            .default;
        } catch (e) {
          console.error(
            'require error: ',
            `../containers/${componentBashPath}/index`,
          );
        }
      }

      if (component) {
        routes.push({ path, component, name });
      } else if (routesTmp) {
        routes.push(
          ...routesTmp.map((route: RouteType) => ({
            name,
            ...route,
            path: Path.join(path, route.path),
          })),
        );
      }
    };
    menu.path = path;

    addComponentOrRoutes(path, componentName, menu.name);

    if (menu.children && menu.children.length) {
      menu.children.forEach((subMenu) => {
        const subKey = subMenu.key;
        const subComponentName = subKey[0].toUpperCase() + subKey.slice(1);
        const path = `/${key}/${subKey}`;
        subMenu.path = path;

        addComponentOrRoutes(
          path,
          `${componentName}/${subComponentName}`,
          subMenu.name,
        );
      });
    }
  });

  return routes.concat(otherRoutes);
};

export default makeRoutes;

export { otherRoutes, makeRoutes };
