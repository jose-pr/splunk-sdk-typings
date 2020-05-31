/// <reference types="node" />
import { ElementTree } from "elementtree"
export declare const enum ArgumentType {
    dataTypeBoolean = "BOOLEAN",
    dataTypeNumber = "NUMBER",
    dataTypeString = "STRING"
}
export declare interface ArgumentConfig<Name extends string, T extends ArgumentType> {
    name: Name
    description?: string
    validation?: string
    dataType?: T
    requiredOnEdit?: boolean
    requiredOnCreate?: boolean
}
/**
* Class representing an argument to a modular input kind.
*
* `Argument` is meant to be used with `Scheme` to generate an XML 
* definition of the modular input kind that Splunk understands.
*
* `name` is the only required parameter for the constructor.
*
*/
export declare class Argument<Name extends string, T extends ArgumentType = ArgumentType> implements ArgumentConfig<Name, T> {
    static dataTypeBoolean: ArgumentType.dataTypeBoolean;
    static dataTypeNumber: ArgumentType.dataTypeNumber;
    static dataTypeString: ArgumentType.dataTypeString;
    name: Name
    description: string
    validation: string
    dataType: T
    requiredOnEdit: boolean
    requiredOnCreate: boolean
    /**
    * @example
    *
    *      // Example with minimal parameters
    *      var myArg1 = new Argument({name: "arg1"});
    *
    *      // Example with all parameters
    *      var myArg2 = new Argument({
    *          name: "arg1",
    *          description: "This an argument with lots of parameters",
    *          validation: "is_pos_int('some_name')",
    *          dataType: Argument.dataTypeNumber,
    *          requiredOnEdit: true,
    *          requiredOnCreate: true
    *      });
    *
    * @param argumentConfig An object containing at least the name property to configure this Argument
    */
    constructor(argumentConfig: ArgumentConfig<Name, T>)
    /**
     * Adds an `Argument` object the passed in elementtree object.
     * 
     * Adds an <arg> subelement to the parent element, typically <args>,
     * and sets up its subelements with their respective text.
     *
     * @param parent An elementtree element object to be the parent of a new <arg> subelement
     * @return An elementtree element object representing this argument.
     */
    addToDocumentfunction(parent: ElementTree): ElementTree

}