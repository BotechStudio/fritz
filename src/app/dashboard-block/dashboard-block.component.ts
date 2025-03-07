import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SvgIconComponent } from 'angular-svg-icon';

interface MenuItem {
  label: string;
  img: string;
  option: string[];
}

@Component({
  selector: 'app-dashboard-block',
  standalone: true,
  imports: [CommonModule, MatIconModule, SvgIconComponent],
  templateUrl: './dashboard-block.component.html',
  styleUrls: ['./dashboard-block.component.css'],
})
export class DashboardBlockComponent {
  menuItems: MenuItem[] = [
    { label: 'בקרת איכות', img: 'assets/images/item-img10.svg', option: [] },
    { label: 'מעקב משלוחים', img: 'assets/images/item-img11.svg', option: ['plane'] },
    { label: 'הזמנות', img: 'assets/images/item-img2.svg', option: ['hub'] },
    { label: 'משימות', img: 'assets/images/item-img1.svg', option: ['hub'] },
    { label: 'ארכיב', img: 'assets/images/item-img6.svg', option: [''] },
    { label: 'דוחות', img: 'assets/images/item-img5.svg', option: ['plane', 'hub'] },
    { label: 'ניהול משתמשים', img: 'assets/images/item-img4.svg', option: ['hub'] },
    { label: 'ניהול לקוחות', img: 'assets/images/item-img3.svg', option: ['hub'] },
    { label: 'ניהול', img: 'assets/images/item-img9.svg', option: ['plane'] },
    { label: 'פיננסים', img: 'assets/images/item-img8.svg', option: [] },
    { label: 'בקרת איכות', img: 'assets/images/item-img7.svg', option: [] },
  ];

  selectedItem: MenuItem | null = null;


  onSelect(item: any) {
    this.selectedItem = item;
  }
}
