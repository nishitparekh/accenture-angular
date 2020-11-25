import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { IEmail } from './../../app/model/model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public inboxListing: Subject<IEmail[]> = new Subject<IEmail[]>();
  public junkListing: Subject<IEmail[]> = new Subject<IEmail[]>();
  public otherMailListing: Subject<IEmail[]> = new Subject<IEmail[]>();
  public emailDisplaySub: Subject<IEmail> = new Subject<IEmail>();
  public deleteEmail: Subject<IEmail> = new Subject<IEmail>();


  constructor(private http: HttpClient) { }

  public makeGetServerCall(serviceURL: string): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const requestOptions = {
      headers,
    };
    return this.http.request(
      'GET',
      serviceURL,
      requestOptions,
    ).map(this.extractData);
  }

  public extractData = (res: Response) => {
    return res;
  }

  public setInboxListing(inboxEmails: IEmail[]) {
    this.inboxListing.next(inboxEmails);
  }

  public setJunkListing(junkEmails: IEmail[]) {
    this.junkListing.next(junkEmails);
  }

  public setOtherMails(otherMails: IEmail[] = []) {
    this.otherMailListing.next(otherMails);
  }

  public setEmailContent(emailDisplay: IEmail = null) {
    this.emailDisplaySub.next(emailDisplay);
  }

  public moveToThrash(email: IEmail) {
    this.deleteEmail.next(email);
  }
}
