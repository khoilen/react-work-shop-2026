import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from "axios";

export type HttpErrorDetails = {
  status?: number;
  body?: unknown;
  cause?: unknown;
};

export class HttpError extends Error {
  readonly status?: number;
  readonly body?: unknown;
  override readonly cause?: unknown;

  constructor(message: string, details: HttpErrorDetails = {}) {
    super(message);
    this.name = "HttpError";
    this.status = details.status;
    this.body = details.body;
    this.cause = details.cause;
  }
}

export type RequestOptions<TData = unknown> = AxiosRequestConfig<TData>;

export type HttpClientOptions = {
  baseURL?: string;
  headers?: Record<string, string>;
  timeout?: number;
  onRequest?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  onResponse?: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
  onError?: (error: HttpError) => void;
};

export type HttpClient = {
  readonly instance: AxiosInstance;
  get<TResponse>(path: string, options?: RequestOptions): Promise<TResponse>;
  post<TResponse, TData = unknown>(
    path: string,
    data?: TData,
    options?: RequestOptions<TData>
  ): Promise<TResponse>;
  put<TResponse, TData = unknown>(
    path: string,
    data?: TData,
    options?: RequestOptions<TData>
  ): Promise<TResponse>;
  patch<TResponse, TData = unknown>(
    path: string,
    data?: TData,
    options?: RequestOptions<TData>
  ): Promise<TResponse>;
  delete<TResponse>(path: string, options?: RequestOptions): Promise<TResponse>;
  request<TResponse, TData = unknown>(options: RequestOptions<TData>): Promise<TResponse>;
};

export function createHttpClient({
  baseURL = "",
  headers,
  timeout = 15_000,
  onRequest,
  onResponse,
  onError
}: HttpClientOptions = {}): HttpClient {
  const instance = axios.create({
    baseURL,
    headers,
    timeout
  });

  if (onRequest) {
    instance.interceptors.request.use(onRequest);
  }

  if (onResponse) {
    instance.interceptors.response.use(onResponse);
  }

  async function request<TResponse, TData = unknown>(
    options: RequestOptions<TData>
  ): Promise<TResponse> {
    try {
      const response = await instance.request<TResponse, AxiosResponse<TResponse>, TData>(
        options
      );
      return response.data;
    } catch (error) {
      const normalizedError = normalizeHttpError(error);
      onError?.(normalizedError);
      throw normalizedError;
    }
  }

  return {
    instance,
    request,
    get: (path, options) => request({ ...options, url: path, method: "GET" }),
    post: (path, data, options) => request({ ...options, url: path, data, method: "POST" }),
    put: (path, data, options) => request({ ...options, url: path, data, method: "PUT" }),
    patch: (path, data, options) =>
      request({ ...options, url: path, data, method: "PATCH" }),
    delete: (path, options) => request({ ...options, url: path, method: "DELETE" })
  };
}

export function normalizeHttpError(error: unknown): HttpError {
  if (error instanceof HttpError) {
    return error;
  }

  if (error instanceof AxiosError) {
    return new HttpError(error.message, {
      status: error.response?.status,
      body: error.response?.data,
      cause: error
    });
  }

  return new HttpError("Unexpected HTTP error", {
    cause: error
  });
}
