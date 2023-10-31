import mysql from 'mysql'
import db from '../database/DBconfig.js'

const companyModel = {
    getCompany: (callback) => {
        db.query('SELECT * FROM comp_details', callback)
    }
}

export default companyModel;