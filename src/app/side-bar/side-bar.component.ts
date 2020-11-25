import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { MainService } from './../../app/services/main.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  // Todo need to create type and use it
  // create enum for name and add id
  sideBarData = [{
    selected: true,
    name: 'Inbox',
    count: 0,
    data: []
  }, {
    selected: false,
    name: 'Junk Eamil',
    count: 0,
    data: []
  }, {
    selected: false,
    name: 'Drafts',
    count: 0,
    data: []
  }, {
    selected: false,
    name: 'Sent Items',
    count: 0,
    data: []
  }, {
    selected: false,
    name: 'Deleted',
    count: 0,
    data: []
  }];

  constructor(private main: MainService) { }

  ngOnInit(): void {
    forkJoin([
      this.main.makeGetServerCall('assets/json/inbox1.json'),
      this.main.makeGetServerCall('assets/json/spam1.json'),
    ]).subscribe((data) => {
      // TODO: thigs can be made dyanmic here
      this.sideBarData[0].data = data[0];
      this.sideBarData[1].data = data[1];
      this.calculateCount();
      this.setInboxListing();
    }, (error) => {
      console.log(error);
    });

    this.main.deleteEmail.subscribe((emailToAdd) => {
      if (emailToAdd && !this.sideBarData.find(e => e.name === 'Junk Eamil').selected) {
        this.sideBarData.find(e => e.name === 'Junk Eamil').data.push(emailToAdd);
      }
      this.calculateCount();
    });
  }

  setisting(name: string) {
    this.sideBarData.forEach(e => e.selected = e.name === name ? true : false);
    switch (name) {
      case 'Inbox':
        this.setInboxListing();
        break;
      case 'Junk Eamil':
        this.setJunkListing();
        break;
      default:
        this.main.setOtherMails([]);
        break;
    }
    this.main.setEmailContent(null);
  }

  setJunkListing() {
    this.main.setJunkListing(this.sideBarData[1].data);
  }

  setInboxListing() {
    this.main.setInboxListing(this.sideBarData[0].data);
  }

  calculateCount() {
    this.sideBarData.forEach(e => {
      if (e.data && e.data.length) {
        e.count = e.data.reduce((f, p) => {
          if (p.unread) {
             ++f;
          }
          return f;
        }, 0);
      } else {
        e.count = 0;
      }
    });
  }

}
