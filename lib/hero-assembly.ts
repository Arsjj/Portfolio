"use client";

// Shared completion state avoids a timing-dependent event between sibling components.
let complete = false;
const listeners = new Set<() => void>();

export function completeHeroAssembly() {
  if (complete) return;
  complete = true;
  listeners.forEach((listener) => listener());
}

export function subscribeToHeroAssembly(listener: () => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

export const isHeroAssemblyComplete = () => complete;
export const serverHeroAssemblyComplete = () => false;
