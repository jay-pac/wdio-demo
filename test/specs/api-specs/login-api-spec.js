import request from 'supertest';
import { expect } from 'chai';

const apiUrl = 'https://automationexercise.com';
const endpoint = '/api/verifyLogin';

describe('POST verifyLogin API', () => {
    it('should return 200 response with valid login credentials', async () => {
        const response = await request(apiUrl)
            .post(endpoint)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                email: 'nickel.back@yahoo.com',
                password: 'test123',
            });

        // Check response status
        const responseBody  = JSON.parse((await response).text)

        expect(responseBody.responseCode).to.equal(200);
        expect(responseBody.message).to.equal('User exists!');
    });
});
