import type PocketBase from "pocketbase"
import type { InjectionKey } from "vue"

export const pocketBaseSymbol: InjectionKey<PocketBase> = Symbol("PBClient")
