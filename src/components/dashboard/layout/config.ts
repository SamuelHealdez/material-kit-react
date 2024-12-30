import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'dashboard', title: 'Dashboard', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'productos', title: 'Gestión de Productos', href: paths.dashboard.customers, icon: 'users' },
  { key: 'mercancias', title: 'Recepción de Mercancías', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'stock', title: 'Control de Stock', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'mercancias', title: 'Recepción de Mercancías', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'mercancias', title: 'Recepción de Mercancías', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
