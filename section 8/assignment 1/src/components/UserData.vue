<template>
    <section>
        <form @submit.prevent="submitData">
            <input type="text" placeholder="Your name" v-model="enteredName" />
            <input type="text" placeholder="Your age" v-model="enteredAge" />
            <button>Set user data</button>
        </form>
    </section>
</template>

<script>
export default {
    emits: ['set-data'],
    data () {
        return {
            enteredName: '',
            enteredAge: ''
        };
    },
    methods: {
        submitData () {
            this.$emit('set-data', {
                name: this.enteredName,
                age: this.enteredAge
            });
        }
    }
};
</script>