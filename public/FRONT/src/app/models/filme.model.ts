export interface Filme {
  filmeId?: number;
  titulo: string;
  ano?: number | null; // Make 'ano' explicitly nullable
  genero: string;
  sinopse: string;
  capa: string;
  descricao: string;
  disponivel: boolean;
  criadoEm?: string | null;
}
