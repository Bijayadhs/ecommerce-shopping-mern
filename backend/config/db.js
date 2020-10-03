import mongoose from 'mongoose';

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://bijaya123:bijaya123@contact-keeper.mzkjx.mongodb.net/ecommerce?retryWrites=true&w=majority',{
            useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(err){
        console.error(`Error: ${err.message}.red.underline.bold`)
        process.exit(1)
    }
}
export default connectDB