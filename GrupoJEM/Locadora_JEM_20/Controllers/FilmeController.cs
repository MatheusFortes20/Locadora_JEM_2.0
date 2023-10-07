using Locadora_JEM_20.Data;
using Locadora_JEM_20.Models;
using Microsoft.AspNetCore.Mvc;

namespace Locadora_JEM_20.Controllers;

[ApiController]
[Route("api/filme")]
public class FilmeController : ControllerBase
{
private readonly AppDataContext _ctx;
public FilmeController(AppDataContext ctx) => _ctx = ctx;
 
[HttpPost]
[Route("cadastrar")]
public IActionResult Cadastrar([FromBody] Filme filme)
{
    _ctx.Filmes.Add(filme);
    _ctx.SaveChanges();
    return Created("", filme);
}
 
[HttpGet]
[Route("buscar/{titulo}")]
public IActionResult Buscar([FromRoute] string titulo)
{
    foreach (Filme filmeCadastrado in _ctx.Filmes.ToList())
    {
        if(filmeCadastrado.Titulo == titulo)
        {
            return Ok(filmeCadastrado);
        }
    }
    return NotFound();
}

[HttpGet]
[Route("listar")]
public IActionResult Listar()
{
    List<Filme> filmes = _ctx.Filmes.ToList();

    // return filmes.Count == 0 ? NotFound() : Ok(filmes); 
    if (filmes.Count == 0)
    {
        return NotFound();
    }
    return Ok(filmes);
}

    // Verificar filmes disponíveis    (Adicionar Atributo ao filme que indica se está locado ou não?)

    //  Emprestar filmes   ( Pode ter mais de um mesmo filme, remover dos disponíveis )

    // Verificar filmes locados  (Utilizar atributo no filme?)
            
    //  Devolver filme    ( Contador de quantos estão disponiveis de cada filme? id's? )

}
