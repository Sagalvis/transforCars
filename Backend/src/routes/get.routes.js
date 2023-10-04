import {Router} from "express";

import * as controllGet from "../controllers/get.controllers.js";

const getRouter = Router();

/* Routas para traer las tablas clientes, empoleados, vehiculos */
getRouter.get('/customer', controllGet.getCustomer);
getRouter.get('/employees', controllGet.getEmployees);
getRouter.get('/vehicle', controllGet.getVehicle);
getRouter.get('/vehicle/:identificacion', controllGet.getVehicleId);
getRouter.get('/tipovehicle', controllGet.getSelectypevehicle);
getRouter.get('/tiporol', controllGet.getSelectRol);
getRouter.get('/tipocliente', controllGet.getTypeClient);
getRouter.get('/inventario', controllGet.getInventario);
getRouter.get('/tipomedida', controllGet.getMedida);
getRouter.get('/tipoproducto', controllGet.getProducto);
getRouter.get('/factura', controllGet.getInvoices);
getRouter.get('/getService', controllGet.getService);
getRouter.get('/getServiceCliente/:identificacion', controllGet.getServiceCliente);
getRouter.get('/getAllServicesClient', controllGet.getAllServicesClient);
getRouter.get('/getServicesClient', controllGet.getServicesClient);
getRouter.get('/getImagen', controllGet.getImg)
export default getRouter