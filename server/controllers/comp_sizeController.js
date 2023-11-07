import compSizeModel from "../models/comp_sizeModel.js";

const compSizeController = {
  getCompSize: (req, res) => {
    compSizeModel.getCompSize((err, results) => {
      if (err) {
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).json(results);
      }
    });
  },
};

export default compSizeController;
