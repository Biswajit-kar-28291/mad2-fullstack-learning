var appid = "9162a6fdadc8d15c0f94101dffe4c312";

Vue.component("city-card", {
  props: ["c"],
  data:{
    info:null
  },

  template: `
    <div class="card shadow-sm h-100">
      <div class="card-body">
        <h5 class="card-title">{{ c.name }}</h5>

        <div v-if="c.loading" class="alert alert-info py-2">
          Loading...
        </div>

        <div v-else-if="!c.err">
          <p class="mb-1"><strong>Current temp:</strong> {{ c.temp }} °C</p>
          <p class="mb-1"><strong>Min temp:</strong> {{ c.temp_min }} °C</p>
          <p class="mb-1"><strong>Max temp:</strong> {{ c.temp_max }} °C</p>
          <p class="mb-1"><strong>Weather:</strong> {{ c.description }}</p>
          <p class="mb-3"><strong>Last updated:</strong> {{ c.lastUpdate }}</p>
        </div>

        <div v-else class="alert alert-danger py-2">
          {{ c.errmsg }}
        </div>

        <button class="btn btn-primary btn-sm me-2" @click="updateWeather">
          Update
        </button>
        <button class="btn btn-danger btn-sm" @click="removeCity">
          Delete
        </button>
      </div>
    </div>
  `,

  created: function () {
    Vue.set(this.c, "temp", "NA");
    Vue.set(this.c, "temp_min", "NA");
    Vue.set(this.c, "temp_max", "NA");
    Vue.set(this.c, "description", "NA");
    Vue.set(this.c, "lastUpdate", "Not updated yet");
    Vue.set(this.c, "err", false);
    Vue.set(this.c, "errmsg", "");
    Vue.set(this.c, "loading", false);

    this.updateWeather();
  },

  methods: {
    async updateWeather() {
      if (!appid || appid === "PUT_YOUR_REAL_API_KEY_HERE") {
        this.c.err = true;
        this.c.errmsg = "Please put your real OpenWeather API key in weather1.js";
        return;
      }

      this.c.loading = true;
      this.c.err = false;
      this.c.errmsg = "";

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(this.c.name)}&appid=${appid}&units=metric`;

        const resp = await fetch(url);
        const data = await resp.json();

        if (!resp.ok) {
          this.c.err = true;
          this.c.errmsg = data.message || "Could not retrieve weather";
          this.c.loading = false;
          return;
        }

        this.c.temp = data.main.temp;
        this.c.temp_min = data.main.temp_min;
        this.c.temp_max = data.main.temp_max;
        this.c.description = data.weather[0].description;
        this.c.lastUpdate = new Date().toLocaleString();
        this.c.err = false;
        this.c.errmsg = "";
      } catch (error) {
        this.c.err = true;
        this.c.errmsg = "Network error";
      }

      this.c.loading = false;
    },

    removeCity() {
      this.$emit("remove-city", this.c.name);
    }
  }
});

new Vue({
  el: "#app",

  data: {
    newCity: "",
    cities: [
      { name: "Kolkata" },
      { name: "London" }
    ]
  },

  methods: {
    addCity() {
      var cityName = this.newCity.trim();

      if (!cityName) return;

      var exists = this.cities.some(function (city) {
        return city.name.toLowerCase() === cityName.toLowerCase();
      });

      if (exists) {
        alert("City already added");
        this.newCity = "";
        return;
      }

      this.cities.push({ name: cityName });
      this.newCity = "";
    },

    removeCity(cityName) {
      this.cities = this.cities.filter(function (city) {
        return city.name !== cityName;
      });
    }
  }
});