import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import "../styles.css";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Save changes"
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  }
};

export const Loading: Story = {
  args: {
    isLoading: true
  }
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Delete"
  }
};
