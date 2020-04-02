var slug = 'onevision-partner-success'
  var event = 'invitee.canceled'
  var channel = '';
  
  var make = function (event, channel)
    {
      var obj = {
				event:event,
        channel:channel,
      };
      return obj
    }; 
  
  if (event === 'invitee.canceled') {
  	event = 'We have a meeting cancellation :('
  } else if (event === 'invitee.created') {
  	event = 'We have a newly scheduled meeting!'
  } else {
  	return 'error'
  }
  
  if (slug.includes('onevision-partner-success') == true) {
     //feed_partner-calendly-meetings
       channel = "C010R682F2S";
  } else if (slug.includes('techmemberships') == true) {
      //feed_membership-consults-calendar
      channel = "CQ3TB1UR1";
  } else if (slug.includes('membership-consult') == true) {
      //feed_membership-consults-calendar
      channel = "CQ3TB1UR1";
  } else if (slug.includes('onevision-sales')  == true) {
      //feed_bd-calendar
      channel = "CMH1W6KGD";
  } else if (slug.includes('One-on-One')  == true) {
      channel = "null";
  } else if (slug.includes('covid-review')  == true) {
      //feed_partner-calendly-meetings
      channel = "C010R682F2S";
  } else if (slug.includes('partner-development')  == true) {
      //feed_partner-calendly-meetings
      channel = "C010R682F2S";      
  } else if (slug.includes('partnership-review')  == true) {
      //feed_partner-calendly-meetings
      channel = "C010R682F2S";   
  } else if (slug.includes('rsm-champions')  == true) {
      //feed_partner-calendly-meetings
      channel = "C010R682F2S";
  } else {
    return 'null'
  }
  
 var output = make(event, channel);
 console.log(output)