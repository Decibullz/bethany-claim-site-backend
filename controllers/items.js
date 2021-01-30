const Item = require('../models/item')


async function getAllItems(req,res){
    const items= await Item.find({}).sort('name')
    res.json({results:{items}})
}

async function saveItem (req, res){
    const item = new Item({name: req.body.name, image: req.body.image, description: req.body.description});
    
    const results = await item.save();

    res.json(results)
 }

 async function updateItem(req, res ){
   const itemId = req.body.itemId;
   const itemName = req.body.itemName;
   const itemImage = req.body.itemImage;
   const itemDescription = req.body.itemDescription;

   const results = await Item.updateOne({_id: itemId}, {name: itemName}, {image:itemImage},{description:itemDescription})

   console.log(req.body)

   res.json(results)
}


async function deleteItem(req, res ){
   const itemId = req.body.itemId;
   const results = await Item.deleteOne({_id: itemId});
   res.json(results)
}

 async function getItemById(req, res) {

   const results = await Item.findOne({_id:req.params.id});

  res.json(results)

}



 module.exports = {
    getAllItems,
    saveItem,
    updateItem,
    getItemById,
    deleteItem
  }