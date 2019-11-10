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
    export default {

        data() {
            return {
            }
        },
        props:{
            user: Object,
            show: String}
    }
</script>