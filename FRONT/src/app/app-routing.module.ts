import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarFilmeComponent } from "./pages-filme/listar-filme/listar-filme.component";
import { CadastrarFilmeComponent } from "./pages-filme/cadastrar-filme/cadastrar-filme.component";
import { AlterarFilmeComponent } from "./pages-filme/alterar-filme/alterar-filme.component";
import { DeletarFilmeComponent } from "./pages-filme/deletar-filme/deletar-filme.component";
import { CadastrarClienteComponent } from "./pages-cliente/cadastrar-cliente/cadastrar-cliente.component";
import { AlterarClienteComponent } from "./pages-cliente/alterar-cliente/alterar-cliente.component";
import { ListarClienteComponent } from "./pages-cliente/listar-cliente/listar-cliente.component";
import { DeletarClienteComponent } from "./pages-cliente/deletar-cliente/deletar-cliente.component";

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
  {
    path: "pages/cliente/cadastrar",
    component: CadastrarClienteComponent,
  },
  {
    path: "pages/cliente/listar",
    component: ListarClienteComponent,
  },
  {
    path: "pages/cliente/alterar",
    component: AlterarClienteComponent,
  },
  {
    path: "pages/cliente/deletar",
    component: DeletarClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}