import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { HeaderComponent } from "./header/header.component";
import { ThemeSelectorComponent } from "./theme-selector/theme-selector.component";
import { TopMenuComponent } from "./top-menu/top-menu.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ThemeSelectorComponent,
    TopMenuComponent,
    ButtonComponent,
    HeaderComponent,
  ],
  exports: [
    ThemeSelectorComponent,
    TopMenuComponent,
    ButtonComponent,
    HeaderComponent
  ]
})
export class SharedComponentsModule {}