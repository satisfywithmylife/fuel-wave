const fs = require('fs')

export function iter_file(file_name: string) {
    const lines = fs.readFileSync(file_name, 'utf-8').split('\n');
    return lines
} 

export function get_file(file_name: string){
    const content = fs.readFileSync(file_name, 'utf-8')
    return content
}