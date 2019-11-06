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
            <tr v-for="(course, index) in courses" :key="index">
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
            <button id="add-course-button" class="blue-button" @click="showAddCourses = !showAddCourses">+</button>
            <add-course v-show="showAddCourses"></add-course>
        </div>
    </div>
</template>

<script>
    import AddCourse from '@/components/AddCourse.vue'
    import Course from '@/models/Course'

    export default {
        data() {
            return {
                courses: [
                    new Course("Introduction to Cannabis Cultivation", 1, 82),
                    new Course("From seed to bud I", 2, 85),
                    new Course("Plant biology", 3, 65),
                    new Course("The perfect high", 4, 99)
                ],
                showAddCourses: false
            }
        },
        props: ["show"],
        components: {"add-course": AddCourse}
    }
</script>