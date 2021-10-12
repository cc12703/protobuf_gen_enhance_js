


import assert from 'assert'
import * as pb from 'root/out/collect_material_pb'







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
		fTypeList: ['filter-one', 'filter-two'],
	})

	assert(info.getFTypeList().length === 2)
	assert(info.getFTypeList()[0] === 'filter-one')
}


function doTestMap() {
	const info = new pb.TestMapReq()
	info.fromObject({
		limit: 10,
		gSimilarMap: [['one', 'name'], ['two', 'sex']]
	})

	assert(info.getGSimilarMap().getLength() === 2)
	assert(info.getGSimilarMap().get('one') === 'name')
}




doTestNormal()
doTestNest()
doTestList()
doTestMap()