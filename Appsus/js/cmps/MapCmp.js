import MapService from '../places/MapService.js' 

export default {
    template: `
        <section>
        <input v-model="newLocation" type="text" @keyup.enter="searchSubmited" placeholder="search new location">
            <div id="map"></div>
        </section>
    `,
    data() {
        return {
            newLocation: '',
        }
    },
    methods: {
        searchSubmited() {
            MapService.updateLocation(this.newLocation)
        }
    },
    props: {
        searchValue: String,
    },
    created() {
        MapService.getDevicePosition()
    }
}