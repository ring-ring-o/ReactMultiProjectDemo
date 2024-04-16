import type { Meta, StoryObj } from "@storybook/react";
import MyButton from "./MyButton";

const meta: Meta<typeof MyButton>  = {
    component: MyButton,
    title: "MyButton"
}

export default meta;

type Story = StoryObj<typeof MyButton>;

export const Main: Story = {
    render: () => <MyButton />
}