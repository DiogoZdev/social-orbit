import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "src/app/components/shared-components.modules";
import { HubRoutingModule } from "./hub.routing.module";
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    exports: [],
    providers: [],
    declarations: [
        HomeComponent,
    ],
    imports: [
        HubRoutingModule,
        SharedComponentsModule,
    ]
})
export class HubModule { }