import WebService from './WebService';

const url = 'https://qsefip.finanzasoaxaca.gob.mx/UISF/public/api/';


export default {

    async getDataFromFullUrl({ params }) {
        return await WebService.get(url + 'projects' + (params !== '' ? params : ''));
    },

    async postProject({ project }) {
		const response = await WebService.post(url + 'storeProject', {
			name: project.name,
			key: project.key,
			objective: project.objective,
			progress: project.progress,
		});
        console.log("TCL: postProject -> project", response);
		return {
			response
		};
	},
}