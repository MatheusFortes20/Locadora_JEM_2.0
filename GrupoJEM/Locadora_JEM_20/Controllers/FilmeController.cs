using Locadora_JEM_20.Data;
using Locadora_JEM_20.Models;
using Microsoft.AspNetCore.Mvc;
using System;
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
        // Create (Criação de um novo filme)
[HttpPost]
[Route("cadastrar")]
public IActionResult Cadastrar([FromBody] Filme filme)
{
    int anoAtual = DateTime.Now.Year;

    // Regra de Ano de Lançamento: O ano de lançamento do filme deve estar entre 1990 e o ano atual.
    if (filme.Ano < 1990 || filme.Ano > anoAtual)
    {
        return BadRequest("O ano de lançamento do filme deve estar entre 1990 e " + anoAtual + ".");
    }

    // Regra de Título Único: Verifique se o título do filme já existe no banco de dados.
    if (_ctx.Filmes.Any(f => f.Titulo == filme.Titulo))
    {
        return BadRequest("Já existe um filme com o mesmo título.");
    }

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
                filme.Ano = novoFilme.Ano;
                filme.Genero = novoFilme.Genero;
                filme.Sinopse = novoFilme.Sinopse;
                filme.Capa = novoFilme.Capa;
                filme.Descricao = novoFilme.Descricao;
                filme.Disponivel = novoFilme.Disponivel;

                // Salve as alterações no contexto
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
                // Regra de Disponibilidade: Verifique se o filme está disponível antes de excluí-lo.
                if (!filme.Disponivel)
                {
                    return BadRequest("O filme não pode ser excluído porque não está disponível.");
                }

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
            var filmes = _ctx.Filmes.ToList();

            if (filmes.Count == 0)
            {
                return NotFound();
            }

            return Ok(filmes);
        }
    }
}
