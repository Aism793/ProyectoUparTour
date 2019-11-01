using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClienteSharpHTTP.Models;

namespace ClienteSharpHTTP.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class ClienteController: ControllerBase
   {
       private readonly ClienteContext _context;
       public ClienteController(ClienteContext context)
       {
           _context = context;
           if(_context.ClienteItems.Count()==0)
           {
               _context.ClienteItems.Add(new ClienteItem 
               {Identificacion=1002483121,Nombre="Juan", Apellidos="Mendoza Vega", Correo="juan@gmail.com", Contrasena="123", Direccion="Mayales", Telefono=3423456412});
               
               _context.SaveChanges();
           }
       }
       [HttpGet]
       public async Task<ActionResult<IEnumerable<ClienteItem>>> GetClienteItems()
       {
           return await _context.ClienteItems.ToListAsync();
       }
       [HttpGet("{id}")]
       public async Task<ActionResult<ClienteItem>> GetClienteItem(int id)
       {
           var clienteItem=await _context.ClienteItems.FindAsync(id);
           if(clienteItem==null)
           {
               return NotFound();
           }
           return clienteItem;
       }
       [HttpPost]
       public async Task<ActionResult<ClienteItem>> PostClienteItem(ClienteItem item)
       {
           _context.ClienteItems.Add(item);
           await _context.SaveChangesAsync();
           return CreatedAtAction(nameof(GetClienteItem), new {id=item.Id}, item);
       }
       [HttpPut("{id}")]
       public async Task<IActionResult> PutClienteItem(int id, ClienteItem item)
       {
           if(id!=item.Id)
           {
               return BadRequest();
           }

           _context.Entry(item).State = EntityState.Modified;
           await _context.SaveChangesAsync();

           return NoContent();
       }
       [HttpDelete("{id}")]
       public async Task<IActionResult> DeleteClienteItem(int id){
           var ClienteItem = await
           _context.ClienteItems.FindAsync(id);

           if(ClienteItem==null)
           {
               return NotFound();
           }

           _context.ClienteItems.Remove(ClienteItem);
           await _context.SaveChangesAsync();

           return NoContent();
       }

   }
}