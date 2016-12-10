/**
 * WebpushController
 *
 * @description :: Server-side logic for managing webpushes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `WebpushController.index()`
   */
   // index: function (req, res) {
  //   return res.json({
  //     todo: 'index() is not implemented yet!'
  //   });
  // },


  /**
   * `WebpushController.show()`
   */
  show: function (req, res) {
    // var id = req.param('id');
    Webpush.find(function(err, show){
      if(err){
        res.send(err, 500);
      }
      console.log(show);
      res.json(show);
    })
  },


  /**
   * `WebpushController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `WebpushController.create()`
   */
  create: function (req, res) {
    var param = req.allParams();
    Webpush.create(param, function(err, created){
      if(err){
        res.send(err, 500);
      }
      console.log(created);
      res.json(created);
    });
  },


  /**
   * `WebpushController.edit()`
   */
  edit: function (req, res) {
   var id = req.param('id');
   Webpush.findOne(id, function(err, edited){
    if(err){
      res.send(err, 500);
    }
    console.log(edited);
    res.json(edited);
   });
  },


  /**
   * `WebpushController.update()`
   */
  update: function (req, res) {
    var id = req.param('id');
    var param = req.allParams();
    Webpush.update(id, param, function(err, updated){
      if(err){
        res.send(err, 500);
      }
      console.log(updated);
      res.json(updated);
    });
  },


  /**
   * `WebpushController.destroy()`
   */
  destroy: function (req, res) {
   var id = req.param('id');
   Webpush.findOne(id, function(err,findWebpush){
    if(err){
      res.send(err, 500);
    }
    console.log(findWebpush);
    Webpush.destroy(id, function(err, destroyed){
      if(err){
        res.send(err, 500);
      }
      res.json(destroyed);
    });
   });
  }
};

