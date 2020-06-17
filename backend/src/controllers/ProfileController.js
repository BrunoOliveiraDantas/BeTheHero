const connection = require("../database/connection");

module.exports = {
    async show_incidents_ong(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents);
    }
}