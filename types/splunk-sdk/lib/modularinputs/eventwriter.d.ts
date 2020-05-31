import { Event } from "./event"
import { ElementTree } from "elementtree"

/**
 * `EventWriter` writes events and error messages to Splunk from a modular input.
 *
 * Its two important methods are `writeEvent`, which takes an `Event` object,
 * and `log`, which takes a severity and an error message.

 */
export declare class EventWriter {
    /**
     * @param output A stream to output data, defaults to `process.stdout`
     * @param error  A stream to output errors, defaults to `process.stderr`
     */
    constructor(output: {}, error: {})
    /**
    * Writes an `Event` object to the output stream specified
    * in the constructor.
    *
    * @param event An `Event` Object.
    */
    writeEvent(event: Event): void
    /**
    * Writes a string representation of an `Elementtree` Object to the 
    * output stream specified in the constructor.
    *
    * This function will throw an exception if there is an error
    * while making a string from `xmlDocument`, or
    * while writing the string created from `xmlDocument`.
    *
    * @param xmlDocument An `Elementtree` Object representing an XML document.
    */
    writeXMLDocument(xmlDocument: ElementTree): void
    /**
    * Writes the closing </stream> tag to make the XML well formed.
    *
    */
    close(): void
}