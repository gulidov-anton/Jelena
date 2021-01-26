import { Client } from './../../type.d';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  clients: Client[];
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: {userId}) => {
        this.userId = params.userId;
      }
    )
  }
}
