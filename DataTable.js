(function(){
'use strict';
    
angular.module('DataTableApp', [])
.controller('DataTableController', DataTableController)
.service('DataTableService', DataTableService)

DataTableController.$inject = ['DataTableService'];
function DataTableController(DataTableService){
	var dataShow = this;
	dataShow.firstRow = DataTableService.getFirstRow();
	dataShow.secondRow = DataTableService.getSecondRow();
	dataShow.thirdRow = DataTableService.getThirdRow();
	dataShow.forthRow = DataTableService.getForthRow();
	dataShow.fifthRow = DataTableService.getFifthRow();
	dataShow.sixthRow = DataTableService.getSixthRow();
	dataShow.seventhRow = DataTableService.getSeventhRow();
	dataShow.eighthRow = DataTableService.getEighthRow();
	dataShow.ninthRow = DataTableService.getNinthRow();
};

function DataTableService(){
	var service = this;
	var firstRowData = [
	{name: "威胁燃料安全的事件次数", quantity: 0},
	{name: "辐射防护监查未完成次数", quantity: 1, color: "#56a3ad"},
	{name: "严重违反辐射防护管理规定", quantity: 0},
	{name: "放射源违规行为", quantity: 3, color: "#d78064"},
	{name: "辐射防护A/B/C类违规行为", quantity: 0},
	];
	var secondRowData = [
	{name: "里程碑验收按计划完成", quantity: 0},
	{name: "生产准备年度计划完成率", quantity: "100%"},
	];
	var thirdRowData = [
	{name: "首次临界后非计划停堆次数", quantity: 0},
	{name: "1级以上运行事件数量", quantity: 0},
	{name: "重要SSC缺陷响应及时率", quantity: "100%"},
	{name: "重要设备预防性维修超期数", quantity: 0},
	{name: "高风险识别/控制失效次数", quantity: 0},
	{name: "预防性维修计划完成率", quantity: 0},
	{name: "FME失效次数", quantity: 0},
	{name: "工作文件包退包率", quantity: "100%"},
	{name: "1级工单隔离/准备响应异常", quantity: 0},
	{name: "工单计划开工/完工率", quantity: "100%"},
	{name: "重复性维修数", quantity: 0},
	{name: "功能再鉴定一次合格率", quantity: "100%"},
	{name: "工作许可证超期数", quantity: 0},
	];
	var forthRowData = [
	{name: "重大设备损坏事件次数", quantity:0},
	{name: "机组电源丧失事件次数", quantity:0},
	{name: "机组水源丧失事件次数", quantity:0},
	{name: "机组气源丧失事件次数", quantity:0},
	{name: "TOTO设备可靠性水平红灯", quantity:0},
	{name: "机组暖源丧失事件次数", quantity:0},
	];
	var fifthRowData = [
	{name: "采购不及时工作等备件数", quantity:0},
	{name: "紧急备件采购需求数量", quantity:0},
	{name: "紧急备件采购到货延误次数", quantity:0},
	];
	var sixthRowData = [
	{name: "突发环境事件发生次数", quantity:0},
	{name: "被地方环保部门处罚的事件", quantity:0},
	{name: "公司三废违规排放次数", quantity:0},
	{name: "发生职业病病例次数", quantity:0},
	{name: "厂内生活污水排放达标率", quantity:"100%"},
	];
	var seventhRowData = [
	{name: "生产技术文件编写完成率", quantity:"100%"},
	{name: "生产技术文件验证生效率", quantity:"100%"},
	];
	var eighthRowData = [
	{name: "调试H点到场率", quantity:"100%"},
	{name: "调试W点到场率", quantity:"100%"},
	{name: "调试程序审查意见返回率", quantity:"100%"},
	{name: "调试参与中人因失误次数", quantity:0},
	];
	var ninthRowData = [
	{name: "工程尾项处理及时关闭率", quantity:"100%"},
	{name: "TOP按计划移交完成率", quantity:"100%"},
	{name: "TOM按计划移交完成率", quantity:"100%"},
	{name: "TOTO移交按计划完成率", quantity:"100%"},
	{name: "BHO移交按计划完成率", quantity:"100%"},
	{name: "联检意见延期率", quantity:"100%"},
	{name: "遗留项清除率", quantity:"100%"},
	];
	
	service.getFirstRow = function(){
		return firstRowData;
	};
	service.getSecondRow = function(){
		return secondRowData;
	};
	service.getThirdRow = function(){
		return thirdRowData;
	};
	service.getForthRow = function(){
		return forthRowData;
	};
	service.getFifthRow = function(){
		return fifthRowData;
	};
	service.getSixthRow = function(){
		return sixthRowData;
	};
	service.getSeventhRow = function(){
		return seventhRowData;
	};
	service.getEighthRow = function(){
		return eighthRowData;
	};
	service.getNinthRow = function(){
		return ninthRowData;
	};
	
};
	
})()