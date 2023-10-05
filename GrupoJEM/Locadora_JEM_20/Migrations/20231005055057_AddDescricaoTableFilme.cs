using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Locadora_JEM_20.Migrations
{
    public partial class AddDescricaoTableFilme : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Descricao",
                table: "Filmes",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Descricao",
                table: "Filmes");
        }
    }
}
