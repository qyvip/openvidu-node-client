import { TokenOptions } from './TokenOptions';
export declare class Token {
    private urlOpenViduServer;
    private secret;
    private tokenURL;
    private hostname;
    private port;
    constructor(urlOpenViduServer: string, secret: string);
    generateToken(sessionId: string, callback: Function): any;
    generateToken(sessionId: string, tokenOptions: TokenOptions, callback: Function): any;
    private getBasicAuth();
    private setHostnameAndPort();
}
