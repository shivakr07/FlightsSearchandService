const { City } = require('../models/index')
// if you want to see what this city containing(not object as it is destructured)you can console it in the index.js file

class CityRepository{
    async createCity({ name }) {
        try {
            const city = await City.create({ 
                name 
            });
            return city;
        } catch (error){
            console.log("something went wrong in the repo layer");
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
           return true;
        } catch (error){
            console.log("something went wrong in the repo layer");
            throw {error};
            //why error : if you want to del an entry ehich doesn't exist
            // easy to catch error at db level
        }
    }

    async updateCity(cityId, data){
        try{
            const city = await City.update(data,{
                where: {
                    id : cityId
                }
            });
            return city;
        } catch(error){
            console.log("something went wrong in the repository layer");
            throw(error);
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityid);
            return city;
        } catch (error){
            console.log("something went wrong in the repo layer");
            throw {error}; 
        }
    }
}
module.exports = CityRepository;

