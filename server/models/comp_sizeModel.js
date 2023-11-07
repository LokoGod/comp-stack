import db from "../database/DBconfig.js";

const compSizeModel = {
  getCompSize: (callback) => {
    db.query("SELECT * FROM comp_size", callback);
  },
};

export default compSizeModel;
