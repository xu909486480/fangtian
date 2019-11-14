const uploadFile = opt => {
    opt = opt || {};
    opt.url = opt.url || '';
    opt.filePath = opt.filePath || null;//要上传文件资源的路径。   
    opt.name = opt.name || null;//文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容 
    
    opt.filePath = opt.filePath || null;
    opt.success = opt.success || function() {};


    uni.uploadFile({
        url: ApiUrl + opt.url,
        filePath:opt.filePath,
        name:opt.name,
        success:function(res){
            opt.success(res);
        },
        fail: function () {
            uni.showToast({
                title: '请稍后重试'
            });
        }

    })
    
}
module.exports = {
	uploadFile
}