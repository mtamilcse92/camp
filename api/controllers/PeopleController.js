/**
 * PeopleController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `PeopleController.create()`
   */
  create: function (req, res) {
   People.create(req.params.all(),function(err,created){
    if (err) {
      return res.send(err,500);
    }
    res.json(created);
   });
  },


  /**
   * `PeopleController.show()`
   */
  show: function (req, res) {
    People.find().exec(function(err,show){
      if (err) {
        return res.send(err,500)
      }
        Group.find().exec(function(err, findgroup){
        if(err){
          res.send(err, 500);
        }
        var collections ={};
        collections.peoples=show;
        // var peoples = show;
        // console.log(peoples);
        // var group = {allGroups:findgroup};
        collections.groups=findgroup;
        // console.log(group);
        // peoples.push(group);
         // console.log("finallllll", peoples);
         res.json(collections);
      });
    });
  },


  /**
   * `PeopleController.update()`
   */
  update: function (req, res) {
    People.update(req.param('id'),req.params.all(),function(err,updated){
      if (err) {
        return res.send(err,500);
      }
      res.json(updated);
    });
  },


  /**
   * `PeopleController.destroy()`
   */
  destroy: function (req, res) {
    People.destroy(req.param('id'),function(err,destroy){
      if (err) {
        return res.send(err,500);
      }
      res.json("deleted");
    });
  }
};

