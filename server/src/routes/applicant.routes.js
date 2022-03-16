import { Router } from "express" 
import Uploader from "../middleware/uploader"
import ApplicantController from "../controllers/applicant.controller";


const router = Router();

router.post('/apply', Uploader.single("file"), ApplicantController.uploadResume);
router.get('/applicants', ApplicantController.allApplicant);
router.get('/all/:id', ApplicantController.applicantById);
router.put('/status/:id', ApplicantController.updateStatus);

export default router;