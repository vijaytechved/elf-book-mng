import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  snapshotParam = "";
  subscribedParam = "";
  constructor( private readonly route: ActivatedRoute,
    private readonly router: Router,) { }

  ngOnInit(): void {
     // No Subscription
     this.snapshotParam = this.route.snapshot.paramMap.get("encparam");

     // Subscribed
     this.route.paramMap.subscribe(params => {
       this.subscribedParam = params.get("encparam");
       console.log(this.subscribedParam)
     });
  }

}
