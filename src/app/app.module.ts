import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { environment } from 'src/environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { EditConceptComponent } from './components/edit-concept/edit-concept.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTreeModule} from '@angular/material/tree';
import {MatChipsModule} from '@angular/material/chips';
import { RelationIconNamePipe } from './pipes/relation-icon-name.pipe';
import { RelationNamePipe } from './pipes/relation-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    DetailsPageComponent,
    NotFoundPageComponent,
    CreatePageComponent,
    EditConceptComponent,
    RelationIconNamePipe,
    RelationNamePipe
  ],
  imports: [
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTreeModule,
    MatChipsModule,
    NgxMatSelectSearchModule,
    TextFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
