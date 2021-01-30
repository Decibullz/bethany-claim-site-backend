const Item = require('../models/item')


async function getAllItems(req,res){
    const items= await Item.find({}).sort('createdAt')
    res.json(items)
}

async function saveItem (req, res){
    const item = new Item({name: req.body.name, image: req.body.image, description: req.body.description});
    
    const results = await item.save();

    res.json(results)
 }



 async function deleteItem(req, res ){
    const itemId = req.body.itemId;
    
    const results = await item.deleteOne({_id: itemId});
 
    res.json(results)
 }



 module.exports = {
    getAllItems,
    saveItem,
    // updateItem,
    // getItemById,
    deleteItem
  }