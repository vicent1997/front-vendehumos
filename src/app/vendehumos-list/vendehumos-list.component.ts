import { Component, OnInit } from '@angular/core';
import { Vendehumos } from '../models/Vendehumos';

@Component({
  selector: 'app-vendehumos-list',
  templateUrl: './vendehumos-list.component.html',
  styleUrls: ['./vendehumos-list.component.css']
})
export class VendehumosListComponent implements OnInit {
  vendehumos: Array<Vendehumos> = []
  constructor() { }

  ngOnInit(): void {
  }

}
