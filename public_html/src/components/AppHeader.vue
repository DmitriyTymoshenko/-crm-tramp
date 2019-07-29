<template>
    <div id="app">
    <v-app>
        <v-layout d-flex align-start/>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up primary white--text">
            <v-list d-flex row>
                <v-list v-for="(item , i) in menuItems" :key="`navdrawer${i}`">
                   <v-flex d-flex flex-row mt-2 ml-3 align-center justify-start row fill-height>
                            <v-icon v-html="item.icon" class="white--text" large basis></v-icon>
                            <v-list d-flex v-text="item.title" class="white--text title"></v-list>
                   </v-flex>
                </v-list>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark class="primary">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-flex justify-start>
                <v-toolbar-title v-text="'Quantum Project'"></v-toolbar-title>
            </v-flex>
            <v-flex fill-height>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn v-for="(item , i) in menuItems" flat :key="`menuitem${i}`" :to="item.route">
                        <v-icon left v-html="item.icon"></v-icon>{{item.title}}</v-btn>
                </v-toolbar-items>
            </v-flex>
            <v-flex d-flex xs3 align-center justify-space-around row v-for="item in selectLang" :key="`lang${item}`">
                <v-select

                        class="selected"
                        label="Lang"
                        prepend-icon="language"
                          v-html="item"
                ></v-select>
                <v-select class="select-admin"
                          flat
                            label="Admin"

                ></v-select>
            </v-flex>
        </v-toolbar>

            <!--<v-flex d-flex row>-->
                <!--<v-flex d-flex xs7 align-start justify-start ml-5 >-->
                    <!--<v-text-field-->
                            <!--append-icon="search"-->
                            <!--label="Search"-->
                            <!--single-line-->
                            <!--hide-details-->
                    <!--&gt;</v-text-field>-->
                <!--</v-flex>-->
                <!--<v-flex d-flex xs5>-->
                    <!--<v-btn class="deep-orange darken-2">Save</v-btn>-->
                    <!--<v-btn class="light-green">Clear</v-btn>-->
                <!--</v-flex>-->
            <!--</v-flex>-->
        <!--<v-data-table-->
                <!--:headers="headers"-->
                <!--:items="desserts"-->
                <!--:items-per-page="5"-->
                <!--class="elevation-1"-->
        <!--&gt;</v-data-table>-->
        <!--<v-flex d-flex xs2>-->
        <!--<v-btn class="yellow grey&#45;&#45;text">Add new project</v-btn>-->
        <!--</v-flex>-->
    </v-app>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                drawer: false ,

            }
        },
       computed: {
           menuItems(){
               return[
                   {
                       icon : "visibility",
                       title: "Home",
                       route: '/Home',
                   },
                   {
                       icon : "visibility",
                       title: "Search",
                       route: '/Search',
                   },
                   {
                       icon : "visibility",
                       title: "Borkers",
                       route: '/Brokers',
                   },
                   {
                       icon : "visibility",
                       title: "Settings",
                       route: '/Settings',
                   },
                   {
                       icon : "visibility",
                       title: "Users",
                       route: '/Users',
                   },
               ]
           },
           selectLang(){
               return [
                    "EN", "RU"
               ]
           },
       }
    }
    // new Vue({
    //     el: '#app',
    //     vuetify: new Vuetify(),
    //     data: () => ({
    //         items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    //     }),
    // })
</script>

<style scoped>
    .selected {
        padding-right: 5%;
    }

</style>