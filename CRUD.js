messum-akmal@messum-akmal-Lenovo-IdeaPad-S340-15IWL:~$ db.tours.find()
> ^C
messum-akmal@messum-akmal-Lenovo-IdeaPad-S340-15IWL:~$ mongoosh
Command 'mongoosh' not found, did you mean:
  command 'mongoose' from deb mongoose (1:7.3.1+dfsg-2)
Try: sudo apt install <deb name>
messum-akmal@messum-akmal-Lenovo-IdeaPad-S340-15IWL:~$ mongosh
Current Mongosh Log ID:	667412b4fb5beb76372202d7
Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5
Using MongoDB:		7.0.9
Using Mongosh:		2.2.5
mongosh 2.2.6 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-06-20T12:34:08.201+05:00: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
   2024-06-20T12:34:08.841+05:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> mongosh
ReferenceError: mongosh is not defined
test> 
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
test> 
messum-akmal@messum-akmal-Lenovo-IdeaPad-S340-15IWL:~$ mongosh
Current Mongosh Log ID:	66741302745669fffe2202d7
Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5
Using MongoDB:		7.0.9
Using Mongosh:		2.2.5
mongosh 2.2.9 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-06-20T12:34:08.201+05:00: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
   2024-06-20T12:34:08.841+05:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> use natours-test
switched to db natours-test
natours-test> db.tours.insertMany({name:'Messum'})
MongoInvalidArgumentError: Argument "docs" must be an array of documents
natours-test> db.tours.insertMany({name:'Messum'})
MongoInvalidArgumentError: Argument "docs" must be an array of documents
natours-test> db.tours.insertMany({name:'Messum'})
MongoInvalidArgumentError: Argument "docs" must be an array of documents
natours-test> db.tours.insertOne({})
{
  acknowledged: true,
  insertedId: ObjectId('667418a8745669fffe2202d8')
}
natours-test> db.tours.find()
[
  {
    _id: ObjectId('6668374e6af33012002202d8'),
    name: 'The Forest Hiker',
    price: 297,
    rating: 4.7
  },
  {
    _id: ObjectId('666851bc0febd8d2432202d8'),
    name: 'The Sea Explorer',
    price: 497,
    rating: 4.8
  },
  {
    _id: ObjectId('666851bc0febd8d2432202d9'),
    name: 'The Snow Adventurer',
    price: 997,
    rating: 4.9
  },
  { _id: ObjectId('667418a8745669fffe2202d8') }
]
natours-test> db.tours.find({name:"The Forest Hiker"})
[
  {
    _id: ObjectId('6668374e6af33012002202d8'),
    name: 'The Forest Hiker',
    price: 297,
    rating: 4.7
  }
]
natours-test> db.tours.find({price:{$lte:500}})
[
  {
    _id: ObjectId('6668374e6af33012002202d8'),
    name: 'The Forest Hiker',
    price: 297,
    rating: 4.7
  },
  {
    _id: ObjectId('666851bc0febd8d2432202d8'),
    name: 'The Sea Explorer',
    price: 497,
    rating: 4.8
  }
]
natours-test> db.tours.find({"price":{$lt:300},"rating":4.8})

natours-test> db.tours.find({price:{$lt:300},rating:4.8})

natours-test> db.tours.find({"price":{$lt:300},"rating":4.7})
[
  {
    _id: ObjectId('6668374e6af33012002202d8'),
    name: 'The Forest Hiker',
    price: 297,
    rating: 4.7
  }
]
natours-test> db.tours.updateOne({name:'The Sea Explorer'}, {$set:{price:597}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
natours-test> db.tours.find()
[
  {
    _id: ObjectId('6668374e6af33012002202d8'),
    name: 'The Forest Hiker',
    price: 297,
    rating: 4.7
  },
  {
    _id: ObjectId('666851bc0febd8d2432202d8'),
    name: 'The Sea Explorer',
    price: 597,
    rating: 4.8
  },
  {
    _id: ObjectId('666851bc0febd8d2432202d9'),
    name: 'The Snow Adventurer',
    price: 997,
    rating: 4.9
  },
  { _id: ObjectId('667418a8745669fffe2202d8') }
]
natours-test> db.tours.deleteOne({id:ObjectId('667418a8745669fffe2202d8')}
... 
natours-test> db.tours.deleteOne({id:ObjectId('667418a8745669fffe2202d8')}
... db.tours.find()
Uncaught:
SyntaxError: Unexpected token, expected "," (2:0)

  1 | db.tours.deleteOne({id:ObjectId('667418a8745669fffe2202d8')}
> 2 | db.tours.find()
    | ^
  3 |

natours-test> db.tours.find()
[
  {
    _id: ObjectId('6668374e6af33012002202d8'),
    name: 'The Forest Hiker',
    price: 297,
    rating: 4.7
  },
  {
    _id: ObjectId('666851bc0febd8d2432202d8'),
    name: 'The Sea Explorer',
    price: 597,
    rating: 4.8
  },
  {
    _id: ObjectId('666851bc0febd8d2432202d9'),
    name: 'The Snow Adventurer',
    price: 997,
    rating: 4.9
  },
  { _id: ObjectId('667418a8745669fffe2202d8') }
]
natours-test> db.tours.deleteOne({id:667418a8745669fffe2202d8}
Uncaught:
SyntaxError: Identifier directly after number. (1:29)

> 1 | db.tours.deleteOne({id:667418a8745669fffe2202d8}
    |                              ^
  2 |

natours-test> db.tours.deleteMany({id:667418a8745669fffe2202d8}
Uncaught:
SyntaxError: Identifier directly after number. (1:30)

> 1 | db.tours.deleteMany({id:667418a8745669fffe2202d8}
    |                               ^
  2 |

natours-test> db.tours.deleteMany({id: ObjectId('667418a8745669fffe2202d8')})
{ acknowledged: true, deletedCount: 0 }
natours-test> db.tours.find()
[
  {
    _id: ObjectId('6668374e6af33012002202d8'),
    name: 'The Forest Hiker',
    price: 297,
    rating: 4.7
  },
  {
    _id: ObjectId('666851bc0febd8d2432202d8'),
    name: 'The Sea Explorer',
    price: 597,
    rating: 4.8
  },
  {
    _id: ObjectId('666851bc0febd8d2432202d9'),
    name: 'The Snow Adventurer',
    price: 997,
    rating: 4.9
  },
  { _id: ObjectId('667418a8745669fffe2202d8') }
]
natours-test> 

