const {Article} = require('./models')

const query = {
    where: {
        id: 1
    }
}

Article.update({
    approved: false
}, query).then(() => {
    console.log("Artikel behasil diupdate")
    process.exit()
}).catch(err => {
    console.log(err, 'return error')
})