import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Locacao } from "src/app/models/locacao.model";

@Component({
  selector: "app-listar-locacao",
  templateUrl: "./listar-locacao.component.html",
  styleUrls: ["./listar-locacao.component.css"],
})
export class ListarLocacaoComponent implements OnInit {
  colunasTabela: string[] = [
    "locacaoId",
    "valor",
    "locadoEm",
    "dataInicio",
    "dataFim",
    "observacoes",
    "filmeId",
    "clienteId",
    "deletar",
    "alterar",
  ];

  locacoes: Locacao[] = [];

  constructor(private client: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.carregarLocacoes();
  }

  private carregarLocacoes(): void {
    this.client
      .get<Locacao[]>("http://localhost:5116/api/locacao/listar")
      .subscribe({
        next: (data) => {
          this.locacoes = data;
        },
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  deletar(locacaoId: number): void {
    this.client
      .delete<Locacao[]>(`http://localhost:5116/api/locacao/deletar/${locacaoId}`)
      .subscribe({
        next: (locacoes) => {
          this.locacoes = locacoes;
          this.snackBar.open("Locação deletada com sucesso!!", "Locadora", {
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
