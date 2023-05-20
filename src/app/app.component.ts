import { Component } from '@angular/core';
import { faPersonRunning, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iconRunning = faPersonRunning;
  iconCaret = faCaretLeft;

  //Hide or show navigation bar
  toggleNav(){
    if(this.iconCaret.iconName === "caret-left"){
      this.iconCaret = faCaretRight;
    } else {
      this.iconCaret = faCaretLeft;
    }
  }
}
