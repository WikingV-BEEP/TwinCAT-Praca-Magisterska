var TcHmi,__classPrivateFieldGet=this&&this.__classPrivateFieldGet||function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};!function(TcHmi){let Controls;!function(Controls){let Beckhoff;!function(Beckhoff){var _a,_TcHmiDateTimeInput_tchmiFQN;class TcHmiDateTimeInput extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__locked=!1,this.__triggerUIFinishedOnBlur=!0,this.__localizedInput={key:"",parameters:[]},this.__localizationReader=void 0,this.__destroyLocalizationWatch=null,this.__onDateTimePickerValueChangedDestroyer=null,this.__REGEX_ISO_8601=/^\d{4}-(?:0\d|1[0-2])-(?:[0-2]\d|3[01])[Tt\s](?:[01]\d|2[0-3]):[0-5]\d:(?:[0-5]\d|60)(?:.\d+)?(?:[Zz]|[+-](?:[01]\d|2[0-3]):[0-5]\d)$/,this.__onKeydown=event=>{!0===TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__triggerUIFinishedOnBlur=!0,"Escape"===event.key?(this.__processValue(),TcHmi.EventProvider.raise(this.__id+".onUserInteractionCanceled"),this.__triggerUIFinishedOnBlur=!1,this.__autoFocusOut&&this.__elementInput.blur()):"Enter"===event.key&&(this.__oldValue=this.__value,this.__triggerUIFinishedOnBlur=!1,this.__autoFocusOut?(this.__elementInput.blur(),this.__unlock()):this.__REGEX_ISO_8601.test(this.__elementInput.value)?this.__setValue(this.__elementInput.value):this.__resetToLastValidValue&&this.__processValue(),TcHmi.EventProvider.raise(this.__id+".onUserInteractionFinished"),event.preventDefault()))},this.__onInput=event=>{!0===TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__triggerUIFinishedOnBlur=!0,this.__validateInput())},this.__onPaste=event=>{!0===TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__triggerUIFinishedOnBlur=!0,window.setTimeout(()=>{this.__validateInput()}))},this.__onCut=event=>{!0===TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__triggerUIFinishedOnBlur=!0,window.setTimeout(()=>{this.__validateInput()}))},this.__onFocusIn=event=>{!0===TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__triggerUIFinishedOnBlur=!0,this.__oldValue=this.__value,this.__elementInput.classList.add("tchmi-focus"),this.__autoSelectText&&(this.__elementInput.setSelectionRange(0,0),this.__elementInput.select()),TcHmi.EventProvider.raise(this.__id+".onFocusIn",event),this.__elementInput===document.activeElement&&this.__lock())},this.__onFocusOut=event=>{!0===TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__unlock(),this.__elementInput.classList.remove("tchmi-focus"),TcHmi.EventProvider.raise(this.__id+".onFocusOut",event),this.__oldValue=this.__value,this.__REGEX_ISO_8601.test(this.__elementInput.value)?this.__setValue(this.__elementInput.value):this.__resetToLastValidValue&&this.__processValue(),this.__triggerUIFinishedOnBlur&&TcHmi.EventProvider.raise(this.__id+".onUserInteractionFinished"),this.__triggerUIFinishedOnBlur=!0)},this.__onClick=event=>{this.__REGEX_ISO_8601.test(this.__elementInput.value)&&this.__dateTimePicker.setValue(this.__elementInput.value),this.__dateTimePicker.openDateTimePicker()},this.__onValueChanged=()=>{this.__setValue(this.__dateTimePicker.getValue())},this.__onResolverForContentPaddingWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("contentPadding"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__contentPadding)||(this.__contentPadding=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ContentPadding"}),this.__processContentPadding()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiDateTimeInput,_a,"f",_TcHmiDateTimeInput_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiDateTimeInput,_a,"f",_TcHmiDateTimeInput_tchmiFQN):"")+", Id="+this.getId()+", Attribute=ContentPadding] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__onResolverForValueColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("textColor"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__valueColor)||(this.__valueColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ValueColor"}),this.__processValueColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiDateTimeInput,_a,"f",_TcHmiDateTimeInput_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiDateTimeInput,_a,"f",_TcHmiDateTimeInput_tchmiFQN):"")+", Id="+this.getId()+", Attribute=ValueColor] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))}}__previnit(){this.__elementTemplateRoot=this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiDateTimeInput-template")[0],this.__elementInput=this.__elementTemplateRoot.getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiDateTimeInput-template-input")[0],this.__elementButton=this.__elementTemplateRoot.getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiDateTimeInput-template-button")[0];let dateTimePicker=Controls.get(this.getId()+"_TcHmiDateTimePicker");if(!(this.__elementTemplateRoot&&this.__elementInput&&this.__elementButton&&dateTimePicker))throw new Error("Invalid Template.html");this.__dateTimePicker=dateTimePicker,this.__destroyLocalizationWatch=this.__localization.watch(data=>{if(data.error===TcHmi.Errors.NONE&&data.reader&&(this.__localizationReader=data.reader,""!==this.__localizedInput.key)){let localizedText=data.reader.get(this.__localizedInput.key);this.__localizedInput.parameters.length>0&&(localizedText=tchmi_format_string(localizedText,...this.__localizedInput.parameters)),this.__elementInput.setCustomValidity(tchmi_decode_control_characters(localizedText))}}),super.__previnit()}__init(){super.__init();const passiveEventOptions={passive:!0,capture:!1};this.__elementTemplateRoot.addEventListener("focusin",this.__onFocusIn,passiveEventOptions),this.__elementTemplateRoot.addEventListener("focusout",this.__onFocusOut,passiveEventOptions),this.__elementInput.addEventListener("keydown",this.__onKeydown,{passive:!1,capture:!1}),this.__elementInput.addEventListener("input",this.__onInput,passiveEventOptions),this.__elementInput.addEventListener("paste",this.__onPaste,passiveEventOptions),this.__elementInput.addEventListener("cut",this.__onCut,passiveEventOptions),this.__elementButton.addEventListener("click",this.__onClick,passiveEventOptions)}__attach(){super.__attach(),this.__onDateTimePickerValueChangedDestroyer=TcHmi.EventProvider.register(this.getId()+"_TcHmiDateTimePicker.onValueChanged",this.__onValueChanged)}__detach(){var _b;super.__detach(),null===(_b=this.__onDateTimePickerValueChangedDestroyer)||void 0===_b||_b.call(this),this.__onDateTimePickerValueChangedDestroyer=null}destroy(){var _b;if(this.__keepAlive)return;const passiveEventOptions={passive:!0,capture:!1};this.__elementTemplateRoot.removeEventListener("focusin",this.__onFocusIn,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("focusout",this.__onFocusOut,passiveEventOptions),this.__elementInput.removeEventListener("keydown",this.__onKeydown,{passive:!1,capture:!1}),this.__elementInput.removeEventListener("input",this.__onInput,passiveEventOptions),this.__elementInput.removeEventListener("paste",this.__onPaste,passiveEventOptions),this.__elementInput.removeEventListener("cut",this.__onCut,passiveEventOptions),this.__elementButton.removeEventListener("click",this.__onClick,passiveEventOptions),null===(_b=this.__destroyLocalizationWatch)||void 0===_b||_b.call(this),super.destroy()}__validateInput(){this.__REGEX_ISO_8601.test(this.__elementInput.value)||!this.__attributesInitialized?this.__setLocalizedInputValidity(""):""===this.__elementInput.value?this.__setLocalizedInputValidity("ValueEmpty"):this.__setLocalizedInputValidity("ValueFormat")}__setLocalizedInputValidity(key,...parameters){if(this.__localizedInput.key=key,this.__localizedInput.parameters=parameters,this.__localizationReader){let localizedText=this.__localizationReader.get(key);this.__localizedInput.parameters.length>0&&(localizedText=tchmi_format_string(localizedText,...this.__localizedInput.parameters)),this.__elementInput.setCustomValidity(tchmi_decode_control_characters(localizedText))}}setValue(valueNew){!0!==this.__locked&&this.__setValue(valueNew)}__setValue(valueNew,process=!0){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Value")),convertedValue!==this.__value&&(this.__value=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Value"}),TcHmi.EventProvider.raise(this.__id+".onValueChanged",this.__value),process&&this.__processValue())}getValue(){return this.__value}__processValue(){var _b;this.__elementInput.value=null!==(_b=this.__value)&&void 0!==_b?_b:"",this.__elementInput.setCustomValidity(""),this.__validateInput()}setValueHorizontalAlignment(valueNew){let convertedValue=TcHmi.ValueConverter.toHorizontalAlignment(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ValueHorizontalAlignment")),convertedValue!==this.__valueHorizontalAlignment&&(this.__valueHorizontalAlignment=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ValueHorizontalAlignment"}),this.__processValueHorizontalAlignment())}getValueHorizontalAlignment(){return this.__valueHorizontalAlignment}__processValueHorizontalAlignment(){switch(this.__valueHorizontalAlignment){case"Left":TcHmi.StyleProvider.setSimpleElementStyle(this.__elementInput,"text-align","left");break;case"Center":TcHmi.StyleProvider.setSimpleElementStyle(this.__elementInput,"text-align","center");break;case"Right":TcHmi.StyleProvider.setSimpleElementStyle(this.__elementInput,"text-align","right");break;default:TcHmi.StyleProvider.setSimpleElementStyle(this.__elementInput,"text-align",null)}}setContentPadding(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ContentPadding"));let resolverInfo=this.__objectResolvers.get("contentPadding");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("contentPadding",{resolver:resolver,watchCallback:this.__onResolverForContentPaddingWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForContentPaddingWatchCallback)})}getContentPadding(){return this.__contentPadding}__processContentPadding(){TcHmi.StyleProvider.processContentPadding(this.__elementInput,this.__contentPadding)}setValueFontSize(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ValueFontSize")),convertedValue!==this.__valueFontSize&&(this.__valueFontSize=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ValueFontSize"}),this.__processValueFontSize())}getValueFontSize(){return this.__valueFontSize}__processValueFontSize(){TcHmi.StyleProvider.processFontSize(this.__elementInput,this.__valueFontSize,this.__valueFontSizeUnit)}setValueFontSizeUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toFontSizeUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ValueFontSizeUnit")),convertedValue!==this.__valueFontSizeUnit&&(this.__valueFontSizeUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ValueFontSizeUnit"}),this.__processValueFontSizeUnit())}getValueFontSizeUnit(){return this.__valueFontSizeUnit}__processValueFontSizeUnit(){TcHmi.StyleProvider.processFontSize(this.__elementInput,this.__valueFontSize,this.__valueFontSizeUnit)}setValueFontFamily(valueNew){let convertedValue=TcHmi.ValueConverter.toFontFamily(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ValueFontFamily")),convertedValue!==this.__valueFontFamily&&(this.__valueFontFamily=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ValueFontFamily"}),this.__processValueFontFamily())}getValueFontFamily(){return this.__valueFontFamily}__processValueFontFamily(){TcHmi.StyleProvider.processFontFamily(this.__elementInput,this.__valueFontFamily)}setValueFontStyle(valueNew){let convertedValue=TcHmi.ValueConverter.toFontStyle(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ValueFontStyle")),convertedValue!==this.__valueFontStyle&&(this.__valueFontStyle=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ValueFontStyle"}),this.__processValueFontStyle())}getValueFontStyle(){return this.__valueFontStyle}__processValueFontStyle(){TcHmi.StyleProvider.processFontStyle(this.__elementInput,this.__valueFontStyle)}setValueFontWeight(valueNew){let convertedValue=TcHmi.ValueConverter.toFontWeight(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ValueFontWeight")),convertedValue!==this.__valueFontWeight&&(this.__valueFontWeight=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ValueFontWeight"}),this.__processValueFontWeight())}getValueFontWeight(){return this.__valueFontWeight}__processValueFontWeight(){TcHmi.StyleProvider.processFontWeight(this.__elementInput,this.__valueFontWeight)}setPlaceholder(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Placeholder")),convertedValue!==this.__placeholder&&(this.__placeholder=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Placeholder"}),this.__processPlaceholder())}getPlaceholder(){return this.__placeholder}__processPlaceholder(){this.__placeholder?this.__elementInput.setAttribute("placeholder",this.__placeholder):this.__elementInput.removeAttribute("placeholder")}setValueColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ValueColor"));let resolverInfo=this.__objectResolvers.get("textColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("textColor",{resolver:resolver,watchCallback:this.__onResolverForValueColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForValueColorWatchCallback)})}getValueColor(){return this.__valueColor}__processValueColor(){TcHmi.StyleProvider.processTextColor(this.__elementInput,this.__valueColor)}setAutoFocusOut(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("AutoFocusOut")),convertedValue!==this.__autoFocusOut&&(this.__autoFocusOut=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"AutoFocusOut"}),this.__processAutoFocusOut())}getAutoFocusOut(){return this.__autoFocusOut}__processAutoFocusOut(){}__lock(){this.__locked=!0}__unlock(){this.__locked=!1}__processControlActivation(){const valueInput=this.__elementInput;TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()?valueInput.disabled=!1:(valueInput.blur(),valueInput.disabled=!0)}__processIsEnabled(){super.__processIsEnabled(),this.__processControlActivation()}__processAccessConfig(){super.__processAccessConfig(),this.__processControlActivation()}setAutoSelectText(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("AutoSelectText")),convertedValue!==this.__autoSelectText&&(this.__autoSelectText=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"AutoSelectText"}))}getAutoSelectText(){return this.__autoSelectText}setResetToLastValidValue(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ResetToLastValidValue")),convertedValue!==this.__resetToLastValidValue&&(this.__resetToLastValidValue=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ResetToLastValidValue"}),this.__processResetToLastValidValue())}getResetToLastValidValue(){return this.__resetToLastValidValue}__processResetToLastValidValue(){this.__processValue()}setButtonPosition(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ButtonPosition")),convertedValue!==this.__buttonPosition&&(this.__buttonPosition="Left"===convertedValue?convertedValue:"Right",TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ButtonPosition"}),this.__processButtonPosition())}getButtonPosition(){return this.__buttonPosition}__processButtonPosition(){"Right"===this.__buttonPosition?this.__elementTemplateRoot.classList.remove("left"):this.__elementTemplateRoot.classList.add("left")}}_TcHmiDateTimeInput_tchmiFQN={value:"TcHmi.Controls.Beckhoff."+(_a=TcHmiDateTimeInput).name},Beckhoff.TcHmiDateTimeInput=TcHmiDateTimeInput}(Beckhoff=Controls.Beckhoff||(Controls.Beckhoff={}))}(Controls=TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiDateTimeInput","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiDateTimeInput);