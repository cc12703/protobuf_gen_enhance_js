// package: collect.material
// file: collect_material.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TestNormalReq extends jspb.Message {
				toObject(includeInstance?: boolean): TestNormalReq.AsObject;
				fromObject(obj: TestNormalReq.AsObject): void;

				static toObject(includeInstance: boolean, msg: TestNormalReq): TestNormalReq.AsObject;
				static fromObject(obj: TestNormalReq.AsObject, msg: TestNormalReq): void;
				static buildObject(obj: TestNormalReq.AsObject): TestNormalReq
				getType(): string;
setType(value: string): TestNormalReq;
getUid(): string;
setUid(value: string): TestNormalReq;
serializeBinary(): Uint8Array;
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
				toObject(includeInstance?: boolean): TestNormalResp.AsObject;
				fromObject(obj: TestNormalResp.AsObject): void;

				static toObject(includeInstance: boolean, msg: TestNormalResp): TestNormalResp.AsObject;
				static fromObject(obj: TestNormalResp.AsObject, msg: TestNormalResp): void;
				static buildObject(obj: TestNormalResp.AsObject): TestNormalResp
				serializeBinary(): Uint8Array;
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
				toObject(includeInstance?: boolean): TestNestReq.AsObject;
				fromObject(obj: TestNestReq.AsObject): void;

				static toObject(includeInstance: boolean, msg: TestNestReq): TestNestReq.AsObject;
				static fromObject(obj: TestNestReq.AsObject, msg: TestNestReq): void;
				static buildObject(obj: TestNestReq.AsObject): TestNestReq
				getUid(): string;
setUid(value: string): TestNestReq;
getAddDate(): number;
setAddDate(value: number): TestNestReq;
hasSinfo(): boolean;
clearSinfo(): void;
getSInfo(): TestNestReq.SubInfo | undefined;
setSInfo(value?: TestNestReq.SubInfo): TestNestReq;
serializeBinary(): Uint8Array;
static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
static serializeBinaryToWriter(message: TestNestReq, writer: jspb.BinaryWriter): void;
static deserializeBinary(bytes: Uint8Array): TestNestReq;
static deserializeBinaryFromReader(message: TestNestReq, reader: jspb.BinaryReader): TestNestReq;
			}

export namespace TestNestReq {
    export type AsObject = {
        uid: string,
        addDate: number,
        sInfo?: TestNestReq.SubInfo.AsObject,
    }


    export class SubInfo extends jspb.Message {
                    toObject(includeInstance?: boolean): SubInfo.AsObject;
                    fromObject(obj: SubInfo.AsObject): void;

                    static toObject(includeInstance: boolean, msg: SubInfo): SubInfo.AsObject;
                    static fromObject(obj: SubInfo.AsObject, msg: SubInfo): void;
                    static buildObject(obj: SubInfo.AsObject): SubInfo
                    getContentUrl(): string;
    setContentUrl(value: string): SubInfo;
    getThumbUrl(): string;
    setThumbUrl(value: string): SubInfo;
    serializeBinary(): Uint8Array;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubInfo;
    static deserializeBinaryFromReader(message: SubInfo, reader: jspb.BinaryReader): SubInfo;
                }

    export namespace SubInfo {
        export type AsObject = {
            contentUrl: string,
            thumbUrl: string,
        }
    }

}

export class TestNestResp extends jspb.Message {
				toObject(includeInstance?: boolean): TestNestResp.AsObject;
				fromObject(obj: TestNestResp.AsObject): void;

				static toObject(includeInstance: boolean, msg: TestNestResp): TestNestResp.AsObject;
				static fromObject(obj: TestNestResp.AsObject, msg: TestNestResp): void;
				static buildObject(obj: TestNestResp.AsObject): TestNestResp
				serializeBinary(): Uint8Array;
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
				toObject(includeInstance?: boolean): TestListReq.AsObject;
				fromObject(obj: TestListReq.AsObject): void;

				static toObject(includeInstance: boolean, msg: TestListReq): TestListReq.AsObject;
				static fromObject(obj: TestListReq.AsObject, msg: TestListReq): void;
				static buildObject(obj: TestListReq.AsObject): TestListReq
				getPage(): number;
setPage(value: number): TestListReq;
clearFType(): void;
getFType(): Array<string>;
setFType(value: Array<string>): TestListReq;
addFType(value: string, index?: number): string;
serializeBinary(): Uint8Array;
static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
static serializeBinaryToWriter(message: TestListReq, writer: jspb.BinaryWriter): void;
static deserializeBinary(bytes: Uint8Array): TestListReq;
static deserializeBinaryFromReader(message: TestListReq, reader: jspb.BinaryReader): TestListReq;
			}

export namespace TestListReq {
    export type AsObject = {
        page: number,
        fType: Array<string>,
    }
}

export class TestListResp extends jspb.Message {
				toObject(includeInstance?: boolean): TestListResp.AsObject;
				fromObject(obj: TestListResp.AsObject): void;

				static toObject(includeInstance: boolean, msg: TestListResp): TestListResp.AsObject;
				static fromObject(obj: TestListResp.AsObject, msg: TestListResp): void;
				static buildObject(obj: TestListResp.AsObject): TestListResp
				serializeBinary(): Uint8Array;
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
				toObject(includeInstance?: boolean): TestMapReq.AsObject;
				fromObject(obj: TestMapReq.AsObject): void;

				static toObject(includeInstance: boolean, msg: TestMapReq): TestMapReq.AsObject;
				static fromObject(obj: TestMapReq.AsObject, msg: TestMapReq): void;
				static buildObject(obj: TestMapReq.AsObject): TestMapReq
				getLimit(): number;
setLimit(value: number): TestMapReq;
getGSimilar(): jspb.Map<string, string>;
clearGSimilar(): void;
serializeBinary(): Uint8Array;
static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
static serializeBinaryToWriter(message: TestMapReq, writer: jspb.BinaryWriter): void;
static deserializeBinary(bytes: Uint8Array): TestMapReq;
static deserializeBinaryFromReader(message: TestMapReq, reader: jspb.BinaryReader): TestMapReq;
			}

export namespace TestMapReq {
    export type AsObject = {
        limit: number,

        gSimilar: Array<[string, string]>,
    }
}

export class TestMapResp extends jspb.Message {
				toObject(includeInstance?: boolean): TestMapResp.AsObject;
				fromObject(obj: TestMapResp.AsObject): void;

				static toObject(includeInstance: boolean, msg: TestMapResp): TestMapResp.AsObject;
				static fromObject(obj: TestMapResp.AsObject, msg: TestMapResp): void;
				static buildObject(obj: TestMapResp.AsObject): TestMapResp
				serializeBinary(): Uint8Array;
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
