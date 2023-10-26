using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Locadora_JEM_20.Models
{
   public class Locacao
{
    public Locacao()
    {
        LocadoEm = DateTime.Now;
        DataInicio = LocadoEm;
        DataFim = LocadoEm.AddDays(3);
    }

    [Key]
    public int LocacaoId { get; set; }
    public float Valor { get; set; }
    public DateTime LocadoEm { get; set; }
    public DateTime DataInicio { get; set; }
    public DateTime DataFim { get; set; }

    public string Observacoes { get; set; }


    public Filme? Filme { get; set; }
    public int FilmeId { get; set; }

    public Cliente? Cliente { get; set; }
    public int ClienteId { get; set; }
}
  }