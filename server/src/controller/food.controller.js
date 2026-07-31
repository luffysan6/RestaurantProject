
// Create , Update , Delete ,Read , Read All


export const CreateFood = async (req,res) => {

    try {

        const {name,description,category,price,isavaiable} = req.body;

    if(!name || !description || !category || !price || !isavaiable){
            return res.status(400).json({
                success:false,
                message:"Kindly Fill all required Fields"
            })
    }
    


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error at Server"
        })
    }

}



