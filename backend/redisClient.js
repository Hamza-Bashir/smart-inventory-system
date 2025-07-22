const {createClient} = require("redis")

const redisClient = createClient({})


redisClient.on("error", (err) => {
    console.log("Redis error: ", err)
})


redisClient.connect()
.then(()=>{
    console.log("Redis connected successfully")
})


module.exports = redisClient

