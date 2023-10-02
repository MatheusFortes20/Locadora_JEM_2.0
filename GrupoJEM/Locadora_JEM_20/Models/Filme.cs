namespace Locadora_JEM_20.Models;
public class Filme
{
  public Filme() =>
    CriadoEm = DateTime.Now;
  public int Id { get; set; }
  public string? Titulo { get; set; }
  public int Ano { get; set; }
  public string? Genero { get; set; }
  public string? Sinopse { get; set; }
  public string? Capa { get; set; }
  public DateTime CriadoEm { get; set; }
}
