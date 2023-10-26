using Locadora_JEM_20.Data;
using Locadora_JEM_20.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Locadora_JEM_20.Controllers
{
    [ApiController]
    [Route("api/locacao")]
    public class LocacaoController : ControllerBase
    {
        private readonly AppDataContext _ctx;

        public LocacaoController(AppDataContext ctx) => _ctx = ctx;

       // Create (Criação de uma nova locação)
// Create (Criação de uma nova locação)
[HttpPost]
[Route("cadastrar")]
public IActionResult CadastrarLocacao([FromBody] Locacao locacao)
{
    // Certifique-se de que o valor da locação seja válido
    if (locacao.Valor <= 0)
    {
        return BadRequest("O valor da locação deve ser maior que zero.");
    }

    // Verifique se os campos 'ClienteId' e 'FilmeId' estão preenchidos
    if (locacao.ClienteId == null || locacao.FilmeId == null)
    {
        return BadRequest("Os campos 'ClienteId' e 'FilmeId' são obrigatórios.");
    }

    // Verifique se os IDs são válidos
    var cliente = _ctx.Clientes.FirstOrDefault(c => c.ClienteId == locacao.ClienteId);
    var filme = _ctx.Filmes.FirstOrDefault(f => f.FilmeId == locacao.FilmeId);

    if (cliente == null)
    {
        return BadRequest("Cliente não encontrado.");
    }

    if (filme == null)
    {
        return BadRequest("Filme não encontrado.");
    }

    // Verifique se o filme já está associado a algum cliente
    var locacaoAtual = _ctx.Locacoes.FirstOrDefault(l => l.FilmeId == locacao.FilmeId);

    if (locacaoAtual != null)
    {
        return BadRequest("Filme já está associado a um cliente.");
    }

    // Adicione a locação ao contexto e salve as alterações
    _ctx.Locacoes.Add(locacao);
    _ctx.SaveChanges();

    return Created("", locacao);
}

        // Read (Recuperação de uma locação por ID)
        [HttpGet]
        [Route("buscar/{id}")]
        public IActionResult Buscar(int id)
        {
            var locacao = _ctx.Locacoes.FirstOrDefault(l => l.LocacaoId == id);

            if (locacao != null)
            {
                return Ok(locacao);
            }

             return BadRequest("Locação não encontrada!");
        }


        // Delete (Exclusão de uma locação existente)
[HttpDelete]
[Route("deletar/{id}")]
public IActionResult Deletar(int id)
{
    var locacao = _ctx.Locacoes.FirstOrDefault(l => l.LocacaoId == id);

    if (locacao != null)
    {
        _ctx.Locacoes.Remove(locacao);
        _ctx.SaveChanges();

        // Adicione uma mensagem de resposta personalizada
        return Ok(new { message = $"A locação de ID {locacao.LocacaoId} foi deletada com sucesso!" });
    }

    return BadRequest("A locação não foi encontrada!");
}

        // Listar todas as locações
        [HttpGet]
        [Route("listar")]
        public IActionResult Listar()
        {
            List<Locacao> locacoes = _ctx.Locacoes.ToList();

            if (locacoes.Count == 0)
            {
                return BadRequest("Nenhuma locação foi encontrada!");
            }

            return Ok(locacoes);
        }
    }

    public class AssociacaoClienteFilmeDTO
    {
        public int ClienteId { get; internal set; }
        public int FilmeId { get; internal set; }
    }
}
