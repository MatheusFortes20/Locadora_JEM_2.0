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
    public Cliente? Cliente { get; set; }
    public int ClientId { get; set; } // O valor padrão é null
}   }