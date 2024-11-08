import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conta } from '../model/conta-model';  // Certifique-se de ter um modelo Conta

@Injectable({
  providedIn: 'root'
})
export class ContaServiceService {
  private apiUrl = 'https://localhost:7027/api/contas';

  constructor(private http: HttpClient) { }

  // 1. Adicionar nova conta
  addNewConta(conta: Conta): Observable<Conta> {
    return this.http.post<Conta>(`${this.apiUrl}/nova_conta`, conta);
  }

  // 2. Obter todas as contas
  getAllContas(): Observable<Conta[]> {
    return this.http.get<Conta[]>(`${this.apiUrl}/todas_contas`);
  }

  // 3. Obter conta pelo ID
  getContaById(id_conta: number): Observable<Conta> {
    return this.http.get<Conta>(`${this.apiUrl}/get_conta_by_id?id_conta=${id_conta}`);
  }

  // 4. Atualizar conta
  updateConta(id_conta: number, conta: Conta): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/update_conta?id_conta=${id_conta}`, conta);
  }

  // 5. Deletar conta
  deleteConta(id_conta: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete_conta?id_conta=${id_conta}`);
  }
}
