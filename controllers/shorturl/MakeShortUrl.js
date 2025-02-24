const generateShortId = require("../../Helpers/generateShortUrl")
const isUrlValid = require("../../Helpers/isUrlValide")
const ShortUrlSchema = require("../../modal/ShortUrlSchema")

const Makeshorturl = async (req , res)=>{
    const {url} = req.body
    if(!url){
    return res.status(400).send({error: "url is required!"})
    }
    if(!isUrlValid(url)){
     return res.status(400).send({error: "url is not valid!"})
      }
      const shorted = generateShortId(url)

      const exsitUrl = await ShortUrlSchema.findOneAndUpdate({url} , {$set:{shortID: shorted}}, {new: true})
      if(exsitUrl){
       return  res.status(200).send({
        message: "short url created successfully",
        longurl: exsitUrl.url,
        shortUrl: `localhost:8000/${exsitUrl.shortID}`
  
      })
     }
     const shortUrl = new ShortUrlSchema({
      url: url,
      shortID:shorted

     })
     shortUrl.save()

    res.status(200).send({
      message: "short url created successfully",
      longurl: shortUrl.url,
      shortUrl: `localhost:8000/${shortUrl.shortID}`

    })

 }
 module.exports = Makeshorturl