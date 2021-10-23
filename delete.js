const {Article} = require('./models')

Article.destroy({
    where: {
        approved: false
    }
}).then (() => console.log('berhasil delet!'))