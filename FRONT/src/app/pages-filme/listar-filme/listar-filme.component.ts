import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Filme } from "src/app/models/filme.model"; // Certifique-se de importar o modelo correto

@Component({
  selector: "app-listar-filme", // Atualize o seletor conforme necessário
  templateUrl: "./listar-filme.component.html", // Atualize o caminho do template conforme necessário
  styleUrls: ["./listar-filme.component.css"], // Atualize o caminho do estilo conforme necessário
})
export class ListarFilmeComponent { // Atualize o nome da classe conforme necessário
  colunasTabela: string[] = [
    "id",
    "titulo",
    "ano",
    "genero",
    "sinopse",
    "capa",
    "descricao",
    "disponivel",
    "criadoEm",
    "deletar",
    "alterar",
  ];

  filmes: Filme[] = [];

  constructor(private client: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.client
      .get<Filme[]>("https://localhost:7083/api/filme/listar")
      .subscribe({
        next: (filmes) => {
          this.filmes = filmes;
        },
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  deletar(filmeId: number) {
    this.client
      .delete<Filme[]>(`https://localhost:7083/api/filme/deletar/${filmeId}`)
      .subscribe({
        next: (filmes) => {
          this.filmes = filmes;
          this.snackBar.open("Filme deletado com sucesso!!", "Locadora", {
            duration: 1500,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        },
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
