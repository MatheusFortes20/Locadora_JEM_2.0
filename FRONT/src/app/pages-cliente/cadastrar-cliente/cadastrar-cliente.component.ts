import { Cliente } from "src/app/models/cliente.models";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: "app-cadastrar-cliente",
  templateUrl: "./cadastrar-cliente.component.html",
  styleUrls: ["./cadastrar-cliente.component.css"],
})
export class CadastrarClienteComponent {
  nome: string = "";
  email: string = "";
  telefone: string = "";
  endereco: string = "";

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  cadastrar(): void {
    let cliente: Cliente = {
      clienteId: 0, // O ID será gerado pelo servidor
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      endereco: this.endereco,
      criadoEm: new Date(), // Será definido pelo servidor
    };

    this.client
      .post<Cliente>("https://localhost:7083/api/cliente/cadastrar", cliente)
      .subscribe({
        next: (cliente) => {
          this.snackBar.open("Cliente cadastrado com sucesso!!", "Locadora", {
            duration: 1500,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["caminho/para/listar/clientes"]);
        },
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}