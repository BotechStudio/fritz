import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-block',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './dashboard-block.component.html',
  styleUrls: ['./dashboard-block.component.css'],
})
export class DashboardBlockComponent {
  menuItems = [
    { label: 'משימות', icon: 'task', option: ['hub'] },
    { label: 'הזמנות', icon: 'shopping_cart', option: ['plane'] },
    { label: 'מעקב משלוחים', icon: 'local_shipping', option: ['hub'] },
    { label: 'בקרת איכות', icon: 'checklist', option: ['hub'] },
    { label: 'ניהול לקוחות', icon: 'group', option: ['plane', 'hub'] },
    { label: 'ניהול משתמשים', icon: 'account_circle', option: ['hub'] },
    { label: 'דוחות', icon: 'insert_chart', option: [] },
    { label: 'ארכיב', icon: 'archive', option: ['hub', 'plane'] },
    { label: 'פיננסי', icon: 'attach_money', option: [] },
    { label: 'BOOKING', icon: 'settings', option: ['plane'] },
  ];
  selectedItem = null;

  onSelect(item: any) {
    this.selectedItem = item;
  }
}
