<script setup>
import Admin from "./components/Admin.vue";
import Calculation from "./components/Calculation.vue";
import Card from "./components/Card.vue";
import ColorBox from "./components/ColorBox.vue";
import FormatName from "./components/FormatName.vue";
import ListCourse from "./components/ListCourse.vue";
import ManageUser from "./components/ManageUser.vue";

import UserInfor from "./components/UserInfor.vue";
</script>
<template>
  <div>
    <ListCourse></ListCourse>
    <ColorBox />
    <Card></Card>
    <Calculation></Calculation>
    <UserInfor></UserInfor>
    <FormatName></FormatName>
    <Admin></Admin>

    <ManageUser></ManageUser>
  </div>
</template>

<style></style>
