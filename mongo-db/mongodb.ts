mongodb node js mongoose

use  [nameDB] // switch to db [nameDB]

db.[name].insertOne() // create object
db.[name].insertMany() // create objects

db.[name].find() // showing all objects from [name]
db.[name].find().limit(2) // showing 2 objects from [name]
db.[name].find({}, { _id: 0 }).limit(2) // second parrametrs in find, used to hide some value in shovinf objects

db.[name].find({}, { _id: 0 }).sort({ property: 1 }) // sorting { [parametrName]: (1/-1) }
db.[name].find({}, { _id: 0 }).sort({ propertyOne: 1, propertyTwo: -1 })
db.[name].find({}, { _id: 0 }).sort({ propertyOne: 1, propertyTwo: -1 }).limit(2) 

db.[name].find({ parametr: [value] }, { _id: 0 }) // filter [property]: [value]
db.[name].find({ parametrOne: [value], parametrTwo: [value }, { _id: 0 })
db.[name].find({ $or: [ {parametrOne: [value]}, {parametrTwo: [value]} ]}, { _id: 0 }) // filter with or expressions (||)
db.[name].find(
                { 
$or: [
        { parametrOne: {$lt: [value]} },
        { parametrTwo: [value] } 
    ]
}, { _id: 0 }
              ) // filter less than (parametrOne < $lt)
db.[name].find({ $or: [ {parametrOne: {$gt: [value] } }, {parametrTwo: [value]} ]}, { _id: 0 }) // filter greater than (parametrOne > $gt)
db.[name].find({ $or: [ {parametrOne: {$gte: [value] } }, {parametrTwo: [value]} ]}, { _id: 0 }) // filter greater than or equal (parametrOne >= $gte)
db.[name].find({ $or: [ {parametrOne: {$gte: [value] } }, {parametrTwo: [value]} ]}, { _id: 0 }) // filter less than or equal (parametrOne <= $lte)
db.[name].find({ $or: [ {parametrOne: {$eq: [value] } }, {parametrTwo: [value]} ]}, { _id: 0 }) // filter equal (parametrOne == $eq)
db.[name].find({ $or: [ {parametrOne: {$ne: [value] } }, {parametrTwo: [value]} ]}, { _id: 0 }) // filter not equal (parametrOne != $ne)

db.[name].find({ parametr: {$in: [value1, value2, value3]} }, { _id: 0 }) // filter element (like includes())
db.[name].find({ parametr: {$nin: [value1, value2, value3]} }, { _id: 0 }) // filter element (like !includes())

db.[name].find({ property: {$exists: true}, { _id: 0 }) // filter element if property exist
db.[name].find({ property: {$exists: false}, { _id: 0 }) // filter element if property not exist

db.[name].find({ property: {$size: 2}, { _id: 0 }) // filter element if property has, and size in array.lenght == 2
db.[name].find({ "property.index": "value", { _id: 0 }) // filter element if property has, and only if property[index] == value

db.[name].find({"property: {$elemMatch: {$lt: value}}, { _id: 0 }) // filter element if property has, and only if property(array) property[allItems]  < value

db.[name].updateOne({ property1: value1 }, {$set: {property2: value2} }) // updating ONE only filtered (property1: value1) element to  property2: value2
db.[name].updateMany({ property1: value1 }, {$set: {property2: value2, property3: value3} }) // updating MANY only filtered (property1: value1) element to  property2: value2 and property3: value3

db.[name].replaceOne(
    { property1: value1 },
    { 
        property: value,
        property2: value2,
        property3: value3,
    }
) // replacement ONE/MANY filtered object to another (like new Constructor())

db.[name].deleteMany({ property1: {$gte: value1}, property1: {$lte: value2} }) // delete ONE/MANY filtered object within property1 >= value1 && property1 <= value2

// like pipe()
db.[name].bulkWrite(
  [
    { 
      insertOne: {
        "document": { property1: value, property2: value,  property3: value }
      }
    }
    { 
      deleteOne: {
        filter: { property: value }
      }
    }
    { 
      updateOne: {
        filter: { property: value },
        update: { $set: {property: value} },
      }
    }
    { 
      replaceOne: {
        filter: { property: value },
        replacement: { property: value, property2: value, property3: value },
      }
    }
  ]
)
