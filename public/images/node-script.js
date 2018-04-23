const fs = require('fs');
const path = require('path');

const fileNames = fs.readdirSync(path.join(__dirname,'/ads_Flyers'), { encoding:'utf8'})
let result = 'export default [\n'
fileNames.forEach( file => 
    result += `'${file}'` + ',\n'
)
result+=']\n'

fs.writeFileSync('index.js', result)