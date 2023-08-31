import request from 'supertest';
import { expect } from 'chai';

const apiUrl = 'https://automationexercise.com';

describe('GET /getUserDetailByEmail', () => {
    it('should return user details for a valid email', async () => {
        const email = 'nickel.back@yahoo.com';
        const response = await request(apiUrl)
            .get(`/api/getUserDetailByEmail?email=${email}`);
        
        // Check response status
        expect(response.status).to.equal(200);
        
        // Parse response body
        const responseBody = JSON.parse(response.text);
        
        // Check response body
        expect(responseBody.responseCode).to.equal(200);
        expect(responseBody.user).to.be.an('object');
        expect(responseBody.user.email).to.equal(email);
        expect(responseBody.user.name).to.equal('Jay');
        expect(responseBody.user.first_name).to.equal('Nick');
        expect(responseBody.user.last_name).to.equal('Back');
        expect(responseBody.user.address1).to.equal('2600 Benjamin Franklin Pkwy');
        expect(responseBody.user.city).to.equal('Philadelphia');
        expect(responseBody.user.state).to.equal('PA');
        expect(responseBody.user.country).to.equal('United States');
        expect(responseBody.user.zipcode).to.equal('19130');
    });
});
