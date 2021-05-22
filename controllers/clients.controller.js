const Client = require('../models/Client');

storeClient = async (req,res,next)=>{
    const client = new Client(req.body);
    try {
        await client.save()
        res.status(201).json('Client Created')   
    } catch (error) {
        console.log(error);
        next();
    }
    
}

getAllClients = async (req,res,next)=>{
    try {
        const clients = await Client.find({});
        res.status(200).json(clients)    
    } catch (error) {
        console.log(error);
        next();
    }
}

getOneClient = async (req,res,next)=>{
    try {
        const client = await Client.findById(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        console.log(error)
        next()
    }
}

getClientByQuery = async(req,res,next)=>{
    try {
       const client = await Client.find(req.query)
       res.status(200).json(client)     


    } catch (error) {
        console.log(error)
    }
}

updateOneClient = async(req,res,next)=>{
    try {
        const client = await Client.findOneAndUpdate({_id: req.params.id},req.body,{
            new:true,
        })
        res.status(201).json(client);        
    } catch (error) {
        console.log(error)
        next();
    }
}

deleteOneClient = async(req,res,next)=>{
    try {
        await Client.findOneAndDelete({_id:req.params.id})
        res.status(200).json({message:'Client Deleted'})
        
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
 getAllClients,
 getOneClient,
 getClientByQuery,
 storeClient,
 updateOneClient,
 deleteOneClient
    
};
