import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-deletar-filme",
  templateUrl: "./deletar-filme.component.html",
  styleUrls: ["./deletar-filme.component.css"],
})
export class DeletarFilmeComponent {
  filmeIdToDelete: number | null = null;

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  deletarFilme(): void {
    if (this.filmeIdToDelete) {
      this.client
        .delete(`http://localhost:5116/api/filme/deletar/${this.filmeIdToDelete}`)
        .subscribe({
          next: () => {
            this.snackBar.open("Filme deletado com sucesso!!", "Locadora", {
              duration: 1500,
              horizontalPosition: "right",
              verticalPosition: "top",
            });
            this.router.navigate(["/pages/filme/listar"]);
          },
          error: (erro) => {
            console.log(erro);
            this.snackBar.open("Erro ao deletar o filme.", "Locadora", {
              duration: 1500,
              horizontalPosition: "right",
              verticalPosition: "top",
              panelClass: ["snackbar-error"],
            });
          },
        });
    }
  }

  cancelarDelecao(): void {
    this.router.navigate(["/pages/filme/listar"]);
  }
}
