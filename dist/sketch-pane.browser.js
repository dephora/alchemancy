var SketchLib=function(t){function e(e){for(var i,o,a=e[0],h=e[1],p=e[2],u=0,c=[];u<a.length;u++)o=a[u],n[o]&&c.push(n[o][0]),n[o]=0;for(i in h)Object.prototype.hasOwnProperty.call(h,i)&&(t[i]=h[i]);for(l&&l(e);c.length;)c.shift()();return s.push.apply(s,p||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],i=!0,a=1;a<r.length;a++){var h=r[a];0!==n[h]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var i={},n={1:0},s=[];function o(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=i,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(r,i,function(e){return t[e]}.bind(null,i));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist";var a=window.webpackJsonpSketchLib=window.webpackJsonpSketchLib||[],h=a.push.bind(a);a.push=e,a=a.slice();for(var p=0;p<a.length;p++)e(a[p]);var l=h;return s.push([90,0]),r()}({194:function(t,e){},196:function(t,e){},90:function(t,e,r){"use strict";r.r(e);var i=r(8),n=r(0),s=function(){function t(){}return t.rotatePoint=function(t,e,r,i,n){return{x:Math.cos(n)*(t-r)-Math.sin(n)*(e-i)+r,y:Math.sin(n)*(t-r)+Math.cos(n)*(e-i)+i}},t.calcTiltAngle=function(t,e){return{angle:Math.atan2(e,t)*(180/Math.PI),tilt:Math.max(Math.abs(t),Math.abs(e))}},t.lerp=function(t,e,r){return t+(e-t)*(r=(r=r<0?0:r)>1?1:r)},t.arrayPostDivide=function(t){for(var e=0;e<t.length;e+=4){var r=t[e+3];r&&(t[e]=Math.round(Math.min(255*t[e]/r,255)),t[e+1]=Math.round(Math.min(255*t[e+1]/r,255)),t[e+2]=Math.round(Math.min(255*t[e+2]/r,255)))}},t.pixelsToCanvas=function(t,e,r){var i=document.createElement("canvas");i.width=e,i.height=r;var n=i.getContext("2d"),s=n.createImageData(e,r);return s.data.set(t),n.putImageData(s,0,0),i},t.dataURLToFileContents=function(t){return t.replace(/^data:image\/\w+;base64,/,"")},t}(),o=function(){return function(t){this.name="default",this.blendMode="normal",this.sizeLimitMax=1,this.sizeLimitMin=0,this.opacityMax=1,this.opacityMin=0,this.spacing=0,this.brushImage="brushcharcoal",this.brushRotation=0,this.brushImageInvert=!1,this.grainImage="graingrid",this.grainRotation=0,this.grainImageInvert=!1,this.movement=1,this.scale=1,this.zoom=0,this.rotation=0,this.randomOffset=!0,this.azimuth=!0,this.pressureOpacity=1,this.pressureSize=1,this.pressureBleed=0,this.tiltAngle=0,this.tiltOpacity=1,this.tiltGradiation=0,this.tiltSize=1,this.orientToScreen=!0,t&&Object.assign(this,t)}}(),a=function(){return function(t){this.settings=new o(t)}}(),h=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),p=r(91),l=function(t){function e(e){var r=t.call(this,null,p,{uRed:{type:"1f",value:.5},uGreen:{type:"1f",value:.5},uBlue:{type:"1f",value:.5},uOpacity:{type:"1f",value:1},uRotation:{type:"1f",value:0},uBleed:{type:"1f",value:0},uGrainRotation:{type:"1f",value:0},uGrainScale:{type:"1f",value:1},u_x_offset:{type:"1f",value:0},u_y_offset:{type:"1f",value:0},u_offset_px:{type:"vec2"},u_node_scale:{type:"vec2",value:[0,0]},u_grainTex:{type:"sampler2D",value:""},dimensions:{type:"vec2",value:[0,0]},filterMatrix:{type:"mat3"}})||this;r.padding=0,r.blendMode=n.BLEND_MODES.NORMAL,r.autoFit=!1;var i=new n.Matrix;return e.renderable=!1,r.grainSprite=e,r.grainMatrix=i,r.uniforms.u_grainTex=e.texture,r.uniforms.filterMatrix=i,r}return h(e,t),e.prototype.apply=function(t,e,r,i){this.uniforms.dimensions[0]=e.sourceFrame.width,this.uniforms.dimensions[1]=e.sourceFrame.height,this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.grainMatrix,this.grainSprite),t.applyFilter(this,e,r,i)},e}(n.Filter),u=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),c=function(t){function e(e){var r=t.call(this)||this;return r.container=e,r.name="cursorSprite",r.gfx=new n.Graphics,r.addChild(r.gfx),r._enabled=!0,r.visible=!1,r.updateSize(),r}return u(e,t),e.prototype.renderCursor=function(t){this.lastPointer.set(t.x,t.y);var e=this.container.localizePoint(this.lastPointer);this.position.set(e.x,e.y),this.anchor.set(.5),this._enabled&&(this.visible=!0)},e.prototype.updateSize=function(){var t=.7*this.container.brushSize,e=Math.ceil(1*t/2),r=Math.ceil(1*t/2);this.gfx.clear().lineStyle(2,16777215,.001).drawCircle(e,r,Math.ceil(1*t)+2).closePath().lineStyle(1,16777215).drawCircle(e,r,Math.ceil(1*t)-1).closePath().lineStyle(1,0).drawCircle(e,r,Math.ceil(1*t)).closePath(),this.texture.destroy(!0),this.texture=this.gfx.generateCanvasTexture(),this.getLocalBounds(),this.gfx.clear()},e.prototype.setEnabled=function(t){this._enabled=t,this._enabled||(this.visible=!1)},e.prototype.getEnabled=function(){return this._enabled},e}(n.Sprite),d=function(){function t(t){this.renderer=t.renderer,this.width=t.width,this.height=t.height,this.name=t.name,this.sprite=new n.Sprite(n.RenderTexture.create(this.width,this.height)),this.sprite.name=t.name,this.container=new n.Container,this.container.name=t.name+" container",this.container.addChild(this.sprite),this.dirty=!1}return t.prototype.getOpacity=function(){return this.sprite.alpha},t.prototype.setOpacity=function(t){this.sprite.alpha=t},t.prototype.pixels=function(t){void 0===t&&(t=!1);var e=this.renderer.plugins.extract.pixels(this.sprite.texture);return t&&s.arrayPostDivide(e),e},t.prototype.toCanvas=function(t){void 0===t&&(t=!0);var e=this.pixels(t);return s.pixelsToCanvas(e,this.width,this.height)},t.prototype.toDataURL=function(t){return void 0===t&&(t=!0),this.toCanvas(t).toDataURL()},t.prototype.export=function(t){return s.dataURLToFileContents(this.toDataURL())},t.prototype.draw=function(t,e){void 0===e&&(e=!1),this.renderer.render(t,this.sprite.texture,e)},t.prototype.clear=function(){this.draw(new n.Sprite(n.Texture.EMPTY),!0)},t.prototype.replace=function(t,e){void 0===e&&(e=!0),this.draw(n.Sprite.from(t),e)},t.prototype.replaceTextureFromCanvas=function(t){n.utils.clearTextureCache(),this.replace(n.Texture.from(t))},t.prototype.rewrite=function(){var t=this.sprite.alpha;this.sprite.alpha=1,this.replaceTexture(this.sprite),this.sprite.alpha=t},t.prototype.replaceTexture=function(t){var e=n.RenderTexture.create(this.width,this.height);this.renderer.render(t,e,!0),this.sprite.texture=e},t.prototype.isEmpty=function(){for(var t=0,e=this.renderer.plugins.extract.pixels(this.sprite.texture);t<e.length;t++){if(0!==e[t])return!1}return!0},t.prototype.getDirty=function(){return this.dirty},t.prototype.setDirty=function(t){this.dirty=t},t.prototype.setVisible=function(t){this.sprite.visible=t},t.prototype.getVisible=function(){return this.sprite.visible},t.prototype.flip=function(t){void 0===t&&(t=!1);var e=new n.Sprite(this.sprite.texture);e.anchor.set(.5,.5),t?(e.pivot.set(-e.width/2,e.height/2),e.scale.y*=-1):(e.pivot.set(e.width/2,-e.height/2),e.scale.x*=-1),this.replaceTexture(e)},t}(),f=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),y=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},g=function(t){function e(){return t.call(this)||this}return f(e,t),e.create=function(t){var r=Object.create(e.prototype);return r.renderer=t.renderer,r.width=t.width,r.height=t.height,r.onAdd=t.onAdd,r.onSelect=t.onSelect,r},e.prototype.create=function(t){var e=new d(y({renderer:this.renderer,width:this.width,height:this.height},t));return this.add(e),e},e.prototype.add=function(t){var e=this.length;return this.push(t),t.index=e,this.onAdd&&this.onAdd(t.index),t},e.prototype.markDirty=function(t){for(var e=0,r=t;e<r.length;e++){this[r[e]].setDirty(!0)}},e.prototype.getCurrentIndex=function(){return this.currentIndex},e.prototype.setCurrentIndex=function(t){this.currentIndex=t,this.onSelect&&this.onSelect(t)},e.prototype.getCurrentLayer=function(){return this[this.currentIndex]},e.prototype.flip=function(t){void 0===t&&(t=!1);for(var e=0;e<this.length;e++){this[e].flip(t)}},e.prototype.extractThumbnailPixels=function(t,e,r){void 0===r&&(r=[]);var i=PIXI.RenderTexture.create(t,e);return this.renderer.plugins.extract.pixels(this.generateCompositeTexture(t,e,r,i))},e.prototype.generateCompositeTexture=function(t,e,r,i){void 0===r&&(r=[]);for(var n=0;n<this.length;n++){var s=this[n];if(r.length&&r.includes(s.index)){var o=new PIXI.Sprite(s.sprite.texture);o.alpha=s.sprite.alpha,o.scale.set(t/this.width,e/this.height),this.renderer.render(o,i,!1)}}return i},e.prototype.findByName=function(t){return this.find(function(e){return e.name===t})},e.prototype.merge=function(t,e){var r=PIXI.RenderTexture.create(this.width,this.height);r=this.generateCompositeTexture(this.width,this.height,t,r),this[e].clear(),this[e].replace(r);for(var i=0,n=t;i<n.length;i++){var s=n[i];s!==e&&this[s].clear()}},e}(Array),v=function(t,e,r,i){return new(r||(r=Promise))(function(n,s){function o(t){try{h(i.next(t))}catch(t){s(t)}}function a(t){try{h(i.throw(t))}catch(t){s(t)}}function h(t){t.done?n(t.value):new r(function(e){e(t.value)}).then(o,a)}h((i=i.apply(t,e||[])).next())})},S=function(t,e){var r,i,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,i&&(n=2&s[0]?i.return:s[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,s[1])).done)return n;switch(i=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,i=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],i=0}finally{r=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},m=function(){function t(t){void 0===t&&(t={backgroundColor:16777215}),this.images={brush:{},grain:{}},this.efficiencyMode=!1,this.pointerDown=!1,this.layerMask=void 0,this.layerBackground=void 0,this.viewClientRect=void 0,this.containerPadding=50,this.onStrokeBefore=t.onStrokeBefore,this.onStrokeAfter=t.onStrokeAfter,this.setup(t),this.setImageSize(t.imageWidth,t.imageHeight),this.app.view.style.cursor="none"}return t.canInitialize=function(){return n.utils.isWebGLSupported()},t.prototype.setup=function(t){i.setup(void 0),i.view.setAutoUpdate(!1),new i.Path,n.settings.FILTER_RESOLUTION=1,n.settings.PRECISION_FRAGMENT=n.PRECISION.HIGH,n.settings.MIPMAP_TEXTURES=!0,n.settings.WRAP_MODE=n.WRAP_MODES.REPEAT,n.utils.skipHello(),this.app=new n.Application({backgroundColor:t.backgroundColor,antialias:!!this.efficiencyMode}),this.app.renderer.roundPixels=!1,this.sketchPaneContainer=new n.Container,this.sketchPaneContainer.name="sketchPaneContainer",this.layersContainer=new n.Container,this.layersContainer.name="layersContainer",this.sketchPaneContainer.addChild(this.layersContainer),this.alphaFilter=new n.filters.AlphaFilter,this.liveContainer=new n.Container,this.liveContainer.name="live",this.strokeSprite=new n.Sprite,this.strokeSprite.name="static",this.segmentContainer=new n.Container,this.segmentContainer.name="segment",this.offscreenContainer=new n.Container,this.offscreenContainer.name="offscreen",this.offscreenContainer.renderable=!1,this.layersContainer.addChild(this.offscreenContainer),this.eraseMask=new n.Sprite,this.eraseMask.name="eraseMask",this.cursor=new c(this),this.sketchPaneContainer.addChild(this.cursor),this.app.stage.addChild(this.sketchPaneContainer),this.sketchPaneContainer.scale.set(1),this.viewClientRect=this.app.view.getBoundingClientRect(),this.zoom=1},t.prototype.setImageSize=function(t,e){this.width=t,this.height=e,this.layerMask=(new n.Graphics).beginFill(0,1).drawRect(0,0,this.width,this.height).endFill(),this.layerMask.name="layerMask",this.layersContainer.mask=this.layerMask,this.sketchPaneContainer.addChildAt(this.layerMask,this.sketchPaneContainer.getChildIndex(this.layersContainer)+1),this.layerBackground=(new n.Graphics).beginFill(16777215).drawRect(0,0,this.width,this.height).endFill(),this.layerBackground.name="background",this.sketchPaneContainer.addChildAt(this.layerBackground,0),this.eraseMask.texture=n.RenderTexture.create(this.width,this.height),this.strokeSprite.texture=n.RenderTexture.create(this.width,this.height),this.centerContainer(),this.layers=g.create({renderer:this.app.renderer,width:this.width,height:this.height,onAdd:this.onLayersCollectionAdd.bind(this),onSelect:this.onLayersCollectionSelect.bind(this)})},t.prototype.onLayersCollectionAdd=function(t){var e=this.layers[t];this.layersContainer.position.set(0,0),this.layersContainer.addChild(e.container),this.centerContainer()},t.prototype.onLayersCollectionSelect=function(t){this.updateLayerDepths()},t.prototype.updateLayerDepths=function(){for(var t=0,e=this.layers;t<e.length;t++){var r=e[t];r.index===this.layers.currentIndex&&(r.container.addChild(this.strokeSprite),r.container.addChild(this.liveContainer))}},t.prototype.newLayer=function(t){return this.layers.create(t)},t.prototype.centerContainer=function(){if(this.anchor){var t=this.sketchPaneContainer.toLocal(this.anchor,this.app.stage);this.sketchPaneContainer.pivot.set(t.x,t.y),this.sketchPaneContainer.position.set(this.anchor.x,this.anchor.y)}else this.sketchPaneContainer.pivot.set(this.width/2,this.height/2),this.sketchPaneContainer.position.set(this.app.renderer.width/2,this.app.renderer.height/2)},t.prototype.resize=function(t,e){this.app.renderer.resize(t,e),this.viewClientRect=this.app.view.getBoundingClientRect();var r={width:Math.max(0,t-2*this.containerPadding),height:Math.max(0,e-2*this.containerPadding)},i={width:this.width,height:this.height},s=r.width/r.height>i.width/i.height?i.width*r.height/i.height:r.width;this.cursor.lastPointer||(this.cursor.lastPointer=new n.Point(this.app.renderer.width/2+this.viewClientRect.left,this.app.renderer.height/2+this.viewClientRect.top)),this.centerContainer(),this.sketchPaneContainer.scale.set(Math.floor(s)/Math.floor(i.width)*this.zoom)},t.prototype.loadBrushes=function(t){return v(this,void 0,void 0,function(){var e,r,i,s,o,h,p,l,u,c,d,f,y,g;return S(this,function(v){switch(v.label){case 0:for(e=t.brushes,r=t.brushImagePath,this.brushes=e.reduce(function(t,e){return t[e.name]=new a(e),t},{}),i=Array.from(new Set([].concat.apply([],Object.values(this.brushes).map(function(t){return[t.settings.brushImage,t.settings.efficiencyBrushImage]})).filter(Boolean))),s=Array.from(new Set(Object.values(this.brushes).map(function(t){return t.settings.grainImage}))),o=[],h=0,p=[[i,this.images.brush],[s,this.images.grain]];h<p.length;h++)for(l=p[h],u=l[0],c=l[1],d=function(t){var e=n.Sprite.fromImage(r+"/"+t+".png");e.renderable=!1,c[t]=e;var i=e.texture.baseTexture;i.hasLoaded?o.push(Promise.resolve(e)):i.isLoading?o.push(new Promise(function(e,r){i.on("loaded",function(t){e(i)}),i.on("error",function(e){r(new Error("Could not load brush from file: "+t+".png"))})})):o.push(Promise.reject(new Error("Failed to load brush from file: "+t+".png")))},f=0,y=u;f<y.length;f++)g=y[f],d(g);return[4,Promise.all(o)];case 1:return v.sent(),this.cursor.updateSize(),[2]}})})},t.prototype.stampStroke=function(t,e){e.draw(t,!1)},t.prototype.disposeContainer=function(t){for(var e=0,r=t.children;e<r.length;e++){r[e].destroy({children:!0,texture:!1,baseTexture:!1})}t.removeChildren()},t.prototype.addStrokeNode=function(t,e,r,i,s,o,a,h,p,u,c,d,f,y){var g=i-(1-h)*i*c.settings.pressureSize;g*=u/90*c.settings.tiltSize*3+1;var v,S=1-(1-h)*c.settings.pressureOpacity;S*=(1-u/90*c.settings.tiltOpacity)*s,v=c.settings.azimuth?p*Math.PI/180-this.sketchPaneContainer.rotation:0-this.sketchPaneContainer.rotation;var m=Math.pow(1-h,1.6)*c.settings.pressureBleed;if(this.efficiencyMode){(k=new n.Sprite(this.images.brush[c.settings.efficiencyBrushImage].texture)).position.set(o,a),k.anchor.set(.5),k.tint=n.utils.rgb2hex([t,e,r]),k.alpha=S,k.scale.set(g/k.width),y.addChild(k)}else{var k=new n.Sprite(this.images.brush[c.settings.brushImage].texture),x=45*Math.PI/180,C=Math.abs(g*Math.sin(x))+Math.abs(g*Math.cos(x)),w=Math.ceil(C);o-=w/2,a-=w/2,k.x=Math.floor(o),k.y=Math.floor(a),k.width=w,k.height=w;var b=o-k.x,P=a-k.y,M=g/k.width,_=[b,P],I=[M,M],O=this.images.grain[c.settings.grainImage];this.offscreenContainer.addChild(O),this.offscreenContainer.getLocalBounds();var L=new l(O);L.uniforms.uRed=t,L.uniforms.uGreen=e,L.uniforms.uBlue=r,L.uniforms.uOpacity=S,L.uniforms.uRotation=v,L.uniforms.uBleed=m,L.uniforms.uGrainScale=c.settings.scale,L.uniforms.uGrainRotation=c.settings.rotation,L.uniforms.u_x_offset=d*c.settings.movement,L.uniforms.u_y_offset=f*c.settings.movement,L.uniforms.u_offset_px=_,L.uniforms.u_node_scale=I,L.padding=1,k.filters=[L],y.addChild(k)}},t.prototype.down=function(t,e){void 0===e&&(e={}),this.pointerDown=!0,this.strokeBegin(t,e),this.app.view.style.cursor="none",this.cursor.renderCursor(t)},t.prototype.move=function(t){this.pointerDown&&this.strokeContinue(t),this.app.view.style.cursor="none",this.cursor.renderCursor(t)},t.prototype.up=function(t){this.pointerDown&&this.strokeEnd(t),this.app.view.style.cursor="none",this.cursor.renderCursor(t)},t.prototype.strokeBegin=function(t,e){this.strokeState={isErasing:!!e.erase,layerIndices:e.erase?e.erase:[this.layers.currentIndex],points:[],path:new i.Path,lastStaticIndex:0,lastSpacing:void 0,grainOffset:this.brush.settings.randomOffset?{x:Math.floor(100*Math.random()),y:Math.floor(100*Math.random())}:{x:0,y:0},size:this.brushSize,color:this.brushColor,nodeOpacityScale:this.nodeOpacityScale,strokeOpacityScale:this.strokeOpacityScale,layerOpacity:this.getLayerOpacity(this.layers.currentIndex),isStraightLine:!!e.isStraightLine,origin:void 0,straightLinePressure:e.straightLinePressure,shouldSnap:!!e.shouldSnap},this.onStrokeBefore&&this.onStrokeBefore(this.strokeState),this.addPointerEventAsPoint(t),this.strokeState.origin=this.strokeState.points[0],this.strokeState.straightLinePressure=null!=this.strokeState.straightLinePressure?this.strokeState.straightLinePressure:void 0,this.strokeState.isErasing?(this.liveContainer.parent&&this.liveContainer.parent.removeChild(this.liveContainer),this.strokeSprite.parent&&this.strokeSprite.parent.removeChild(this.strokeSprite)):(this.liveContainer.alpha=this.strokeState.layerOpacity*Math.pow(this.strokeState.strokeOpacityScale,5),this.strokeState.strokeOpacityScale<1?(this.setLayerOpacity(this.layers.currentIndex,1),this.alphaFilter.alpha=this.strokeState.layerOpacity,this.layers[this.layers.currentIndex].container.filters=[this.alphaFilter],this.strokeSprite.alpha=this.strokeState.strokeOpacityScale):(this.setLayerOpacity(this.layers.currentIndex,this.strokeState.layerOpacity),this.layers[this.layers.currentIndex].container.filters=[],this.strokeSprite.alpha=this.strokeState.layerOpacity),this.updateLayerDepths()),this.drawStroke()},t.prototype.strokeContinue=function(t){this.addPointerEventAsPoint(t),this.drawStroke()},t.prototype.strokeEnd=function(t){this.strokeState.isStraightLine||this.addPointerEventAsPoint(t),this.stopDrawing()},t.prototype.setIsStraightLine=function(t){if(this.strokeState&&(t||(this.strokeState.isStraightLine=!1),t&&!this.strokeState.isStraightLine)){this.strokeState.isStraightLine=!0;var e=this.strokeState.points.map(function(t){return t.pressure}).reduce(function(t,e){return t+e})/this.strokeState.points.length;this.strokeState.straightLinePressure=null!=this.strokeState.straightLinePressure?this.strokeState.straightLinePressure:e,this.drawStroke()}},t.prototype.getIsStraightLine=function(){return!!this.pointerDown&&!!this.strokeState&&this.strokeState.isStraightLine},t.prototype.setShouldSnap=function(t){this.strokeState&&this.strokeState.isStraightLine&&(this.strokeState.shouldSnap=t)},t.prototype.stopDrawing=function(t){void 0===t&&(t={cancel:!1}),t.cancel?(this.offscreenContainer.removeChildren(),this.disposeContainer(this.segmentContainer),this.disposeContainer(this.liveContainer),this.disposeContainer(this.strokeSprite),this.app.renderer.render(new n.Sprite(n.Texture.EMPTY),this.strokeSprite.texture,!0)):this.drawStroke(!0),this.layers.markDirty(this.strokeState.layerIndices),this.setLayerOpacity(this.layers.currentIndex,this.strokeState.layerOpacity),this.layers[this.layers.currentIndex].container.filters=[],this.updateLayerDepths(),this.pointerDown=!1,this.onStrokeAfter&&this.onStrokeAfter(this.strokeState)},t.prototype.getInterpolatedStrokeInput=function(t,e){for(var r=[],i=[],n=0;n<e.segments.length;n++)e.segments[n].location&&i.push(e.segments[n].location.offset);var o=0,a=Math.max(1,this.strokeState.size*(this.efficiencyMode?this.brush.settings.efficiencySpacing:this.brush.settings.spacing));null==this.strokeState.lastSpacing&&(this.strokeState.lastSpacing=a);var h=a-this.strokeState.lastSpacing,p=e.length,l=0,u=p+-(this.strokeState.lastSpacing+p),c=!1;for(0===p&&(h=0,p=a,c=!0),l=h;l<p;l+=a){for(var d=e.getPointAt(l),f=o;f<i.length;f++)i[f]<l&&(o=f);var y=void 0,g=void 0,v=void 0;if(c)y=t[o].pressure,g=t[o].tiltAngle,v=t[o].tilt;else{var S=(l-i[o])/(i[o+1]-i[o]);y=s.lerp(t[o].pressure,t[o+1].pressure,S),g=s.lerp(t[o].tiltAngle,t[o+1].tiltAngle,S),v=s.lerp(t[o].tilt,t[o+1].tilt,S)}r.push([this.strokeState.isErasing?0:(this.strokeState.color>>16&255)/255,this.strokeState.isErasing?0:(this.strokeState.color>>8&255)/255,this.strokeState.isErasing?0:(255&this.strokeState.color)/255,this.strokeState.size,this.strokeState.nodeOpacityScale,d.x,d.y,y,g,v,this.brush,this.strokeState.grainOffset.x,this.strokeState.grainOffset.y]),u=l}return this.strokeState.lastSpacing=p-u,r},t.prototype.addStrokeNodes=function(t,e,r){for(var i=0,n=this.getInterpolatedStrokeInput(t,e);i<n.length;i++){var s=n[i];this.addStrokeNode.apply(this,s.concat([r]))}},t.prototype.localizePoint=function(t){return this.sketchPaneContainer.toLocal(new n.Point(t.x-this.viewClientRect.left,t.y-this.viewClientRect.top),this.app.stage)},t.prototype.globalizePoint=function(t){var e=this.sketchPaneContainer.toGlobal(new n.Point(t.x,t.y));return e.x+=this.viewClientRect.left,e.y+=this.viewClientRect.top,e},t.prototype.addPointerEventAsPoint=function(t){var e=this.localizePoint(t),r="mouse"===t.pointerType?t.pressure>0?.5:0:t.pressure,n="mouse"===t.pointerType?{angle:-90,tilt:37}:s.calcTiltAngle(t.tiltY,t.tiltX);this.strokeState.points.push({x:e.x,y:e.y,pressure:r,tiltAngle:n.angle,tilt:n.tilt}),this.strokeState.lastStaticIndex=Math.max(0,this.strokeState.lastStaticIndex-1),this.strokeState.points=this.strokeState.points.slice(Math.max(0,this.strokeState.lastStaticIndex-1),this.strokeState.points.length),this.strokeState.path=new i.Path(this.strokeState.points),this.strokeState.points.length>1&&this.strokeState.path.smooth({type:"catmull-rom",factor:.5})},t.prototype.drawStroke=function(t){if(void 0===t&&(t=!1),this.strokeState.isStraightLine){this.app.renderer.render(new n.Sprite(n.Texture.EMPTY),this.strokeSprite.texture,!0);var e=(new n.Graphics).beginFill(16711680,1).drawRect(0,0,this.width,this.height).endFill();this.app.renderer.render(e,this.eraseMask.texture,!0);var r=this.strokeState.origin,s=this.strokeState.points[this.strokeState.points.length-1];if(s.pressure=r.pressure=this.strokeState.straightLinePressure,this.strokeState.shouldSnap){var o=Math.atan2(s.y-r.y,s.x-r.x),a=Math.hypot(s.x-r.x,s.y-r.y),h=(11.25*Math.round((180*o/Math.PI+180)/11.25)-180)*Math.PI/180;s.x=r.x+Math.cos(h)*a,s.y=r.y+Math.sin(h)*a}this.strokeState.points=[r,s,s],this.strokeState.lastStaticIndex=0,this.strokeState.path=new i.Path(this.strokeState.points)}var p=this.strokeState.points.length;if(t){var l=this.strokeState.lastStaticIndex,u=this.strokeState.points.length-1;return this.addStrokeNodes(this.strokeState.points.slice(l,u+1),new i.Path(this.strokeState.path.segments.slice(l,u+1)),this.segmentContainer),this.app.renderer.render(this.segmentContainer,this.strokeSprite.texture,!1),this.strokeState.isErasing?this.updateMask(this.segmentContainer,!0):(this.strokeSprite.alpha=this.strokeState.strokeOpacityScale,this.stampStroke(this.strokeSprite,this.layers.getCurrentLayer()),this.strokeState.strokeOpacityScale<1?this.strokeSprite.alpha=this.strokeState.strokeOpacityScale:this.strokeSprite.alpha=this.strokeState.layerOpacity),this.disposeContainer(this.segmentContainer),this.offscreenContainer.removeChildren(),this.disposeContainer(this.liveContainer),this.disposeContainer(this.strokeSprite),void this.app.renderer.render(new n.Sprite(n.Texture.EMPTY),this.strokeSprite.texture,!0)}if(p>=3){l=(c=this.strokeState.points.length-1)-2,u=c-1;this.addStrokeNodes(this.strokeState.points.slice(l,u+1),new i.Path(this.strokeState.path.segments.slice(l,u+1)),this.segmentContainer),this.strokeState.isErasing?this.updateMask(this.segmentContainer):this.app.renderer.render(this.segmentContainer,this.strokeSprite.texture,!1),this.disposeContainer(this.segmentContainer),this.offscreenContainer.removeChildren(),this.strokeState.lastStaticIndex=u}if(p>=2){this.disposeContainer(this.liveContainer);var c;l=(c=this.strokeState.points.length-1)-1,u=c;if(this.strokeState.isErasing);else{var d=this.strokeState.lastSpacing;this.addStrokeNodes(this.strokeState.points.slice(l,u+1),new i.Path(this.strokeState.path.segments.slice(l,u+1)),this.liveContainer),this.strokeState.lastSpacing=d}}},t.prototype.updateMask=function(t,e){var r=this;void 0===e&&(e=!1);if(!this.strokeState.layerIndices.map(function(t){return r.layers[t]}).sort(function(t,e){return function(t,e){return e-t}(t.sprite.parent.getChildIndex(t.sprite),e.sprite.parent.getChildIndex(e.sprite))})[0].sprite.mask){this.layersContainer.addChild(this.eraseMask);var i=(new n.Graphics).beginFill(16711680,1).drawRect(0,0,this.width,this.height).endFill();this.app.renderer.render(i,this.eraseMask.texture,!0);for(var s=0,o=this.strokeState.layerIndices;s<o.length;s++){var a=o[s];this.layers[a].sprite.mask=this.eraseMask}}if(this.app.renderer.render(t,this.eraseMask.texture,!1),e)for(var h=0,p=this.strokeState.layerIndices;h<p.length;h++){a=p[h];var l=this.layers[a];l.sprite.addChild(this.eraseMask),l.sprite.mask=this.eraseMask,this.layers[a].rewrite(),l.sprite.mask=null,l.sprite.removeChild(this.eraseMask)}},t.prototype.replaceLayer=function(t,e,r){void 0===r&&(r=!0),t=null==t?this.layers.getCurrentIndex():t,this.layers[t].replace(e,r)},t.prototype.getLayerCanvas=function(t){return console.warn("SketchPane#getLayerCanvas is deprecated. Please fix the caller to use a different method."),console.trace(),t=null==t?this.layers.getCurrentIndex():t,this.app.renderer.plugins.extract.canvas(this.layers[t].sprite.texture)},t.prototype.exportLayer=function(t,e){return void 0===e&&(e="base64"),t=null==t?this.layers.getCurrentIndex():t,this.layers[t].export(e)},t.prototype.extractThumbnailPixels=function(t,e,r){return void 0===r&&(r=[]),this.layers.extractThumbnailPixels(t,e,r)},t.prototype.clearLayer=function(t){t=null==t?this.layers.getCurrentIndex():t,this.layers[t].clear()},t.prototype.getNumLayers=function(){return this.layers.length-1},t.prototype.getCurrentLayerIndex=function(t){return this.layers.getCurrentIndex()},t.prototype.setCurrentLayerIndex=function(t){this.pointerDown||this.layers.setCurrentIndex(t)},Object.defineProperty(t.prototype,"brushSize",{get:function(){return this._brushSize},set:function(t){this._brushSize=t,this.cursor.updateSize()},enumerable:!0,configurable:!0}),t.prototype.isDrawing=function(){return this.pointerDown},t.prototype.getLayerOpacity=function(t){return this.layers[t].getOpacity()},t.prototype.setLayerOpacity=function(t,e){this.layers[t].setOpacity(e)},t.prototype.markLayersDirty=function(t){return this.layers.markDirty(t)},t.prototype.clearLayerDirty=function(t){this.layers[t].setDirty(!1)},t.prototype.getLayerDirty=function(t){return this.layers[t].getDirty()},t.prototype.isLayerEmpty=function(t){return this.layers[t].isEmpty()},t.prototype.getDOMElement=function(){return this.app.view},t.prototype.flipLayers=function(t){void 0===t&&(t=!1),this.layers.flip(t)},t}();r.d(e,"SketchPane",function(){return m}),r.d(e,"util",function(){return s})},91:function(t,e){t.exports="precision highp float;\n\n// brush texture\nuniform sampler2D uSampler;\n// grain texture\nuniform sampler2D u_grainTex;\n\n// color\nuniform float uRed;\nuniform float uGreen;\nuniform float uBlue;\n\n// node\nuniform float uOpacity;\nuniform float uRotation;\n\n// grain\nuniform float uBleed;\nuniform float uGrainRotation;\nuniform float uGrainScale;\nuniform float u_x_offset;\nuniform float u_y_offset;\n\n// brush\nuniform vec2 u_offset_px;\nuniform vec2 u_node_scale;\n\n// from vert shader\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\n// from PIXI\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 filterClamp;\nuniform mat3 filterMatrix;\n\nvec2 rotate (vec2 v, float a) {\n\tfloat s = sin(a);\n\tfloat c = cos(a);\n\tmat2 m = mat2(c, -s, s, c);\n\treturn m * v;\n}\n\nvec2 scale (vec2 v, vec2 _scale) {\n\tmat2 m = mat2(_scale.x, 0.0, 0.0, _scale.y);\n\treturn m * v;\n}\n\nvec2 mapCoord (vec2 coord) {\n  coord *= filterArea.xy;\n  return coord;\n}\n\nvec2 unmapCoord (vec2 coord) {\n  coord /= filterArea.xy;\n  return coord;\n}\n\nvoid main(void) {\n  // user's intended brush color\n  vec3 color = vec3(uRed, uGreen, uBlue);\n\n\t//\n\t//\n\t// brush\n\t//\n  vec2 coord = mapCoord(vTextureCoord) / dimensions;\n\n\t// translate by the subpixel\n\tcoord -= u_offset_px / dimensions;\n\n  // move space from the center to the vec2(0.0)\n  coord -= vec2(0.5);\n\n  // rotate the space\n  coord = rotate(coord, uRotation);\n\n  // move it back to the original place\n  coord += vec2(0.5);\n\n\t// scale\n\tcoord -= 0.5;\n  coord *= 1.0 / u_node_scale;\n\tcoord += 0.5;\n\n\tcoord = unmapCoord(coord * dimensions);\n\n\t//\n\t//\n\t// grain\n\t//\n\tvec2 fcoord = vFilterCoord;\n\tfcoord -= vec2(u_x_offset, u_y_offset);\n\tfcoord /= uGrainScale;\n\tvec4 grainSample = texture2D(u_grainTex, fract(fcoord));\n\n\t//\n\t//\n\t// set gl_FragColor\n\t//\n\t// clamp (via https://github.com/pixijs/pixi.js/wiki/v4-Creating-Filters#bleeding-problem)\n\tif (coord == clamp(coord, filterClamp.xy, filterClamp.zw)) {\n\t\t// read a sample from the texture\n\t  vec4 brushSample = texture2D(uSampler, coord);\n\t  // tint\n\t  gl_FragColor = vec4(color, 1.);\n\t\tgl_FragColor *= ((brushSample.r * grainSample.r * (1.0+uBleed))- uBleed ) * (1.0+ uBleed) * uOpacity;\n\n\t\t// gl_FragColor = grain;\n\t} else {\n\t\t// don't draw\n\t\tgl_FragColor = vec4(0.);\n\t}\n}\n"}});