
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.title = cc.find("bg/title", this.node);
        this.content = cc.find("bg/content", this.node)
        this.node_two = cc.find("bg/n_two", this.node)
        this.node_one = cc.find("bg/n_one", this.node)
        this.bt_one_sure = cc.find("bg/n_one/bt_sure", this.node)
        this.bt_two_sure = cc.find("bg/n_two/bt_sure", this.node)
        this.bt_two_cancel = cc.find("bg/n_two/bt_cancel", this.node)
    },

    start () {
        
    },

    init : function(_title,_content,_type,_funcSure,_funcCancel){
        var self = this
        console.log("_title:" + _title + " _content:" + _content)
        this.title = _title
        this.content.getComponent(cc.Label).string = _content
        this.bt_two_sure.on('click',this.defaultCallBack,this)
        this.bt_two_cancel.on('click',this.defaultCallBack,this)
        this.bt_one_sure.on('click',this.defaultCallBack,this)
        if(_type == 1){
            this.node_one.active = false
            this.node_two.active = true
            if(typeof _funcSure != "undefined"){
                this.bt_two_sure.on('click',_funcSure)
            }
            if(typeof _funcCancel != "undefined"){
                this.bt_two_cancel.on('click',_funcCancel)
            }
        }
        else if(_type == 2){
            this.node_one.active = true
            this.node_two.active = false
            if(typeof _funcSure != "undefined"){
                this.bt_one_sure.on('click',_funcSure)
            }
        }
    },

    defaultCallBack : function(button){
        console.log("default")
        this.node.destroy()
    }

    // update (dt) {},
});
