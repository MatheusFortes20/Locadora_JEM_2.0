import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Filme } from "src/app/models/filme.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-alterar-filme",
  templateUrl: "./alterar-filme.component.html",
  styleUrls: ["./alterar-filme.component.css"],
})
export class AlterarFilmeComponent implements OnInit {
  filmeId: number | null = null;
  titulo: string = "";
  ano: number | null = null;
  genero: string = "";
  sinopse: string = "";
  capa: string = "";
  descricao: string = "";
  disponivel: boolean = false;

  constructor(
    private client: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        const { id } = params;
        this.client.get<Filme>(`https://localhost:5116/api/filme/buscar/${id}`).subscribe({
          next: (filme) => {
            this.filmeId = filme.filmeId !== undefined ? filme.filmeId : null;
            this.titulo = filme.titulo;
            this.ano = filme.ano !== undefined ? filme.ano : null;
            this.genero = filme.genero;
            this.sinopse = filme.sinopse;
            this.capa = filme.capa;
            this.descricao = filme.descricao;
            this.disponivel = filme.disponivel;
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });
  }
  

  alterar(): void {
  if (this.filmeId === null) {
    console.log("ID do filme não fornecido.");
    return;
  }

  const filme: Filme = {
    filmeId: this.filmeId,
    titulo: this.titulo,
    ano: this.ano !== null ? +this.ano : null, // convert to number
    genero: this.genero,
    sinopse: this.sinopse,
    capa: this.capa,
    descricao: this.descricao,
    disponivel: this.disponivel,
  };

  this.client
    .put<Filme>(`https://localhost:5116/api/filme/atualizar/${filme.filmeId}`, filme)
    .subscribe({
      next: (updatedFilme) => {
        this.router.navigate(["pages/filme/listar"]);
      },
      error: (error) => {
        console.log(error);
      },
    });
}
 }