import { Cliente } from 'src/app/models/cliente.model';
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-alterar-cliente",
  templateUrl: "./alterar-cliente.component.html",
  styleUrls: ["./alterar-cliente.component.css"],
})
export class AlterarClienteComponent {
  clienteId: number = 0;
  nome: string = "";
  email: string = "";
  telefone: string = "";
  endereco: string = "";
  criadoEm: Date | null = null;

  mensagemErro: string | null = null;
  mensagemSucesso: string | null = null;

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parametros) => {
        let { id } = parametros;
        this.client.get<Cliente>(`http://localhost:5116/api/cliente/buscar/${id}`).subscribe({
          next: (cliente) => {
            this.clienteId = cliente.clienteId;
            this.nome = cliente.nome;
            this.email = cliente.email;
            this.telefone = cliente.telefone;
            this.endereco = cliente.endereco;
          },
          error: (erro) => {
            console.log(erro);
          },
        });
      },
    });
  }

  alterar(): void {
    if (!this.clienteId) {
      console.error("ID do cliente não fornecido.");
      return;
    }

    let cliente: Cliente = {
      clienteId: this.clienteId,
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      endereco: this.endereco,
      criadoEm: this.criadoEm!,
    };

    this.client
      .put<Cliente>(`http://localhost:5116/api/cliente/alterar/${this.clienteId}`, cliente)
      .subscribe({
        next: (cliente) => {
          this.mensagemSucesso = "Cliente alterado com sucesso!!";
          this.mensagemErro = null;
          this.router.navigate(["/clientes"]);  // Modifique para o caminho correto da lista de clientes
        },
        error: (erro) => {
          console.log(erro);
          this.mensagemErro = "Erro ao tentar alterar o cliente. Verifique os dados e tente novamente.";
          this.mensagemSucesso = null;
        },
      });
  }
}
