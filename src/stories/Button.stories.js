import { Button } from "../component/Button"

export default {
    title: "Button",
    component: Button
}


const template = args => <Button {...args} />

export const Contained = template.bind({})
Contained.args = {
    variant: "contained",
    size: "medium",
    label: "contained"
}

export const Text = template.bind({})
Text.args = {
    variant: "text",
    size: "medium",
    label: "text"
}

export const Outlined = template.bind({})
Outlined.args = {
    variant: "outlined",
    size: "medium",
    label: "outlined"
}