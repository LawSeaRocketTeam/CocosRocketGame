//房间脚本

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.pageView = cc.find("bg/pageview",this.node);
        this.rpMgr = this.pageView.getComponent("RoomPageViewMgr")
    },

    start () {
        let ConfigMgr = cc.find("MgrNode").getComponent("ConfigMgr")
        let data = ConfigMgr.getJsonData("room")
        cc.log("data : " + JSON.stringify(data))

        for(let i = 1; i <= data.children.length; i++)
        {
            let itemInfo = data.children[i - 1]
            cc.log("itemInfo : " + JSON.stringify(itemInfo))
            if(itemInfo.desc != "暂缺")
            {
                this.rpMgr.addItem(1,itemInfo.desc)
            }
            else
            {
                this.rpMgr.addItem(2)
            }
        }
    },

    // update (dt) {},
});
