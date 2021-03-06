


import assert from 'assert'
import * as pb from 'root/out/collect_material_pb'
import { AutoStatusInfo } from 'root/out/collect_common_pb'






function doTestNormal() {
	const info = new pb.TestNormalReq()
	info.setType('test-type')
	info.setUid('1234-1234')

	const sObj = info.toObject()
	assert(sObj.type === 'test-type')
	assert(sObj.uid === '1234-1234')

	info.fromObject({
		type: 'type-two',
		uid: '222-222'
	})
	assert(info.getType() === 'type-two')
	assert(info.getUid() === '222-222')
}

function doTestNormalForBuild() {
	const info = pb.TestNormalReq.buildObject({
		type: 'type-two',
		uid: '222-222'
	})
	assert(info.getType() === 'type-two')
	assert(info.getUid() === '222-222')
}

function doTestNest() {
	const info = new pb.TestNestReq()
	info.fromObject({
		uid: '1111',
		addDate: 1000,
		sInfo: {
			contentUrl: 'url-content',
			thumbUrl: 'url-thumb'
		}
	})


	assert(info.getUid() === '1111')
	assert(info.getSInfo()!!.getContentUrl() === 'url-content')
	assert(info.getSInfo()!!.getThumbUrl() === 'url-thumb')
}


function doTestList() {
	const info = new pb.TestListReq()
	info.fromObject({
		page: 1,
		fType: ['filter-one', 'filter-two'],
	})

	assert(info.getFType().length === 2)
	assert(info.getFType()[0] === 'filter-one')
}


function doTestMap() {
	const info = new pb.TestMapReq()
	info.fromObject({
		limit: 10,
		gSimilar: [['one', 'name'], ['two', 'sex']],
		gCommon: [['one', {uid: 1234}]]
		
	})

	assert(info.getGSimilar().getLength() === 2)
	assert(info.getGSimilar().get('one') === 'name')
	assert(info.getGCommon().get('one')?.getUid() === 1234)
}

function doTestMapEmpty() {
	const info = new pb.TestMapReq()
	info.fromObject({
		limit: 10,
		gSimilar: [['one', 'name']]
	} as any)

	assert(info.getGSimilar().getLength() === 1)
	assert(info.getGCommon().getLength() === 0)
}

function doTestNoPkgName() {
	const info = new AutoStatusInfo()
	info.fromObject({
		devID: 'test-id',
		devStatus: 'test-status'
	}) 

	assert(info.getDevID() === 'test-id')
	assert(info.getDevStatus() === 'test-status')
}


doTestNormal()
doTestNest()
doTestList()
doTestMap()
doTestMapEmpty()

doTestNormalForBuild()

doTestNoPkgName()