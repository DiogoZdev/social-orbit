import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "src/app/components/shared-components.modules";
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
        SharedComponentsModule,
    ]
})
export class HubModule {

}