const fs = require('fs');
const path = require('path');

process.stdin.setEncoding('utf8')
// console.log('type the name of the folder you would like to sync:')

const folders = fs.readdirSync(path.join(__dirname,'public','images'), { encoding:'utf8'}).filter( name => !name.includes('.'))
// console.log(folders)

folders.forEach(
(folder) => {
    folder = folder.split('\n')[0]
    // process.stdout.write(data);
    let fileNames;
    try{
        fileNames = fs.readdirSync(path.join(__dirname,'public','images', folder), { encoding:'utf8'})
        
    }catch(error){
        console.log('icorrect directory name')
    }
    if(fileNames){
        let folderExists = false
        let result = 'export default '
        try{
            fs.mkdirSync(path.join(__dirname,'src',folder))
            folderExists = true
        }catch(error){
            if(error.code === 'EEXIST'){
                folderExists = true
            }
        }
        if(folderExists){
            fs.writeFileSync(`src/${folder}/index.js`, result + JSON.stringify(fileNames))
        }
    }
}
)
