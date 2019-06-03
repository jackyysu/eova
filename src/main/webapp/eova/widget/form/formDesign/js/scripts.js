var webpage = "";
var view = null;
var dynContent = "";
function supportstorage() {
	if (typeof window.localStorage=='object') 
		return true;
	else
		return false;		
}

function handleSaveLayout() {
	var e = $(".demo").html();
	if (!stopsave && e != window.demoHtml) {
		stopsave++;
		window.demoHtml = e;
		saveLayout();
		stopsave--;
	}
}

var layouthistory; 
function saveLayout(){
	var data = layouthistory;
	if (!data) {
		data={};
		data.count = 0;
		data.list = [];
	}
	if (data.list.length>data.count) {
		for (i=data.count;i<data.list.length;i++)
			data.list[i]=null;
	}
	data.list[data.count] = window.demoHtml;
	data.count++;
	if (supportstorage()) {
		localStorage.setItem("layoutdata",JSON.stringify(data));
	}
	layouthistory = data;
	//console.log(data);
	/*$.ajax({  
		type: "POST",  
		url: "/build/saveLayout",  
		data: { layout: $('.demo').html() },  
		success: function(data) {
			//updateButtonsVisibility();
		}
	});*/
}

 function downloadLayout(){
	
	$.ajax({  
		type: "POST",  
		url: "/build/downloadLayout",  
		data: { layout: $('#download-layout').html() },  
		success: function(data) { window.location.href = '/build/download'; }
	});
}

function downloadHtmlLayout(){
	$.ajax({  
		type: "POST",  
		url: "/build/downloadLayout",  
		data: { layout: $('#download-layout').html() },  
		success: function(data) { window.location.href = '/build/downloadHtml'; }
	});
}

function undoLayout() {
	var data = layouthistory;
	//console.log(data);
	if (data) {
		if (data.count<2) return false;
		window.demoHtml = data.list[data.count-2];
		data.count--;
		$('.demo').html(window.demoHtml);
		if (supportstorage()) {
			localStorage.setItem("layoutdata",JSON.stringify(data));
		}
		return true;
	}
	return false;
	/*$.ajax({  
		type: "POST",  
		url: "/build/getPreviousLayout",  
		data: { },  
		success: function(data) {
			undoOperation(data);
		}
	});*/
}

function redoLayout() {
	var data = layouthistory;
	if (data) {
		if (data.list[data.count]) {
			window.demoHtml = data.list[data.count];
			data.count++;
			$('.demo').html(window.demoHtml);
			if (supportstorage()) {
				localStorage.setItem("layoutdata",JSON.stringify(data));
			}
			return true;
		}
	}
	return false;
	/*
	$.ajax({  
		type: "POST",  
		url: "/build/getPreviousLayout",  
		data: { },  
		success: function(data) {
			redoOperation(data);
		}
	});*/
}

function handleJsIds() {
	handleModalIds();
	handleAccordionIds();
	handleCarouselIds();
	handleTabsIds()
}
function handleAccordionIds() {
	var e = $(".demo #myAccordion");
	var t = randomNumber();
	var n = "accordion-" + t;
	var r;
	e.attr("id", n);
	e.find(".accordion-group").each(function(e, t) {
		r = "accordion-element-" + randomNumber();
		$(t).find(".accordion-toggle").each(function(e, t) {
			$(t).attr("data-parent", "#" + n);
			$(t).attr("href", "#" + r)
		});
		$(t).find(".accordion-body").each(function(e, t) {
			$(t).attr("id", r)
		})
	})
}
function handleCarouselIds() {
	var e = $(".demo #myCarousel");
	var t = randomNumber();
	var n = "carousel-" + t;
	e.attr("id", n);
	e.find(".carousel-indicators li").each(function(e, t) {
		$(t).attr("data-target", "#" + n)
	});
	e.find(".left").attr("href", "#" + n);
	e.find(".right").attr("href", "#" + n)
}
function handleModalIds() {
	var e = $(".demo #myModalLink");
	var t = randomNumber();
	var n = "modal-container-" + t;
	var r = "modal-" + t;
	e.attr("id", r);
	e.attr("href", "#" + n);
	e.next().attr("id", n)
}
function handleTabsIds() {
	var e = $(".demo #myTabs");
	var t = randomNumber();
	var n = "tabs-" + t;
	e.attr("id", n);
	e.find(".tab-pane").each(function(e, t) {
		var n = $(t).attr("id");
		var r = "panel-" + randomNumber();
		$(t).attr("id", r);
		$(t).parent().parent().find("a[href=#" + n + "]").attr("href", "#" + r)
	})
}
function randomNumber() {
	return randomFromInterval(1, 1e6)
}
function randomFromInterval(e, t) {
	return Math.floor(Math.random() * (t - e + 1) + e)
}
function gridSystemGenerator() {
	$(".lyrow .preview input").bind("keyup", function() {
		var e = 0;
		var t = "";
		var n = $(this).val().split(" ", 12);
		$.each(n, function(n, r) {
			e = e + parseInt(r);
			t += '<div class="span' + r + ' column"></div>'
		});
		if (e == 12) {
			$(this).parent().next().children().html(t);
			$(this).parent().prev().show();
			var rowWidth = $(".demo").width()-5;
			var colWidth = rowWidth/12;
			$(".demo").css("display","none");
			$(".row-fluid .span12").css({"float":"left","margin-left":"0px","width":colWidth*12});
			$(".row-fluid .span11").css({"float":"left","margin-left":"0px","width":colWidth*11});
			$(".row-fluid .span10").css({"float":"left","margin-left":"0px","width":colWidth*10});
			$(".row-fluid .span9").css({"float":"left","margin-left":"0px","width":colWidth*9});
			$(".row-fluid .span8").css({"float":"left","margin-left":"0px","width":colWidth*8});
			$(".row-fluid .span7").css({"float":"left","margin-left":"0px","width":colWidth*7});
			$(".row-fluid .span6").css({"float":"left","margin-left":"0px","width":colWidth*6});
			$(".row-fluid .span5").css({"float":"left","margin-left":"0px","width":colWidth*5});
			$(".row-fluid .span4").css({"float":"left","margin-left":"0px","width":colWidth*4});
			$(".row-fluid .span3").css({"float":"left","margin-left":"0px","width":colWidth*3});
			$(".row-fluid .span2").css({"float":"left","margin-left":"0px","width":colWidth*2});
			$(".row-fluid .span1").css({"float":"left","margin-left":"0px","width":colWidth*1});
		} else {
			$(this).parent().prev().hide()
		}
	})
}
function configurationElm(e, t) {
	$(".demo").delegate(".configuration > a", "click", function(e) {
		e.preventDefault();
		var t = $(this).parent().next().next().children();
		$(this).toggleClass("active");
		t.toggleClass($(this).attr("rel"))
	});
	$(".demo").delegate(".configuration .dropdown-menu a", "click", function(e) {
		e.preventDefault();
		var t = $(this).parent().parent();
		var n = t.parent().parent().next().next().children();
		t.find("li").removeClass("active");
		$(this).parent().addClass("active");
		var r = "";
		t.find("a").each(function() {
			r += $(this).attr("rel") + " "
		});
		t.parent().removeClass("open");
		n.removeClass(r);
		n.addClass($(this).attr("rel"))
	})
}
function removeElm() {
	$(".demo").delegate(".remove", "click", function(e) {
		e.preventDefault();
		
		//console.log(this);
		//检测父节点，需要回复被移动过来的表单控件 (如果内部有容器 ，需要把下面的节点全部删除线)
		var name = $(this).attr("name");
		if(name ){
			var box_id = "box_"+name.substring(6);
			draggable(box_id,true);//恢复
		}else{//可能是容器
			var view = $(this).next().next().next();
			childObjject(view);
		}
		
		
		$(this).parent().remove();
		if (!$(".demo .lyrow").length > 0) {
			clearDemo()
		}
	})
}


function childObjject(viewObj){
	// $(this).find("input['type=radio']")
	//$(viewObj).find("a['class=radio']");
	//var closes =$(viewObj).find("a[class='remove label label-important']");
	 var closes =$(viewObj).find("a[href='#close']");
	 for(var i =0;i<closes.length;i++){
		 $(closes[i]).trigger("click");
	 }
	 
	 
}

function clearDemo() {
	//$(".demo").empty();
	//=>
	$(".normalf").empty();
	$(".hiddenf").empty();
	//主动加 好像有些bug，暂时关掉
	//var html = $($("#estRows").children()[0]).html();
	//$(".hiddenf").append(html);
	layouthistory = null;
	if (supportstorage())
		localStorage.removeItem("layoutdata");
}
function removeMenuClasses() {
	$("#menu-layoutit li button").removeClass("active")
}
function changeStructure(e, t) {
	$("#download-layout ." + e).removeClass(e).addClass(t)
}
function cleanHtml(e) {
	$(e).parent().append($(e).children().html())
}
function downloadLayoutSrc(isold) {
	
	var e = "";
	dynContent = $(".demo").html();
	var demo_normalf = $(".demo.normalf").clone();
	demo_normalf.find("script").each(function() {
		this.remove() ;
	});
	
	var demo_hiddenf = $(".demo.hiddenf").clone();
	demo_hiddenf.find("script").each(function() {
		this.remove() ;
	});
	
	
	//var tempContent = $(".demo.normalf").html()+$(".demo.hiddenf").html();
	//$("#download-layout").empty();
	$("#download-layout").children().html(demo_normalf.html());
	//$("#download-layout").children().html($(".demo.hiddenf").html());
	
	
	
	var t = $("#download-layout").children();
	
	//layui添加的部分
	t.find(".layui-form-select").not(".selecttree,.checkbox").remove();
	
	t.find(".preview, .configuration, .drag, .remove").remove();
	t.find(".lyrow").addClass("removeClean");
	t.find(".box-element").addClass("removeClean");
	t.find(".lyrow .lyrow .lyrow .lyrow .lyrow .removeClean").each(function() {
		cleanHtml(this)
	});
	t.find(".lyrow .lyrow .lyrow .lyrow .removeClean").each(function() {
		cleanHtml(this)
	});
	t.find(".lyrow .lyrow .lyrow .removeClean").each(function() {
		cleanHtml(this)
	});
	t.find(".lyrow .lyrow .removeClean").each(function() {
		cleanHtml(this)
	});
	t.find(".lyrow .removeClean").each(function() {
		cleanHtml(this)
	});
	t.find(".removeClean").each(function() {
		cleanHtml(this)
	});
	t.find(".removeClean").remove();
	$("#download-layout .column").removeClass("ui-sortable");
	$("#download-layout .column").removeClass("clearfix").children().removeClass("column");
	if ($("#download-layout .container").length > 0) {
		changeStructure("column", "row")
	}
	
	var temp = $("#download-layout").html();
	formatSrc = $.htmlClean($("#download-layout").html(), {
		format: true,
		allowedAttributes: [
			["id"],
			["class"],
			["data-toggle"],
			["data-target"],
			["data-parent"],
			["role"],
			["data-dismiss"],
			["aria-labelledby"],
			["aria-hidden"],
			["data-slide-to"],
			["data-slide"],
			["col"],
			
			["title"],["defaultvalue"],["placeholder"],["lay-verify"],["readonly"],["value"]
		]
	});
	
	var forms = null;
		forms = html2json(formatSrc);	
		
		//console.log("+++++++++++++++");
		//var children = $(demo_hiddenf).find(".layui-input-block");
		if(forms != null)
		html2jsonHidden(demo_hiddenf,forms);
	
	var jsonStr = JSON.stringify(forms); 
	
	var formatJs = "<script type='text/javascript'></script>";
	//$("#download-layout").html(jsonStr);
	
	
	
	$("#downloadModal textarea").empty();
	$("#downloadModal textarea").val(jsonStr);
	//webpage = formatSrc+formatJs;
}

function html2jsonHidden(demo_hiddenf,forms){
	var oneForm = new Object();
	 oneForm.name='隐藏域';
	 oneForm.order = 0;//order=0 为隐藏
	 oneForm.datas = new Array();
	 
	 forms. push(oneForm);
	 var l = 1;
	demo_hiddenf.find(".layui-input-block").each(function() {
		
		
		var	object =	$(this).children()[0];
		if(object.localName == 'div'){//提取内部的hidden字段
			object = $(object).find("input[type='hidden']")[0];
		}
		
		
		var oneLine = new Object();
		oneLine.line = l++;
		oneLine.data = new Array();
		
		var oneFiled = new Object();
		oneLine.data. push(oneFiled);
		//提取值
		var placeholder = $(object).attr("placeholder");
		var verify = $(object).attr("lay-verify");
		var ismust = false;
		if(verify){
			if(verify.indexOf("required") == 0){
				ismust = true;
				verify = verify.substring("required".length);
				if(verify.indexOf("|") == 0)
					verify = verify.substring(1);
			}
		}
		var defaultVal = $(object).attr("value");
		if(!defaultVal){
			defaultVal =	$(object).val();
			if(defaultVal != null)
				defaultVal = defaultVal.trim();
		}
		
		oneFiled.id = $(object).attr("id");
		oneFiled.defaultVal = defaultVal;
		oneFiled.placeholder = placeholder;
		oneFiled.verify = verify;
		oneFiled.ismust = ismust;
		 
		 oneForm.datas. push(oneLine);
	});
}


var currentDocument = null;
var timerSave = 1000;
var stopsave = 0;
var startdrag = 0;
var demoHtml = $(".demo").html();
var currenteditor = null;
$(window).resize(function() {
	$("body").css("min-height", $(window).height() - 90);
	
	$(".hiddenf").css("min-height", 150);
	$(".normalf").css("min-height", $(window).height() - 250);
});


//hiddenf

//解析成我需要的格式数据
function html2json(content){
	var dom = $.parseHTML(content);//解析Html串
	
//	var lines = $(content).children(".clearfix");
	var lines = $(content).children();
	
	var arrayForm = new Array();　
	var formOrder = 1;
	
	var l = 0;
	var oneForm = null;
	for(var x=0;x<lines.length;x++){
		
		if(lines[x].localName == 'div'){
			if(oneForm == null){
				$("#warn2").modal('show');
				return null;
			}else{
				$('#warn2').modal('hide');
			}
				
			
			console.log('line:'+(l) +'开始。');
			var tt = lines[x];
			//获取列
			 var columns =   $(lines[x]).children(".column");
			 
//			 <div class="span6 column">
//				<div class="form-group">
//					<label class="layui-form-label" title="年级[grade]">年级</label>
//					<div class="layui-input-block">
//						<select id="grade" name="grade"><option>请选择</option>
//							<option value="7">初一</option></select>
//					</div>
//				</div>
//			</div>
			 
//			 "datas": [
//			        {
//			          "line": "1",
//			          "data": "name,tag1,tag2,id"
//			        },
//			        {
//			          "line": "2",
//			          "data": "password,relation_pro"
//			        }
//			      ]
			 var oneline = new Object();
			 oneline.line = l;
			 oneForm.datas.push(oneline);
			 
			 
			 var lineDatas = new Array();//字段搞成list吧，因为很多属性了
			 oneline.data = lineDatas;
			 
			 
			 for(var c=0;c<columns.length;c++){//原则不允许放2个 form-group ，如果出现2个则只取第一个
				 var column = $(columns[c]);
				//获取列宽
					var columnClass = column.attr("class");//<div class="span6 column">
					var columnWidth = columnClass.substring(4,columnClass.indexOf("column")).trim();
					
					
					var oneFiled = new Object();
					lineDatas.push(oneFiled);
					
					oneFiled.width = columnWidth;
					
					
					var lable = $(column.children(".form-group")[0]).children()[0];
					if(!lable)
						continue;
					var object = $(column.children(".form-group")[0]).children()[1];//比较复杂 可能是一个div ，或者是一个object，如果是div需要从div里边提取 hidden对象
					
					var name = $(lable).text();//字段名
					var explain =$(lable).attr("title");//注释 可能会存在"*",因为必填加的在前面
					if(name && name.indexOf("*") == 0){
						name = name.substring(1);
					}
					
					
					object =	$(object).children()[0];
					if(object.localName == 'div'){//提取内部的hidden字段
						object = $(object).find("input[type='hidden']")[0];
					}
					//console.log(object);

					//提取值
					var placeholder = $(object).attr("placeholder");
					var verify = $(object).attr("lay-verify");
					var ismust = false;
					if(verify){
						if(verify.indexOf("required") == 0){
							ismust = true;
							verify = verify.substring("required".length);
							if(verify.indexOf("|") == 0)
								verify = verify.substring(1);
						}
					}
					var defaultVal = $(object).attr("value");
					if(!defaultVal){
						defaultVal =	$(object).val();
						if(defaultVal != null)
							defaultVal = defaultVal.trim();
					}
					
					var readOnly = false;
					if($(object).attr("readonly"))
						readOnly = true;
					
					console.log(name+',列宽:'+columnWidth+" 对象："+object.outerHTML );
					
					
					oneFiled.name = name;
					oneFiled.explain = explain;
					
					oneFiled.id = $(object).attr("id");
					oneFiled.defaultVal = defaultVal;
					oneFiled.placeholder = placeholder;
					oneFiled.verify = verify;
					oneFiled.ismust = ismust;
					
					oneFiled.readOnly = readOnly;
					
			 }
			 
			 console.log('l:'+(l) +'结束。');
			
			 l++;
		}else{//分组信息
//			<h5 class="page-header">
//			请输入分组名
//			</h5>			
		 var formName =	$(lines[x]).text().trim();
		// console.log(formName);
		 
		 oneForm = new Object();
		 oneForm.name=formName;
		 oneForm.order = (formOrder++);
		 oneForm.datas = new Array();
		 arrayForm. push(oneForm);
		 l=1;
		}
		
		
		
	}
	
	var jsonStr = JSON.stringify(arrayForm);       //转为JSON字符串
	//console.log(jsonStr);
	
	return arrayForm;
	
}

//老版需求（暂时未实现）


function restoreData(){
	if (supportstorage()) {
		layouthistory = JSON.parse(localStorage.getItem("layoutdata"));
		if (!layouthistory) return false;
		window.demoHtml = layouthistory.list[layouthistory.count-1];
		if (window.demoHtml) $(".demo").html(window.demoHtml);
	}
}

function initContainer(){
	$(".demo").sortable({
		connectWith: ".demo",
		opacity: .35,
		handle: ".drag",
		start: function(e,t) {
			if (!startdrag) stopsave++;
			startdrag = 1;
		},
		stop: function(e,t) {
			if(stopsave>0) stopsave--;
			startdrag = 0;
		}
	});
	
	$(".demo .column").sortable({
		connectWith: ".column",
		opacity: .35,
		handle: ".drag",
		start: function(e,t) {
			if (!startdrag) stopsave++;
			startdrag = 1;
		},
		stop: function(e,t) {
			if(stopsave>0) stopsave--;
			startdrag = 0;
		}
	});
	configurationElm();
}

var id = _getRandomString(6);

function _getRandomString(len) {  
    len = len || 32;  
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1  
    var maxPos = $chars.length;  
    var pwd = '';  
    for (i = 0; i < len; i++) {  
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));  
    }  
    return pwd;  
}  

$(document).ready(function() {
	CKEDITOR.disableAutoInline = true;
	restoreData();
	var contenthandle = CKEDITOR.replace( 'contenteditor' ,{
		language: 'en',
		contentsCss: ['formDesign/css/bootstrap-combined.min.css'],
		allowedContent: true
	});
	//$("body").css("min-height", $(window).height() - 50);
	//$(".demo").css("min-height", $(window).height() - 130);
	
	var formUid = $("#formUid").val();
	if(formUid!=null && formUid!=""){
		$.ajax({
			url:common.getPath()+"/formManage/queryFormByFormUid",
			method:"post",
			async:false,
			data:{
				formUid:formUid
			},
			success:function(result){
				if(result.status==0){
					$("#proUid").val(result.data.proUid);
					$("#proVersion").val(result.data.proVersion);
					$(".demo").html(result.data.dynContent);
				}
			}
		});
	}else{
		clearDemo();
	}
	
	$(".sidebar-nav .lyrow").draggable({
		connectToSortable: ".demo",
		helper: "clone",
		handle: ".drag",
		start: function(e,t) {
			if (!startdrag) stopsave++;
			startdrag = 1;
		},
		drag: function(e, t) {
			t.helper.width(400)
		},
		stop: function(e, t) {
			$(".demo .column").sortable({
				opacity: .35,
				connectWith: ".column",
				start: function(e,t) {
					if (!startdrag) stopsave++;
					startdrag = 1;
				},
				stop: function(e,t) {
					if(stopsave>0) stopsave--;
					startdrag = 0;
				}
			});
			if(stopsave>0) stopsave--;
			startdrag = 0;
		}
	});
	
	var temp = "";
	$(".sidebar-nav .box").draggable({
		connectToSortable: ".column",
		//helper: "clone",
		handle: ".drag",
		//revert: false ,
	
		helper: function() {
			//修改源
			//console.log(this);
			
			 var input_block = $(this).find(".layui-input-block")[0];
			// $(input_block).append('<input type="text" id="{f.en!}" name="{f.en!}" value="" placeholder=""  lay-verify="length[2~5]" autocomplete="off" class="layui-input">');
				
			 var id = $(this).attr("id");
			 id = id.substring(4);
			// console.log("id:"+id);
			 //
			//提取要添加的部分 对象，字段
			
			 
			 $(input_block).append(objField[id]);
			// $($(this).find(".layui-input-block")[0]). empty() ;
			
			//console.log(obj);
			 return $(this).clone();	
		  },
		
		start: function(e,t) {
			
			//console.log("start");
			
			 //var input_block = $(this).find(".layui-input-block")[0];
			// $(input_block).append('<input type="text" id="{f.en!}" name="{f.en!}" value="" placeholder=""  lay-verify="length[2~5]" autocomplete="off" class="layui-input">');
				
			
			
			
			 
			
			
			temp = id;
			$(".sidebar-nav .box").find(".edit-attr").attr("id",id);
			if (!startdrag) stopsave++;
			startdrag = 1;
		},
		drag: function(e, t) {
			//console.log("drag");
			t.helper.width(400)
		},
		stop: function(e,t) {
			//console.log("stop:"+$(this).attr("id"));
			
			 
			// $(this).attr("id",$(this).attr("id")+"1")
			//this 原数据（id修改 顺便检查下copy值）
			//copy的数据，
			//console.log(t.helper[0]);
			
//			var script  = $(this). find("script");
//			//script.remove();
//			//console.log($(this).find(".layui-input-block"));
//			var srcId = $($($(this).find(".layui-input-block")[0]).children()[0]).attr("id");
//			console.log("srcId:"+srcId);
//			if(srcId.indexOf("TEMP") == -1){
//				//$(this).attr("id","TEMP_"+srcId);
//			}
			//$(this).attr("id",""$(this).attr("id")+"1");
			
			
			 //console.log(script);
			//判断是否拖拽过去了
			var myclass = $(this).parent().attr("class");
			
			var bb = $(".sidebar-nav .box").find("#"+temp);
			var p = bb.parent().parent().parent();
			//console.log(p.attr("class"));
			//console.log($(this).parent().attr("type")+":"+$(this).parent().attr("class"));
			//console.log();
			id = _getRandomString(6);
			$(".sidebar-nav .box").find("#"+temp).attr("id",id);
			handleJsIds();
			if(stopsave>0) stopsave--;
			startdrag = 0;
			var inputId = _getRandomString(4);
			
			if($("#"+temp).parent().parent().find(".subDiv").find("input").length>0){
				switch($("#"+temp).parent().parent().find(".subDiv").find("input").attr("type")){
					case "text":{
						inputId = "text-"+inputId;
						break;
					};
					case "tel":{
						inputId = "number-"+inputId;
						break;
					};
					case "date":{
						inputId = "date-"+inputId;
						break;
					};
					case "button":{
						inputId = "button-"+inputId;
						break;
					};
				}
			}else if($("#"+temp).parent().parent().find(".subDiv").find("select").length>0){
				inputId = "select-"+inputId;
			}else if($("#"+temp).parent().parent().find(".subDiv").find("textarea").length>0){
				if($("#"+inputId).attr("class")=="editor_textarea"){
					inputId = "editor-"+inputId;
				}else{
					inputId = "textarea-"+inputId;
				}
			}
			
			if($("#"+temp).parent().parent().find(".subDiv").find("input[type='radio']").length>0 ||
					$("#"+temp).parent().parent().find(".subDiv").find("input[type='checkbox']").length>0){
				$("#"+temp).parent().parent().find(".subDiv").find("input").attr("class",inputId);
			}else{
				$($("#"+temp).parent().parent().find(".subDiv").children()[0]).attr("id",inputId);
				if($("#"+inputId).attr("class")=="editor_textarea"){
					CKEDITOR.replace(inputId ,{
						language: 'en',
						contentsCss: ['formDesign/css/bootstrap-combined.min.css'],
						allowedContent: true
					});
				}
			}
			
			//需要设置原始节点不可移动且id=''=>id='TEMP_id',当节点被删除的时候再次恢复
			//t.find(".layui-input-block");
//			var box_id = $(this).attr("id");//box_id
//			
//			var id = box_id.substring("box_".length);
//			
//			var objs = $($(this).find(".layui-input-block")[0]).children();
//			
//			for(var o=0;o<objs.length;o++){
//				var tempId = $(objs[o]).attr("id");
//				if(tempId.indexOf(id) != -1){
//					 $(objs[o]).attr("id","TEMP_"+tempId);
//				}
//			}
			
			//console.log("======>");
			//console.log(this);
			//console.log(e);
			//console.log(t.helper[0]);
			//清除数据同时
			$($(this).find(".layui-input-block")[0]). empty() ;
			//$( "#"+$(this).attr("id") ).draggable( "disable" );
			
			
			
			//var box_id = $(this).attr("id");

			//console.log($("#"+box_id.substring(4)).parent().parent().parent().parent());
			//var p = $("#"+box_id.substring(4)).parent().parent().parent().parent().parent().parent().parent().parent();
			//console.log($(t.helper[0]).parent());
			//console.log($(t.helper[0]).parent().parent());
			//console.log($(t.helper[0]).parent().parent().parent());
			//console.log($(t.helper[0]).parent().parent().parent().parent());
			
			//console.log(p.attr("class")); 
			//if(p.attr("class").indexOf("hiddenf") == -1)
			
			//都显示属性框，至于是不是真需要显示 由后续决定
			$("#"+temp).trigger("click");
			
			
		}
	});
	
	
	
	initContainer();
	$('body.edit .demo').on("click","[data-target=#editorModal]",function(e) {
		e.preventDefault();
		currenteditor = $(this).parent().parent().find('.view');
		var eText = currenteditor.html();
		contenthandle.setData(eText);
	});
	$("#savecontent").click(function(e) {
		e.preventDefault();
		currenteditor.html(contenthandle.getData());
	});
	$("[data-target=#downloadModal]").click(function(e) {
		e.preventDefault();
		downloadLayoutSrc();
	});

	$("[data-target=#shareModal]").click(function(e) {
		e.preventDefault();
		handleSaveLayout();
	});
	$("#download").click(function() {
		downloadLayout();
		return false
	});
	$("#downloadhtml").click(function() {
		downloadHtmlLayout();
		return false
	});
	$("#edit").click(function() {
		$("body").removeClass("devpreview sourcepreview");
		$("body").addClass("edit");
		removeMenuClasses();
		$(this).addClass("active");
		return false
	});
	$("#clear").click(function(e) {
		e.preventDefault();
		clearDemo()
	});
	$("#devpreview").click(function() {
		$("body").removeClass("edit sourcepreview");
		$("body").addClass("devpreview");
		removeMenuClasses();
		$(this).addClass("active");
		return false
	});
	$("#sourcepreview").click(function() {
		$("body").removeClass("edit");
		$("body").addClass("devpreview sourcepreview");
		removeMenuClasses();
		$(this).addClass("active");
		return false
	});
	$("#fluidPage").click(function(e) {
		e.preventDefault();
		changeStructure("container", "container-fluid");
		$("#fixedPage").removeClass("active");
		$(this).addClass("active");
		downloadLayoutSrc()
	});
	$("#fixedPage").click(function(e) {
		e.preventDefault();
		changeStructure("container-fluid", "container");
		$("#fluidPage").removeClass("active");
		$(this).addClass("active");
		downloadLayoutSrc()
	});
	$(".nav-header").click(function() {
		$(".sidebar-nav .boxes, .sidebar-nav .rows").hide();
		$(this).next().slideDown()
	});
	$('#undo').click(function(){
		stopsave++;
		if (undoLayout()) initContainer();
		stopsave--;
	});
	$('#redo').click(function(){
		stopsave++;
		if (redoLayout()) initContainer();
		stopsave--;
	});
	removeElm();
	gridSystemGenerator();
	setInterval(function() {
		handleSaveLayout()
	}, timerSave)
});

/*var filedAttr = {
	filedCodeId : "",// 字段Id
	filedIndex : "",// 字段索引
	filedName : "",// 字段名称
	filedDes : "",// 字段描述
	filedLength : "",// 字段长度
	filedType : "",// 字段类型
	multiSepar : "",// 多值分割符
	multiValue : "",// 是否多值
	formUid : "" //表单id
}
*/

//name不能为空，且会覆盖之前的配置
function saveJson() {
	var jsonstr = $("#downloadModal textarea").val();//list
	var formName = $("#formName").val();
	//var obj = new Object();
	//obj[formName] = JSON.parse(jsonstr);
	
	if(formName == null || formName.length == 0){
		alert('请输入form名~');
		return;
	}
	
	//调用接口保存""
	$.ajax({
        type: "POST",
        url: "/form/saveDesign/"+OBJ_CODE+'-'+formName,
        contentType: "application/json; charset=utf-8",
        data: jsonstr,//JSON.stringify(obj),
        dataType: "json",
        success: function (message) {
            if (message.status === 200) {
               alert(message.msg);
            }else{
            	alert(message.msg);
            }
        }
    });
	
	
}

function saveHtml() {
	webpage = $("#downloadModal textarea").val();
	if (navigator.appName == "Microsoft Internet Explorer"
			&& window.ActiveXObject) {
		var locationFile = location.href.toString();
		var dlg = false;
		with (document) {
			ir = createElement('iframe');
			ir.id = 'ifr';
			ir.location = 'about.blank';
			ir.style.display = 'none';
			body.appendChild(ir);
			with (getElementById('ifr').contentWindow.document) {
				open("text/html", "replace");
				charset = "utf-8";
				write(webpage);
				close();
				document.charset = "utf-8";
				dlg = execCommand('SaveAs', false, locationFile
						+ "webpage.html");
			}
			return dlg;
		}
	} else {
		webpage = webpage;
		var blob = new Blob([ webpage ], {
			type : "text/html;charset=utf-8"
		});
		saveAs(blob, "webpage.html");
	}
}

