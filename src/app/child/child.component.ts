import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() data: string[];
  replies: any = {};
  keyUp(e: any, key: number): void {
    if (e.keyCode === 0x0d && e.target.value !== '') {
      if (!this.replies[key]) {
        this.replies[key] = [];
      }
      this.replies[key].push(e.target.value);
      e.target.value = '';
    }
  }
}
