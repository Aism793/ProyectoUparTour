using Newtonsoft.Json;

namespace ClienteSharpHTTP.Models
{
    public class ClienteItem
    {
        [JsonProperty("id")]
        public int Id {get;set;}

        [JsonProperty("identificacion")]
        public int Identificacion {get;set;}

        [JsonProperty("nombre")]
        public string Nombre {get;set;}

        [JsonProperty("apellidos")]
        public string Apellidos {get;set;}

        [JsonProperty("correo")]
        public string Correo {get;set;}

        [JsonProperty("contrasena")]
        public string Contrasena {get;set;}

        [JsonProperty("direccion")]
        public string Direccion {get;set;}

        [JsonProperty("telefono")]
        public uint Telefono {get;set;}
    }
}