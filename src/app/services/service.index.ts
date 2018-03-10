// Este archivo sirve para referenciar todos los servicios y desde el resto de componentes
// para invocar un servicion se importar este archivo, ya que asi podemos cambiar los servicios de lugar
// y solo habra que modificar este archivo y no todos los puntos donde se usan los servicios

export { SettingsService } from './settings/settings.service';
export { SharedService } from './shared/shared.service';
export { SidebarService } from './shared/sidebar.service';
