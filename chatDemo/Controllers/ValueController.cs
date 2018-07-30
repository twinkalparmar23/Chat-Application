using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using chatDemo.Database;
using chatDemo.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace chatDemo.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ValueController : Controller
    {
        private UserDbContext _context;

        // GET: /<controller>/
        public ValueController( UserDbContext context)
        {
            _context = context;
        }

        //GET api/values
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _context.Users;
        }

        // GET api/<controller>/5
        //[Route("api/[controller]")]
        //[HttpGet("{id}")]
        //public async Task<IActionResult> Get(int id)
        //{
        //    var user = await _context.Users.SingleOrDefaultAsync(m => m.Id == id);

        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(user);
        //}

        [Route("api/[controller]/name")]
        [HttpGet("{name}")]
        public async Task<IActionResult> Get(string name)
        {
            var user = await _context.Users.SingleOrDefaultAsync(m => m.UserName == name);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]User user)
        {
            _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return CreatedAtAction("get user", new { id = user.Id }, user);

           
        }
    }
}
