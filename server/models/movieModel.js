const mongoDb = require('../../db/mongodb')

module.exports = {
  getCollection: () => {
    let db = mongoDb.db('badmovies');
    let favorites = db.collection('favorites');
    return favorites;
  },
  save: (movie) => {
    let db = mongoDb.db('badmovies');
    let favorites = db.collection('favorites');
    //let favorites = this.getCollection()
    return favorites.insertOne(movie);
  } ,
  delete: (id) => {
    let db = mongoDb.db('badmovies');
    let favorites = db.collection('favorites');
    console.log('here')
    return favorites.findOne({id: 649956})
    .then((movie) =>{
      console.log(movie)
      return favorites.deleteOne({_id: movie._id})
    })
  }
}