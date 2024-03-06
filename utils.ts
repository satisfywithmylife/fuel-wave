const fs = require('fs')

function iter_file(file_name: string) {
    const lines = fs.readFileSync(file_name, 'utf-8').split('\n');
    return lines
} 