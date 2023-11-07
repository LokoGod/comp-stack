import db from "../database/DBconfig.js";

const compTypesModel = {
  getCompType: (callback) => {
    db.query("SELECT * FROM comp_types", callback);
  },
};

export default compTypesModel;
