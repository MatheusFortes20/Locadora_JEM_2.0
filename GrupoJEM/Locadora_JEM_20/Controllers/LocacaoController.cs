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
        public IActionResult Cadastrar([FromBody] Locacao locacao)
        {
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
}
