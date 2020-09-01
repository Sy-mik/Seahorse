using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Seahorse.WebApi.Contract.Auth
{
    public class Session
    {
        [Key]
        public string Id{ get; set; }

        [ForeignKey(nameof(User))]
        public string UserId { get; set; }

        public User User { get; set; }

        public long LastAccessUnixMilliseconds { get; set; }
    }
}
