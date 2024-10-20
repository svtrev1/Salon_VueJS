import { defineStore } from 'pinia'
import axios from 'axios'
const backendUrl = import.meta.env.VITE_BACKEND_URL

export const useDataStore = defineStore('data', {
    state: () => ({
        clients: [],
        clients_total: null,
        cosmetologs: [],
        cosmetologs_total: null,
        sessions: [],
        sessions_total: null,
        items: [],
        errorMessage: "",
    }),
    actions: {
        async get_clients(page = 0, perpage = 5) {
            this.errorMessage = "";
            try {
                const response = await axios.get(backendUrl + '/clients', {
                    params: {
                        page: page,
                        perpage: perpage
                    }
                });
                this.clients = response.data;
            } catch (error) {
                if (error.response) {
                    this.errorMessage = error.response.data.message;
                } else if (error.request) {
                    this.errorMessage = error.message;
                }
                console.log(error);
            }
        },
        async get_clients_total() {
            this.errorMessage = "";
            try {
                const response = await axios.get(backendUrl + '/clients_total');
                this.clients_total = response.data;
            } catch (error) {
                if (error.response) {
                    this.errorMessage = error.response.data.message;
                } else if (error.request) {
                    this.errorMessage = error.message;
                }
                console.log(error);
            }
        },

        async get_cosmetologs(page = 0, perpage = 5) {
            this.errorMessage = "";
            try {
                const response = await axios.get(backendUrl + '/cosmetologs', {
                    params: {
                        page: page,
                        perpage: perpage
                    }
                });
                this.cosmetologs = response.data;
            } catch (error) {
                if (error.response) {
                    this.errorMessage = error.response.data.message;
                } else if (error.request) {
                    this.errorMessage = error.message;
                }
                console.log(error);
            }
        },
        async get_cosmetologs_total() {
            this.errorMessage = "";
            try {
                const response = await axios.get(backendUrl + '/cosmetologs_total');
                this.cosmetologs_total = response.data;
            } catch (error) {
                if (error.response) {
                    this.errorMessage = error.response.data.message;
                } else if (error.request) {
                    this.errorMessage = error.message;
                }
                console.log(error);
            }
        },

        async get_sessions(page = 0, perpage = 5) {
            this.errorMessage = "";
            try {
                const response = await axios.get(backendUrl + '/sessions', {
                    params: {
                        page: page,
                        perpage: perpage
                    }
                });
                this.sessions = response.data;
            } catch (error) {
                if (error.response) {
                    this.errorMessage = error.response.data.message;
                } else if (error.request) {
                    this.errorMessage = error.message;
                }
                console.log(error);
            }
        },
        async get_sessions_total() {
            this.errorMessage = "";
            try {
                const response = await axios.get(backendUrl + '/sessions_total');
                this.sessions_total = response.data;
            } catch (error) {
                if (error.response) {
                    this.errorMessage = error.response.data.message;
                } else if (error.request) {
                    this.errorMessage = error.message;
                }
                console.log(error);
            }
        },
    },
});