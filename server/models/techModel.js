import db from "../database/DBconfig.js";

const techModel = {
  getTech: (callback) => {
    db.query("SELECT * FROM tech", callback);
  },
};

export default techModel;
