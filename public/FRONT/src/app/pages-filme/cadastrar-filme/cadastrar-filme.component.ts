// cadastrar-filme.component.ts

import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Filme } from "src/app/models/filme.model";

@Component({
  selector: "app-cadastrar-filme",
  templateUrl: "./cadastrar-filme.component.html",
  styleUrls: ["./cadastrar-filme.component.css"],
})
export class CadastrarFilmeComponent {
  titulo: string = "";
  ano: number | null = null;
  genero: string = "";
  sinopse: string = "";
  capa: string = "";
  descricao: string = "";
  disponivel: boolean = true;

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  cadastrar(): void {
    let filme: Filme = {
      titulo: this.titulo,
      ano: this.ano!,
      genero: this.genero,
      sinopse: this.sinopse,
      capa: this.capa,
      descricao: this.descricao,
      disponivel: this.disponivel,
    };

    this.client
      .post<Filme>("http://localhost:5116/api/filme/cadastrar", filme)
      .subscribe({
        next: (filme) => {
          this.snackBar.open("Filme cadastrado com sucesso!!", "Locadora", {
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
