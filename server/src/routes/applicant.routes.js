import { Router } from "express" 
import Uploader from "../middleware/uploader"
import ApplicantController from "../controllers/applicant.controller";


const router = Router();

router.post('/upload/resume/:id', Uploader.single("file"), ApplicantController.uploadResume);
router.get('/applicants', ApplicantController.allApplicant);
router.get('/applicants/:id', ApplicantController.applicantById);

export default router;