<template>
        <DataTable
                :value="cosmetologs"
                :lazy="true"
                :loading="dataStore.loading"
                :paginator="true"
                :rows="perpage"
                :rowsPerPageOptions="[2, 5, 10]"
                :totalRecords=cosmetologs_total
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
        name: "Cosmetologs",
        components: {DataTable, Column},
        data() {
                return {
                        dataStore: useDataStore(),
                        perpage: 5,
                        offset: 0,
                }
        },
        computed: {
                cosmetologs() {
                       return this.dataStore.cosmetologs; 
                },
                cosmetologs_total() {
                        return this.dataStore.cosmetologs_total;
                }
        },
        mounted() {
                console.log('Cosmetologs componnet MOUNTED!');
                this.dataStore.get_cosmetologs();
                this.dataStore.get_cosmetologs_total();
                console.log('Cosmetologs=', this.cosmetologs);
                console.log('Cosmetologs_total', this.cosmetologs_total)
        },
        methods: {
                onPageChange(event) {
                        this.offset = event.first;
                        this.perpage = event.rows;
                        this.dataStore.get_cosmetologs(this.offset / this.perpage, this.perpage);
                }
        }
}
</script>
<style scoped>
</style>