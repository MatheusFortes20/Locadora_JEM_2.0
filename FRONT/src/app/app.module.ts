import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListarFilmeComponent } from "./pages-filme/listar-filme/listar-filme.component";
import { CadastrarFilmeComponent} from "./pages-filme/cadastrar-filme/cadastrar-filme.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlterarFilmeComponent}  from './pages-filme/alterar-filme/alterar-filme.component';
import { DeletarFilmeComponent } from "./pages-filme/deletar-filme/deletar-filme.component";

@NgModule({
  //Componentes da aplicação
  declarations: [
    AppComponent,
    ListarFilmeComponent,
    CadastrarFilmeComponent,
    AlterarFilmeComponent,
    DeletarFilmeComponent
  ],
  //Bibliotecas externas da aplicação
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}