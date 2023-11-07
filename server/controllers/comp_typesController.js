import compTypesModel from "../models/comp_typesModel.js";

const compTypesController = {
  getCompType: (req, res) => {
    compTypesModel.getCompType((err, results) => {
      if (err) {
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).json(results);
      }
    });
  },
};

export default compTypesController;
