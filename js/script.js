new Vue({
    el: "#app",
    data: {
        mails: []
    },
    beforeMount() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                this.mails.push(result.data.response)
            });
        }
    }

});


// https://flynn.boolean.careers/exercises/api/random/mail