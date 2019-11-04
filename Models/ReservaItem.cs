using Newtonsoft.Json;

namespace ClienteSharpHTTP.Models
{
    public class ReservaItem
    {
        [JsonProperty("id")]
        public int Id {get;set;}

<<<<<<< HEAD
        [JsonProperty("clienteid")]
        public int ClienteId {get;set;}
=======
        
>>>>>>> first commit

        [JsonProperty("estado")]
        public bool Estado {get;set;}

        [JsonProperty("cantidadpersonas")]
        public int CantidadPersonas {get;set;}

        [JsonProperty("fecha")]
        public string Fecha {get;set;}
<<<<<<< HEAD
=======
        [JsonProperty("clienteid")]
        public int ClienteId {get;set;}
        
>>>>>>> first commit
    }
}