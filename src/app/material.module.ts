import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

const MATERIAL = [MatButtonModule, MatIconModule];
@NgModule({
    imports: MATERIAL,
    exports: MATERIAL

})
export class MaterialModule{
    
}