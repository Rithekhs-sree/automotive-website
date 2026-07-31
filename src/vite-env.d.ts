/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_API_URL?: string
  readonly DEV: boolean
  readonly PROD: boolean
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
