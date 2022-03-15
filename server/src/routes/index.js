import { Router } from "express"
import applicantRoutes from "./applicant.routes"


const routes = Router();
routes.use('/applicant', applicantRoutes)


export default routes;