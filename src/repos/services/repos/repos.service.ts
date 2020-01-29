import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { api } from 'src/_shared';

@Injectable({
    providedIn: 'root'
})
export class ReposService {

    constructor(private http: HttpClient) { }

    getRepos()/*: Observable<any[]> */ {
        return this.http.get/*<any[]>*/(`${api}`)
            .pipe(
                map(res => {
                    const data = [];
                    res['items'].forEach(elt => {
                        const mapped = {
                            name: elt.name,
                            description: elt.description,
                            login: elt.owner.login,
                            avatar_url: elt.owner.avatar_url,
                            stars: elt.stargazers_count,
                            issues: elt.open_issues_count
                        }
                        return data.push(mapped);
                    });
                    return data;
                }
                ),
                tap(_ => this.log('Get Repos')),
                catchError(error => this.handleError('Get Repos', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    private log(message: string) {
        console.log(message);
    }

}