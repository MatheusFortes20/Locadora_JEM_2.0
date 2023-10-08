using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Locadora_JEM_20.Migrations
{
    public partial class alteracoesCategoria2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Locacoes_FilmeId",
                table: "Locacoes");

            migrationBuilder.CreateIndex(
                name: "IX_Locacoes_FilmeId",
                table: "Locacoes",
                column: "FilmeId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Locacoes_FilmeId",
                table: "Locacoes");

            migrationBuilder.CreateIndex(
                name: "IX_Locacoes_FilmeId",
                table: "Locacoes",
                column: "FilmeId");
        }
    }
}
