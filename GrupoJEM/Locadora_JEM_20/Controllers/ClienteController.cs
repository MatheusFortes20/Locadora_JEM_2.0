namespace Locadora_JEM_20.Controllers;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Locadora_JEM_20.Data;
using Locadora_JEM_20.Models;


[ApiController]
[Route("api/cliente")]
public class ClienteController : ControllerBase
{
    private readonly AppDataContext _ctx;
    public ClienteController(AppDataContext context)
    {
        _ctx = context;
    }

    // GET: api/cliente/listar
    [HttpGet]
    [Route("listar")]
    public ActionResult Listar()
    {
        try
        {
            List<Cliente> clientes = _ctx.Clientes.ToList();
            return clientes.Count == 0 ? NotFound() : Ok(clientes);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // GET: api/cliente/buscar/{nome}
    [HttpGet]
    [Route("buscar/{nome}")]
    public ActionResult Buscar([FromRoute] string nome)
    {
        try
        {
            Cliente? clienteCadastrado = _ctx.Clientes.FirstOrDefault(x => x.Nome == nome);
            if (clienteCadastrado != null)
            {
                return Ok(clienteCadastrado);
            }
            return NotFound();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // POST: api/cliente/cadastrar
    [HttpPost]
    [Route("cadastrar")]
    public ActionResult Cadastrar([FromBody] Cliente cliente)
    {
        try
        {
            _ctx.Clientes.Add(cliente);
            _ctx.SaveChanges();
            return Created("", cliente);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // PUT: api/cliente/alterar/5
    [HttpPut]
    [Route("alterar/{id}")]
    public IActionResult Alterar([FromRoute] int id,
        [FromBody] Cliente cliente)
    {
        try
        {
            Cliente? clienteCadastrado =
                _ctx.Clientes.FirstOrDefault(x => x.ClienteId == id);
            if (clienteCadastrado != null)
            {
                clienteCadastrado.Nome = cliente.Nome;
                _ctx.SaveChanges();
                return Ok(cliente);
            }
            return NotFound();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // DELETE: api/cliente/deletar/5
    [HttpDelete]
    [Route("deletar/{id}")]
    public IActionResult Deletar([FromRoute] int id)
    {
        try
        {
            Cliente? clienteCadastrado = _ctx.Clientes.Find(id);
            if (clienteCadastrado != null)
            {
                _ctx.Clientes.Remove(clienteCadastrado);
                _ctx.SaveChanges();
                return Ok();
            }
            return NotFound();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}
