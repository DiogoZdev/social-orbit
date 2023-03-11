import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TopMenuComponent } from "src/app/components/top-menu/top-menu.component";
import { HubRoutingModule } from "./hub.routing.module";
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    exports: [],
    providers: [],
    declarations: [
        HomeComponent,
        TopMenuComponent,
    ],
    imports: [
        HubRoutingModule,
    ]
})
export class HubModule {

}