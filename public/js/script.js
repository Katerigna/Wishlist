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
            }
        }
    });
})();
