import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarFilmeComponent } from "./pages-filme/listar-filme/listar-filme.component";
import { CadastrarFilmeComponent } from "./pages-filme/cadastrar-filme/cadastrar-filme.component";
import { AlterarFilmeComponent } from "./pages-filme/alterar-filme/alterar-filme.component";

const routes: Routes = [
  {
    path: "",
    component: ListarFilmeComponent,
  },
  {
    path: "pages/filme/listar",
    component: ListarFilmeComponent,
  },
  {
    path: "pages/produto/cadastrar",
    component: CadastrarFilmeComponent,
  },
  {
    path: "pages/produto/alterar/:id",
    component: AlterarFilmeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}