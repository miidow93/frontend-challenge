import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import * as fromServices from '../../services';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-repos',
    templateUrl: './repos.container.html',
    styleUrls: ['./repos.container.scss']
})
export class ReposContainer implements OnInit {

    repos$: Observable<any[]>;

    constructor(private reposService: fromServices.ReposService) { }

    ngOnInit() {
        this.repos$ = this.reposService.getRepos();
    }
}