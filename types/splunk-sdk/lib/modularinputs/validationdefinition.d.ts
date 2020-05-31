declare type param<Conf> = { [k in keyof Conf]?: string | undefined }


/**
* This class represents the XML sent by Splunk for external validation of a
* new modular input.
*
* @example
*
*      var v =  new ValidationDefinition();
*
*/
export declare class ValidationDefinition<Conf> {
    metadata: {}
    parameters: param<Conf>
    constructor()
    /**
    * Creates a `ValidationDefinition` from a provided string containing XML.
    *
    * This function will throw an exception if `str`
    * contains unexpected XML.
    *
    * The XML typically will look like this:
    * 
    * `<items>`
    * `   <server_host>myHost</server_host>`
    * `     <server_uri>https://127.0.0.1:8089</server_uri>`
    * `     <session_key>123102983109283019283</session_key>`
    * `     <checkpoint_dir>/opt/splunk/var/lib/splunk/modinputs</checkpoint_dir>`
    * `     <item name="myScheme">`
    * `       <param name="param1">value1</param>`
    * `       <param_list name="param2">`
    * `         <value>value2</value>`
    * `         <value>value3</value>`
    * `         <value>value4</value>`
    * `       </param_list>`
    * `     </item>`
    * `</items>`
    *
    * @param str A string containing XML to parse.
    *
    */
    static parse<Conf>(str: string): ValidationDefinition<Conf>
}