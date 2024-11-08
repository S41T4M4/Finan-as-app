import { Component, OnInit } from '@angular/core';
import { ContaServiceService } from '../../services/conta.service';
import { Conta } from '../../model/conta-model';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
    trigger('slideIn', [
      transition(':enter', [
        animate('600ms ease-out', keyframes([
          style({ opacity: 0, transform: 'translateX(-20px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
ngOnInit(): void {
  
}
}
