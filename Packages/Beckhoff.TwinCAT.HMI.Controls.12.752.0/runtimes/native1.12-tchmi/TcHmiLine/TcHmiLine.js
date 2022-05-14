var TcHmi,__classPrivateFieldGet=this&&this.__classPrivateFieldGet||function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};!function(TcHmi){let Controls;!function(Controls){let Beckhoff;!function(Beckhoff){var _a,_TcHmiLine_tchmiFQN;class TcHmiLine extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__resizeEventDestroyEvent=null,this.__onResolverForStrokeColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("strokeColor"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__strokeColor)||(this.__strokeColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StrokeColor"}),this.__processStrokeColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiLine,_a,"f",_TcHmiLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiLine,_a,"f",_TcHmiLine_tchmiFQN):"")+", Id="+this.getId()+", Attribute=StrokeColor] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))}}__previnit(){if(this.__elementTemplateRoot=this.__element.find(".TcHmi_Controls_Beckhoff_TcHmiLine-template"),0===this.__elementTemplateRoot.length&&(this.__elementTemplateRoot=this.__element.find(".tchmi-line-template")),this.__elementSvg=this.__elementTemplateRoot.find(".TcHmi_Controls_Beckhoff_TcHmiLine-template-svg"),0===this.__elementSvg.length&&(this.__elementSvg=this.__elementTemplateRoot.find(".tchmi-line-template-svg")),this.__elementSvgLine=this.__elementTemplateRoot.find(".TcHmi_Controls_Beckhoff_TcHmiLine-template-svg-line"),0===this.__elementSvgLine.length&&(this.__elementSvgLine=this.__elementTemplateRoot.find(".tchmi-line-template-svg-line")),0===this.__elementTemplateRoot.length||0===this.__elementSvg.length||0===this.__elementSvgLine.length)throw new Error("Invalid Template.html");super.__previnit()}__init(){super.__init()}__attach(){super.__attach(),this.__resizeEventDestroyEvent=TcHmi.EventProvider.register(this.__id+".onResized",this.__onResized())}__detach(){super.__detach(),null!==this.__resizeEventDestroyEvent&&(this.__resizeEventDestroyEvent(),this.__resizeEventDestroyEvent=null)}destroy(){this.__keepAlive||super.destroy()}__onResized(){return(evt,ctrl)=>{this.__drawLine()}}setStrokeColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("StrokeColor"));let resolverInfo=this.__objectResolvers.get("strokeColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("strokeColor",{resolver:resolver,watchCallback:this.__onResolverForStrokeColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForStrokeColorWatchCallback)})}getStrokeColor(){return this.__strokeColor}__processStrokeColor(){TcHmi.StyleProvider.processStrokeColor(this.__elementSvgLine,this.__strokeColor)}setStrokeStyle(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("StrokeStyle")),convertedValue!==this.__strokeStyle&&(this.__strokeStyle=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StrokeStyle"}),this.__processStrokeStyle())}getStrokeStyle(){return this.__strokeStyle}__processStrokeStyle(){TcHmi.StyleProvider.setSimpleElementStyle(this.__elementSvgLine,"stroke-dasharray",this.__strokeStyle)}setStrokeThickness(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("StrokeThickness")),convertedValue!==this.__strokeThickness&&(this.__strokeThickness=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StrokeThickness"}),this.__processStrokeThickness())}getStrokeThickness(){return this.__strokeThickness}__processStrokeThickness(){"number"!=typeof this.__strokeThickness?TcHmi.StyleProvider.setSimpleElementStyle(this.__elementSvgLine,"stroke-width",null):TcHmi.StyleProvider.setSimpleElementStyle(this.__elementSvgLine,"stroke-width",this.__strokeThickness.toString())}getStrokeThicknessUnit(){return"px"}__processStrokeThicknessUnit(){}setX1(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("X1")),convertedValue!==this.__x1&&(this.__x1=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"X1"}),this.__processX1())}getX1(){return this.__x1}__processX1(){this.__drawLine()}getX1Unit(){return"px"}__processX1Unit(){}setY1(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Y1")),convertedValue!==this.__y1&&(this.__y1=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Y1"}),this.__processY1())}getY1(){return this.__y1}__processY1(){this.__drawLine()}getY1Unit(){return"px"}__processY1Unit(){}setX2(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("X2")),convertedValue!==this.__x2&&(this.__x2=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"X2"}),this.__processX2())}getX2(){return this.__x2}__processX2(){this.__drawLine()}getX2Unit(){return"px"}__processX2Unit(){}setY2(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Y2")),convertedValue!==this.__y2&&(this.__y2=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Y2"}),this.__processY2())}getY2(){return this.__y2}__processY2(){this.__drawLine()}getY2Unit(){return"px"}__processY2Unit(){}__drawLine(){if(void 0===this.__x1||null===this.__x1||void 0===this.__y1||null===this.__y1||void 0===this.__x2||null===this.__x2||void 0===this.__y2||null===this.__y2)return;let width=this.getRenderedWidth();if(!width)return;let height=this.getRenderedHeight();if(!height)return;let points=[this.__x1,this.__y1,this.__x2,this.__y2],minX=null,minY=null,maxX=null,maxY=null;for(let i=0,ii=points.length;i<ii;i++)i%2==0?((null===minX||points[i]<minX)&&(minX=points[i]),(null===maxX||points[i]>maxX)&&(maxX=points[i])):((null===minY||points[i]<minY)&&(minY=points[i]),(null===maxY||points[i]>maxY)&&(maxY=points[i]));let polygonWidth=maxX-minX,polygonHeight=maxY-minY;polygonWidth=0!==polygonWidth?polygonWidth:width,polygonHeight=0!==polygonHeight?polygonHeight:height;let scaleX=width/polygonWidth,scaleY=height/polygonHeight;switch(this.__scaleMode){case"ScaleToFill":for(let i=0,ii=points.length;i<ii;i++)points[i]=i%2==0?(points[i]-minX)*scaleX:(points[i]-minY)*scaleY;break;case"ScaleToFit":const scale=scaleX<scaleY?scaleX:scaleY;for(let i=0,ii=points.length;i<ii;i++)points[i]=i%2==0?(points[i]-minX)*scale:(points[i]-minY)*scale;break;case"ScaleToFitWidth":for(let i=0,ii=points.length;i<ii;i++)points[i]=i%2==0?(points[i]-minX)*scaleX:(points[i]-minY)*scaleX;break;case"ScaleToFitHeight":for(let i=0,ii=points.length;i<ii;i++)points[i]=i%2==0?(points[i]-minX)*scaleY:(points[i]-minY)*scaleY}this.__elementSvgLine[0].setAttribute("x1",points[0].toString()),this.__elementSvgLine[0].setAttribute("y1",points[1].toString()),this.__elementSvgLine[0].setAttribute("x2",points[2].toString()),this.__elementSvgLine[0].setAttribute("y2",points[3].toString())}setScaleMode(valueNew){let convertedValue=TcHmi.ValueConverter.toScaleModeString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ScaleMode")),convertedValue!==this.__scaleMode&&(this.__scaleMode=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ScaleMode"}),this.__processScaleMode())}getScaleMode(){return this.__scaleMode}__processScaleMode(){this.__drawLine()}}_TcHmiLine_tchmiFQN={value:"TcHmi.Controls.Beckhoff."+(_a=TcHmiLine).name},Beckhoff.TcHmiLine=TcHmiLine}(Beckhoff=Controls.Beckhoff||(Controls.Beckhoff={}))}(Controls=TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiLine","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiLine);