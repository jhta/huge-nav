const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../app');

chai.use(chaiHttp);


describe('Request tests', () => {
  it('it should get index page with status 200 ', () => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      })
  });

  it('it should get JSON file', () => {
    chai.request(server)
      .get('/api/nav.json')
      .end((err, res) => {
        console.log("==============================")
        console.log(res);
        console.log("==============================")
        res.should.have.status(200);
        res.to.be.json;
        done();
      })
  })
});
