function readJSON(filename) {
    if(!fs.existsSync(filename))
        return undefined;
    var text = fs.readFileSync(filename, { encoding : 'utf-8' });
    if(!text)
        return undefined;
    try { 
        return JSON.parse(text); 
    } catch(ex) { 
        console.log("Error parsing file:",filename); 
        console.log(ex); 
        console.log('Offending content follows:',text); 
    }
    return undefined;
}

function writeJSON(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data, null, '\t'));
}
