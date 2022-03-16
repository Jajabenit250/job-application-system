import JobModel from "../models/job.model";

class JobController {
  static async addVacancy(req, res) {
    try {
      const { jobName, description } = req.body;
      const result = await JobModel({ jobName, description }).save();
      if (result) {
        return res.status(200).send({ result });
      }
      return res.status(400).send({ error: "creation failed" });
    } catch (error) {
      return res.status(400).send({ error: "error while retrieving data" });
    }
  }
  static async viewVacancy(req, res) {
    try {
      const datas = await JobModel.find().sort( { jobName: 1 } ).limit( 4 );

      if (datas) {
        return res.status(200).send({ datas });
      }

      return res.status(400).send({ error: "no datas found" });
    } catch (error) {
      return res.status(400).send({ error: "error while retrieving data" });
    }
  }
}

export default JobController;
