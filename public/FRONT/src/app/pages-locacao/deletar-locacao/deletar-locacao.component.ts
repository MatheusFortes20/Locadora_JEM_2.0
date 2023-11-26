import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-deletar-locacao",
  templateUrl: "./deletar-locacao.component.html",
  styleUrls: ["./deletar-locacao.component.css"],
})
export class DeletarLocacaoComponent {
  locacaoIdToDelete: number | null = null;

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  deletarLocacao(): void {
    if (this.locacaoIdToDelete) {
      this.client
        .delete(`http://localhost:5116/api/locacao/deletar/${this.locacaoIdToDelete}`)
        .subscribe({
          next: () => {
            this.snackBar.open("Locação deletada com sucesso!!", "Locadora", {
              duration: 1500,
              horizontalPosition: "right",
              verticalPosition: "top",
            });
            this.router.navigate(["/pages/locacao/listar"]);
          },
          error: (erro) => {
            console.log(erro);
            this.snackBar.open("Erro ao deletar a locação.", "Locadora", {
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
    this.router.navigate(["/pages/locacao/listar"]);
  }
}
