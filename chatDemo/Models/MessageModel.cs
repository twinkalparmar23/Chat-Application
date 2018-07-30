using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace chatDemo.Models
{
    public class MessageModel
    {
        public int Id { get; set; }
        public string Sender { get; set; }
        public string Receiver { get; set; }
        public string Message { get; set; }
        public DateTime dateTime { get; set; }
    }
}
