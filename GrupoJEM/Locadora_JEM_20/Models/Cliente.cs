using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Locadora_JEM_20.Models
{
     public class Cliente
    {
        public Cliente()
        {
            CriadoEm = DateTime.Now;
        }

        public int ClienteId { get; set; }

        [Required] // Indica que o campo "Nome" é obrigatório
        public string Nome { get; set; }

        public string Email { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public DateTime? CriadoEm { get; set; }


    }
}