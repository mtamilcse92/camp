/**
 * GroupController
 *
 * @description :: Server-side logic for managing groups
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `GroupController.create()`
   */
  create: function (req, res) {
    //console.log("create");
    Group.create(req.params.all(),function(err,created){
    if (err) {
      return res.send(err,500);
    }
    res.json(created);
   });
  },


  /**
   * `GroupController.show()`
   */
  show: function (req, res) {
    //console.log("show");
    Group.find().populate('peoples').exec(function(err,values){
      if (err) {
        return res.send(err,500)
      }
      res.json(values)
    });
  },


  /**
   * `GroupController.update()`
   */
  update: function (req, res) {
    //console.log("update");
    Group.update(req.param('id'),req.params.all(),function(err,updated){
      if (err) {
        return res.send(err,500);
      }
      res.json(updated);
    });
  },


  /**
   * `GroupController.destroy()`
   */
  destroy: function (req, res) {
    //console.log("delete");
    Group.destroy(req.param('id'),function(err,destroy){
      if (err) {
        return res.send(err,500);
      }
      res.json("deleted");
    });
  }
};

