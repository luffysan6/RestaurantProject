
// Create , Update , Delete ,Read , Read All
// Admin - Create , Read , Update , Delete 
// User - Read 


export const CreateFood = async (req,res) => {

    try {

        const {name,description,category,price,isavaiable} = req.body;
        const file = req.files // multer.array() then req.files else multer.single then req.file

        // validating Data 
    if(!name || !description || !category || !price || !isavaiable){
            return res.status(400).json({
                success:false,
                message:"Kindly Fill all required Fields"
            })
    }

    console.log(file);


    res.send(req.body)
    


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error at Server"
        })
    }

}



