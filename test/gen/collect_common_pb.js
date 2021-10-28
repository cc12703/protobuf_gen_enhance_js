// source: collect_common.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.collect.common.AutoStatusInfo', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.collect.common.AutoStatusInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.collect.common.AutoStatusInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.collect.common.AutoStatusInfo.displayName = 'proto.collect.common.AutoStatusInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.collect.common.AutoStatusInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.collect.common.AutoStatusInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.collect.common.AutoStatusInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.collect.common.AutoStatusInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    devid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    devstatus: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.collect.common.AutoStatusInfo}
 */
proto.collect.common.AutoStatusInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.collect.common.AutoStatusInfo;
  return proto.collect.common.AutoStatusInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.collect.common.AutoStatusInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.collect.common.AutoStatusInfo}
 */
proto.collect.common.AutoStatusInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevstatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.collect.common.AutoStatusInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.collect.common.AutoStatusInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.collect.common.AutoStatusInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.collect.common.AutoStatusInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDevstatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string devID = 1;
 * @return {string}
 */
proto.collect.common.AutoStatusInfo.prototype.getDevid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.collect.common.AutoStatusInfo} returns this
 */
proto.collect.common.AutoStatusInfo.prototype.setDevid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string devStatus = 2;
 * @return {string}
 */
proto.collect.common.AutoStatusInfo.prototype.getDevstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.collect.common.AutoStatusInfo} returns this
 */
proto.collect.common.AutoStatusInfo.prototype.setDevstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.collect.common);
