stb-admin/
├── e2e/                             # Tests end-to-end
│   ├── src/
│   ├── protractor.conf.js
│   ├── tsconfig.json
│   └── tslint.json
├── src/
│   ├── app/
│   │   ├── core/                    # Services et providers globaux
│   │   │   ├── guards/              # Services de guard
│   │   │   ├── interceptors/        # Intercepteurs HTTP
│   │   │   ├── services/            # Services réutilisables
│   │   │   ├── models/              # Modèles et interfaces
│   │   │   ├── utils/               # Utilitaires
│   │   │   ├── core.module.ts       # Module Core
│   │   │   └── index.ts
│   │   ├── shared/                  # Modules et composants partagés
│   │   │   ├── components/          # Composants réutilisables
│   │   │   ├── directives/          # Directives réutilisables
│   │   │   ├── pipes/               # Pipes réutilisables
│   │   │   ├── shared.module.ts     # Module Shared
│   │   │   └── index.ts
│   │   ├── layouts/                 # Layouts globaux de l'application
│   │   │   ├── main-layout/         # Layout principal
│   │   │   │   ├── components/      # Composants spécifiques au layout principal
│   │   │   │   │   ├── header/      # Composant header du layout principal
│   │   │   │   │   ├── footer/      # Composant footer du layout principal
│   │   │   │   │   └── ...          # Autres composants du layout principal
│   │   │   │   ├── main-layout.component.html
│   │   │   │   ├── main-layout.component.scss
│   │   │   │   ├── main-layout.component.ts
│   │   │   │   └── main-layout.module.ts
│   │   │   └── auth-layout/         # Layout d'authentification
│   │   │       ├── components/      # Composants spécifiques au layout d'authentification
│   │   │       │   ├── login-form/  # Composant login form
│   │   │       │   └── ...          # Autres composants du layout d'authentification
│   │   │       ├── auth-layout.component.html
│   │   │       ├── auth-layout.component.scss
│   │   │       ├── auth-layout.component.ts
│   │   │       └── auth-layout.module.ts
│   │   ├── pages/                   # Pages principales de l'application
│   │   │   ├── home/                # Page d'accueil
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   ├── home.component.ts
│   │   │   │   └── home.module.ts
│   │   │   ├── about/               # Page à propos
│   │   │   │   ├── about.component.html
│   │   │   │   ├── about.component.scss
│   │   │   │   ├── about.component.ts
│   │   │   │   └── about.module.ts
│   │   │   ├── ...                  # Autres pages
│   │   ├── features/                # Fonctionnalités principales de l'application
│   │   │   ├── feature1/            # Module d'une fonctionnalité spécifique
│   │   │   │   ├── components/
│   │   │   │   ├── services/
│   │   │   │   ├── feature1-routing.module.ts
│   │   │   │   ├── feature1.module.ts
│   │   │   │   └── index.ts
│   │   │   ├── feature2/
│   │   │   └── ...
│   │   ├── i18n/                    # Fichiers de traduction
│   │   │   ├── en.json              # Traductions en anglais
│   │   │   ├── fr.json              # Traductions en français
│   │   │   └── ...                  # Autres langues
│   │   ├── state/                   # Gestion de l'état (NgRx, etc.)
│   │   │   ├── actions/             # Actions NgRx
│   │   │   ├── effects/             # Effets NgRx
│   │   │   ├── reducers/            # Réducteurs NgRx
│   │   │   ├── selectors/           # Sélecteurs NgRx
│   │   │   └── state.module.ts      # Module de gestion de l'état
│   │   ├── app-routing.module.ts    # Module de routage principal
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.module.ts            # Module principal de l'application
│   │   └── index.ts
│   ├── assets/                      # Ressources statiques
│   │   ├── images/
│   │   └── styles/
│   ├── environments/                # Fichiers d'environnement
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
│   │   └── ...
│   ├── styles/                      # Fichiers de styles globaux
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── main.scss
│   │   └── ...
│   ├── themes/                      # Thèmes multiples
│   │   ├── default-theme.scss
│   │   ├── dark-theme.scss
│   │   └── ...
│   ├── docs/                        # Documentation du projet
│   │   ├── architecture.md
│   │   ├── coding-standards.md
│   │   └── ...
│   ├── index.html
│   ├── main.ts                      # Point d'entrée de l'application
│   ├── polyfills.ts                 # Polyfills
│   ├── test.ts                      # Configuration des tests unitaires
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── ...
├── .editorconfig                    # Configuration de l'éditeur
├── .gitignore                       # Fichiers et dossiers à ignorer par Git
├── angular.json                     # Configuration Angular CLI
├── package.json                     # Dépendances et scripts npm
├── README.md                        # Documentation du projet
├── tsconfig.json                    # Configuration TypeScript
├── tslint.json                      # Configuration TSLint
└── ...
