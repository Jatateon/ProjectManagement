import WebService from './WebService';

export default {
    async getDataFromFullUrl({ fullUrl }) {
        return await WebService.get(fullUrl);
    }
}