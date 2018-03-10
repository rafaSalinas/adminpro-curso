import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// En este archivo importamos todos los servicios y asi los exportamos en un mismo fuente
import { SettingsService, SharedService, SidebarService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ],
  declarations: []
})
export class ServiceModule { }
