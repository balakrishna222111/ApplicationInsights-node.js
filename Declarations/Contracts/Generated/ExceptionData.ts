// THIS TYPE WAS AUTOGENERATED
/// <reference path="Domain.ts" />
/// <reference path="SeverityLevel.ts" />
module AI
{
"use strict";
    export class ExceptionData extends AI.Domain
    {
        public ver: number;
        public exceptions: ExceptionDetails[];
        public severityLevel: AI.SeverityLevel;
        public problemId: string;
        public properties: any;
        public measurements: any;
        
        constructor()
        {
            
            super();
            this.ver = 2;
            this.exceptions = [];
            this.properties = {};
            this.measurements = {};
        }
    }
}
