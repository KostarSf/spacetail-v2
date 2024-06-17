import { Random, Vector } from "excalibur";

export const rand = new Random(256);

export function lerp(
    value: number,
    min: number,
    max: number,
    interpolationFn: (value: number) => number = linear
) {
    const clampedValue = Math.max(min, Math.min(value, max));
    const normalizedValue = (clampedValue - min) / (max - min);
    return interpolationFn(normalizedValue);
}

export const linear = (t: number) => t;
export const easeIn = (t: number) => t * t;
export const easeOut = (t: number) => t * (2 - t);
export const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

export function vecToArray(vector: Vector, fractionDigits?: number): [number, number] {
    if (fractionDigits) {
        return [round(vector.x, fractionDigits), round(vector.y, fractionDigits)];
    }

    return [vector.x, vector.y];
}

export function round(value: number, fractionDigits: number) {
    return Number(value.toFixed(fractionDigits));
}