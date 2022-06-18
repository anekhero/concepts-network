import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreatePageComponent } from "./pages/create-page/create-page.component";
import { DetailsPageComponent } from "./pages/details-page/details-page.component";
import { ListPageComponent } from "./pages/list-page/list-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";

const routes: Routes = [
    { path: 'list', component: ListPageComponent },
    { path: 'create', component: CreatePageComponent },
    { path: 'details/:id', component: DetailsPageComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
