using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Locadora_JEM_20.Models;
public class Locacao
    {
        public Locacao()
        {
            LocadoEm = DateTime.Now;
            DataInicio = LocadoEm;
            DataFim = LocadoEm.AddDays(3);
        }

        [Key] // Indica a chave primária
        public int LocacaoId { get; set; }
        public float Valor { get; set; }
        public DateTime LocadoEm { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFim { get; set; }

        // Relacionamento com Filme
        public int FilmeId { get; set; } // Chave estrangeira
        [ForeignKey("FilmeId")]
        public Filme Filme { get; set; } // A locação está associada a um filme

        // Relacionamento com Cliente
        public int ClienteId { get; set; } // Chave estrangeira
        [ForeignKey("ClienteId")]
        public Cliente Cliente { get; set; } // A locação está associada a um cliente
    }