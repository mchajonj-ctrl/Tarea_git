import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./Pages/Dashboard-p/Dashboard').then(
        (m) => m.Dashboard,
      ),
    children: [
      {
        path: 'crear',
        loadComponent: () =>
          import('./Pages/Crear_cliente/Crear_cliente').then(
            (m) => m.CrearCliente,
          ),
      },
      {
        path: 'consultar',
        loadComponent: () =>
          import('./Pages/Consultar_cliente/Consultar_cliente').then(
            (m) => m.ConsultarCliente,
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];