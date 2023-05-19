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
    searchedItems: Item[] = [];
    item: any;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.http.get<Item[]>('http://20.231.202.18:8000/api/form').subscribe(
            (response) => {
                this.items = response;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    deleteItem(itemId: number) {
        this.http.delete(`http://20.231.202.18:8000/api/form/${itemId}`).subscribe(() => {
            this.loadData()
        });
    }


    registerForm(item:Item) {
        this.http.post('http://20.231.202.18:8000/api/form', item).subscribe(
            () => {
                this.loadData();
            },
            (error) => {
                console.error('Error al enviar el formulario:', error);
            }
        );
    }

    updateForm(item:Item) {
        this.http.put('http://20.231.202.18:8000/api/form/' + item.id, item).subscribe(
            () => {
                this.loadData();
            },
            (error) => {
                console.error('Error al enviar el formulario:', error);
            }
        );
    }

    setItem(item:Item): void {
        this.item = item;
    }

    getItem(): Item {
        return this.item;
    }

    searchItems(data:String): void {

        if (data == ""){
            this.loadData();
            return;
        }

        let aux = 0;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].code == data || this.items[i].name || this.items[i].description){
                this.searchedItems[aux] = this.items[i];
                aux++;
            }
        }
        this.items = this.searchedItems;
    }

}
