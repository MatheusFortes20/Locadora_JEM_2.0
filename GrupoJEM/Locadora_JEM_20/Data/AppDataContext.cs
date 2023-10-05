using Locadora_JEM_20.Models;
using Microsoft.EntityFrameworkCore;

namespace Locadora_JEM_20.Data;

public class AppDataContext : DbContext
{
      public AppDataContext(DbContextOptions<AppDataContext> options) : base(options) { }

      //Classes que vão virar tabelas no banco de dados
      public DbSet<Filme> Filmes { get; set; }
      public DbSet<Cliente> Clientes { get; set; }
      public DbSet<Categoria> Categorias { get; set; }
      public DbSet<Locacao> Locacoes { get; set; }
}
