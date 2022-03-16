import ApplicantModel from "../models/applicant.model";

class ApplicantController {
  static async createApplication(req, res) {
    try {
      const { applicantName, status, coverLetter, age, degree } = req.body;
      const jobID = req.params.id;
      const result = await ApplicantModel({
        applicantName,
        status,
        coverLetter,
        jobID,
        age, 
        degree
      }).save();
      if (result) {
        return res.status(200).send({ result });
      }
      return res.status(400).send({ error: "" });
    } catch (error) {
      return res.status(400).send({ error: "" });
    }
  }
  static async uploadResume(req, res) {
    try {
      const { applicantName, coverLetter, age, degree, jobID } = req.body;
      const fileURL = req.file.location;
      const result = await ApplicantModel({
        applicantName,
        coverLetter,
        jobID,
        age, 
        degree,
        fileURL
      }).save();
      if (result) {
        return res.status(200).send({ result });
      }

      return res.status(400).send({ error: "" });
    } catch (error) {
      return res.status(400).send({ error: "" });
    }
  }

  static async allApplicant(req, res) {
    try {
      const datas = await ApplicantModel.findAll();
      if (datas) {
        return res.status(200).send({ datas });
      }

      return res.status(400).send({ error: "" });
    } catch (error) {
      return res.status(400).send({ error: "" });
    }
  }

  static async applicantById(req, res) {
    try {
      const applicationId = req.params.id;
      const datas = await ApplicantModel.find({ jobID: applicationId }).sort( { applicantName: 1 } ).limit( 10 );
      if (datas) {
        return res.status(200).send({ datas });
      }

      return res.status(400).send({ error: "" });
    } catch (error) {
      return res.status(400).send({ result: "" });
    }
  }

  static async updateStatus(req, res) {
    try {
      const applicationId = req.params.id;
      const datas = await ApplicantModel.find({ _id: applicationId });
      if (datas) {
        return res.status(200).send({ datas });
      }

      return res.status(400).send({ error: "" });
    } catch (error) {
      return res.status(400).send({ result: "" });
    }
  }
}

export default ApplicantController;
