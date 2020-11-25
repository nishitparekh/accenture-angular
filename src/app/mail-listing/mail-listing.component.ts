import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { IEmail } from './../../app/model/model';
import { MainService } from './../../app/services/main.service';

@Component({
  selector: 'app-mail-listing',
  templateUrl: './mail-listing.component.html',
  styleUrls: ['./mail-listing.component.css']
})
export class MailListingComponent implements OnInit, OnDestroy {

  data: IEmail[] = [];
  flag = false;

  constructor(private main: MainService) { }

  ngOnInit(): void {

    this.main.inboxListing.subscribe(data => {
      this.setData(data);
    });

    this.main.junkListing.subscribe(data => {
      this.setData(data);
    });

    this.main.otherMailListing.subscribe(data => {
      this.setData(data);
    });
  }

  setData(data = []) {
    this.data = data;
  }

  onEmailItemClick(item: IEmail) {
    item.unread = !item.unread;
    if (item.unread) {
      this.main.setEmailContent(item);
    } else {
      this.main.setEmailContent(null);
    }
  }

  deleteMail(item: IEmail) {
    this.data.splice(this.data.findIndex(e => e.mId === item.mId), 1);
    this.main.moveToThrash(item);
  }

  ngOnDestroy() {
    this.main.inboxListing.unsubscribe();
    this.main.junkListing.unsubscribe();
    this.main.otherMailListing.unsubscribe();
  }

}
