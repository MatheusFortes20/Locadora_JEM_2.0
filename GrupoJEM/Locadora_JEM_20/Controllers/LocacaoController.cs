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
        [HttpPost]
[Route("cadastrar")]
public IActionResult CadastrarLocacao([FromBody] Locacao locacao)
{
    // Certifique-se de que o valor da locação seja válido
    if (locacao.Valor <= 0)
    {
        return BadRequest("O valor da locação deve ser maior que zero.");
    }

    // Adicione a locação ao contexto e salve as alterações
    _ctx.Locacoes.Add(locacao);
    _ctx.SaveChanges();

    return Created("", locacao);
}

// Associação de cliente e filme a uma locação existente
[HttpPost]
[Route("associar/{locacaoId}")]
public IActionResult AssociarClienteFilme(int locacaoId, [FromBody] AssociacaoClienteFilmeDTO associacaoDTO)
{
    var locacao = _ctx.Locacoes.FirstOrDefault(l => l.LocacaoId == locacaoId);

    if (locacao == null)
    {
        return NotFound("Locação não encontrada.");
    }

    var cliente = _ctx.Clientes.FirstOrDefault(c => c.ClienteId == associacaoDTO.ClienteId);
    var filme = _ctx.Filmes.FirstOrDefault(f => f.FilmeId == associacaoDTO.FilmeId);

    if (cliente == null || filme == null)
    {
        return NotFound("Cliente ou filme não encontrados.");
    }

    // Associe o cliente e o filme à locação
    locacao.Cliente = cliente;
    locacao.Filme = filme;

    // Salve as alterações no contexto
    _ctx.SaveChanges();

    return Ok(locacao);
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

            return NotFound();
        }

        // Update (Atualização de uma locação existente)
        [HttpPut]
        [Route("atualizar/{id}")]
        public IActionResult Atualizar(int id, [FromBody] Locacao novaLocacao)
        {
            var locacao = _ctx.Locacoes.FirstOrDefault(l => l.LocacaoId == id);

            if (locacao != null)
            {
                locacao.Valor = novaLocacao.Valor;
                // Atualize outros campos conforme necessário
                _ctx.SaveChanges();
                return Ok(locacao);
            }

            return NotFound();
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
                return NoContent();
            }

            return NotFound();
        }

        // Listar todas as locações
        [HttpGet]
        [Route("listar")]
        public IActionResult Listar()
        {
            List<Locacao> locacoes = _ctx.Locacoes.ToList();

            if (locacoes.Count == 0)
            {
                return NotFound();
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
