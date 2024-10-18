const db = require('../database/server.js');

const query = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM data_sensor');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
};

module.exports = query;