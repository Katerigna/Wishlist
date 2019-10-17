console.log("sanity check");

(function() {
    new Vue({
        el: "#main",
        data: {
            name: "",
            email: "",
            password: ""
        },
        methods: {
            handleClick: function(e) {
                e.preventDefault();

                axios
                    .post("/register", formData)
                    .then(function(response) {
                        console.log("registration response from db", response);
                    })
                    .catch(function(err) {
                        console.log("error on register", err);
                    });
            }
        }
    });
})();
