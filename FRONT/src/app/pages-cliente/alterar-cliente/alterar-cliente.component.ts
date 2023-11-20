import { Cliente } from 'src/app/models/cliente.models';
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
        this.client.get<Cliente>(`https://localhost:7083/api/cliente/buscar/${id}`).subscribe({
          next: (cliente) => {
            this.clienteId = cliente.clienteId;
            this.nome = cliente.nome;
            this.email = cliente.email;
            this.telefone = cliente.telefone;
            this.endereco = cliente.endereco;
            this.criadoEm = cliente.criadoEm;
          },
          // Requisição com erro
          error: (erro) => {
            console.log(erro);
          },
        });
      },
    });
  }

  alterar(): void {
    this.clienteId = this.clienteId || 0;  // Define 0 como valor padrão se for undefined
    let cliente: Cliente = {
      clienteId: this.clienteId,
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      endereco: this.endereco,
      criadoEm: this.criadoEm!,
    };
  
    this.client.put<Cliente>(`https://localhost:7083/api/cliente/alterar/${this.clienteId}`, cliente).subscribe({
      // A requisição funcionou
      next: (cliente) => {
        this.snackBar.open("Cliente alterado com sucesso!!", "Locadora", {
          duration: 1500,
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate(["caminho/para/listar/clientes"]);
      },
      // A requisição não funcionou
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}
