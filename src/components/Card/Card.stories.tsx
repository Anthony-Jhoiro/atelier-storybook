import {Card} from "@/components/Card/Card";
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta<typeof Card> = {
    component: Card
}

export default meta

export type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
    }
}