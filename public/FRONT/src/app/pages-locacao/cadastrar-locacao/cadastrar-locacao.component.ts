import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Locacao } from "src/app/models/locacao.model";

@Component({
  selector: "app-cadastrar-locacao",
  templateUrl: "./cadastrar-locacao.component.html",
  styleUrls: ["./cadastrar-locacao.component.css"],
})
export class CadastrarLocacaoComponent {
  locacao: Locacao = {
    valor: 0,
    locadoEm: new Date(),
    dataInicio: new Date(),
    dataFim: new Date(),
    observacoes: "",
    filmeId: 0,  // Apenas o ID do filme
    clienteId: 0,  // Apenas o ID do cliente
  };

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  cadastrarLocacao(): void {
    this.client
      .post<Locacao>("http://localhost:5116/api/locacao/cadastrar", this.locacao)
      .subscribe({
        next: (locacao) => {
          this.snackBar.open("Locação cadastrada com sucesso!!", "Locadora", {
            duration: 1500,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/locacao/listar"]);
        },
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
