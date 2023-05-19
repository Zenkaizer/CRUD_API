import { Component, OnInit} from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from "../crud/crud.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
    selector: 'register-modal',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    item: any = {
        code: '',
        name: '',
        description: ''
    };
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };


    constructor(public modal:NgbModal, private http: HttpClient, private crud:CrudComponent) { }

    ngOnInit() {
    }

    registerForm() {
        this.crud.registerForm(this.item);
        this.item = {
            code: '',
            name: '',
            description: ''
        };
    }
}
