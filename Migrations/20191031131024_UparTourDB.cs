using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoUparTour.Migrations
{
    public partial class UparTourDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClienteItems",
                columns: table => new
                {
                    Identificacion = table.Column<string>(nullable: false)
                        .Annotation("SqlServer:Identity",""),
                    
                    Nombre = table.Column<string>(nullable: false),
                    Apellidos = table.Column<string>(nullable: false),
                    Correo = table.Column<string>(nullable: false),
                    Contrasena = table.Column<string>(nullable: false),
                    Direccion = table.Column<string>(nullable: false),
                    Telefono = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClienteItems", x => x.Identificacion);
                });
            migrationBuilder.CreateTable(
                name: "ReservaItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClienteId = table.Column<string>(nullable: false),
                    Estado = table.Column<bool>(nullable: false),
                    CantidadPersonas = table.Column<int>(nullable: false),
                    Fecha = table.Column<string>(nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReservaItems", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClienteItems");
            migrationBuilder.DropTable(
                name: "ReservaItems");
        }
    }
}
