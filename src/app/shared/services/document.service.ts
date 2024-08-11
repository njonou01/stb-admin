import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor() { }
  getDocuments(): Document[] {
    return documents;
  }
  getDocumentByType(type: string): Document[] {
    return documents.filter(document => document.type === type);
  }
  getPdfDocuments(): Document[] {
    return documents.filter(document => document.type === 'pdf');
  }
  getImageDocuments(): Document[] {
    return documents.filter(document => document.type === 'image');
  }
  getVideoDocuments(): Document[] {
    return documents.filter(document => document.type === 'video');
  }
  getFolderDocuments(): Document[] {
    return documents.filter(document => document.type === 'folder');
  }
  getDocumentById(id: number): Document | undefined {
    return documents.find(document => document.id === id);
  }
  getDocumentByPath(path: string): Document | undefined {
    return documents.find(document => document.path === path);
  }
  getDocumentByName(name: string): Document | undefined {
    return documents.find(document => document.name === name);
  }
  getDocumentBySize(size: string): Document[] {
    return documents.filter(document => document.size === size);
  }
  changeDocumentName(id: number, newName: string): void {
    const document = this.getDocumentById(id);
    if (document) {
      document.name = newName;
    }
  }
  changeDocumentPath(id: number, newPath: string): void {
    const document = this.getDocumentById(id);
    if (document) {
      document.path = newPath;
    }
  }
  getDocumentDetails(id: number): Document | undefined {
    return documents.find(document => document.id === id);
  }


}

const documents: Document[] = [
  // PDFs
  { id: 1, name: 'Rapport_Annuel_2023.pdf', path: '/documents/rapports/', type: 'pdf', size: '3.5 MB' },
  { id: 2, name: 'Contrat_Client_A1234.pdf', path: '/documents/contrats/', type: 'pdf', size: '1.2 MB' },
  { id: 3, name: 'Manuel_Utilisateur_v2.pdf', path: '/documents/manuels/', type: 'pdf', size: '4.7 MB' },
  { id: 4, name: 'Facture_2023-001.pdf', path: '/documents/factures/', type: 'pdf', size: '0.8 MB' },
  { id: 5, name: 'Plan_Marketing_Q4.pdf', path: '/documents/marketing/', type: 'pdf', size: '2.3 MB' },
  { id: 6, name: 'Analyse_Financiere_2023.pdf', path: '/documents/finances/', type: 'pdf', size: '5.1 MB' },
  { id: 7, name: 'Presentation_Projet_X.pdf', path: '/documents/projets/', type: 'pdf', size: '6.2 MB' },
  { id: 8, name: 'Rapport_RH_2023.pdf', path: '/documents/rh/', type: 'pdf', size: '1.9 MB' },
  { id: 9, name: 'Guide_Installation.pdf', path: '/documents/guides/', type: 'pdf', size: '3.3 MB' },
  { id: 10, name: 'Catalogue_Produits_2023.pdf', path: '/documents/catalogues/', type: 'pdf', size: '8.5 MB' },
  { id: 11, name: 'Politique_Confidentialite.pdf', path: '/documents/juridique/', type: 'pdf', size: '0.5 MB' },
  { id: 12, name: 'Rapport_Audit_Interne.pdf', path: '/documents/audits/', type: 'pdf', size: '2.7 MB' },
  { id: 13, name: 'Plan_Strategique_2024-2026.pdf', path: '/documents/strategie/', type: 'pdf', size: '4.4 MB' },
  { id: 14, name: 'Etude_Marche_Secteur_A.pdf', path: '/documents/etudes/', type: 'pdf', size: '7.2 MB' },
  { id: 15, name: 'Procedures_Qualite_v3.pdf', path: '/documents/qualite/', type: 'pdf', size: '3.8 MB' },
  { id: 16, name: 'Bilan_Environnemental_2023.pdf', path: '/documents/environnement/', type: 'pdf', size: '2.6 MB' },
  { id: 17, name: 'Formation_Securite_2023.pdf', path: '/documents/formations/', type: 'pdf', size: '1.5 MB' },

  // Images
  { id: 18, name: 'Photo_Equipe_2023.jpg', path: '/images/equipe/', type: 'image', size: '4.2 MB' },
  { id: 19, name: 'Logo_Entreprise_HD.png', path: '/images/logos/', type: 'image', size: '0.8 MB' },
  { id: 20, name: 'Produit_A_Face.jpg', path: '/images/produits/', type: 'image', size: '2.1 MB' },
  { id: 21, name: 'Graphique_Ventes_Q3.png', path: '/images/graphiques/', type: 'image', size: '0.3 MB' },
  { id: 22, name: 'Banner_Site_Web.jpg', path: '/images/marketing/', type: 'image', size: '1.5 MB' },
  { id: 23, name: 'Photo_Bureaux.jpg', path: '/images/locaux/', type: 'image', size: '3.7 MB' },
  { id: 24, name: 'Icone_Application.png', path: '/images/app/', type: 'image', size: '0.1 MB' },
  { id: 25, name: 'Organigramme_2023.png', path: '/images/organisation/', type: 'image', size: '0.4 MB' },
  { id: 26, name: 'Infographie_Resultats.jpg', path: '/images/infographies/', type: 'image', size: '1.8 MB' },
  { id: 27, name: 'Photo_Event_Lancement.jpg', path: '/images/evenements/', type: 'image', size: '5.3 MB' },
  { id: 28, name: 'Mockup_Produit_B.png', path: '/images/design/', type: 'image', size: '2.6 MB' },
  { id: 29, name: 'Carte_Implantations.jpg', path: '/images/geographie/', type: 'image', size: '1.2 MB' },
  { id: 30, name: 'Signature_Email.png', path: '/images/communication/', type: 'image', size: '0.05 MB' },
  { id: 31, name: 'Fond_Ecran_Corporate.jpg', path: '/images/branding/', type: 'image', size: '3.9 MB' },
  { id: 32, name: 'QR_Code_Site_Web.png', path: '/images/marketing/', type: 'image', size: '0.02 MB' },
  { id: 33, name: 'Schema_Processus_Production.png', path: '/images/processus/', type: 'image', size: '0.6 MB' },
  { id: 34, name: 'Photo_CEO.jpg', path: '/images/management/', type: 'image', size: '1.7 MB' },

  // Vidéos
  { id: 35, name: 'Presentation_Produit_X.mp4', path: '/videos/produits/', type: 'video', size: '28.5 MB' },
  { id: 36, name: 'Tutoriel_Logiciel_v2.mov', path: '/videos/tutoriels/', type: 'video', size: '45.2 MB' },
  { id: 37, name: 'Interview_Directeur_Innovation.mp4', path: '/videos/interviews/', type: 'video', size: '78.3 MB' },
  { id: 38, name: 'Visite_Virtuelle_Usine.mp4', path: '/videos/entreprise/', type: 'video', size: '120.7 MB' },
  { id: 39, name: 'Spot_Publicitaire_30s.mov', path: '/videos/publicite/', type: 'video', size: '22.4 MB' },
  { id: 40, name: 'Formation_Securite_Module1.mp4', path: '/videos/formations/', type: 'video', size: '56.8 MB' },
  { id: 41, name: 'Demo_Fonctionnalites_App.mov', path: '/videos/demos/', type: 'video', size: '34.1 MB' },
  { id: 42, name: 'Retrospective_Annee_2023.mp4', path: '/videos/evenements/', type: 'video', size: '95.6 MB' },
  { id: 43, name: 'Webinaire_Tendances_Marche.mp4', path: '/videos/webinaires/', type: 'video', size: '87.3 MB' },
  { id: 44, name: 'Temoignage_Client_Projet_Y.mov', path: '/videos/temoignages/', type: 'video', size: '42.9 MB' },
  { id: 45, name: 'Animation_3D_Produit.mp4', path: '/videos/animations/', type: 'video', size: '68.2 MB' },
  { id: 46, name: 'Reunion_Trimestrielle_Q4.mp4', path: '/videos/reunions/', type: 'video', size: '110.5 MB' },
  { id: 47, name: 'Teaser_Lancement_Produit.mov', path: '/videos/marketing/', type: 'video', size: '15.8 MB' },
  { id: 48, name: 'Guide_Utilisation_Plateforme.mp4', path: '/videos/guides/', type: 'video', size: '52.7 MB' },
  { id: 49, name: 'Reportage_Impact_Social.mp4', path: '/videos/rse/', type: 'video', size: '73.4 MB' },
  { id: 50, name: 'Capsule_Histoire_Entreprise.mov', path: '/videos/corporate/', type: 'video', size: '38.6 MB' },
  { id: 51, name: 'Timelapse_Construction_Siege.mp4', path: '/videos/projets/', type: 'video', size: '89.1 MB' },

  // Dossiers
  { id: 52, name: 'Projets_2023', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 53, name: 'Archives_2022', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 54, name: 'Ressources_Humaines', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 55, name: 'Comptabilite', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 56, name: 'Marketing_Digital', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 57, name: 'Developpement_Produits', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 58, name: 'Service_Client', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 59, name: 'Juridique', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 60, name: 'Recherche_et_Developpement', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 61, name: 'Communication_Interne', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 62, name: 'Gestion_de_Projet', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 63, name: 'Formation_Continue', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 64, name: 'Veille_Concurrentielle', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 65, name: 'Qualite_et_Normes', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 66, name: 'Partenariats', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 67, name: 'Evenements_Corporate', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 68, name: 'Logistique', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 69, name: 'Securite_Informatique', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 70, name: 'Developpement_Durable', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 71, name: 'Relations_Investisseurs', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 72, name: 'Expansion_Internationale', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 73, name: 'Innovation_Lab', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 74, name: 'Gestion_des_Risques', path: '/dossiers/', type: 'folder', size: '-- MB' },
  { id: 75, name: 'Planification_Strategique', path: '/dossiers/', type: 'folder', size: '-- MB' },
];

interface Document {
  id: number;
  name: string;
  path: string;
  type: string;
  size: string;
}

interface Document {
  id: number;
  name: string;
  path: string;
  type: string;
  size: string;
}
