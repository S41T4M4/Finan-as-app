import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conta } from '../model/conta-model';  // Certifique-se de ter um modelo Conta
import { Transacoes } from '../model/transacao-model';
@Injectable({
  providedIn: 'root'
})
export class TransacaoesService {

    private apiUrl = 'https://localhost:7027/api/transacoes';
    constructor(private http: HttpClient) { }

    getTransacoesByConta(id_conta: number): Observable<Transacoes[]> {
        return this.http.get<Transacoes[]>(`${this.apiUrl}/get_transacao_by_conta/${id_conta}`);
      }
      newTransacao(transacao: Transacoes): Observable<any> {
        return this.http.post(`${this.apiUrl}/new_transacao`, transacao);
      }
    
    
}
