/// <reference types="node" />
/**
 * `Event Configuration for Event Constructor`
 **/
export declare interface EventConfig {
    data: string
    stanza: string
    time: number
    host?: string
    index?: string
    source?: string
    sourcetype?: string
    done?: boolean
    unbroken?: boolean
}
/**
 * `Event` represents an event or fragment of an event to be written by this
 * modular input to Splunk.
 *
**/
export declare class Event {
    data: string
    stanza: string
    time: number
    host?: string
    index?: string
    source?: string
    sourcetype: string
    done: boolean
    unbroken: boolean
    /**
    * @example    *
    *      // Minimal configuration
    *      var myEvent =  new Event({
    *          data: "This is a test of my new event.",
    *          stanza: "myStanzaName",
    *          time: parseFloat("1372187084.000")
    *      });
    *
    *      // Full configuration
    *      var myBetterEvent =  new Event({
    *          data: "This is a test of my better event.",
    *          stanza: "myStanzaName",
    *          time: parseFloat("1372187084.000"),
    *          host: "localhost",
    *          index: "main",
    *          source: "Splunk",
    *          sourcetype: "misc",
    *          done: true,
    *          unbroken: true
    *      });
    * @param eventConfig An object containing the configuration for an `Event`.
    */
    constructor(eventConfig:EventConfig)
    /** 
    * Formats a time for Splunk, should be something like `1372187084.000`.
    *
    * @example
    *
    *   // When the time parameter is a string.
    *   var stringTime = "1372187084";
    *   var stringTimeFormatted = Event.formatTime(stringTime);
    *
    *   // When the time parameter is a number, no decimals.
    *   var numericalTime = 1372187084;
    *   var numericalTimeFormatted = Event.formatTime(numericalTime);
    *
    *   // When the time parameter is a number, with decimals.
    *   var decimalTime = 1372187084.424;
    *   var decimalTimeFormatted = Event.formatTime(decimalTime);
    *
    *   // When the time parameter is a Date object.
    *   var dateObjectTime = Date.now();
    *   var dateObjectTimeFormatted = Event.formatTime(dateObjectTime);
    *
    * @param time The unformatted time in seconds or milliseconds, typically a String, Number, or `Date` Object.
    * @return The formatted time in seconds.
    */
   static formatTime(time:any):null|number
}
