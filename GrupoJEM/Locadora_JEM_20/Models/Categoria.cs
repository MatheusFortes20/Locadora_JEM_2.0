namespace Locadora_JEM_20.Models;
public class Categoria
    {
        public int CategoriaId { get; set; }
        public string Nome { get; set; }

        // Relacionamento com Filme
        public List<Filme> Filmes { get; set; } // Uma categoria pode ter vários filmes
    }