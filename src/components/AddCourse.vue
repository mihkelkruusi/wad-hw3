<template>
    <span>
        <input class="input" type="text" placeholder="Course title" id="title" >
        <input class="input" type="number" min="1" max="8" placeholder="Semester" id="semester">
        <input class="input" type="number" min="0" max="100" placeholder="Grade" id="grade">
        <button class="green-button" id="save-course" >Save</button>
        <button class="grey-button" id="cancel-course" v-on:click="changeValue()">Cancel</button>
    </span>
</template>

<script>

    export default {
        methods: {
            changeValue() {
                this.$emit("cancel");
                document.getElementById("title").value = "";
                document.getElementById("semester").value = "";
                document.getElementById("grade").value = "";
            }
        }
    }
</script>