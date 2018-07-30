﻿using chatDemo.Database;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace chatDemo.Models
{
    public class User
    {
        public int Id { get; set; }
       
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ConnId { get; set; }
        public bool Connected { get; set; }
    }
}
