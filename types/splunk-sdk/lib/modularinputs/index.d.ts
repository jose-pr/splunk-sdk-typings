import { ModularInputsExport } from "./modularinputs"

export * from "./argument"
export * from "./event"
export * from "./eventwriter"
export * from "./inputdefinition"
export * from "./logger"
export * from "./modularinputs"
export * from "./scheme"
export * from "./validationdefinition"

/**
 * Executes a modular input script.
 *
 * @param exports An instance of ModularInput representing a modular input.
 * @param module The module object, used for determining if it's the main module (`require.main`).
 */
export declare function execute(exports: ModularInputsExport<any>, module: NodeModule): void
