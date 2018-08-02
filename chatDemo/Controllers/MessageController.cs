using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using chatDemo.Database;
using chatDemo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace chatDemo.Controllers
{
    [Produces("application/json")]
    
    [Route("api/[controller]")]
    public class MessageController : Controller
    {

        private UserDbContext _context;

        // GET: /<controller>/
        public MessageController(UserDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<MessageModel> Get()
        {
            return _context.Messages;
        }




        // POST api/<controller>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]MessageModel msgmodel)
        {
            _context.Messages.Add(msgmodel);
            await _context.SaveChangesAsync();
            return CreatedAtAction("get msg", new { id = msgmodel.Id }, msgmodel);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]MessageModel msgmodel)
        {
            if (id != msgmodel.Id)
            {
                return BadRequest();
            }

            _context.Entry(msgmodel).State = EntityState.Modified;
            
             await _context.SaveChangesAsync();
            
            return NoContent();
        }

        //// PUT api/<controller>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
