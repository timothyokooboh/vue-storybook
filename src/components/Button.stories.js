import Button from "./Button.vue";

export default {
    title: "AppButton",
    component: Button
}

const template = (args) => ({
    components: { Button },
    setup() {
        return { args }
    },
    template: `
    <Button v-bind='args'>
        ${ args.default }
        <template #content> ${ args.content } </template> 
    </Button>`
})

export const DefaultButton = template.bind({})

DefaultButton.args = {
    bgColor: "",
    color: "",
    label: "",
    content: "",
    default: "greece"
}