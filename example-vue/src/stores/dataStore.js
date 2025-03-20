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
        services: [],
        services_total: null,
        items: [],
        errorMessage: "",
        errorCode: "",
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
        async get_services(page = 0, perpage = 5) {
            this.errorMessage = "";
            try {
                const response = await axios.get(backendUrl + '/services', {
                    params: {
                        page: page,
                        perpage: perpage
                    }
                });
                this.services = response.data;
            } catch (error) {
                if (error.response) {
                    this.errorMessage = error.response.data.message;
                } else if (error.request) {
                    this.errorMessage = error.message;
                }
                console.log(error);
            }
        },
        async get_services_total() {
            this.errorMessage = "";
            try {
                const response = await axios.get(backendUrl + '/services_total');
                this.services_total = response.data;
            } catch (error) {
                if (error.response) {
                    this.errorMessage = error.response.data.message;
                } else if (error.request) {
                    this.errorMessage = error.message;
                }
                console.log(error);
            }
        },

        async create_service(formData) {
            this.errorMessage = "";
            try {
                const response = await axios.post(backendUrl + '/service', formData, {
                        headers: {
                            'Content-Type': 'multiple/form-data',
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        },
                    }
                );
                this.errorCode = response.data.code;
                this.errorMessage = response.data.message;
            } catch (error) {
                if (error.response) {
                    this.errorCode = 11;
                    this.errorMessage = error.response.data.message;
                    console.log(error);
                } else if (error.request) {
                    this.errorCode = 12;
                    this.errorMessage = error.message;
                    console.log(error);
                }
                else {
                    this.errorCode = 13;
                    console.log(error);
                }
            }
        },
         
    },
});