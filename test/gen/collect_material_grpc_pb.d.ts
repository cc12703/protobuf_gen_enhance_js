// package: collect.material
// file: collect_material.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as collect_material_pb from "./collect_material_pb";
import * as collect_common_pb from "./collect_common_pb";

interface IApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    testNormal: IApiService_ItestNormal;
    testNest: IApiService_ItestNest;
    testList: IApiService_ItestList;
    testMap: IApiService_ItestMap;
}

interface IApiService_ItestNormal extends grpc.MethodDefinition<collect_material_pb.TestNormalReq, collect_material_pb.TestNormalResp> {
    path: "/collect.material.Api/testNormal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<collect_material_pb.TestNormalReq>;
    requestDeserialize: grpc.deserialize<collect_material_pb.TestNormalReq>;
    responseSerialize: grpc.serialize<collect_material_pb.TestNormalResp>;
    responseDeserialize: grpc.deserialize<collect_material_pb.TestNormalResp>;
}
interface IApiService_ItestNest extends grpc.MethodDefinition<collect_material_pb.TestNestReq, collect_material_pb.TestNestResp> {
    path: "/collect.material.Api/testNest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<collect_material_pb.TestNestReq>;
    requestDeserialize: grpc.deserialize<collect_material_pb.TestNestReq>;
    responseSerialize: grpc.serialize<collect_material_pb.TestNestResp>;
    responseDeserialize: grpc.deserialize<collect_material_pb.TestNestResp>;
}
interface IApiService_ItestList extends grpc.MethodDefinition<collect_material_pb.TestListReq, collect_material_pb.TestListResp> {
    path: "/collect.material.Api/testList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<collect_material_pb.TestListReq>;
    requestDeserialize: grpc.deserialize<collect_material_pb.TestListReq>;
    responseSerialize: grpc.serialize<collect_material_pb.TestListResp>;
    responseDeserialize: grpc.deserialize<collect_material_pb.TestListResp>;
}
interface IApiService_ItestMap extends grpc.MethodDefinition<collect_material_pb.TestMapReq, collect_material_pb.TestMapResp> {
    path: "/collect.material.Api/testMap";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<collect_material_pb.TestMapReq>;
    requestDeserialize: grpc.deserialize<collect_material_pb.TestMapReq>;
    responseSerialize: grpc.serialize<collect_material_pb.TestMapResp>;
    responseDeserialize: grpc.deserialize<collect_material_pb.TestMapResp>;
}

export const ApiService: IApiService;

export interface IApiServer extends grpc.UntypedServiceImplementation {
    testNormal: grpc.handleUnaryCall<collect_material_pb.TestNormalReq, collect_material_pb.TestNormalResp>;
    testNest: grpc.handleUnaryCall<collect_material_pb.TestNestReq, collect_material_pb.TestNestResp>;
    testList: grpc.handleUnaryCall<collect_material_pb.TestListReq, collect_material_pb.TestListResp>;
    testMap: grpc.handleUnaryCall<collect_material_pb.TestMapReq, collect_material_pb.TestMapResp>;
}

export interface IApiClient {
    testNormal(request: collect_material_pb.TestNormalReq, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestNormalResp) => void): grpc.ClientUnaryCall;
    testNormal(request: collect_material_pb.TestNormalReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestNormalResp) => void): grpc.ClientUnaryCall;
    testNormal(request: collect_material_pb.TestNormalReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestNormalResp) => void): grpc.ClientUnaryCall;
    testNest(request: collect_material_pb.TestNestReq, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestNestResp) => void): grpc.ClientUnaryCall;
    testNest(request: collect_material_pb.TestNestReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestNestResp) => void): grpc.ClientUnaryCall;
    testNest(request: collect_material_pb.TestNestReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestNestResp) => void): grpc.ClientUnaryCall;
    testList(request: collect_material_pb.TestListReq, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestListResp) => void): grpc.ClientUnaryCall;
    testList(request: collect_material_pb.TestListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestListResp) => void): grpc.ClientUnaryCall;
    testList(request: collect_material_pb.TestListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestListResp) => void): grpc.ClientUnaryCall;
    testMap(request: collect_material_pb.TestMapReq, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestMapResp) => void): grpc.ClientUnaryCall;
    testMap(request: collect_material_pb.TestMapReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestMapResp) => void): grpc.ClientUnaryCall;
    testMap(request: collect_material_pb.TestMapReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestMapResp) => void): grpc.ClientUnaryCall;
}

export class ApiClient extends grpc.Client implements IApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public testNormal(request: collect_material_pb.TestNormalReq, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestNormalResp) => void): grpc.ClientUnaryCall;
    public testNormal(request: collect_material_pb.TestNormalReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestNormalResp) => void): grpc.ClientUnaryCall;
    public testNormal(request: collect_material_pb.TestNormalReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestNormalResp) => void): grpc.ClientUnaryCall;
    public testNest(request: collect_material_pb.TestNestReq, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestNestResp) => void): grpc.ClientUnaryCall;
    public testNest(request: collect_material_pb.TestNestReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestNestResp) => void): grpc.ClientUnaryCall;
    public testNest(request: collect_material_pb.TestNestReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestNestResp) => void): grpc.ClientUnaryCall;
    public testList(request: collect_material_pb.TestListReq, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestListResp) => void): grpc.ClientUnaryCall;
    public testList(request: collect_material_pb.TestListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestListResp) => void): grpc.ClientUnaryCall;
    public testList(request: collect_material_pb.TestListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestListResp) => void): grpc.ClientUnaryCall;
    public testMap(request: collect_material_pb.TestMapReq, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestMapResp) => void): grpc.ClientUnaryCall;
    public testMap(request: collect_material_pb.TestMapReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestMapResp) => void): grpc.ClientUnaryCall;
    public testMap(request: collect_material_pb.TestMapReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collect_material_pb.TestMapResp) => void): grpc.ClientUnaryCall;
}
