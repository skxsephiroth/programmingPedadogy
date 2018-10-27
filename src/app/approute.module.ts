import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutmeComponent } from './components/aboutme.component';
import { RoadmapComponent } from './components/roadmap.component';

const appRoutes: Routes =[
    {path: '', component: RoadmapComponent},
    {path: 'roadmap', component: RoadmapComponent},
    {path: 'aboutme', component: AboutmeComponent},
    {path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]

})
export class AppRouteModule {

}