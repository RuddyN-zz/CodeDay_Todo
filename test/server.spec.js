const request = require('supertest');
const app = require('../server');
const assert = require('assert');
var fs = require('fs');


const getcount = () => {
    let count = 0;
    fs.readFile('./Database/Todo.json', 'utf8', function(err, data) {
        count = data.items.lenght();
    })
    return count;
};

describe('Server:', () => {

    it('should read todo list', (done) => {
        request(app)
        .get('/api/todo')
        .expect(200, done);
    })
   
    it('should delete todo item in file', (done) => {
    })

    it('should add todo item', (done) => {
    })
})