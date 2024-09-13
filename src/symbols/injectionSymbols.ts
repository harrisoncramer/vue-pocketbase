import type { InjectionKey } from "vue"
import type PocketBase from "@/pb"

export const pocketBaseSymbol: InjectionKey<PocketBase> = Symbol("PBClient");
