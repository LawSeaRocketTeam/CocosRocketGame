var Common = require("Mgr/Common")

cc.Class({
    extends: cc.Component,

    properties: {
  
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.btLogin = this.node.getChildByName("btLogin");
    },

    start () {
        this.btLogin.on('click',this.loginCallBack,this)
    },

    // update (dt) {},

    loginCallBack : function (button) {
        

        Common.createPrefab(this,"prefab/RoomList");
        //console.log("!!!!!!!!!!1Common:" + Common);
        //Common.createMsgBox(this,"测试标题","测试内容",1);

        //var Common = cc.find('MgrNode').getComponent('Common')
        // var self = this
        // cc.loader.loadRes("prefab/MsgBox",function(err,prefab){
        //     if(err){
        //         console.log("loginCallBack loadRes err:" + err )
        //     }
        //     console.log("loginCallBack prefab:" + prefab )
        //     self.msgNode = cc.instantiate(prefab)
        //     self.node.addChild(self.msgNode)
        //     var msgScript = self.msgNode.getComponent("msgbox");
        //     msgScript.init("测试标题","测试内容",1)
        //     // ,function(){
        //     //     console.log("loginCallBack sure click")
        //     //     self.msgNode.destroy()
        //     // },function(){
        //     //     console.log("loginCallBack cancel click")
        //     //     self.msgNode.destroy()
        //     // })
        // })
    }
});
