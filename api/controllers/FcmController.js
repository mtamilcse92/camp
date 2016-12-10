/**
 * FcmController
 *
 * @description :: Server-side logic for managing fcms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `FcmController.index()`
   */
  // index: function (req, res) {
  //   return res.json({
  //     todo: 'index() is not implemented yet!'
  //   });
  // },


  /**
   * `FcmController.show()`
   */
  show: function (req, res) {
    // var id = req.param('id');
    Fcm.find(function(err, show){
      if(err){
        res.send(err, 500);
      }
      console.log(show);
      res.json(show);
    })
  },


  /**
   * `FcmController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `FcmController.create()`
   */
  create: function (req, res) {
    var param = req.allParams();
    Fcm.create(param, function(err, created){
      if(err){
        res.send(err, 500);
      }
      console.log(created);
      res.json(created);
    });
  },



  /**
   * `FcmController.edit()`
   */
    edit: function (req, res) {
   var id = req.param('id');
   Fcm.findOne(id, function(err, edited){
    if(err){
      res.send(err, 500);
    }
    console.log(edited);
    res.json(edited);
   });
  },


  /**
   * `FcmController.update()`
   */
   update: function (req, res) {
    var id = req.param('id');
    var param = req.allParams();
    Fcm.update(id, param, function(err, updated){
      if(err){
        res.send(err, 500);
      }
      console.log(updated);
      res.json(updated);
    });
  },

  /**
   * `FcmController.destroy()`
   */
  destroy: function (req, res) {
   var id = req.param('id');
   Fcm.findOne(id, function(err,findfcm){
    if(err){
      res.send(err, 500);
    }
    console.log(findemail);
    Fcm.destroy(id, function(err, destroyed){
      if(err){
        res.send(err, 500);
      }
      res.json(destroyed);
    });
   });
  }
};

