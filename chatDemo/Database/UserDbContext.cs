using chatDemo.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace chatDemo.Database
{
    public class UserDbContext : DbContext
    {
        public UserDbContext()
        {
        }

        public UserDbContext(DbContextOptions options) :base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<MessageModel> Messages { get; set; }
       
    }

    
}
