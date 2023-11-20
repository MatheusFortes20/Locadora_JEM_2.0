
export interface Filme {
    filmeId?: number;
    titulo: string;
    ano?: number; // Defina como opcional com "ano?: number"
    genero: string;
    sinopse: string;
    capa: string;
    descricao: string;
    disponivel: boolean;
    criadoEm?: string | null; // Defina como opcional com "criadoEm?: string | null"
  }
  