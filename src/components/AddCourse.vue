<template>
    <span>
        <input class="input" type="text" placeholder="Course title" id="title" >
        <input class="input" type="number" min="1" max="8" placeholder="Semester" id="semester">
        <input class="input" type="number" min="0" max="100" placeholder="Grade" id="grade">
        <button class="green-button" id="save-course"  v-on:click="addCourse()">Save</button>
        <button class="grey-button" id="cancel-course" v-on:click="hide()">Cancel</button>
    </span>
</template>

<script>

    import Course from "../models/Course";

    export default {
        methods: {
            hide() {
                this.$emit("cancel");
                this.clear();
            },
            addCourse() {
                this.$emit("addCourse", new Course(document.getElementById("title").value, parseInt(document.getElementById("semester").value), parseInt(document.getElementById("grade").value)));
                this.clear();
            },
            clear(){
                document.getElementById("title").value = "";
                document.getElementById("semester").value = "";
                document.getElementById("grade").value = "";
            }
        }
    }
</script>