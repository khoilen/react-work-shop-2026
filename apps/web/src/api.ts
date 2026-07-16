import { createHttpClient } from "@react-workshop/http-client";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const api = createHttpClient({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10_000,
});

export function getTodos() {
  return api.get<Todo[]>("/todos", {
    params: {
      _limit: 5,
    },
  });
}
