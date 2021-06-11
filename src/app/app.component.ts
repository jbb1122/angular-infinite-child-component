import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  replies: string[] = [];
  keyUp(e: any): void {
    if (e.keyCode === 0x0d && e.target.value !== '') {
      this.replies.push(e.target.value);
      e.target.value = '';
    }
  }
}
