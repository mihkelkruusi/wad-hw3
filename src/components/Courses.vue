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
    import Course from "../models/Course";
    import User from "../models/User";

    export default {
        data() {
            return {
                user: new User("ef", "ef", "fef", "345", [ new Course("Introduction to Cannabis Cultivation", 1, 82),
                    new Course("From seed to bud I", 2, 85),
                    new Course("Plant biology", 3, 65),
                    new Course("The perfect high", 4, 99)]),
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
        props:
            ["show"]
        ,
        components: {"add-course": AddCourse}
    }
</script>