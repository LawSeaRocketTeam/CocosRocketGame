// 通用接口类
// author by jackson

module.exports = {
    createMsgBox : function(_parent,_title,_content,_type,_okFunc,_cancelFunc){
        cc.loader.loadRes("prefab/MsgBox",function(err,prefab){
            if(err){
                console.log("loginCallBack loadRes err:" + err )
            }
            var msgNode = cc.instantiate(prefab)
            _parent.node.addChild(msgNode,99,"MsgBox")
            var msgScript = msgNode.getComponent("msgbox");
            msgScript.init(_title,_content,_type,_okFunc,_cancelFunc)
        })
    },

    createPrefab : function(_parent,_url,_zIdx,_tag){
        cc.loader.loadRes(_url,function(err,prefab){
            if(err){
                console.log("createPrefab loadRes err:" + err )
            }
            let node = cc.instantiate(prefab)
            let zIdx = _zIdx || 1;
            let tag = _tag || ""
            _parent.node.addChild(node,zIdx,tag)
        })            
    }
}

// cc.Class({
//     extends: cc.Component,

//     properties: {
//         // foo: {
//         //     // ATTRIBUTES:
//         //     default: null,        // The default value will be used only when the component attaching
//         //                           // to a node for the first time
//         //     type: cc.SpriteFrame, // optional, default is typeof default
//         //     serializable: true,   // optional, default is true
//         // },
//         // bar: {
//         //     get () {
//         //         return this._bar;
//         //     },
//         //     set (value) {
//         //         this._bar = value;
//         //     }
//         // },
//     },

//     // LIFE-CYCLE CALLBACKS:

//      onLoad () {
//         cc.log("common onLoad")
//      },

//     ctor : function(){
//         cc.log("common test ctor")
//     },

//     start () {

//     },

//    createMsgBox : function(_parent,_title,_content,_type,_okFunc,_cancelFunc){
//         cc.loader.loadRes("prefab/MsgBox",function(err,prefab){
//             if(err){
//                 console.log("loginCallBack loadRes err:" + err )
//             }
//             var msgNode = cc.instantiate(prefab)
//             _parent.node.addChild(msgNode)
//             var msgScript = msgNode.getComponent("msgbox");
//             msgScript.init(_title,_content,_type,_okFunc,_cancelFunc)
//         })
//     }

//     // update (dt) {},
// });
