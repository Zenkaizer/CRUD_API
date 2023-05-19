import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { RegisterComponent } from "./modals/register.component";
import { UpdateComponent } from "./modals/update.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        CrudComponent,
        RegisterComponent,
        UpdateComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

