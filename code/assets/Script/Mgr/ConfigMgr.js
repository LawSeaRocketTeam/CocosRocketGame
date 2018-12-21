var self = null

cc.Class({
    extends: cc.Component,

     properties: {
        jsonFloder:"Config"
    },

    // use this for initialization
    onLoad: function () {
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ConfigMgr");
        self = this
        self.json_data = []
        cc.game.addPersistRootNode(this.node);
    },

    start: function () {
        //console.log("OnStart " + self.jsonFloder + "/configList.json");
        cc.loader.loadRes(self.jsonFloder + "/configList.json",self.onConfigLoad)
    },

    onConfigLoad: function (err,object) {
        //console.log("OnConfigLoad ");
        if(err){
            console.log("OnConfigLoad err:" + err);
            return;
        }
        
        let json = object.json
        let children = json.children
        let row = json.rows
        let a = JSON.stringify(object)
        //console.log("OnConfigLoad object:" + a)
        //console.log("OnConfigLoad children:" + children)
        for(let i = 0; i < children.length; i++)
        {
            cc.loader.loadRes(self.jsonFloder + "/" + children[i].fileName + ".json",self.onConfigLoadCompleted);
        }
    },

    onConfigLoadCompleted :function (err,object) {
        //console.log("OnConfigLoadCompleted ");
        if(err){
            console.log("OnConfigLoadCompleted err:" + err);
            return;
        }
        let json = object.json;
        console.log("onConfigLoadCompleted:" + json.fileName);
        //console.log("OnConfigLoadCompleted json:" + JSON.stringify(json));
        self.json_data[json.fileName] = object.json;
    },

    //通过Json文件名字获取Json数据
    getJsonData :function(_name){
        //console.log("getJsonData _name:" + _name);
        let jsonData = self.json_data[_name]
        //console.log("getJsonData jsonData:" + JSON.stringify(jsonData));
        return self.json_data[_name];
    },

    // onDisable: function(){
    //     console.log("onDisable");
    // },

    // onDestroy : function(){
    //     console.log("onDestroy");
    //     for(let i = 0; i < self.json_data.length; i++){
    //         cc.loader.releaseAsset(self.json_data[i]);
    //         console.log("onDestroy");
    //     }
    // },
});