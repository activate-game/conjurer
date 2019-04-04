import { Effect } from "../components/EffectPicker";
import { randomFromArray } from "./random";

export const properties: string[] = ["attack", "speed"];

export function generateEffect(): Effect {
  const property = randomFromArray<string>(properties);
  const modifier = randomFromArray<number>([-3, -2, -1, 0, 1, 2, 3]);
  return { property, modifier };
}

export function generateEffects(num: number = 3): Effect[] {
  return Array(num)
    .fill(null)
    .map(() => generateEffect());
}
