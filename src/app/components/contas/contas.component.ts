import { Component, OnInit } from '@angular/core';
import { ContaServiceService } from '../../services/conta.service';
import { Conta } from '../../model/conta-model';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {
  contas: Conta[] = [];

  constructor(private contaService: ContaServiceService) {}

  ngOnInit(): void {
    this.getContas();
  }

  getContas(): void {
    this.contaService.getAllContas().subscribe((data: Conta[]) => {
      // Adiciona a propriedade expandida para cada conta sem modificar o saldo
      this.contas = data.map(conta => ({ ...conta, expandida: false }));
    });
  }

  toggleExpand(conta: Conta): void {
    conta.expandida = !conta.expandida; // Alterna o estado expandido do card
  }
}
