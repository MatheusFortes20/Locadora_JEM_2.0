// locacao.model.ts

export interface Locacao {
  locacaoId?: number;
  valor: number;
  locadoEm?: Date;
  dataInicio?: Date;
  dataFim?: Date;
  observacoes?: string;
  filmeId?: number; // Alterado para filmeId
  clienteId?: number; // Alterado para clienteId
}
