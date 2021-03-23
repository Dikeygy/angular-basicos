import { CommonModule } from "@angular/common"; // incorpora las directivas de angular ngFor / ngIf entre otros
import { NgModule } from "@angular/core";
import { HereoComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HereoComponent,
        ListadoComponent
    ],
    exports: [ // lo que queremos hacer público
        ListadoComponent
    ],
    imports: [ // solo módulos
        CommonModule
    ]
})
export class HeroesModule {
    
}