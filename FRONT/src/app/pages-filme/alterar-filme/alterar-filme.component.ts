import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Filme } from "src/app/models/filme.model";

@Component({
  selector: "app-alterar-filme",
  templateUrl: "./alterar-filme.component.html",
  styleUrls: ["./alterar-filme.component.css"],
})
export class AlterarFilmeComponent {
  filmeId: number | null = null;
  titulo: string = "";
  ano: number | null = null;
  genero: string = "";
  sinopse: string = "";
  capa: string = "";
  descricao: string = "";
  disponivel: boolean = false;

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  alterar(): void {
    // Certifique-se de que o ID do filme está preenchido
    if (this.filmeId === null) {
      console.log("ID do filme não fornecido.");
      return;
    }

    // Lógica para alterar o filme
    let filme: Filme = {
      filmeId: this.filmeId,
      titulo: this.titulo,
      ano: this.ano!,
      genero: this.genero,
      sinopse: this.sinopse,
      capa: this.capa,
      descricao: this.descricao,
      disponivel: this.disponivel,
    };

    this.client
      .put<Filme>(`https://localhost:5116/api/filme/atualizar/${filme.filmeId}`, filme)
      .subscribe({
        next: (filme) => {
          this.snackBar.open("Filme alterado com sucesso!!", "Locadora", {
            duration: 1500,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/filme/listar"]);
        },
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
