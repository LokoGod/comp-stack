import techModel from "../models/techModel.js";

const techController = {
  getTech: (req, res) => {
    techModel.getTech((err, results) => {
      if (err) {
        res.status(500).send("Internal ");
      } else {
        res.status(200).json(results);
      }
    });
  },
};

export default techController;
