import { Component, OnInit, OnDestroy } from '@angular/core';
import { IEmail } from '../model/model';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-right-pane',
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.css']
})
export class RightPaneComponent implements OnInit, OnDestroy {

  public emailContent: IEmail = null;

  constructor(private main: MainService) { }

  ngOnInit(): void {
    this.main.emailDisplaySub.subscribe(data => {
      this.emailContent = data;
    });
  }

  ngOnDestroy() {
    this.main.emailDisplaySub.unsubscribe();
  }

}
