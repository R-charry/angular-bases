import { ContadorComponent } from './contador/01-contador.component';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';



@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
   
})
export class ContadorModule{

}