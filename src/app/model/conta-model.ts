// src/app/models/conta.model.ts

export interface Conta {
    id_conta: number;
    nome_conta: string;
    saldo: number;
    expandida?: boolean; 
  }
  