import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import { ReposRoutingModule } from './repos-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  entryComponents: [],
  imports: [
    CommonModule,
    ReposRoutingModule,
    HttpClientModule
  ],
  providers: [...fromServices.services],
  exports: [...fromContainers.containers, ...fromComponents.components]
})
export class ReposModule { }
