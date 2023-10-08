using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Locadora_JEM_20.Models
{
    public class Filme
    {
        public Filme()
        {
            CriadoEm = DateTime.Now;
        }

        [Key] // Indica a chave primária
        public int FilmeId { get; set; }
        public string Titulo { get; set; }
        public int Ano { get; set; }
        public string Genero { get; set; }
        public string Sinopse { get; set; }
        public string Capa { get; set; }
        public string Descricao { get; set; }
        public bool Disponivel { get; set; } = false;
        public DateTime CriadoEm { get; set; }

        // Relacionamento com Locacao
        public int? LocacaoId { get; set; } // Chave estrangeira (pode ser nulo)
        [ForeignKey("LocacaoId")]
        public List<Locacao> Locacoes { get; set; } // Um filme pode estar associado a várias locações
    }
}
