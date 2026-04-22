new Vue({
      el: "#app",
      data: {
        name: "",
        email: "",
        error: "",
        success: "",
        savedName: "",
        savedEmail: ""
      },
      methods: {
        submitForm(event) {
          event.preventDefault();
          this.error = "";
          this.success = "";

          if (this.name.trim() === "" || this.email.trim() === "") {
            this.error = "All fields are required";
            return;
          }

          if (!this.email.includes("@")) {
            this.error = "Enter a valid email";
            return;
          }

          localStorage.setItem("name", this.name);
          localStorage.setItem("email", this.email);

          this.savedName = this.name;
          this.savedEmail = this.email;

          this.success = "Data saved successfully";
        },
        loadData() {
          this.savedName = localStorage.getItem("name") || "";
          this.savedEmail = localStorage.getItem("email") || "";
        }
      },
      mounted() {
        this.loadData();
      }
    });