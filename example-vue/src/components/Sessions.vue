<template>
    <DataTable
            :value="sessions"
            :lazy="true"
            :loading="dataStore.loading"
            :paginator="true"
            :rows="perpage"
            :rowsPerPageOptions="[2, 5, 10]"
            :totalRecords=sessions_total
            @page="onPageChange"
            responsive-layout="scroll"
            :laading="true"
            :first="offset"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}"
    >

            <Column field="id" header="№"/>
            <Column field="client.full_name" header="Клиент"/>
            <Column field="cosmetologist.full_name" header="Косметолог"/>
            <Column field="start_datetime" header="Начало"/>
            <Column field="end_datetime" header="Конец"/>
    </DataTable>
</template>

<script>
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import {useDataStore} from '@/stores/dataStore';

export default {
    name: "Sessions",
    components: {DataTable, Column},
    data() {
            return {
                    dataStore: useDataStore(),
                    perpage: 5,
                    offset: 0,
            }
    },
    computed: {
            sessions() {
            
                   return this.dataStore.sessions; 
                   
            },
            sessions_total() {
                    return this.dataStore.sessions_total;
            }
    },
    mounted() {
            console.log('sessions componnet MOUNTED!');
            this.dataStore.get_sessions();
            this.dataStore.get_sessions_total();
            console.log('sessions=', this.sessions);
            console.log('sessions_total', this.sessions_total);
    },
    methods: {
            onPageChange(event) {
                    this.offset = event.first;
                    this.perpage = event.rows;
                    this.dataStore.get_sessions(this.offset / this.perpage, this.perpage);
            }
    }
}
</script>
<style scoped>
</style>