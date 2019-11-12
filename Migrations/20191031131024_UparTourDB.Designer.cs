﻿// <auto-generated />
using ClienteSharpHTTP.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ProyectoUparTour.Migrations
{
    [DbContext(typeof(ClienteContext))]
    [Migration("20191031131024_UparTourDB")]
    partial class UparTourDB
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ClienteSharpHTTP.Models.ClienteItem", b =>
                {
                    b.Property<string>("Identificacion")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(15)")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Apellidos")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Contrasena")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Correo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Direccion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("Telefono")
                        .HasColumnType("bigint");

                    b.HasKey("Identificacion");

                    b.ToTable("ClienteItems");
                });
            modelBuilder.Entity("ClienteSharpHTTP.Models.ReservaItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClienteId")
                        .HasColumnType("nvarchar(15)");

                    b.Property<bool>("Estado")
                        .HasColumnType("bool");

                    b.Property<int>("CantidadPersonas")
                        .HasColumnType("int");

                    b.Property<string>("Fecha")
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("Id");

                    b.ToTable("ReservaItems");
                });
#pragma warning restore 612, 618
        }
    }
}
