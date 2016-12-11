/**
 * ChannelController
 *
 * @description :: Server-side logic for managing channels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ChannelController.index()`
   */
  // index: function (req, res) {
  //   return res.json({
  //     todo: 'index() is not implemented yet!'
  //   });
  // },


  /**
   * `ChannelController.show()`
   */
  
  show: function (req, res) {
    
    //Channel.find().populate(['email','people','sms','webpush','fcm']).exec(function(err, show){
    Channel.find().populate(['email','sms','webPush','pushNotification']).exec(function(err, show){
      if(err){
        res.send(err, 500);
      }
      console.log(show);
      res.json(show);
    });
    },

  /**
   * `ChannelController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `ChannelController.create()`
   */
   create: function (req, res) {
    var param = req.allParams();
    Channel.create(param, function(err, created){
      if(err){
        res.send(err, 500);
      }
      console.log(created);
      res.json(created);
    });
  },


  /**
   * `ChannelController.edit()`
   */
  edit: function (req, res) {
   var id = req.param('id');
   Channel.findOne(id, function(err, edit){
    if(err){
      res.send(err, 500);
    }
    res.json(edit);
   });
  },

  /**
   * `ChannelController.update()`
   */
   update: function(req,res) {
    var id = req.param('id');
    var param = req.allParams();
    Channel.update(id, param, function(err, updated){
      if(err){
        console.log(err);
        res.send(err, 500);
      }
      console.log(updated);
      res.json(updated);
    });
   },


  /**
   * `ChannelController.destroy()`
   */
   
  destroy: function (req, res) {
   var id = req.param('id');
   Channel.find(id, function(err, findchannel){
    if(err){
      console.log(err);
      res.send(err, 500);
    }
    Channel.destroy({id : id}).exec(function(err, channeldelete){
      if(err) return res.send(err, 500);
      Template.destroy({ channelId : id}).exec(function(err, templatedelete){
        if(err) return res.send(err, 500);
        Content.destroy({ channelid : id}).exec(function(err, contentdelete){
          if(err) return res.send(err, 500);
          People.destroy( { channel_id : id}).exec(function(err, peopledelete){
            if(err) return res.send(err, 500);
              res.json({ channeldelete: "delete"});
          });
        });
        });
      });
  });
    }  
};

