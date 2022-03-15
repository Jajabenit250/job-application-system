import { Router } from "express" 
import JobController from "../controllers/job.controller";


const router = Router();

router.post('/create', JobController.addVacancy);
router.get('/all', JobController.viewVacancy)


export default router;
