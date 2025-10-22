const asyncHandler = (func) => (req , res, next) => {
    return (req, res , next) => {
        Promise.resolve(func(req, res , next)).catch((error) => next(error))
    }
}




// this is the try-catch method
// const asyncHandler = (func) => (req , res, next) => {
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message || "Internal Server Error"
//         })    }
// }


export {asyncHandler}