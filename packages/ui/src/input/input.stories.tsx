import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, FieldError, Input, Label } from "./input";
import "../styles.css";

const meta = {
  title: "Components/Input",
  component: Input
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field className="max-w-sm">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="name@example.com" />
    </Field>
  )
};

export const Invalid: Story = {
  render: () => (
    <Field className="max-w-sm">
      <Label htmlFor="invalid-email">Email</Label>
      <Input id="invalid-email" isInvalid placeholder="name@example.com" />
      <FieldError>Enter a valid email address.</FieldError>
    </Field>
  )
};
