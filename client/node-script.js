const fs = require('fs');
const path = require('path');

process.stdin.setEncoding('utf8')

process.stdin.on('data',
(folder) => {
    folder = folder.split('\n')[0]
    // process.stdout.write(data);
    
    const fileNames = fs.readdirSync(path.join(__dirname,'/public/images', folder), { encoding:'utf8'})
    let result = 'export default '
    fs.mkdirSync(path.join(__dirname,'src',folder))
    fs.writeFileSync(`src/${folder}/index.js`, result + JSON.stringify(fileNames))
}
)
