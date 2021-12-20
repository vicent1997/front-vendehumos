import { Component, OnInit } from '@angular/core';
import { VendehumosModel } from '../models/vendehumos.model';
import { StaticVendehumosService } from '../services/static-vendehumos.service';

@Component({
  selector: 'app-vendehumos-list',
  templateUrl: './vendehumos-list.component.html',
  styleUrls: ['./vendehumos-list.component.css'],
})
export class VendehumosListComponent implements OnInit {
  vendehumos: VendehumosModel[] = [];
  constructor(private vendehumosService: StaticVendehumosService) {
    this.vendehumos = vendehumosService.vendehumos;
  }

  ngOnInit(): void {}
}
