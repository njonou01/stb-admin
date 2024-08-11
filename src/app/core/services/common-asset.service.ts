import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommonAssetService {

  chartImg = 'assets/images/chart/mobilitychart.png';
  indexMenuBanner = 'assets/images/banner/index-banner.png';
  indexImg1Menu = 'assets/images/banner/image1.jpeg';
  indexImg2Menu = 'assets/images/banner/image2.jpeg';
  indexImg3Menu = 'assets/images/banner/image3.jpeg';
  indexImg4Menu = 'assets/images/banner/image4.jpeg';

  img1Sidebar = 'assets/images/banner/sidebar/img1.jpeg';
  img2Sidebar = 'assets/images/banner/sidebar/img2.jpeg';
  img3Sidebar = 'assets/images/banner/sidebar/img3.jpeg';
  img4Sidebar = 'assets/images/banner/sidebar/img4.jpeg';
  student_banking_data: Student[] = [
    {
      nom: 'Anita',
      prenom: 'Jean',
      etablissement: 'Université de Lyon',
      rib: 'FR 38475869696076000505599B',
      nationalite: 'Egyptien'
    },
    {
      nom: 'OKO',
      prenom: 'Jean',
      etablissement: 'Université de Lyon',
      rib: 'FR 38475869696076000505599B',
      nationalite: 'Egyptien'
    },
    {
      nom: 'ITOUA',
      prenom: 'Jean',
      etablissement: 'Université de Lyon',
      rib: 'FR 38475869696076000505599B',
      nationalite: 'Egyptien'
    },
    {
      nom: 'ANOUA',
      prenom: 'Jean',
      etablissement: 'Université de Lyon',
      rib: 'FR 38475869696076000505599B',
      nationalite: 'Egyptien'
    },
    {
      nom: 'VALENTIN',
      prenom: 'Jean',
      etablissement: 'Université de Lyon',
      rib: 'FR 38475869696076000505599B',
      nationalite: 'Egyptien'
    }
  ];
  universityRankings: UniversityRanking[] = [
    {
      rank: '1er',
      university: 'Université de Bordeaux',
      growth: '+15',
      total: 500
    },
    {
      rank: '2e',
      university: 'Université de Toulouse',
      growth: '+10',
      total: 350
    },
    {
      rank: '3e',
      university: 'Université de Lyon',
      growth: '+5',
      total: 200
    },
    {
      rank: '4e',
      university: 'Université de Marseille',
      growth: '-1',
      total: 165
    }
  ];
  constructor() { }
}

interface Student {
  nom: string;
  prenom: string;
  etablissement: string;
  rib: string;
  nationalite: string;
}
interface UniversityRanking {
  rank: string;
  university: string;
  growth: string;
  total: number;
}
