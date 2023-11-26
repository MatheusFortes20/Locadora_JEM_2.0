// pages-cliente/listar-cliente/listar-cliente.component.ts
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Cliente } from "src/app/models/cliente.model";

@Component({
  selector: "app-listar-cliente",
  templateUrl: "./listar-cliente.component.html",
  styleUrls: ["./listar-cliente.component.css"],
})
export class ListarClienteComponent implements OnInit {
  colunasTabela: string[] = [
    "id",
    "nome",
    "email",
    "telefone",
    "endereco",
    "criadoEm",
    "deletar",
  ];

  clientes: Cliente[] = [];

  constructor(private client: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // Ajuste da URL para apontar para o backend correto
    this.client
      .get<Cliente[]>("http://localhost:5116/api/cliente/listar")
      .subscribe({
        next: (clientes) => {
          this.clientes = clientes;
        },
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  deletar(clienteId: number) {
    // Ajuste da URL para apontar para o backend correto
    this.client
      .delete<Cliente[]>(`http://localhost:5116/api/cliente/deletar/${clienteId}`)
      .subscribe({
        next: (clientes) => {
          this.clientes = clientes;
          this.snackBar.open("Cliente deletado com sucesso!!", "Locadora", {
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
