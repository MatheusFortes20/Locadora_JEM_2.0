import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarFilmeComponent } from "./pages-filme/listar-filme/listar-filme.component";
import { CadastrarFilmeComponent } from "./pages-filme/cadastrar-filme/cadastrar-filme.component";
import { AlterarFilmeComponent } from "./pages-filme/alterar-filme/alterar-filme.component";
import { DeletarFilmeComponent } from "./pages-filme/deletar-filme/deletar-filme.component";

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
    path: "pages/filme/cadastrar",
    component: CadastrarFilmeComponent,
  },
  {
    path: "pages/filme/alterar",
    component: AlterarFilmeComponent,
  },
  {
    path: "pages/filme/deletar",
    component: DeletarFilmeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}