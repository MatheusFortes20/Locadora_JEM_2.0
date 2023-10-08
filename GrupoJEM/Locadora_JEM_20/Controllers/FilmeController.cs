using Locadora_JEM_20.Data;
using Locadora_JEM_20.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Locadora_JEM_20.Controllers
{
    [ApiController]
    [Route("api/filme")]
    public class FilmeController : ControllerBase
    {
        private readonly AppDataContext _ctx;

        public FilmeController(AppDataContext ctx) => _ctx = ctx;

        // Create (Criação de um novo filme)
        [HttpPost]
[Route("cadastrar")]
public IActionResult Cadastrar([FromBody] Filme filme)
{
    // Adicione o filme ao contexto e salve as alterações
    _ctx.Filmes.Add(filme);
    _ctx.SaveChanges();

    return Created("", filme);
}

        // Read (Recuperação de um filme por ID)
        [HttpGet]
        [Route("buscar/{id}")]
        public IActionResult Buscar(int id)
        {
            var filme = _ctx.Filmes.FirstOrDefault(f => f.FilmeId == id);

            if (filme != null)
            {
                return Ok(filme);
            }

            return NotFound();
        }

        // Update (Atualização de um filme existente)
        [HttpPut]
        [Route("atualizar/{id}")]
        public IActionResult Atualizar(int id, [FromBody] Filme novoFilme)
        {
            var filme = _ctx.Filmes.FirstOrDefault(f => f.FilmeId == id);

            if (filme != null)
            {
                filme.Titulo = novoFilme.Titulo;
                // Atualize outros campos conforme necessário
                _ctx.SaveChanges();
                return Ok(filme);
            }

            return NotFound();
        }

        // Delete (Exclusão de um filme existente)
        [HttpDelete]
        [Route("deletar/{id}")]
        public IActionResult Deletar(int id)
        {
            var filme = _ctx.Filmes.FirstOrDefault(f => f.FilmeId == id);

            if (filme != null)
            {
                _ctx.Filmes.Remove(filme);
                _ctx.SaveChanges();
                return NoContent();
            }

            return NotFound();
        }

        // Listar todos os filmes
        [HttpGet]
        [Route("listar")]
        public IActionResult Listar()
        {
            List<Filme> filmes = _ctx.Filmes.ToList();

            if (filmes.Count == 0)
            {
                return NotFound();
            }

            return Ok(filmes);
        }
    }
}
