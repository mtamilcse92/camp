/**
 * TemplateController
 *
 * @description :: Server-side logic for managing Templates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `TemplateController.index()`
   */
  // index: function (req, res) {
  //   return res.json({
  //     todo: 'index() is not implemented yet!'
  //   });
  // },


  /**
   * `TemplateController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
    Template.findOne(id).populate('email').populate('sms').populate('webpush').populate('fcm').exec(function(err, show){
      if(err){
        res.send(err, 500);
      }
      console.log(show);
      res.json(show);
    });
    },


  /**
   * `TemplateController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `TemplateController.create()`
   */
  create: function (req, res) {
    var param = req.allParams();
    Template.create(param, function(err, created){
      if(err){
        res.send(err, 500);
      }
      console.log(created);
      res.json(created);
    });
  },


  /**
   * `TemplateController.edit()`
   */
  edit: function (req, res) {
   var id = req.param('id');
   Template.findOne(id, function(err, edit){
    if(err){
      res.send(err, 500);
    }
    res.json(edit);
   });
  },


  
  /**
   * `TemplateController.update()`
   */
   update: function(req,res) {
    var id = req.param('id');
    var param = req.allParams();
    Template.update(id, param, function(err, updated){
      if(err){
        console.log(err);
        res.send(err, 500);
      }
      console.log(updated);
      res.json(updated);
    });
   },

  /**
   * `TemplateController.destroy()`
   */
   
  destroy: function (req, res) {
   var id = req.param('id');
   Template.find(id, function(err, findtemplate){
    if(err){
      console.log(err);
      res.send(err, 500);
    }
    Template.destroy({id : id}).exec(function(err, templatedelete){
      if(err) return res.send(err, 500);
      Email.destroy({ templateId : id}).exec(function(err, emaildelete){
        if(err) return res.send(err, 500);
        Fcm.destroy({ templateno : id}).exec(function(err, fcmdelete){
          if(err) return res.send(err, 500);
          Sms.destroy( { template_id : id}).exec(function(err, smsdelete){
            if(err) return res.send(err, 500);
            Webpush.destroy({ template : id}).exec(function(err, webpushdelete){
              if(err) return res.send(err, 500);
              res.json({ templatedelete: "delete"});
            });

          });
        });
      });
    });
   });
     }
};

