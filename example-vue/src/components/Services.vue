<template>
        
    <DataTable
            :value="services"
            :lazy="true"
            :loading="dataStore.loading"
            :paginator="true"
            :rows="perpage"
            :rowsPerPageOptions="[2, 5, 10]"
            :totalRecords=services_total
            @page="onPageChange"
            responsive-layout="scroll"
            :laading="true"
            :first="offset"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}"
            >
            <template #header>
                <div class="text-end">
                        <Button type="button" label="Добавить услугу" icon="pi pi-users" @click="this.$router.push('/createService')" style="width: 30px; height: 30px; font-size: 2rem"/>
                </div>
            </template>
            <Column field="id" header="№"/>
            <Column field="name" header="Имя"/>
            <Column field="price" header="Цена"/>
            <!-- <Column field="picture_url" header="Изображение"></Column> -->
            <Column header="Изображение">
                <template #body="{data}">
                        <div style="display: flex; align-items: center;">
                                <img :src="data.picture_url" :alt="data.name" v-if="data.picture_url" style="max-width: 100px; max-height: 100px; object-fit: contain;">
                                <span v-else>Нет изображения</span>
                        </div>
                </template>
            </Column>
    </DataTable>
</template>


<script>
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import {useDataStore} from '@/stores/dataStore';

export default {
    name: "Services",
    components: {DataTable, Column, Button},
    data() {
            return {
                    dataStore: useDataStore(),
                    perpage: 5,
                    offset: 0,
            }
    },
    computed: {
            services() {
                   return this.dataStore.services; 
            },
            services_total() {
                    return this.dataStore.services_total;
            }
    },
    mounted() {
            this.dataStore.get_services();
            this.dataStore.get_services_total();
            console.log('Services=', this.services);
            console.log('Services_total', this.services_total)
    },
    methods: {
            onPageChange(event) {
                    this.offset = event.first;
                    this.perpage = event.rows;
                    this.dataStore.get_services(this.offset / this.perpage, this.perpage);
            }
    }
}
</script>
<style scoped>
</style>