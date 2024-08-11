import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-navigation.component.html',
  styleUrl: './tab-navigation.component.scss'
})
export class TabNavigationComponent {
  @Input() tabs: string[] = [];
  @Input() activeTab: string = '';
  @Output() tabChange = new EventEmitter<any>();

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.tabChange.emit(tab);
  }
}
