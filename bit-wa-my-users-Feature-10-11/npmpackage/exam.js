var figlet = require('figlet');
 
const trans =() =>{
    return figlet.textSync('Boo!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
})
}
module.exports = trans;
