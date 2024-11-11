import { Component, OnInit } from '@angular/core';
import { ContaServiceService } from '../../services/conta.service';
import { Conta } from '../../model/conta-model';
import { Transacoes } from '../../model/transacao-model';
import { TransacaoesService } from '../../services/transfers.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {
  contas: Conta[] = [];
  isTrue = false;
  formularioVisivel = false;
  id_conta: number = 1;
  transacaoes: Transacoes[] = [];
  novaTransacao: Transacoes = {
    id_transacao: 0,
    tipo: '',
    valor: 0,
    data_transacao: new Date(),
    id_conta: this.id_conta,
    id_categoria: 0
  };
  
  constructor(private contaService: ContaServiceService, private transacoesService: TransacaoesService) {}

  ngOnInit(): void {
    this.getContas();
  }

  getContas(): void {
    this.contaService.getAllContas().subscribe((data: Conta[]) => {
      this.contas = data.map(conta => ({ ...conta, expandida: false }));
    });
  }

  toggleExpand(conta: Conta): void {
    conta.expandida = !conta.expandida; // Alterna o estado expandido do card
    if (!conta.expandida) {
      this.isTrue = false; // Esconde o card de transferências ao colapsar
    }
  }
  
  verTransferencias(id_conta: number): void {
    this.id_conta = id_conta;
    
    this.getTransacoesByConta();
  }

  getTransacoesByConta(): void {
    this.isTrue = true; // Mostra o card de transferências ao expandir
    this.transacoesService.getTransacoesByConta(this.id_conta).subscribe(
      (data: Transacoes[]) => {
        this.transacaoes = data;
      }
    );
  }
  mostrarFormulario(): void {
    this.formularioVisivel = true;
  }
  addTransacao(): void {
    
    const transacaoParaAdicionar: Transacoes = {
      ...this.novaTransacao,
      id_conta: this.id_conta,
      id_categoria: 1, 
      id_transacao: 0,
      data_transacao: new Date(this.novaTransacao.data_transacao as Date)
    } as Transacoes;

    this.transacoesService.newTransacao(transacaoParaAdicionar).subscribe(
      (response) => {
        console.log(response.message);
        this.getTransacoesByConta(); // Atualiza a lista de transações
        this.novaTransacao = {
          id_transacao: 0,
          tipo: '',
          valor: 0,
          data_transacao: new Date(),
          id_conta: this.id_conta,
          id_categoria: 0
        }; 
      },
      (error) => console.error('Erro ao adicionar transação:', error)
    );
  }
}
