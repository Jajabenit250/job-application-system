import { Router } from "express"
import applicantRoutes from "./applicant.routes"
import jobRoutes from "./job.routes"


const routes = Router();
routes.use('/applicant', applicantRoutes)
routes.use('/job', jobRoutes)


export default routes;