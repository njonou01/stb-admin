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
        redirectTo: '/admin/home'
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
        path: 'bords',
        loadComponent: () => import('./pages/bords/bords.component').then(m => m.BordsComponent),
        data: { bannerTitle: 'Tableau de Bord'  }
      },
      {
        path: 'association',
        loadComponent: () => import('./pages/association/association.component').then(m => m.AssociationComponent),
        data: { bannerTitle: 'Association'  }
      },
      {
        path: 'association2',
        loadComponent: () => import('./pages/association2/association2.component').then(m => m.Association2Component),
        data: { bannerTitle: 'Association'  }
      },
      {
        path: 'poster-commentaire',
        loadComponent: () => import('./pages/post-commentaire/post-commentaire.component').then(m => m.PostCommentaireComponent),
        data: { bannerTitle: 'Poster un commetaire'}
      },
      {
        path: 'options',
        loadComponent: () => import('./pages/options/options.component').then(m => m.OptionsComponent),
        data: { bannerTitle: 'Poster un commetaire'}
      },
      {
        path: 'modification-info',
        loadComponent: () => import('./pages/modify-info/modify-info.component').then(m => m.ModifyInfoComponent),
        data: { bannerTitle: 'Modifier les infos'}
      },
      {
        path: 'liste-commandes',
        loadComponent: () => import('./pages/list-command/list-command.component').then(m => m.ListCommandComponent),
        data: { bannerTitle: 'Liste des commandes'}
      },
      {
        path: 'association-de-lyon',
        loadComponent: () => import('./pages/lyon-association/lyon-association.component').then(m => m.LyonAssociationComponent),
        data: { bannerTitle: 'Association de Lyon'}
      },
      
      {
        path: 'association-de-lyon2',
        loadComponent: () => import('./pages/lyon-association2/lyon-association2.component').then(m => m.LyonAssociation2Component),
        data: { bannerTitle: 'Association de Lyon'}
      },
      {
        path: 'association-de-lyon3',
        loadComponent: () => import('./pages/lyon-association3/lyon-association3.component').then(m => m.LyonAssociation3Component),
        data: { bannerTitle: 'Association de Lyon'}
      },
      {
        path: 'post-actualite',
        loadComponent: () => import('./pages/post-actualite/post-actualite.component').then(m => m.PostActualiteComponent),
        data: { bannerTitle: 'Posts actualités'}
      },
      {
        path: 'messages',
        loadComponent: () => import('./pages/messages/messages.component').then(m => m.MessagesComponent),
        data: { bannerTitle: 'Messages' }
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        data: { bannerTitle: 'Accueil' , hasRightSidebar: true }
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
          },
          
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
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/mobility/mobility.component').then(m => m.MobilityComponent),
            pathMatch: 'full'
          },
          {
            path: 'candidate/:id',
            loadComponent: () => import('./pages/mobility/sub-pages/candidature/candidature.component').then(m => m.CandidatureComponent)
          }
        ],
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
