import { Component, OnInit} from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from "../crud/crud.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Item} from "../models/item";

@Component({
    selector: 'update-modal',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    item: any = {
        code: '',
        name: '',
        description: ''
    };

    originalItem: any;


    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };


    constructor(public modal:NgbModal, private http: HttpClient, private crud:CrudComponent) { }

    ngOnInit() {
    }

    updateForm() {
        this.originalItem = this.crud.getItem()

        this.originalItem.code = this.item.code;
        this.originalItem.name = this.item.name;
        this.originalItem.description = this.item.description;

        this.crud.updateForm(this.originalItem);
    }

}
