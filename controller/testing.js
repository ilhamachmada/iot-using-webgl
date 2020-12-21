exports.testing = (req,res,next) => {
    res.render('testing', {
        pageTitle : 'Testing',
        path : '/testing'
    })
}