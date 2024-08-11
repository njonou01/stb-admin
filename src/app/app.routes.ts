import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/admin/banking'
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/test/test.component').then(m => m.TestComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/registration/registration.component').then(m => m.RegistrationComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./layout/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        data: { bannerTitle: 'Accueil' }
      },
      {
        path: 'documents',
        loadComponent: () => import('./pages/documents/documents.component').then(m => m.DocumentsComponent),
        data: { bannerTitle: 'Les documents' }
      }
      ,
      {
        path: 'agenda',
        loadComponent: () => import('./pages/agenda/agenda.component').then(m => m.AgendaComponent),
        data: { bannerTitle: 'Agenda' }
      },
      {
        path: 'members',
        loadComponent: () => import('./pages/members/members.component').then(m => m.MembersComponent),
        data: { bannerTitle: 'Membres' }
      },
      {
        path: 'messages',
        loadComponent: () => import('./pages/messages/messages.component').then(m => m.MessagesComponent),
        data: { bannerTitle: 'Messages' }
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        data: { bannerTitle: 'Accueil' }
      },
      {
        path: 'banking',
        loadComponent: () => import('./pages/banking-transaction/banking-transaction.component').then(m => m.BankingTransactionComponent),
        data: { bannerTitle: 'Banque' },
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/banking-transaction/sub-pages/index/index.component').then(m => m.IndexComponent),
            pathMatch: 'full'
          },
          {
            path: 'operations',
            loadComponent: () => import('./pages/banking-transaction/sub-pages/banking-operation/banking-operation.component').then(m => m.BankingOperationComponent)
          },
          {
            path: 'depanage',
            loadComponent: () => import('./pages/banking-transaction/sub-pages/banking-depanage/banking-depanage.component').then(m => m.BankingDepanageComponent)
          },
          {
            path: 'cagnottes',
            loadComponent: () => import('./pages/banking-transaction/sub-pages/banking-cagnotes/banking-cagnotes.component').then(m => m.BankingCagnotesComponent)
          }
        ]
      },
      {
        path: 'logement',
        data: { bannerTitle: 'Logement' },
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/logement/logement.component').then(m => m.LogementComponent),
            pathMatch: 'full'
          },
          {
            path: 'details/:id',
            loadComponent: () => import('./pages/logement/sub-page/housing-info/housing-info.component').then(m => m.HousingInfoComponent)
          }
        ]
      },
      {
        path: 'mobility',
        loadComponent: () => import('./pages/mobility/mobility.component').then(m => m.MobilityComponent),
        data: { bannerTitle: 'Mobilité' }
      },
      {
        path: '**',
        redirectTo: '/notfound'
      }
    ]
  },
  {
    path: 'notfound',
    loadComponent: () => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent)
  },
  {
    path: '**',
    redirectTo: '/notfound'
  }

];
