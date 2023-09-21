import { expect } from "chai";
import request from "supertest";

const apiUrl = 'https://automationexercise.com';

describe('GET All Brands List' , ()=>{
    it('should return a 200 response from endpoint', async()=>{
        const response = await request(apiUrl)
            .get('/api/brandsList');

        const responseBody = JSON.parse(response.text);
        expect(responseBody.responseCode).to.equal(200);
        expect(responseBody.brands).to.not.have.lengthOf(0);
    });

});