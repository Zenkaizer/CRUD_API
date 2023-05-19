import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item';

@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
    items: Item[] = [];
    registerModal = false;
    updateModal = false;
    itemActualizacion: any;
    nuevoItem: any = {
        code: '',
        name: '',
        description: ''
    };
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }

    
    
}
