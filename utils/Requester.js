import { METHODS } from '../constants/HTTP_METHODS.js';
import { CONTENT_TYPES } from "../constants/CONTENT_TYPES.js";
import { config } from "../config/config.js";

export class Requester {

    constructor() {
        this._buildDomain();
    }

    /**
     * @param {string} path
     * @param {string} httpMethod
     * @param {Object} headers
     * @param {Object} body
     * @return {Promise<Object>}
     */
    async sendRequest(path, httpMethod, headers = {}, body = {}) {
        switch (httpMethod) {
            case METHODS.GET:
                return await this._sendGetRequest(path);

            case METHODS.POST:
                return await this._sendPostRequest(path, headers, body);

            case METHODS.PATCH:
            case METHODS.PUT:
            case METHODS.DELETE:
                throw new Error('Method not implemented in Requester.js');

            default:
                throw new Error(`Cannot handle HTTP method ${httpMethod}`);
        }
    }

    /**
     * @param {string} path
     * @return {Promise<Object>}
     * @private
     */
    async _sendGetRequest(path) {
        const url = this._getUrl(path);

        console.log(url);

        const response = await fetch(url);
        return await response.json();
    }

    /**
     * @param {string} path
     * @param {object} headers
     * @param {object} body
     * @return {Promise<Object>}
     * @private
     */
    async _sendPostRequest(path, headers, body) {
        const url = this._getUrl(path);

        const response = await fetch(url, {
            method: METHODS.POST,
            headers: Object.assign({
                    Accept: CONTENT_TYPES.APPLICATION_JSON,
                    'Content-Type': CONTENT_TYPES.APPLICATION_JSON
                },
                headers
            ),
            body: JSON.stringify(body)
        });

        return await response.json();
    }


    /**
     * @private
     */
    _buildDomain() {
        const { protocol, host, port } = config;
        this._domain = `${protocol}://${host}:${port}`;
    }

    /**
     * @param {string} path
     * @return {string}
     * @private
     */
    _getUrl(path) {
        path = path.replace(/^\/+/g, '');
        return `${this._domain}/${path}`;
    }
}
