const { City } = require('../models/index')
// if you want to see what this city containing(not object as it is destructured)you can console it in the index.js file

class CityRepository{
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error){
            throw {error};
        }
    }

    async deleteCity({ cityId }){
        try{
           await City.destroy({
            where : {
                id : cityId
            }
           });
        } catch (error){
            throw {error};
            //why error : if you want to del an entry ehich doesn't exist
            // easy to catch error at db level
        }
    }
}
module.exports = CityRepository;

