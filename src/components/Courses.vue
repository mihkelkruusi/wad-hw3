<template>
    <div id="courses-container" class="tab" :class="{active: show}">
        <h1 class="title">Courses</h1>
        <table id="courses">
            <thead>
            <tr>
                <th>#</th>
                <th>Course Title</th>
                <th>Semester</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(course, index) in user.courses" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ course.title }}</td>
                <td>{{ course.semester }}</td>
                <td>{{ course.grade }}</td>
            </tr>
            </tbody>
        </table>
        <br>
        <br>
        <div>
            <button id="add-course-button" class="blue-button" @click="setShowAddCourses">+</button>
            <add-course @cancel="setShowAddCourses" @addCourse="addNewCourse" v-show="showAddCourses"></add-course>
        </div>
    </div>
</template>

<script>
    import AddCourse from '@/components/AddCourse.vue'

    export default {
        data() {
            return {
                showAddCourses: false
            }
        },
        methods: {
            setShowAddCourses() {
                this.showAddCourses = !this.showAddCourses;
            },
            addNewCourse(course){
                this.user.addCourse(course);
                this.setShowAddCourses();
            }
        },
        props:{
        user: Object,
        show: String}
    ,
        components: {"add-course": AddCourse}
    }
</script>