// Alterar o nome da classe para AlterarFilmeComponent
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Filme } from "src/app/models/filme.model"; // Certifique-se de importar o modelo correto

@Component({
  selector: "app-alterar-filme", // Atualize o seletor conforme necessário
  templateUrl: "./alterar-filme.component.html",
  styleUrls: ["./alterar-filme.component.css"],
})
export class AlterarFilmeComponent { // Atualize o nome da classe conforme necessário
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
    // Lógica para alterar o filme
    // Certifique-se de incluir a lógica para recuperar o filme existente e preencher os campos do formulário
    let filme: Filme = {
      titulo: this.titulo,
      ano: this.ano!,
      genero: this.genero,
      sinopse: this.sinopse,
      capa: this.capa,
      descricao: this.descricao,
      disponivel: this.disponivel,
      // Adicione o ID do filme ou lógica apropriada para identificar o filme a ser alterado
    };

    this.client
  .put<Filme>(`https://localhost:7083/api/filme/alterar/${filme.filmeId}`, filme)
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
