exports.farm = (req, res, next) => {
    res.render('virtual-farm', {
        pageTitle : 'Smart Virtual Farm',
        path : '/virtual-farm'
    })
}