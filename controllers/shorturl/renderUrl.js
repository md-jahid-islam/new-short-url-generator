const ShortUrlSchema = require("../../modal/ShortUrlSchema");

const renderUrl = async (req , res)=>{
    const {shortID} = req.params.shortID;

    const exsitUrl = await ShortUrlSchema.findOne({shortID})

    if(!exsitUrl){
      return res.status(404).send('page not found!')
    }
 
 res.renderUrl(exsitUrl.url)
 }

 module.exports = renderUrl;