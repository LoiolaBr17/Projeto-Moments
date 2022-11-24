import { Component, OnInit } from '@angular/core';

import { Moment } from 'src/app/moment';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  btnText = "Compartilhar"

  constructor() { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment){
    console.log("funfou")
  }

}
