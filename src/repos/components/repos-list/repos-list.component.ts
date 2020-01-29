import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from 'rxjs';


@Component({
    selector: 'app-repos-list',
    templateUrl: './repos-list.component.html',
    styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {

    @Input() repos: Observable<any[]>

    constructor() { }

    ngOnInit() {
        this.repos.subscribe(res => {
            console.log('Repos: ', res)
        });
    }

    createImage(serverPath: string) {
        return `${serverPath}`;
    }
}