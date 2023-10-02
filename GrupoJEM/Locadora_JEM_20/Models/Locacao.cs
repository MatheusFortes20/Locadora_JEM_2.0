namespace Locadora_JEM_20.Models;
public class Locacao
{
  public Locacao()
      {
        LocadoEm = DateTime.Now;
        DataInicio = LocadoEm;
        DataFim = LocadoEm.AddDays(3);
      }
  public int LocacaoId { get; set; }    //PK
  public int FilmeId { get; set; }      //FK
  public int ClienteId { get; set; }    //FK
  public float Valor { get; set; }
  public DateTime LocadoEm { get; set; }
  public DateTime DataInicio { get; set; }
  public DateTime DataFim { get; set; }

  // public int Cliente_Principal_Id { get; set; }
}
