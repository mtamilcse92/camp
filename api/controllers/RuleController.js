/**
 * RuleController
 *
 * @description :: Server-side logic for managing rules
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `RuleController.index()`
   */
  // index: function (req, res) {
  //   return res.json({
  //     todo: 'index() is not implemented yet!'
  //   });
  // },


  /**
   * `RuleController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
    Rule.find().exec(function(err, show){
      if(err){
        res.send(err, 500);
      }
      console.log(show);
      res.json(show);
    })
  },

  /**
   * `RuleController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `RuleController.create()`
   */
  create: function (req, res) {
    var param = req.allParams();
    Rule.create(param, function(err, created){
      if(err){
        res.send(err, 500);
      }
      console.log(created);
      res.json(created);
    });
  },


  /**
   * `RuleController.edit()`
   */
  edit: function (req, res) {
   var id = req.param('id');
   Rule.findOne(id, function(err, edited){
    if(err){
      res.send(err, 500);
    }
    console.log(edited);
    res.json(edited);
   });
  },
  /**
   * `RuleController.update()`
   */
  update: function (req, res) {
    var id = req.param('id');
    var param = req.allParams();
    Rule.update(id, param, function(err, updated){
      if(err){
        res.send(err, 500);
      }
      console.log(updated);
      res.json(updated);
    });
  },


  /**
   * `RuleController.destroy()`
   */
  destroy: function (req, res) {
   var id = req.param('id');
   Rule.findOne(id, function(err,findrule){
    if(err){
      res.send(err, 500);
    }
    console.log(findemail);
    Rule.destroy(id, function(err, destroyed){
      if(err){
        res.send(err, 500);
      }
      res.json(destroyed);
    });
   });
  }
};

