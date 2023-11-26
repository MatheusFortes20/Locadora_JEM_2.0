// deletar-cliente/deletar-cliente.component.ts
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-deletar-cliente",
  templateUrl: "./deletar-cliente.component.html",
  styleUrls: ["./deletar-cliente.component.css"],
})
export class DeletarClienteComponent {
  clienteIdToDelete: number | null = null;

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  deletarCliente(): void {
    if (this.clienteIdToDelete) {
      this.client
        .delete(`http://localhost:5116/api/cliente/deletar/${this.clienteIdToDelete}`)
        .subscribe({
          next: () => {
            this.snackBar.open("Cliente deletado com sucesso!!", "Locadora", {
              duration: 1500,
              horizontalPosition: "right",
              verticalPosition: "top",
            });
            this.router.navigate(["/pages/cliente/listar"]);
          },
          error: (erro) => {
            console.log(erro);
            this.snackBar.open("Erro ao deletar o cliente.", "Locadora", {
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
    this.router.navigate(["/pages/cliente/listar"]);
  }
}
