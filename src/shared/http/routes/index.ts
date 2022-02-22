import productsRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';
import { response, Router } from 'express';
import { request } from 'http';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);

export default routes;
