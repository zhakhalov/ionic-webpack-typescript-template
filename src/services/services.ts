import { Config, Inject } from 'decorators';
import { ServicesModule } from './services.module'

// import all required services here
import './home.service';

export const services = ServicesModule.module;
