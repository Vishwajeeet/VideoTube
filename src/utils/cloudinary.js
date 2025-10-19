import {v2 as cloudinary} from "cloudinary";
import fs, { unlinkSync } from "fs";

 
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    }); 

    const uploadtoCloudinary = async (localFilePath) => {
        try {
            if (!localFilePath) return null;
            //upload to cloudinary
            const response = await cloudinary.uploader.upload(localFilePath,{
                resource_type : "auto"
            })
            console.log("Uploaded to cloudinary" , response.url)
                
            
        } catch (error) {
            fs,unlinkSync(localFilePath)
            return null;
        }
    }



  export {uploadtoCloudinary}