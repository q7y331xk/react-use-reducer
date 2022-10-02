import { EffectCallback, useEffect } from "react"

export const useEnter = (func: EffectCallback) => {
  useEffect(func, [])
}