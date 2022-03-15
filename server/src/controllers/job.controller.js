import JobModel from "../models/job.model";

class JobController {
  static async addVacancy(req, res) {
    try {
      const { jobName, description } = req.body;
      const result = await JobModel({ jobName, description }).save();
      if (result) {
        return res.status(200).send({ result });
      }
      return res.status(400).send({ error: "" });
    } catch (error) {
      return res.status(400).send({ error: "" });
    }
  }
  static async viewVacancy(req, res) {
    try {
      const datas = await JobModel.findAll();
      if (datas) {
        return res.status(200).send({ datas });
      }

      return res.status(400).send({ error: "" });
    } catch (error) {
      return res.status(400).send({ error: "" });
    }
  }
}

export default JobController;
