import { Config, Inject } from 'decorators';
import { ComponentsModule } from './components.module'

// import all required components here
import './home/home.component';

export const components = ComponentsModule.module;
