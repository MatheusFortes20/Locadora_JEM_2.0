export interface Cliente {
  clienteId: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  criadoEm?: Date;
}
