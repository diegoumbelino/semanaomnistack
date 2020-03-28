const connection = require('../database/connection');

module.exports ={
    async index(request, response){
        const ong_id = request.headers.authorization;

        const incidents = await RTCPeerConnection('incidents')
        .where('ing_id', ong_id)
        .select('*');
        return response.json(incidents);
    }
}