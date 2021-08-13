import { suite, test } from '@testdeck/mocha';
import chai from 'chai';
import { mock, instance } from 'ts-mockito';
import chaiHttp = require('chai-http');
import app from '../app'

chai.use(chaiHttp)

chai.should();
@suite class UserUnitTests {

    before() {
        
    }

    @test 'Get all users'() {
        return chai.request(app).get('/api/users')
            .then(res => {
                chai.expect(res.body).to.be.an('array')
            })
    }

}