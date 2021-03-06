// package: collect.material
// file: collect_material.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as collect_common_pb from "./collect_common_pb";

export class TestNormalReq extends jspb.Message { 
    getType(): string;
    setType(value: string): TestNormalReq;
    getUid(): string;
    setUid(value: string): TestNormalReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestNormalReq.AsObject;
    static toObject(includeInstance: boolean, msg: TestNormalReq): TestNormalReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestNormalReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestNormalReq;
    static deserializeBinaryFromReader(message: TestNormalReq, reader: jspb.BinaryReader): TestNormalReq;
}

export namespace TestNormalReq {
    export type AsObject = {
        type: string,
        uid: string,
    }
}

export class TestNormalResp extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestNormalResp.AsObject;
    static toObject(includeInstance: boolean, msg: TestNormalResp): TestNormalResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestNormalResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestNormalResp;
    static deserializeBinaryFromReader(message: TestNormalResp, reader: jspb.BinaryReader): TestNormalResp;
}

export namespace TestNormalResp {
    export type AsObject = {
    }
}

export class TestNestReq extends jspb.Message { 
    getUid(): string;
    setUid(value: string): TestNestReq;
    getAdddate(): number;
    setAdddate(value: number): TestNestReq;

    hasSinfo(): boolean;
    clearSinfo(): void;
    getSinfo(): TestNestReq.SubInfo | undefined;
    setSinfo(value?: TestNestReq.SubInfo): TestNestReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestNestReq.AsObject;
    static toObject(includeInstance: boolean, msg: TestNestReq): TestNestReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestNestReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestNestReq;
    static deserializeBinaryFromReader(message: TestNestReq, reader: jspb.BinaryReader): TestNestReq;
}

export namespace TestNestReq {
    export type AsObject = {
        uid: string,
        adddate: number,
        sinfo?: TestNestReq.SubInfo.AsObject,
    }


    export class SubInfo extends jspb.Message { 
        getContenturl(): string;
        setContenturl(value: string): SubInfo;
        getThumburl(): string;
        setThumburl(value: string): SubInfo;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SubInfo.AsObject;
        static toObject(includeInstance: boolean, msg: SubInfo): SubInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SubInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SubInfo;
        static deserializeBinaryFromReader(message: SubInfo, reader: jspb.BinaryReader): SubInfo;
    }

    export namespace SubInfo {
        export type AsObject = {
            contenturl: string,
            thumburl: string,
        }
    }

}

export class TestNestResp extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestNestResp.AsObject;
    static toObject(includeInstance: boolean, msg: TestNestResp): TestNestResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestNestResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestNestResp;
    static deserializeBinaryFromReader(message: TestNestResp, reader: jspb.BinaryReader): TestNestResp;
}

export namespace TestNestResp {
    export type AsObject = {
    }
}

export class TestListReq extends jspb.Message { 
    getPage(): number;
    setPage(value: number): TestListReq;
    clearFtypeList(): void;
    getFtypeList(): Array<string>;
    setFtypeList(value: Array<string>): TestListReq;
    addFtype(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestListReq.AsObject;
    static toObject(includeInstance: boolean, msg: TestListReq): TestListReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestListReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestListReq;
    static deserializeBinaryFromReader(message: TestListReq, reader: jspb.BinaryReader): TestListReq;
}

export namespace TestListReq {
    export type AsObject = {
        page: number,
        ftypeList: Array<string>,
    }
}

export class TestListResp extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestListResp.AsObject;
    static toObject(includeInstance: boolean, msg: TestListResp): TestListResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestListResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestListResp;
    static deserializeBinaryFromReader(message: TestListResp, reader: jspb.BinaryReader): TestListResp;
}

export namespace TestListResp {
    export type AsObject = {
    }
}

export class TestMapReq extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): TestMapReq;

    getGsimilarMap(): jspb.Map<string, string>;
    clearGsimilarMap(): void;

    getGcommonMap(): jspb.Map<string, TestCommonInfo>;
    clearGcommonMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestMapReq.AsObject;
    static toObject(includeInstance: boolean, msg: TestMapReq): TestMapReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestMapReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestMapReq;
    static deserializeBinaryFromReader(message: TestMapReq, reader: jspb.BinaryReader): TestMapReq;
}

export namespace TestMapReq {
    export type AsObject = {
        limit: number,

        gsimilarMap: Array<[string, string]>,

        gcommonMap: Array<[string, TestCommonInfo.AsObject]>,
    }
}

export class TestMapResp extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestMapResp.AsObject;
    static toObject(includeInstance: boolean, msg: TestMapResp): TestMapResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestMapResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestMapResp;
    static deserializeBinaryFromReader(message: TestMapResp, reader: jspb.BinaryReader): TestMapResp;
}

export namespace TestMapResp {
    export type AsObject = {
    }
}

export class TestCommonInfo extends jspb.Message { 
    getUid(): number;
    setUid(value: number): TestCommonInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestCommonInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TestCommonInfo): TestCommonInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestCommonInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestCommonInfo;
    static deserializeBinaryFromReader(message: TestCommonInfo, reader: jspb.BinaryReader): TestCommonInfo;
}

export namespace TestCommonInfo {
    export type AsObject = {
        uid: number,
    }
}

export class TestRefReq extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): collect_common_pb.AutoStatusInfo | undefined;
    setStatus(value?: collect_common_pb.AutoStatusInfo): TestRefReq;

    hasCommon(): boolean;
    clearCommon(): void;
    getCommon(): TestCommonInfo | undefined;
    setCommon(value?: TestCommonInfo): TestRefReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestRefReq.AsObject;
    static toObject(includeInstance: boolean, msg: TestRefReq): TestRefReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestRefReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestRefReq;
    static deserializeBinaryFromReader(message: TestRefReq, reader: jspb.BinaryReader): TestRefReq;
}

export namespace TestRefReq {
    export type AsObject = {
        status?: collect_common_pb.AutoStatusInfo.AsObject,
        common?: TestCommonInfo.AsObject,
    }
}

export class TestRefResp extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestRefResp.AsObject;
    static toObject(includeInstance: boolean, msg: TestRefResp): TestRefResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestRefResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestRefResp;
    static deserializeBinaryFromReader(message: TestRefResp, reader: jspb.BinaryReader): TestRefResp;
}

export namespace TestRefResp {
    export type AsObject = {
    }
}
