export type ApiFetcherOptions = {
  url: string
  query: string
  variables?: Variables
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Variables = { [key: string]: string | any | undefined }

export type ApiFetcherResults<T> = {
  data: T
}

export interface ApiConfig {
  apiUrl: string
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>
}
