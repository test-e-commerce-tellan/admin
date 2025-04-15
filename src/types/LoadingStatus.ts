export const LoadingState = {
  Idle: "idle",
  Loading: "loading",
  Succeeded: "succeeded",
  Failed: "failed",
} as const;

export type LoadingStatus = (typeof LoadingState)[keyof typeof LoadingState];
