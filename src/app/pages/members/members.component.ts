import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
interface Member {
  id: number;
  name: string;
  function: string;
  imageUrl: string;
}

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent implements OnInit {
  groupNews = {
    title: 'Actualité du groupe',
    content: 'Lorem ipsum dolor sit amet. Quo nobis esse sed ratione incidunt sed nihil vitae. dolor sit amet. Quo nobis esse sed ratione incidunt sed nihil'
  };

  members: Member[] = [
    { id: 1, name: 'Adrien', function: 'fonction', imageUrl: 'assets/adrien.jpg' },
    { id: 2, name: 'Marc', function: 'fonction', imageUrl: 'assets/marc.jpg' },
    { id: 3, name: 'Marie', function: 'fonction', imageUrl: 'assets/marie.jpg' },
    { id: 4, name: 'Jeanne', function: 'fonction', imageUrl: 'assets/jeanne.jpg' },
    { id: 5, name: 'Jeanne', function: 'fonction', imageUrl: 'assets/jeanne.jpg' },
    { id: 6, name: 'Jeanne', function: 'fonction', imageUrl: 'assets/jeanne.jpg' },
    { id: 7, name: 'Jeanne', function: 'fonction', imageUrl: 'assets/jeanne.jpg' },
    { id: 8, name: 'Jeanne', function: 'fonction', imageUrl: 'assets/jeanne.jpg' },
    { id: 9, name: 'Jeanne', function: 'fonction', imageUrl: 'assets/jeanne.jpg' },
    { id: 10, name: 'Jeanne', function: 'fonction', imageUrl: 'assets/jeanne.jpg' },
  ];

  constructor() { }

  ngOnInit(): void { }

  addMember(): void {
    console.log('Ajouter un nouveau membre');
  }

  showMoreMembers(): void {
    console.log('Afficher plus de membres');
  }

  openMemberMenu(member: Member): void {
    console.log('Ouvrir le menu pour', member.name);
  }

  closeGroupNews(): void {
    console.log('Fermer les actualités du groupe');
  }
}
