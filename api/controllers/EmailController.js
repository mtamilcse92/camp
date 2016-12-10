/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `EmailController.index()`
   */
  // index: function (req, res) {
  //   return res.json({
  //     todo: 'index() is not implemented yet!'
  //   });
  // },


  /**
   * `EmailController.show()`
   */
  show: function (req, res) {
    console.log(req.allParams())
    var id = req.param('id');
    Email.find(function(err, show){
      if(err){
        res.send(err, 500);
      }
      console.log(show);
      res.json(show);
    })
  },


  /**
   * `EmailController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `EmailController.create()`
   */
  create: function (req, res) {
    var param = req.allParams();
    Email.create(param, function(err, created){
      if(err){
        res.send(err, 500);
      }
      console.log(created);
      res.json(created);
    });
  },


  /**
   * `EmailController.edit()`
   */
  edit: function (req, res) {
   var id = req.param('id');
   Email.findOne(id, function(err, edited){
    if(err){
      res.send(err, 500);
    }
    console.log(edited);
    res.json(edited);
   });
  },


  /**
   * `EmailController.update()`
   */
  update: function (req, res) {
    var id = req.param('id');
    var param = req.allParams();
    Email.update(id, param, function(err, updated){
      if(err){
        res.send(err, 500);
      }
      console.log(updated);
      res.json(updated);
    });
  },


  /**
   * `EmailController.destroy()`
   */
  destroy: function (req, res) {
   var id = req.param('id');
   Email.findOne(id, function(err,findemail){
    if(err){
      res.send(err, 500);
    }
    console.log(findemail);
    Email.destroy(id, function(err, destroyed){
      if(err){
        res.send(err, 500);
      }
      res.json(destroyed);
    });
   });
  }
};

