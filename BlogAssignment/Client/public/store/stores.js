var Reflux=require('reflux');
var Actions=require('../actions/actions');

var ArticleStore=Reflux.createStore({
  listenables:Actions,
  data:{

  },
  onSaveArticleAction:function(formdata){
    console.log('--onSaveArticleActionStore--');
    $.ajax({
       url: '/api/saveArticle/',
       type:'post',
       data:formdata,
       cache: false,
       success: function(data) {
         console.log(data);
         //this.data.movie={};
         //this.data.msg='Movie Added Successfully';
         this.trigger(this.data);
       }.bind(this)
         });
  }
});

module.exports=ArticleStore;
