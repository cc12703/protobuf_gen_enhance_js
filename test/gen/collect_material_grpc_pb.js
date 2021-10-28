// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var collect_material_pb = require('./collect_material_pb.js');
var collect_common_pb = require('./collect_common_pb.js');

function serialize_collect_material_TestListReq(arg) {
  if (!(arg instanceof collect_material_pb.TestListReq)) {
    throw new Error('Expected argument of type collect.material.TestListReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_collect_material_TestListReq(buffer_arg) {
  return collect_material_pb.TestListReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_collect_material_TestListResp(arg) {
  if (!(arg instanceof collect_material_pb.TestListResp)) {
    throw new Error('Expected argument of type collect.material.TestListResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_collect_material_TestListResp(buffer_arg) {
  return collect_material_pb.TestListResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_collect_material_TestMapReq(arg) {
  if (!(arg instanceof collect_material_pb.TestMapReq)) {
    throw new Error('Expected argument of type collect.material.TestMapReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_collect_material_TestMapReq(buffer_arg) {
  return collect_material_pb.TestMapReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_collect_material_TestMapResp(arg) {
  if (!(arg instanceof collect_material_pb.TestMapResp)) {
    throw new Error('Expected argument of type collect.material.TestMapResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_collect_material_TestMapResp(buffer_arg) {
  return collect_material_pb.TestMapResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_collect_material_TestNestReq(arg) {
  if (!(arg instanceof collect_material_pb.TestNestReq)) {
    throw new Error('Expected argument of type collect.material.TestNestReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_collect_material_TestNestReq(buffer_arg) {
  return collect_material_pb.TestNestReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_collect_material_TestNestResp(arg) {
  if (!(arg instanceof collect_material_pb.TestNestResp)) {
    throw new Error('Expected argument of type collect.material.TestNestResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_collect_material_TestNestResp(buffer_arg) {
  return collect_material_pb.TestNestResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_collect_material_TestNormalReq(arg) {
  if (!(arg instanceof collect_material_pb.TestNormalReq)) {
    throw new Error('Expected argument of type collect.material.TestNormalReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_collect_material_TestNormalReq(buffer_arg) {
  return collect_material_pb.TestNormalReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_collect_material_TestNormalResp(arg) {
  if (!(arg instanceof collect_material_pb.TestNormalResp)) {
    throw new Error('Expected argument of type collect.material.TestNormalResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_collect_material_TestNormalResp(buffer_arg) {
  return collect_material_pb.TestNormalResp.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApiService = exports.ApiService = {
  testNormal: {
    path: '/collect.material.Api/testNormal',
    requestStream: false,
    responseStream: false,
    requestType: collect_material_pb.TestNormalReq,
    responseType: collect_material_pb.TestNormalResp,
    requestSerialize: serialize_collect_material_TestNormalReq,
    requestDeserialize: deserialize_collect_material_TestNormalReq,
    responseSerialize: serialize_collect_material_TestNormalResp,
    responseDeserialize: deserialize_collect_material_TestNormalResp,
  },
  testNest: {
    path: '/collect.material.Api/testNest',
    requestStream: false,
    responseStream: false,
    requestType: collect_material_pb.TestNestReq,
    responseType: collect_material_pb.TestNestResp,
    requestSerialize: serialize_collect_material_TestNestReq,
    requestDeserialize: deserialize_collect_material_TestNestReq,
    responseSerialize: serialize_collect_material_TestNestResp,
    responseDeserialize: deserialize_collect_material_TestNestResp,
  },
  testList: {
    path: '/collect.material.Api/testList',
    requestStream: false,
    responseStream: false,
    requestType: collect_material_pb.TestListReq,
    responseType: collect_material_pb.TestListResp,
    requestSerialize: serialize_collect_material_TestListReq,
    requestDeserialize: deserialize_collect_material_TestListReq,
    responseSerialize: serialize_collect_material_TestListResp,
    responseDeserialize: deserialize_collect_material_TestListResp,
  },
  testMap: {
    path: '/collect.material.Api/testMap',
    requestStream: false,
    responseStream: false,
    requestType: collect_material_pb.TestMapReq,
    responseType: collect_material_pb.TestMapResp,
    requestSerialize: serialize_collect_material_TestMapReq,
    requestDeserialize: deserialize_collect_material_TestMapReq,
    responseSerialize: serialize_collect_material_TestMapResp,
    responseDeserialize: deserialize_collect_material_TestMapResp,
  },
};

exports.ApiClient = grpc.makeGenericClientConstructor(ApiService);
