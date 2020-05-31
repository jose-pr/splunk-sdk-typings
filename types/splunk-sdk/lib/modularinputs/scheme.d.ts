import { Argument } from "./argument"
import { ElementTree } from "elementtree"
export declare const enum SchemeStreamingNode {
    streamingModeSimple = "SIMPLE",
    streamingModeXML = "XML"
}

export declare type ConfigurationValue = number | boolean | string | undefined
export declare interface ModuleConfiguration { [name: string]: ConfigurationValue }

/**
 * Class representing the metadata for a modular input kind.
 *
 * A `Scheme` specifies a title, description, several options of how Splunk 
 * should run modular inputs of this kind, and a set of arguments that define
 * a particular modular input's properties.
 * The primary use of `Scheme` is to abstract away the construction of XML
 * to feed to Splunk.
 *
 */
export declare class Scheme<Conf extends ModuleConfiguration> {

    /**
     *
     * @example
     *
     *      var s =  new Scheme();
     *
     *      var myFullScheme = new Scheme("fullScheme");
     *      myFullScheme.description = "This is how you set the other properties";
     *      myFullScheme.useExternalValidation = true;
     *      myFullScheme.useSingleInstance = false;
     *      myFullScheme.streamingMode = Scheme.streamingModeSimple;
     *
     * @param title The identifier for this Scheme in Splunk.
     */
    constructor(title?: string)
    description: string
    useExternalValidation: boolean
    useSingleInstance: boolean
    args: Argument<Extract<keyof Conf, string>>[]
    static streamingMode: SchemeStreamingNode
    static streamingModeSimple: SchemeStreamingNode.streamingModeSimple
    static streamingModeXML: SchemeStreamingNode.streamingModeXML
    /**
     * Add the provided argument, `arg`, to the `this.arguments` Array.
     *
     * @param arg An Argument object to add to this Scheme's argument list.
     */
    addArgument(arg: Argument<Extract<keyof Conf, string>>): void
    /**
     * Creates an elementtree Element representing this Scheme, then returns it.
     *
     * @return An elementtree Element object representing this Scheme.
     */
    toXML(): ElementTree
}
