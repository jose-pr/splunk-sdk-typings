/**
* `InputDefinition` encodes the XML defining inputs that Splunk passes to
* a modular input script.
*/
export declare class InputDefinition {
    inputs: {}
    metadata: {}
    /**
    * @example
    *
    *      var i =  new InputDefinition();
    *
    */
    constructor()
    /**
    * Parse a string containing XML into an `InputDefinition`.
    *
    * This function will throw an exception if `str`
    * contains unexpected XML.
    *
    * The XML typically will look like this:
    * 
    * `<input>`
    *   `<server_host>tiny</server_host>`
    *   `<server_uri>https://127.0.0.1:8089</server_uri>`
    *   `<checkpoint_dir>/opt/splunk/var/lib/splunk/modinputs</checkpoint_dir>`
    *   `<session_key>123102983109283019283</session_key>`
    *   `<configuration>`
    *     `<stanza name="foobar://aaa">`
    *       `<param name="param1">value1</param>`
    *       `<param name="param2">value2</param>`
    *       `<param name="disabled">0</param>`
    *       `<param name="index">default</param>`
    *     `</stanza>`
    *     `<stanza name="foobar://bbb">`
    *       `<param name="param1">value11</param>`
    *       `<param name="param2">value22</param>`
    *       `<param name="disabled">0</param>`
    *       `<param name="index">default</param>`
    *       `<param_list name="multiValue">`
    *         `<value>value1</value>`
    *         `<value>value2</value>`
    *       `</param_list>`
    *       `<param_list name="multiValue2">`
    *         `<value>value3</value>`
    *         `<value>value4</value>`
    *       `</param_list>`
    *     `</stanza>`
    *   `</configuration>`
    * `</input>`
    *
    * @param str A string containing XML to parse.
    * @return An InputDefiniion object.
    */
    static parse(str: string): InputDefinition
}
