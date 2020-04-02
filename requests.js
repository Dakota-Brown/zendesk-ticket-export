var request = require('request');
var fs = require('fs');
var counter = 0;

var options = {
    url: 'https://hermarys.zendesk.com/api/v2/incremental/tickets.json?start_time=1451606400&include=groups,last_audits,metric_sets,dates,comment_count,incident_counts,metric_events(single ticket),slas(single ticket)',
    auth: {
        'user': 'isdadmin@onevisionresources.com/token',
        'pass': 'atK4fY2wY5WCQjDGfn88XXpL13N6rengqJu941MU'
    }
};


const data = {
    "zendesk_domain": "hermarys",
    "access": 60269668,
    "assignee": 59448007,
    "audio": 60269848,
    "autoresponder_upgrade": 360000174308,
    "camera_surveillance": 60270028,
    "control": 60270048,
    "description": 59447907,
    "due_time": 59547027,
    "due_time_zone": 59547047,
    "zd_group": 59447987,
    "hvac_climate": 59865007,
    "issue_solved_by_a_reboot": 59864627,
    "issue_type": 59864607,
    "lighting": 59865027,
    "motorized_window_treatment": 59865047,
    "network": 60270128,
    "onsite": 60269348,
    "pd_incident_id": 360023818614,
    "phone_comm": 59865347,
    "power": 61681048,
    "priority": 59447967,
    "proposal_needed": 80995567,
    "recurring_issue": 60270148,
    "scheduled": 360017227174,
    "security_alarm": 59865387,
    "signature_autoresponder_upgrade": 360023831273,
    "status": 59447927,
    "subject": 59447887,
    "time_since_last_update": 59546847,
    "total_time_spent": 59546827,
    "type": 59447947,
    "urgency": 59864227,
    "used_rsm": 59865427,
    "video": 59865407,
    "ovpid": 2279,
    "ns_order_id": null
}

function callback(error, response, body) {
    const ovpid = data.ovpid
    const partner = data.zendesk_domain
    if (!error && response.statusCode == 200) {
        const ticket_data = (JSON.parse([body]))
        const final = [];
        const end_of_stream = ticket_data.end_of_stream 
        const next_page = ticket_data.next_page 
        var t;
        for (t = 0; t < ticket_data.tickets.length; t++) {
            var tickets = ticket_data.tickets[t].custom_fields
            var description = escape(ticket_data.tickets[t].description)
            var description = description.replace(/%20/g, " ")
            var subject = escape(ticket_data.tickets[t].subject)
            var subject = subject.replace(/%20/g, " ")
            var tags = (ticket_data.tickets[t].tags.toString());
            var i;
            var finalArray = [];
            for (var i = 0; i < tickets.length; i++) {
                if (tickets[i].id === data.access) {
                    var key = tickets[i].id;
                    var access = (tickets['access'] = tickets[i].value);
                    finalArray.push({'access':access});
                    delete tickets[key]
                }else if (tickets[i].id === data.audio) {
                    var key = tickets[i].id;
                    var audio = (tickets['audio'] = tickets[i].value);
                    finalArray.push({'audio':audio});
                    delete tickets[key] 
                } else if (tickets[i].id === data.assignee) {
                    var key = tickets[i].id;
                    var assignee = (tickets['assignee'] = tickets[i].value);
                    finalArray.push({'assignee':assignee});
                    delete tickets[key] 
                }else if (tickets[i].id === data.autoresponder_upgrade) {
                    var key = tickets[i].id;
                    var autoresponder_upgrade = (tickets['autoresponder_upgrade'] = tickets[i].value);
                    var autoresponder_upgrade = escape(autoresponder_upgrade)
                    finalArray.push({'autoresponder_upgrade':autoresponder_upgrade});
                    delete tickets[key] 
                }else if (tickets[i].id === data.camera_surveillance) {
                    var key = tickets[i].id;
                    var camera_surveillance = (tickets['camera_surveillance'] = tickets[i].value);
                    finalArray.push({'camera_surveillance':camera_surveillance});
                    delete tickets[key] 
                }else if (tickets[i].id === data.control) {
                    var key = tickets[i].id;
                    var control = (tickets['control'] = tickets[i].value);
                    finalArray.push({'control':control});
                    delete tickets[key] 
                }else if (tickets[i].id === data.callback_required) {
                    var key = tickets[i].id;
                    var callback_required = (tickets['callback_required'] = tickets[i].value);
                    finalArray.push({'callback_required':callback_required});
                    delete tickets[key] 
                }else if (tickets[i].id === data.description) {
                    var key = tickets[i].id;
                    var description = (tickets['description'] = tickets[i].value);
                    finalArray.push({'description':description});
                    delete tickets[key] 
                }else if (tickets[i].id === data.due_time) {
                    var key = tickets[i].id;
                    var due_time = (tickets['due_time'] = tickets[i].value);
                    finalArray.push({'due_time':due_time});
                    delete tickets[key] 
                }else if (tickets[i].id === data.due_time_zone) {
                    var key = tickets[i].id;
                    var due_time_zone = (tickets['due_time_zone'] = tickets[i].value);
                    finalArray.push({'due_time_zone':due_time_zone});
                    delete tickets[key] 
                }else if (tickets[i].id === data.zd_group) {
                    var key = tickets[i].id;
                    var zd_group = (tickets['zd_group'] = tickets[i].value);
                    finalArray.push({'zd_group':zd_group});
                    delete tickets[key] 
                }else if (tickets[i].id === data.hvac_climate) {
                    var key = tickets[i].id;
                    var hvac_climate = (tickets['hvac_climate'] = tickets[i].value);
                    finalArray.push({'hvac_climate':hvac_climate});
                    delete tickets[key] 
                }else if (tickets[i].id === data.issue_solved_by_a_reboot) {
                    var key = tickets[i].id;
                    var issue_solved_by_a_reboot = (tickets['issue_solved_by_a_reboot'] = tickets[i].value);
                    finalArray.push({'issue_solved_by_a_reboot':issue_solved_by_a_reboot});
                    delete tickets[key] 
                }else if (tickets[i].id === data.issue_type) {
                    var key = tickets[i].id;
                    var issue_type = (tickets['issue_type'] = tickets[i].value);
                    finalArray.push({'issue_type':issue_type});
                    delete tickets[key] 
                }else if (tickets[i].id === data.lighting) {
                    var key = tickets[i].id;
                    var lighting = (tickets['lighting'] = tickets[i].value);
                    finalArray.push({'lighting':lighting});
                    delete tickets[key] 
                }else if (tickets[i].id === data.motorized_window_treatment) {
                    var key = tickets[i].id;
                    var motorized_window_treatment = (tickets['motorized_window_treatment'] = tickets[i].value);
                    finalArray.push({'motorized_window_treatment':motorized_window_treatment});
                    delete tickets[key] 
                }else if (tickets[i].id === data.network) {
                    var key = tickets[i].id;
                    var network = (tickets['network'] = tickets[i].value);
                    finalArray.push({'network':network});
                    delete tickets[key] 
                }else if (tickets[i].id === data.onsite) {
                    var key = tickets[i].id;
                    var onsite = (tickets['onsite'] = tickets[i].value);
                    finalArray.push({'onsite':onsite});
                    delete tickets[key] 
                }else if (tickets[i].id === data.pd_incident_id) {
                    var key = tickets[i].id;
                    var pd_incident_id = (tickets['pd_incident_id'] = tickets[i].value);
                    finalArray.push({'pd_incident_id':pd_incident_id});
                    delete tickets[key] 
                }else if (tickets[i].id === data.phone_comm) {
                    var key = tickets[i].id;
                    var phone_comm = (tickets['phone_comm'] = tickets[i].value);
                    finalArray.push({'phone_comm':phone_comm});
                    delete tickets[key] 
                }else if (tickets[i].id === data.power) {
                    var key = tickets[i].id;
                    var power = (tickets['power'] = tickets[i].value);
                    finalArray.push({'power':power});
                    delete tickets[key] 
                }else if (tickets[i].id === data.priority) {
                    var key = tickets[i].id;
                    var priority = (tickets['priority'] = tickets[i].value);
                    finalArray.push({'priority':priority});
                    delete tickets[key] 
                }else if (tickets[i].id === data.proposal_needed) {
                    var key = tickets[i].id;
                    var proposal_needed = (tickets['proposal_needed'] = tickets[i].value);
                    finalArray.push({'proposal_needed':proposal_needed});
                    delete tickets[key] 
                }else if (tickets[i].id === data.recurring_issue) {
                    var key = tickets[i].id;
                    var recurring_issue = (tickets['recurring_issue'] = tickets[i].value);
                    finalArray.push({'recurring_issue':recurring_issue});
                    delete tickets[key] 
                }else if (tickets[i].id === data.scheduled) {
                    var key = tickets[i].id;
                    var scheduled = (tickets['scheduled'] = tickets[i].value);
                    finalArray.push({'scheduled':scheduled});
                    delete tickets[key] 
                }else if (tickets[i].id === data.security_alarm) {
                    var key = tickets[i].id;
                    var security_alarm = (tickets['security_alarm'] = tickets[i].value);
                    finalArray.push({'security_alarm':security_alarm});
                    delete tickets[key] 
                }else if (tickets[i].id === data.signature_autoresponder_upgrade) {
                    var key = tickets[i].id;
                    var signature_autoresponder_upgrade = (tickets['signature_autoresponder_upgrade'] = tickets[i].value);
                    var signature_autoresponder_upgrade = escape(signature_autoresponder_upgrade)
                    finalArray.push({'signature_autoresponder_upgrade':signature_autoresponder_upgrade});
                    delete tickets[key] 
                }else if (tickets[i].id === data.status) {
                    var key = tickets[i].id;
                    var status = (tickets['status'] = tickets[i].value);
                    finalArray.push({'status':status});
                    delete tickets[key] 
                }else if (tickets[i].id === data.subject) {
                    var key = tickets[i].id;
                    var subject = (tickets['subject'] = tickets[i].value);
                    finalArray.push({'subject':subject});
                    delete tickets[key] 
                }else if (tickets[i].id === data.time_since_last_update) {
                    var key = tickets[i].id;
                    var time_since_last_update = (tickets['time_since_last_update'] = tickets[i].value);
                    finalArray.push({'time_since_last_update':time_since_last_update});
                    delete tickets[key] 
                }else if (tickets[i].id === data.total_time_spent) {
                    var key = tickets[i].id;
                    var total_time_spent = (tickets['total_time_spent'] = tickets[i].value);
                    finalArray.push({'total_time_spent':total_time_spent});
                    delete tickets[key] 
                }else if (tickets[i].id === data.type) {
                    var key = tickets[i].id;
                    var type = (tickets['type'] = tickets[i].value);
                    finalArray.push({'type':type});
                    delete tickets[key] 
                }else if (tickets[i].id === data.urgency) {
                    var key = tickets[i].id;
                    var urgency = (tickets['urgency'] = tickets[i].value);
                    finalArray.push({'urgency':urgency});
                    delete tickets[key] 
                }else if (tickets[i].id === data.used_rsm) {
                    var key = tickets[i].id;
                    var used_rsm = (tickets['used_rsm'] = tickets[i].value);
                    finalArray.push({'used_rsm':used_rsm});
                    delete tickets[key] 
                }else if (tickets[i].id === data.video) {
                    var key = tickets[i].id;
                    var video = (tickets['video'] = tickets[i].value);
                    finalArray.push({'video':video});
                    delete tickets[key] 
                }
                else {
                tickets[i].id = 'N/A';
                }
            }
            finalArray.sort(function(a,b){
                return (Object.keys(a)[0] > Object.keys(b)[0]) - 0.5;
            });
            try {
                final.push("INSERT INTO zendesk_tickets_reporting (ticket_id, ovpid, via_channel, created_at, updated_at, type, subject, description, priority, status, requester_id, submitter_id, assignee_id, organization_id, group_id, due_at, tags, ticket_form_id, brand_id, reopen, replies, assignee_updated_at, requester_updated_at, status_updated_at, initially_assigned_at, assigned_at, solved_at, latest_comment_added_at, reply_time_in_minutes, first_resolution_time_in_minutes, full_resolution_time_in_minutes, agent_wait_time_in_minutes, requester_wait_time_in_minutes, on_hold_time_in_minutes, access, audio, autoresponder_upgrade, camera_surveillance, control, due_time, due_time_zone, hvac_climate, issue_solved_by_a_reboot, issue_type, lighting, motorized_window_treatment, network, onsite, pd_incident_id, phone_comm, power, proposal_needed, recurring_issue, scheduled, security_alarm, signature_autoresponder_upgrade, time_since_last_update, total_time_spent, urgency, used_rsm, video, zendesk_domain) VALUES ("+ticket_data.tickets[t].id+","+ovpid+",'"+ticket_data.tickets[t].via.channel+"','"+ticket_data.tickets[t].created_at+"','"+ticket_data.tickets[t].updated_at+"','"+ticket_data.tickets[t].type+"','"+subject+"','"+description+"','"+ticket_data.tickets[t].priority+"','"+ticket_data.tickets[t].status+"',"+ticket_data.tickets[t].requester_id+","+ticket_data.tickets[t].submitter_id+","+ticket_data.tickets[t].assignee_id+","+ticket_data.tickets[t].organization_id+","+ticket_data.tickets[t].group_id+",'"+ticket_data.tickets[t].due_at+"','"+tags+"',"+ticket_data.tickets[t].ticket_form_id+","+ticket_data.tickets[t].brand_id+",'"+ticket_data.metric_sets[t].reopens+"','"+ticket_data.metric_sets[t].replies+"','"+ticket_data.metric_sets[t].assignee_updated_at+"','"+ticket_data.metric_sets[t].requester_updated_at+"','"+ticket_data.metric_sets[t].status_updated_at+"','"+ticket_data.metric_sets[t].initially_assigned_at+"','"+ticket_data.metric_sets[t].assigned_at+"','"+ticket_data.metric_sets[t].solved_at+"','"+ticket_data.metric_sets[t].latest_comment_added_at+"',"+ticket_data.metric_sets[t].reply_time_in_minutes.calendar+","+ticket_data.metric_sets[t].first_resolution_time_in_minutes.calendar+","+ticket_data.metric_sets[t].full_resolution_time_in_minutes.calendar+","+ticket_data.metric_sets[t].agent_wait_time_in_minutes.calendar+","+ticket_data.metric_sets[t].requester_wait_time_in_minutes.calendar+","+ticket_data.metric_sets[t].on_hold_time_in_minutes.calendar+",'"+finalArray[0].access+"','"+finalArray[1].audio+"','"+finalArray[2].autoresponder_upgrade+"','"+finalArray[3].camera_surveillance+"','"+finalArray[4].control+"','"+finalArray[5].due_time+"','"+finalArray[6].due_time_zone+"','"+finalArray[7].hvac_climate+"','"+finalArray[8].issue_solved_by_a_reboot+"','"+finalArray[9].issue_type+"','"+finalArray[10].lighting+"','"+finalArray[11].motorized_window_treatment+"','"+finalArray[12].network+"','"+finalArray[13].onsite+"','"+finalArray[14].pd_incident_id+"','"+finalArray[15].phone_comm+"','"+finalArray[16].power+"','"+finalArray[17].proposal_needed+"','"+finalArray[18].recurring_issue+"','"+finalArray[19].scheduled+"','"+finalArray[20].security_alarm+"','"+finalArray[21].signature_autoresponder_upgrade+"','"+finalArray[22].time_since_last_update+"','"+finalArray[23].total_time_spent+"','"+finalArray[24].urgency+"','"+finalArray[25].used_rsm+"','"+finalArray[26].video+"','"+partner+"');")
            } catch {
                final.push("INSERT INTO zendesk_tickets_reporting (ticket_id, ovpid, via_channel, created_at, updated_at, type, subject, description, priority, status, requester_id, submitter_id, assignee_id, organization_id, group_id, due_at, tags, ticket_form_id, brand_id, reopen, replies, assignee_updated_at, requester_updated_at, status_updated_at, initially_assigned_at, assigned_at, solved_at, latest_comment_added_at, reply_time_in_minutes, first_resolution_time_in_minutes, full_resolution_time_in_minutes, agent_wait_time_in_minutes, requester_wait_time_in_minutes, on_hold_time_in_minutes, access, audio, autoresponder_upgrade, camera_surveillance, control, due_time, due_time_zone, hvac_climate, issue_solved_by_a_reboot, issue_type, lighting, motorized_window_treatment, network, onsite, pd_incident_id, phone_comm, power, proposal_needed, recurring_issue, scheduled, security_alarm, signature_autoresponder_upgrade, time_since_last_update, total_time_spent, urgency, used_rsm, video, zendesk_domain) VALUES ("+ticket_data.tickets[t].id+","+ovpid+",'"+ticket_data.tickets[t].via.channel+"','"+ticket_data.tickets[t].created_at+"','"+ticket_data.tickets[t].updated_at+"','"+ticket_data.tickets[t].type+"','"+subject+"','"+description+"','"+ticket_data.tickets[t].priority+"','"+ticket_data.tickets[t].status+"',"+ticket_data.tickets[t].requester_id+","+ticket_data.tickets[t].submitter_id+","+ticket_data.tickets[t].assignee_id+","+ticket_data.tickets[t].organization_id+","+ticket_data.tickets[t].group_id+",'"+ticket_data.tickets[t].due_at+"','"+tags+"',"+ticket_data.tickets[t].ticket_form_id+","+ticket_data.tickets[t].brand_id+",'"+null+"','"+null+"','"+null+"','"+null+"','"+null+"','"+null+"','"+null+"','"+null+"','"+null+"',"+null+","+null+","+null+","+null+","+null+","+null+",'"+finalArray[0].access+"','"+finalArray[1].audio+"','"+finalArray[2].autoresponder_upgrade+"','"+finalArray[3].camera_surveillance+"','"+finalArray[4].control+"','"+finalArray[5].due_time+"','"+finalArray[6].due_time_zone+"','"+finalArray[7].hvac_climate+"','"+finalArray[8].issue_solved_by_a_reboot+"','"+finalArray[9].issue_type+"','"+finalArray[10].lighting+"','"+finalArray[11].motorized_window_treatment+"','"+finalArray[12].network+"','"+finalArray[13].onsite+"','"+finalArray[14].pd_incident_id+"','"+finalArray[15].phone_comm+"','"+finalArray[16].power+"','"+finalArray[17].proposal_needed+"','"+finalArray[18].recurring_issue+"','"+finalArray[19].scheduled+"','"+finalArray[20].security_alarm+"','"+finalArray[21].signature_autoresponder_upgrade+"','"+finalArray[22].time_since_last_update+"','"+finalArray[23].total_time_spent+"','"+finalArray[24].urgency+"','"+finalArray[25].used_rsm+"','"+finalArray[26].video+"','"+partner+"');")
            }

        }
        final1 = final.join(' ');
        fs.appendFile('sql.txt', final1.replace(';,',';'), function (err) {
        if (err) throw err;
        });
        if (end_of_stream === true) {
            console.log('Partner Finished in '+counter+' pages!')
        } else {
            options.url=next_page
            counter++;
            console.log('Page '+counter+' Finished')
            request(options, callback);
        }
    }
}

var output = request(options, callback);

   