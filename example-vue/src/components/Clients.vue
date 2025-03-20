<template>
        <DataTable
                :value="clients"
                :lazy="true"
                :loading="dataStore.loading"
                :paginator="true"
                :rows="perpage"
                :rowsPerPageOptions="[2, 5, 10]"
                :totalRecords=clients_total
                @page="onPageChange"
                responsive-layout="scroll"
                :laading="true"
                :first="offset"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}"
                >
                <Column field="id" header="№"/>
                <Column field="full_name" header="Имя"/>
        </DataTable>
</template>

<script>
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import {useDataStore} from '@/stores/dataStore';

export default {
        name: "Clients",
        components: {DataTable, Column},
        data() {
                return {
                        dataStore: useDataStore(),
                        perpage: 5,
                        offset: 0,
                }
        },
        computed: {
                clients() {
                       return this.dataStore.clients; 
                },
                clients_total() {
                        return this.dataStore.clients_total;
                }
        },
        mounted() {
                console.log('Clients componnet MOUNTED!');
                this.dataStore.get_clients();
                this.dataStore.get_clients_total();
                console.log('Clients=', this.clients);
                console.log('Clients_total', this.clients_total)
        },
        methods: {
                onPageChange(event) {
                        this.offset = event.first;
                        this.perpage = event.rows;
                        this.dataStore.get_clients(this.offset / this.perpage, this.perpage);
                }
        }
}
</script>
<style scoped>
</style>