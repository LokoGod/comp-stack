import companyModel from "../models/company.js";

const companyController = {
  getCompany: (req, res) => {
    companyModel.getCompany((err, results) => {
      if (err) {
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).json(results);
      }
    });
  },
};

export default companyController;
