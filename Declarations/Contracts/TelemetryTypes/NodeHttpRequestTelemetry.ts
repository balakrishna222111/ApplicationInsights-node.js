import { Telemetry }  from "./Telemetry";
import http = require("http");

/**
 * Object encapsulating information about the incoming HTTP request
 */
export interface NodeHttpRequestTelemetry extends Telemetry
{
    /**
     * HTTP request object
     */
    request: http.ServerRequest;

    /**
     * HTTP response object
     */
    response: http.ServerResponse;
    
    /**
     * HTTP request duration
     */
    duration?: number;

    /**
     * Error that occurred while processing the request
     */
    error?: any
}