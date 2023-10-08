namespace Locadora_JEM_20.Models;
  public class Filme
    {
        public Filme()
        {
            CriadoEm = DateTime.Now;
        }

        public int FilmeId { get; set; }
        public string Titulo { get; set; }
        public int Ano { get; set; }
        public string Genero { get; set; }
        public string Sinopse { get; set; }
        public string Capa { get; set; }
        public string Descricao { get; set; }
        public bool Disponivel { get; set; } = false;
        public DateTime CriadoEm { get; set; }

        // Relacionamento com Categoria
        public int CategoriaId { get; set; } // Chave estrangeira
        public Categoria Categoria { get; set; } // Um filme pertence a uma categoria

        // Relacionamento com Locacao
        public List<Locacao> Locacoes { get; set; } // Um filme pode ser locado em várias locações
    }
