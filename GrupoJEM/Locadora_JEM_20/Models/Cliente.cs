namespace Locadora_JEM_20.Models;
public class Cliente
{
  public Cliente() =>
     CriadoEm = DateTime.Now;
  public int ClienteId { get; set;}
  public string? Nome { get; set; }
  public string? Email { get; set; }
  public string? Telefone { get; set; }
  public string? Endereço { get; set; }
  public DateTime CriadoEm { get; set; }
  public int LocacaoId { get; set; }
  public int FilmeId { get; set; }
}
