import { CandidateModel } from '@/core/models/candidate.model';
import { SchoolService } from '@/shared/services/school.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidates-list.component.html',
  styleUrl: './candidates-list.component.scss'
})
export class CandidatesListComponent implements OnInit {
  candidates: CandidateModel[] = [];

  constructor(private dataService: SchoolService) {}

  ngOnInit() {
    this.dataService.getCandidates().subscribe(
      (candidates) => this.candidates = candidates
    );
  }
}
