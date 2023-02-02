const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');

module.exports = function(){

    mongoose.connect(`mongodb://parimalta:002fAR367LnXiXRNGYyX6y0X@15.206.7.200:28017/parimalta?authSource=admin&readPreference=primary&directConnection=true&ssl=false` , () =>{

    console.log("Mongodb Connected Successfully");

});


    // const uri = "mongodb://parimalta:002fAR367LnXiXRNGYyX6y0X@15.206.7.200:28017/parimalta?authSource=admin&readPreference=primary&directConnection=true&ssl=false";
    // const client = new MongoClient(uri);
    
    // async function run() {
    //     try {
    //         await client.connect( () => {
    //             console.log("Database Connected");
    //         });

             
    //      // database and collection code goes here
    //      const db = client.db("parimalta");
    //      const coll = db.collection("admins");
    //      // find code goes here
    //      const cursor = coll.find();
    //      // iterate code goes here
    //      await cursor.forEach(console.log);

            
    //       } finally {
    //         // Ensures that the client will close when you finish/error
    //         await client.close();
    //       }
    // }
    
    // run().catch(console.dir);

    // blog(run);

}





// module.exports = function() {


//     const client = mongoose.connect(`mongodb://parimalta:002fAR367LnXiXRNGYyX6y0X@15.206.7.200:28017/parimalta?authSource=admin&readPreference=primary&directConnection=true&ssl=false` , () =>{

//         console.log("Mongodb Connected Successfully");

//     });


//     const db = client.db("parimalta");
//     const coll = db.collection("planets");

// }