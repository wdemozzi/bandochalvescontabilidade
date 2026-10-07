/**
 * Safe error logger stub (decoupled from Lovable telemetry).
 */
export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  if (process.env.NODE_ENV !== "production") {
    console.warn("[Error Logger]", error, context);
  }
}
