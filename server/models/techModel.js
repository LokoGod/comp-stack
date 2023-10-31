import db from "../database/DBconfig";

const techModel = {
  getTech: (callback) => {
    db.query("SELECT * FROM tech", callback);
  },
};

export default techModel;
