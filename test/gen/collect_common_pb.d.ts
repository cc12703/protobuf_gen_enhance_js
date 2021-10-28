// package: collect.common
// file: collect_common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AutoStatusInfo extends jspb.Message { 
    getDevid(): string;
    setDevid(value: string): AutoStatusInfo;
    getDevstatus(): string;
    setDevstatus(value: string): AutoStatusInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AutoStatusInfo.AsObject;
    static toObject(includeInstance: boolean, msg: AutoStatusInfo): AutoStatusInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AutoStatusInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AutoStatusInfo;
    static deserializeBinaryFromReader(message: AutoStatusInfo, reader: jspb.BinaryReader): AutoStatusInfo;
}

export namespace AutoStatusInfo {
    export type AsObject = {
        devid: string,
        devstatus: string,
    }
}
