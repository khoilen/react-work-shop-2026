import { HttpError } from "@react-workshop/http-client";
import { Button } from "@react-workshop/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@react-workshop/ui/card";
import { Field, FieldError, Input, Label } from "@react-workshop/ui/input";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getTodos } from "./api";

type ContactFormValues = {
  name: string;
  email: string;
};

export function App() {
  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      await new Promise((resolve) => window.setTimeout(resolve, 600));
      return values;
    },
  });

  return (
    <main className="mx-auto grid min-h-screen w-full max-w-5xl gap-6 px-4 py-8 md:grid-cols-[1fr_1.2fr] md:px-6">
      <section className="grid content-start gap-6">
        <div className="grid gap-2">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            React Workshop
          </p>
          <h1 className="text-3xl font-semibold text-zinc-950">
            Vite monorepo starter
          </h1>
          <p className="max-w-xl text-base leading-7 text-zinc-600">
            React 19, TanStack Query, React Hook Form, Axios, Tailwind,
            Storybook, and shared workspace packages.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Axios query</CardTitle>
            <CardDescription>
              Loaded through @react-workshop/http-client.
            </CardDescription>
          </CardHeader>
          <QueryState
            error={todosQuery.error}
            isError={todosQuery.isError}
            isLoading={todosQuery.isLoading}
          />
          {todosQuery.data ? (
            <ul className="grid gap-3">
              {todosQuery.data.map((todo) => (
                <li
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700"
                  key={todo.id}
                >
                  {todo.title}
                </li>
              ))}
            </ul>
          ) : null}
        </Card>
      </section>

      <Card className="self-start">
        <CardHeader>
          <CardTitle>React Hook Form</CardTitle>
          <CardDescription>
            Form fields are shared UI components from the monorepo.
          </CardDescription>
        </CardHeader>

        <form
          className="grid gap-4"
          onSubmit={form.handleSubmit((values) =>
            contactMutation.mutate(values),
          )}
        >
          <Field>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              isInvalid={Boolean(form.formState.errors.name)}
              placeholder="Ada Lovelace"
              {...form.register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
            <FieldError>{form.formState.errors.name?.message}</FieldError>
          </Field>

          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              isInvalid={Boolean(form.formState.errors.email)}
              placeholder="ada@example.com"
              type="email"
              {...form.register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            <FieldError>{form.formState.errors.email?.message}</FieldError>
          </Field>

          <Button
            className="mt-2 justify-self-start"
            isLoading={contactMutation.isPending}
            type="submit"
          >
            Submit
          </Button>

          {contactMutation.data ? (
            <p className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
              Submitted for {contactMutation.data.name}.
            </p>
          ) : null}
        </form>
      </Card>
    </main>
  );
}

function QueryState({
  error,
  isError,
  isLoading,
}: {
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
}) {
  if (isLoading) {
    return <p className="mb-4 text-sm text-zinc-600">Loading todos...</p>;
  }

  if (isError) {
    const message =
      error instanceof HttpError && error.status
        ? `Request failed with status ${error.status}.`
        : "Unable to load todos.";

    return (
      <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
        {message}
      </p>
    );
  }

  return null;
}
