import { EventWriter } from "./eventwriter";
import { Stream } from "stream"
import { Service } from "../service";
import { InputDefinition } from "./inputdefinition";
import { ValidationDefinition } from "./validationdefinition";
import { ModuleConfiguration, Scheme } from "./scheme";


export declare interface ModularInputsExport<Conf extends ModuleConfiguration> {

    /**
     * Runs before streaming begins.
     *
     * @param done The function to call when done: `(err)`.
     */
    setup?: (done: (err?: Error) => void) => void

    /**
     * Runs once the streaming starts, for an input.
     *
     * @param name The name of this modular input.
     * @param definition An InputDefinition object.
     * @param done The function to call when done: `(err)`.
     */
    start?: (name: string, definition: InputDefinition, done: (err?: Error) => void) => void

    /**
     * Runs once the streaming ends, for an input (upon successfully streaming all events).
     *
     * @param name The name of this modular input.
     * @param definition An InputDefinition object.
     * @param done The function to call when done: `(err)`.
     */
    end?: (name: string, definition: InputDefinition, done: (err?: Error) => void) => void
    /**
    * Runs after all streaming is done for all inputs definitions.
    *
    * @param done The function to call when done: `(err)`.
    */
    teardown?: (done: (err?: Error) => void) => void


    getScheme(): Scheme<Conf>
    validateInput?(def: ValidationDefinition<Conf>, done: (error?: Error) => void): void
    streamEvents(name: string, singleInput: Conf, eventWriter: EventWriter, done: (error?: Error) => void): void
}


/**
 * A base class for implementing modular inputs.
 *
 * Subclasses should implement `getScheme` and `streamEvents`,
 * and optionally `validateInput` if the modular input uses 
 * external validation.
 * 
 * The `run` function is used to run modular inputs; it typically
 * should not be overridden.
 */
export declare class ModularInputs<Conf extends ModuleConfiguration> implements Required<ModularInputsExport<Conf>> {
    constructor()
    /**
     * Handles all the specifics of running a modular input.
     *
     * @param exports An object representing a modular input script.
     * @param args A list of command line arguments passed to this script.
     * @param eventWriter An `EventWriter` object for writing event.
     * @param inputStream A `Stream` object for reading inputs.
     * @param callback The function to call after running this script: `(err, status)`.
     */
    static runScript(exports: ModularInputsExport<any>, args: string[], eventWriter: EventWriter, inputStream: Stream, callback: (err: Error | null | undefined, status: number) => void): void

    /**
    * Returns a `splunkjs.Service` object for this script invocation.
    *
    * The service object is created from the Splunkd URI and session key
    * passed to the command invocation on the modular input stream. It is
    * available as soon as the `ModularInput.streamEvents` function is called.
    *
    * @return A `Splunkjs.Service` Object, or null if you call this function before the `ModularInput.streamEvents` function is called.
    */
    static service(): Service | null

    setup(done: (err?: Error) => void):void
    start(name: string, definition: InputDefinition, done: (err?: Error) => void):void
    end(name: string, definition: InputDefinition, done: (err?: Error) => void):void
    teardown(done: (err?: Error) => void):void
    getScheme():Scheme<Conf>
    validateInput(def: ValidationDefinition<Conf>, done: (error?: Error) => void): void
    streamEvents(name: string, singleInput: Conf, eventWriter: EventWriter, done: (error?: Error) => void): void

}

