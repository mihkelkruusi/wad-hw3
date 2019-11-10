<template>
    <div id="profile-container" class="tab" :class="{active: show}">
        <div id="profile">
            <div class="avatar">
                <img src="@/assets/me.png" id="picture" alt="My picture">
            </div>
            <div class="info">
                <ul>
                    <li id="name">{{ user.firstname + " " + user.lastname }}</li>
                    <li id="birthdate">{{ user.birthdate }}</li>
                    <li id="faculty">{{ user.faculty }}</li>
                </ul>
            </div>
            <div id="gpa">
                <strong>{{ user.getGPA() }}</strong>
            </div>
            <div class="clear-fix"></div>
        </div>
    </div>
</template>

<script>
    import User from '@/models/User'
    import Course from "../models/Course";

    export default {

        data() {
            return {
                user: new User("Just", "Bob", "20/04/1990", "Cannabis Cultivation", [ new Course("Introduction to Cannabis Cultivation", 1, 82),
                    new Course("From seed to bud I", 2, 85),
                    new Course("Plant biology", 3, 65),
                    new Course("The perfect high", 4, 99)])
            }
        },
        props: ["show"]
    }
</script>