/**
 * Channel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	 email:
    {
      collection: 'email',
      via: 'templateId'
    },

    sms:
    {
      collection: 'sms',
      via: 'template_id'

    },
    webpush:
    {
      collection: 'webpush',
      via: 'template'
    },

    fcm:
    {
      collection: 'fcm',
      via: 'templateno'
    },

  	// people:
  	// {
  	// 	collection: 'people', 
  	// 	via:'channel_id'
  	// },

  	campaignId:
  	{
  		model: 'campaign'
  	},
    
  	escalationId:
  	{
  		model: 'escalation'
  	}

  }
};

