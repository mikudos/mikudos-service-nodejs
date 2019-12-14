import { Application, Service } from 'mikudos-node-app';
import HandlerClass from './greeter_service.class';
import methodMap from './greeter_service.map';
import hooks from './greeter_service.hooks';

module.exports = function (app) {
    let handler = new HandlerClass({}, app);
    const service = new Service(handler, methodMap, 'GreeterService');
    app.register(service.name, service, hooks);
}
