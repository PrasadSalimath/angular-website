import { Routes, RouterModule, Router } from '@angular/router'
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: '\home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
