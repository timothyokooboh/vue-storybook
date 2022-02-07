<template>
    <div>
        <img  v-if="user.img" :src="user.img" alt="user avatar" class="user-img" :class="{ rounded }">
        <div v-else class="user-initials" :class="{ rounded }">
            {{ `${user.firstName[0]} ${user.lastName[0]}` }}
        </div>
    </div>
</template>

<script>
  import { defineComponent } from "vue";

    export default defineComponent({
        name: "UserAvatar",
        props: {
            user: {
                type: Object,
                required: true
            },
            size: {
                type: String,
                default: "50px"
            },
            rounded: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            randomBgColor() {
                const colors = ["blue", "red", "pink"];
                const randomNumber = Math.floor(Math.random() * colors.length);
                return colors[randomNumber]
            }
        }
       /* setup() {
            const randomBgColor = computed(() => {
                const colors = ["blue", "red", "pink"];
                const randomNumber = Math.floor(Math.random() * colors.length);
                return colors[randomNumber]
            })

            return {
                randomBgColor
            }
        }*/
    })
</script>

<style scoped>
    .user-img {
        width: v-bind(size);
        height: v-bind(size);
    }
    .user-initials {
       width: v-bind(size);
        height: v-bind(size);
        background-color: v-bind(randomBgColor);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        font-weight: bold;
    }
    .rounded {
        border-radius: 50%;
    }
</style>
