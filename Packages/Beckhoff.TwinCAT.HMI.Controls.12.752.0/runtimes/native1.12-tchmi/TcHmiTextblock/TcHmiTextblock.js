var TcHmi,__classPrivateFieldGet=this&&this.__classPrivateFieldGet||function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};!function(TcHmi){let Controls;!function(Controls){let Beckhoff;!function(Beckhoff){var _a,_TcHmiTextblock_tchmiFQN;class TcHmiTextblock extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__handleThemeChangeEvent=()=>{"Content"===this.getHeightMode()&&this.__processHeight()},this.__onResolverForContentPaddingWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("contentPadding"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__contentPadding)||(this.__contentPadding=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ContentPadding"}),this.__processContentPadding()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiTextblock,_a,"f",_TcHmiTextblock_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiTextblock,_a,"f",_TcHmiTextblock_tchmiFQN):"")+", Id="+this.getId()+", Attribute=ContentPadding] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__onResolverForTextColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("textColor"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__textColor)||(this.__textColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextColor"}),this.__processTextColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiTextblock,_a,"f",_TcHmiTextblock_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiTextblock,_a,"f",_TcHmiTextblock_tchmiFQN):"")+", Id="+this.getId()+", Attribute=TextColor] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))}}__previnit(){if(this.__elementTemplateRoot=this.__element.find(".TcHmi_Controls_Beckhoff_TcHmiTextblock-template"),0===this.__elementTemplateRoot.length&&(this.__elementTemplateRoot=this.__element.find(".tchmi-textblock-template")),this.__elementTextContainer=this.__elementTemplateRoot.find(".TcHmi_Controls_Beckhoff_TcHmiTextblock-template-text-container"),0===this.__elementTextContainer.length&&(this.__elementTextContainer=this.__elementTemplateRoot.find(".tchmi-textblock-template-text-container")),0===this.__elementTemplateRoot.length||0===this.__elementTextContainer.length)throw new Error("Invalid Template.html");super.__previnit()}__init(){super.__init()}__attach(){super.__attach(),"Content"===this.getHeightMode()&&this.__processHeight()}__detach(){super.__detach(),this.__onResizedEventDestroyEvent&&(this.__onResizedEventDestroyEvent(),this.__onResizedEventDestroyEvent=void 0),this.__onThemeChangedEventDestroyEvent&&(this.__onThemeChangedEventDestroyEvent(),this.__onThemeChangedEventDestroyEvent=void 0)}destroy(){this.__keepAlive||super.destroy()}__processWidth(){super.__processWidth(),"Content"===this.getHeightMode()&&this.__processHeight()}setHeightMode(valueNew){let convertedValue=TcHmi.ValueConverter.toSizeModeWithContent(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("HeightMode")),convertedValue!==this.__heightMode&&(this.__heightMode=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"HeightMode"}),this.__processHeightMode())}__processHeight(){if("Content"===this.getHeightMode()){this.__intHeight=null;const contentPixelSize=this.__getContentHeight();null!==contentPixelSize&&(this.__intHeight=contentPixelSize+"px")}super.__processHeight()}__onResized(){return(evt,ctrl)=>{this.__asyncWorkData["Beckhoff.TcHmiTextblock.triggerRebuildHeight"]=!0,this.__requestAsyncWork()}}__doAsyncWork(){this.__isDestroyed||(this.__isAttached?(super.__doAsyncWork(),!0===this.__asyncWorkData["Beckhoff.TcHmiTextblock.triggerRebuildHeight"]&&this.__processHeight(),this.__asyncWorkData["Beckhoff.TcHmiTextblock.triggerRebuildHeight"]=!1):this.__asyncWorkData["Beckhoff.TcHmiTextblock.triggerRebuildHeight"]=!1)}__getContentHeight(){const cleanup=()=>{this.__onResizedEventDestroyEvent&&(this.__onResizedEventDestroyEvent(),this.__onResizedEventDestroyEvent=void 0)};return"Content"!==this.getHeightMode()?(cleanup(),super.__getContentHeight()):!1===this.__isAttached?(cleanup(),null):this.__text?(this.__onResizedEventDestroyEvent||(this.__onResizedEventDestroyEvent=TcHmi.EventProvider.register(this.__id+".onResized",this.__onResized())),this.__onThemeChangedEventDestroyEvent||(this.__onThemeChangedEventDestroyEvent=TcHmi.EventProvider.register("onThemeDataChanged",this.__handleThemeChangeEvent)),this.__elementTextContainer[0].offsetHeight):(cleanup(),null)}setText(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Text")),convertedValue!==this.__text&&(this.__text=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Text"}),this.__processText())}getText(){return this.__text}__processText(){this.__elementTextContainer[0].textContent=tchmi_decode_control_characters(this.__text),"Content"===this.getHeightMode()&&this.__processHeight()}setTextHorizontalAlignment(valueNew){let convertedValue=TcHmi.ValueConverter.toHorizontalAlignment(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextHorizontalAlignment")),convertedValue!==this.__textHorizontalAlignment&&(this.__textHorizontalAlignment=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextHorizontalAlignment"}),this.__processTextHorizontalAlignment())}getTextHorizontalAlignment(){return this.__textHorizontalAlignment}__processTextHorizontalAlignment(){this.__elementTemplateRoot[0].style.textAlign=this.__textHorizontalAlignment?this.__textHorizontalAlignment.toLowerCase():""}setTextVerticalAlignment(valueNew){let convertedValue=TcHmi.ValueConverter.toVerticalAlignment(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextVerticalAlignment")),convertedValue!==this.__textVerticalAlignment&&(this.__textVerticalAlignment=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextVerticalAlignment"}),this.__processTextVerticalAlignment())}getTextVerticalAlignment(){return this.__textVerticalAlignment}__processTextVerticalAlignment(){TcHmi.StyleProvider.processContentVerticalAlignment(this.__elementTemplateRoot,this.__textVerticalAlignment)}setTextFontSize(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSize")),convertedValue!==this.__textFontSize&&(this.__textFontSize=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSize"}),this.__processTextFontSize())}getTextFontSize(){return this.__textFontSize}__processTextFontSize(){var _b;this.__textFontSize?this.__elementTemplateRoot[0].style.fontSize=this.__textFontSize+(null!==(_b=this.__textFontSizeUnit)&&void 0!==_b?_b:"px"):this.__elementTemplateRoot[0].style.fontSize="","Content"===this.getHeightMode()&&this.__processHeight()}setTextFontSizeUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toFontSizeUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSizeUnit")),convertedValue!==this.__textFontSizeUnit&&(this.__textFontSizeUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSizeUnit"}),this.__processTextFontSizeUnit())}getTextFontSizeUnit(){return this.__textFontSizeUnit}__processTextFontSizeUnit(){this.__processTextFontSize()}setTextFontFamily(valueNew){let convertedValue=TcHmi.ValueConverter.toFontFamily(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontFamily")),convertedValue!==this.__textFontFamily&&(this.__textFontFamily=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontFamily"}),this.__processTextFontFamily())}getTextFontFamily(){return this.__textFontFamily}__processTextFontFamily(){var _b;this.__elementTemplateRoot[0].style.fontFamily=null!==(_b=this.__textFontFamily)&&void 0!==_b?_b:"","Content"===this.getHeightMode()&&this.__processHeight()}setTextFontStyle(valueNew){let convertedValue=TcHmi.ValueConverter.toFontStyle(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontStyle")),convertedValue!==this.__textFontStyle&&(this.__textFontStyle=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontStyle"}),this.__processTextFontStyle())}getTextFontStyle(){return this.__textFontStyle}__processTextFontStyle(){TcHmi.StyleProvider.processFontStyle(this.__elementTemplateRoot,this.__textFontStyle),"Content"===this.getHeightMode()&&this.__processHeight()}setTextFontWeight(valueNew){let convertedValue=TcHmi.ValueConverter.toFontWeight(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontWeight")),convertedValue!==this.__textFontWeight&&(this.__textFontWeight=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontWeight"}),this.__processTextFontWeight())}getTextFontWeight(){return this.__textFontWeight}__processTextFontWeight(){TcHmi.StyleProvider.processFontWeight(this.__elementTemplateRoot,this.__textFontWeight),"Content"===this.getHeightMode()&&this.__processHeight()}setContentPadding(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ContentPadding"));let resolverInfo=this.__objectResolvers.get("contentPadding");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("contentPadding",{resolver:resolver,watchCallback:this.__onResolverForContentPaddingWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForContentPaddingWatchCallback)})}getContentPadding(){return this.__contentPadding}__processContentPadding(){TcHmi.StyleProvider.processContentPadding(this.__elementTemplateRoot,this.__contentPadding),"Content"===this.getHeightMode()&&this.__processHeight()}setTextColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextColor"));let resolverInfo=this.__objectResolvers.get("textColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("textColor",{resolver:resolver,watchCallback:this.__onResolverForTextColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForTextColorWatchCallback)})}getTextColor(){return this.__textColor}__processTextColor(){TcHmi.StyleProvider.processTextColor(this.__elementTemplateRoot,this.__textColor)}setWordWrap(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("WordWrap")),convertedValue!==this.__wordWrap&&(this.__wordWrap=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"WordWrap"}),this.__processWordWrap())}getWordWrap(){return this.__wordWrap}__processWordWrap(){this.__wordWrap?(this.__elementTextContainer[0].style.whiteSpace="pre-wrap",this.__elementTextContainer[0].style.overflowWrap="break-word"):(this.__elementTextContainer[0].style.whiteSpace="pre",this.__elementTextContainer[0].style.overflowWrap=""),"Content"===this.getHeightMode()&&this.__processHeight()}}_TcHmiTextblock_tchmiFQN={value:"TcHmi.Controls.Beckhoff."+(_a=TcHmiTextblock).name},Beckhoff.TcHmiTextblock=TcHmiTextblock}(Beckhoff=Controls.Beckhoff||(Controls.Beckhoff={}))}(Controls=TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiTextblock","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiTextblock);