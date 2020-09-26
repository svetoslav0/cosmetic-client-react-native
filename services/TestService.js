import { METHODS } from '../constants/HTTP_METHODS.js';
import { Requester } from "../utils/Requester.js";

export class TestService {
    constructor() {
        this._requester = new Requester();
    }

    /**
     * @return {Promise<Object>}
     */
    async getTestData() {
        return await this._requester.sendRequest(
            '/',
            METHODS.GET
        );
    }
}
