const DEFAULT_API_BASE_URL = "https://api.egliseemec.org/api/v1";

export type ApiListResponse<T> = {
  data: T[];
  meta?: Record<string, unknown>;
  links?: Record<string, unknown>;
};

export type ApiRequestOptions = RequestInit & {
  query?: Record<string, string | number | boolean | null | undefined>;
};

export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL).replace(/\/+$/, "");

function buildUrl(path: string, query?: ApiRequestOptions["query"]) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(`${API_BASE_URL}${normalizedPath}`);

  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  }

  return url.toString();
}

export async function fetchApi<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
  const { query, headers, ...requestOptions } = options;
  const response = await fetch(buildUrl(path, query), {
    ...requestOptions,
    headers: {
      Accept: "application/json",
      ...(requestOptions.body ? { "Content-Type": "application/json" } : {}),
      ...headers,
    },
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      typeof payload?.message === "string" ? payload.message : `Requete API refusee (${response.status}).`,
    );
  }

  return payload as T;
}

export function listData<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) {
    return payload as T[];
  }

  if (payload && typeof payload === "object" && Array.isArray((payload as { data?: unknown }).data)) {
    return (payload as { data: T[] }).data;
  }

  return [];
}
