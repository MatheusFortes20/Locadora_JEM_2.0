import { Filme } from './../../models/filme.model';
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-alterar-filme",
  templateUrl: "./alterar-filme.component.html",
  styleUrls: ["./alterar-filme.component.css"],
})
export class AlterarFilmeComponent {
  filmeId: number | undefined = undefined;
  titulo: string = "";
  ano: number | undefined; // Remova a atribuição de undefined aqui
  genero: string = "";
  sinopse: string = "";
  capa: string = "";
  descricao: string = "";
  disponivel: boolean = false;
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
        this.client.get<Filme>(`https://localhost:7083/api/filme/buscar/${id}`).subscribe({
          next: (filme) => {
            this.filmeId = filme.filmeId;
            this.titulo = filme.titulo;
            this.ano = filme.ano;
            this.genero = filme.genero;
            this.sinopse = filme.sinopse;
            this.capa = filme.capa;
            this.descricao = filme.descricao;
            this.disponivel = filme.disponivel;
            this.criadoEm = filme.criadoEm ? new Date(filme.criadoEm) : null;
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
    let filme: Filme = {
      filmeId: this.filmeId,
      titulo: this.titulo,
      ano: this.ano,
      genero: this.genero,
      sinopse: this.sinopse,
      capa: this.capa,
      descricao: this.descricao,
      disponivel: this.disponivel,
      criadoEm: this.criadoEm ? this.criadoEm.toISOString() : null,
    };

    this.client.put<Filme>(`https://localhost:7083/api/filme/alterar/${this.filmeId}`, filme).subscribe({
      // A requisição funcionou
      next: (filme) => {
        this.snackBar.open("Filme alterado com sucesso!!", "Locadora", {
          duration: 1500,
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate(["caminho/para/listar/filmes"]);
      },
      // A requisição não funcionou
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}
