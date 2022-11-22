const postmanToOpenApi = require('postman-to-openapi')

const postmanCollection = process.argv.slice()[2]||  './k8s.json';
const outputFile = process.argv.slice()[3] || './collection.yml';
console.log(postmanCollection);
console.log(outputFile);

// Promise callback style
postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
    .then(result => {
        console.log(`OpenAPI specs: ${result}`)
    })
    .catch(err => {
        console.log(err)
    })
