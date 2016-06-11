define(["js/citydata","js/iscroll.js"],function(data,scroll){
	var City = function(dom){
		this.wrap = $(dom);
		this.init();
		this.hide();
	}
	City.prototype = {
		tpl:{
			tplBody : '<div class="city">'+
						'<p class="city-hot">热门</p>'+
						'<ul class="city-ci"></ul>'+
						'<ul class="zimu"></ul>'+
					'</div>',
			tplli : '<li></li>'

		},
		init:function(){
			$(".section").append($(this.tpl.tplBody));
			this.render();
		},
		bindEvent:function(){
			that = this;
			$("#find-city").on("focus",function(){
				that.show();
				$(".txt1").focus();
			})
			
			cityList.forEach(function(i){
				$(".txt1").on("keyup",function(){
					var txt = $(this).text();
					var len = txt.size;
					txt2=i[2].charAt(1);
					if(txt2 == txt){
						
					}
					
				})
			})
			
			$(".mark").on("click",function(){
				that.hide()
			})

		},
		render:function(){
			var arr=[],
			hotcity="",
			str="",
			_dacity="";
			cityList.forEach(function(i){
				this._letter=i[2].slice(0,1).toUpperCase();
				that = this;
				if(arr.indexOf(that._letter)==-1){
					arr.push(that._letter);
				}
				
			})
			arr.sort();
			for(var i=0;i<arr.length;i++){
				str+="<p class='zi'>"+arr[i]+"</p><ul class='zimu'>";
				
				cityList.forEach(function(k){
					
					if(k[1].charAt(0).toUpperCase()==arr[i]){
						str+="<li>"+k[0]+"</li>"
					}

				})

				str+="</ul>"
			}	
			$(".section").append(str);
			
			
			hotList.forEach(function(i){
				hotcity+="<li>"+i[0]+"</li>"
			})
			$(".city-ci").append(hotcity);
			this.bindEvent();
			
			
		},
		hide:function(){
			$(".mark").hide();
			$(".cenlender").hide();
		},
		show:function(){
			$(".mark").show().css("opacity",0.5);
			$(".cenlender").show();
		}



		
	}
	return City;

})