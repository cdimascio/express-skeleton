import ExampleRoutes from './api/controllers/examples/routes';

export default class Routes {
  static init(app) {
    app.use('/api/v1/examples',new ExampleRoutes().init());
  }
}
