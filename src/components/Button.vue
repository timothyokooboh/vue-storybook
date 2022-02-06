<template>
    <button>
        {{ label }}
        <slot></slot>
    <slot name="content" ></slot>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            bgColor: {
                type: String,
                default: 'dodgerblue'
            },
            color: String,
            label: String
        }
    }
</script>

<style scoped>
    button {
        padding: 10px 20px;
        background-color: v-bind(bgColor);
        color: v-bind(color);
        outline: none;
        border: none;
    }
</style>