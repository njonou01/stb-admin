import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CandidateModel } from '@/core/models/candidate.model';
import { UniversityModel } from '@/core/models/university.model';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  getCandidates(): Observable<CandidateModel[]> {
    // Simuler les données
    return of([
      { id: 1, name: 'Jeanne', imageUrl: 'assets/images/candidates/Mask group (6).png' },
      { id: 2, name: 'Marie', imageUrl: 'assets/images/candidates/Mask group (7).png' },
      { id: 3, name: 'Marc', imageUrl: 'assets/images/candidates/Mask group (8).png' },
      { id: 4, name: 'Marie', imageUrl: 'assets/images/candidates/Mask group (9).png' },
      { id: 5, name: 'Jeanne', imageUrl: 'assets/images/candidates/Mask group (10).png' },
      { id: 6, name: 'Marc', imageUrl: 'assets/images/candidates/Mask group (8).png' }
    ]);
  }

  getUniversities(): Observable<UniversityModel[]> {
    // Simulation des données
    return of([
      { id: 1, name: 'Université de Nante', imageUrl: 'assets/images/mobility/image1.png' },
      { id: 2, name: 'Université de Nante', imageUrl: 'assets/images/mobility/image2.png' },
      { id: 3, name: 'Université de Bordeaux', imageUrl: 'assets/images/mobility/image3.png' },
      { id: 4, name: 'Université de Nante', imageUrl: 'assets/images/mobility/image1.png' },
      { id: 5, name: 'Université de Nante', imageUrl: 'assets/images/mobility/image2.png' }
    ]);
  }
}
