import { UniversityModel } from '@/core/models/university.model';
import { SchoolService } from '@/shared/services/school.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners-universities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners-universities.component.html',
  styleUrl: './partners-universities.component.scss'
})
export class PartnersUniversitiesComponent {
  universities: UniversityModel[] = [];

  constructor(private dataService: SchoolService) { }

  ngOnInit() {
    this.dataService.getUniversities().subscribe(
      (universities) => this.universities = universities
    );
  }
}
