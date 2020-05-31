import { Stream } from "stream"

// Severities that Splunk understands for log messages from modular inputs.
// DO NOT CHANGE THESE
export declare const enum LOGGER_LEVELS {
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    FATAL = "FATAL"
}

/**
* `Logger` logs messages to Splunk's internal logs.
*
*/
export declare class Logger {

    DEBUG: LOGGER_LEVELS.DEBUG
    INFO: LOGGER_LEVELS.INFO
    WARN: LOGGER_LEVELS.WARN
    ERROR: LOGGER_LEVELS.ERROR
    FATAL: LOGGER_LEVELS.FATAL

    /**
    * Logs messages about the state of this modular input to Splunk.
    * These messages will show up in Splunk's internal logs.
    *
    * @param name The name of this modular input.
    * @param message The message to log.
    * @param stream  A stream to write log messages to, defaults to process.stderr.
    */
    debug(name: string, message: string, stream?: Stream): void
    /**
    * Logs messages about the state of this modular input to Splunk.
    * These messages will show up in Splunk's internal logs.
    *
    * @param name The name of this modular input.
    * @param message The message to log.
    * @param stream  A stream to write log messages to, defaults to process.stderr.
    */
    info(name: string, message: string, stream?: Stream): void

    /**
    * Logs messages about the state of this modular input to Splunk.
    * These messages will show up in Splunk's internal logs.
    *
    * @param name The name of this modular input.
    * @param message The message to log.
    * @param stream  A stream to write log messages to, defaults to process.stderr.
    */
    warn(name: string, message: string, stream?: Stream): void
    /**
     * Logs messages about the state of this modular input to Splunk.
     * These messages will show up in Splunk's internal logs.
     *
     * @param name The name of this modular input.
     * @param message The message to log.
     * @param stream  A stream to write log messages to, defaults to process.stderr.
     */
    error(name: string, message: string, stream?: Stream): void
    /**
     * Logs messages about the state of this modular input to Splunk.
     * These messages will show up in Splunk's internal logs.
     *
     * @param name The name of this modular input.
     * @param message The message to log.
     * @param stream  A stream to write log messages to, defaults to process.stderr.
     */
    fatal(name: string, message: string, stream?: Stream): void

};