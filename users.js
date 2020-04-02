var request = require('request');
var fs = require('fs');
var counter = 0;
var sleep = require('sleep');

var options = {
    url: 'https://hermarys.zendesk.com/api/v2/incremental/users.json?start_time=1262304000',
    auth: {
        'user': 'isdadmin@onevisionresources.com/token',
        'pass': 'APIKEY'
    }
};

const partner_domain = 'PARTNERDOMAIN';
const ovpidList = [
    {
        "ovpid": 2279,
        "zendesk_domain": "hermarys"
    },
    {
        "ovpid": 2289,
        "zendesk_domain": "bcgconcepts"
    },
    {
        "ovpid": 2292,
        "zendesk_domain": "hificlub"
    },
    {
        "ovpid": 2309,
        "zendesk_domain": "e-home"
    },
    {
        "ovpid": 2385,
        "zendesk_domain": "pureaudiovideo"
    },
    {
        "ovpid": 2439,
        "zendesk_domain": "barneymillers"
    },
    {
        "ovpid": 2445,
        "zendesk_domain": "cantaradesign"
    },
    {
        "ovpid": 2454,
        "zendesk_domain": "creativesound"
    },
    {
        "ovpid": 2457,
        "zendesk_domain": "cuttingedgehome"
    },
    {
        "ovpid": 2460,
        "zendesk_domain": "devance"
    },
    {
        "ovpid": 2564,
        "zendesk_domain": "millscustomav"
    },
    {
        "ovpid": 2576,
        "zendesk_domain": "symbioav"
    },
    {
        "ovpid": 2597,
        "zendesk_domain": "tuckerandtucker"
    },
    {
        "ovpid": 2628,
        "zendesk_domain": "connecte3"
    },
    {
        "ovpid": 2673,
        "zendesk_domain": "controlfreakshawaii"
    },
    {
        "ovpid": 2707,
        "zendesk_domain": "playandgourmetav"
    },
    {
        "ovpid": 2711,
        "zendesk_domain": "sterlinghometech"
    },
    {
        "ovpid": 2713,
        "zendesk_domain": "haasht"
    },
    {
        "ovpid": 2750,
        "zendesk_domain": "athomeavtech"
    },
    {
        "ovpid": 2815,
        "zendesk_domain": "richavdesign"
    },
    {
        "ovpid": 2875,
        "zendesk_domain": "budays"
    },
    {
        "ovpid": 2900,
        "zendesk_domain": "isdproconvergence"
    },
    {
        "ovpid": 2929,
        "zendesk_domain": "blueprintav"
    },
    {
        "ovpid": 3177,
        "zendesk_domain": "smarttouchusa"
    },
    {
        "ovpid": 3217,
        "zendesk_domain": "woodyshome"
    },
    {
        "ovpid": 3218,
        "zendesk_domain": "fusionsystemslv"
    },
    {
        "ovpid": 3264,
        "zendesk_domain": "premierelv"
    },
    {
        "ovpid": 3283,
        "zendesk_domain": "amssoundandvision"
    },
    {
        "ovpid": 3356,
        "zendesk_domain": "theintegratedhome"
    },
    {
        "ovpid": 3461,
        "zendesk_domain": "shs-mt"
    },
    {
        "ovpid": 3486,
        "zendesk_domain": "goodsoundshometheater"
    },
    {
        "ovpid": 3639,
        "zendesk_domain": "aaronshometech"
    },
    {
        "ovpid": 3893,
        "zendesk_domain": "integrationcontrols"
    },
    {
        "ovpid": 3900,
        "zendesk_domain": "simptechsolutions"
    },
    {
        "ovpid": 4149,
        "zendesk_domain": "strotekllc"
    },
    {
        "ovpid": 4150,
        "zendesk_domain": "infiniteht"
    },
    {
        "ovpid": 4157,
        "zendesk_domain": "meroconcepts"
    },
    {
        "ovpid": 4167,
        "zendesk_domain": "southbayautomation"
    },
    {
        "ovpid": 4169,
        "zendesk_domain": "simplyav"
    },
    {
        "ovpid": 4240,
        "zendesk_domain": "phoenixav"
    },
    {
        "ovpid": 4245,
        "zendesk_domain": "twistedpairmedia"
    },
    {
        "ovpid": 4249,
        "zendesk_domain": "connectedhomenc"
    },
    {
        "ovpid": 4314,
        "zendesk_domain": "firstpriorityaudio"
    },
    {
        "ovpid": 4318,
        "zendesk_domain": "bethesdasystems"
    },
    {
        "ovpid": 4328,
        "zendesk_domain": "avspecialists"
    },
    {
        "ovpid": 4344,
        "zendesk_domain": "xtendav"
    },
    {
        "ovpid": 4349,
        "zendesk_domain": "igshomeworks"
    },
    {
        "ovpid": 4369,
        "zendesk_domain": "qualityaudiovideo"
    },
    {
        "ovpid": 4463,
        "zendesk_domain": "cravtsman"
    },
    {
        "ovpid": 4479,
        "zendesk_domain": "ptech"
    },
    {
        "ovpid": 4690,
        "zendesk_domain": "servicetechav"
    },
    {
        "ovpid": 4763,
        "zendesk_domain": "atlantaaudio"
    },
    {
        "ovpid": 4818,
        "zendesk_domain": "isd-csscorp"
    },
    {
        "ovpid": 5030,
        "zendesk_domain": "abovegradeautomation"
    },
    {
        "ovpid": 5104,
        "zendesk_domain": "ecsav"
    },
    {
        "ovpid": 5197,
        "zendesk_domain": "experiencetechnology"
    },
    {
        "ovpid": 5253,
        "zendesk_domain": "hometechsolutions"
    },
    {
        "ovpid": 5263,
        "zendesk_domain": "proavspecialists"
    },
    {
        "ovpid": 5267,
        "zendesk_domain": "evolvedallas"
    },
    {
        "ovpid": 5280,
        "zendesk_domain": "avsdc"
    },
    {
        "ovpid": 5299,
        "zendesk_domain": "automation-arts"
    },
    {
        "ovpid": 5319,
        "zendesk_domain": "tutonescustomav"
    },
    {
        "ovpid": 5325,
        "zendesk_domain": "getmavi"
    }
]
var partner_ovpid = ovpidList.filter(function (item) {
	return(item.zendesk_domain == partner_domain);
});
const partnerOVPID = (partner_ovpid[0].ovpid);

function callback(error, response, body) {

    if (!error && response.statusCode == 200) {
        user_data = JSON.parse([body])
        const finalArray = [];
        const end_of_stream = user_data.end_of_stream
        const next_page = user_data.next_page 
        for (t = 0; t < user_data.users.length; t++) {

            user_fields = user_data.users[t].user_fields
            var user_type = user_data.users[t].user_fields.user_type
            var name = escape(user_data.users[t].name)
            var name = name.replace(/%20/g, " ")
            var details = escape(user_data.users[t].details)
            var details = details.replace(/%20/g, " ")
            var notes = escape(user_data.users[t].notes)
            var notes = notes.replace(/%20/g, " ")
            const tags = (user_data.users[t].tags.toString())
            if (user_fields.hasOwnProperty('quick_fixes') === true) {
                var quick_fixes = user_data.users[0].user_fields.quick_fixes
            } else if (user_fields.hasOwnProperty('quirky_habits_and_fixes') === true) {
                var quick_fixes = user_data.users[0].user_fields.quirky_habits_and_fixes
            } else if (user_fields.hasOwnProperty('quirky_fixes') === true) {
            var quick_fixes = user_data.users[0].user_fields.quirky_fixes
            } else if (user_fields.hasOwnProperty('quirky_habits_fixes') === true) {
                var quick_fixes = user_data.users[0].user_fields.quirky_habits_fixes
            } else if (user_fields.hasOwnProperty('quick_fix') === true) {
                var quick_fixes = user_data.users[0].user_fields.quick_fix
            } else if (user_fields.hasOwnProperty('quick_fixes_') === true) {
                var quick_fixes = user_data.users[0].user_fields.quick_fix
            } else {
                console.log('Got another one!')
            }

            finalArray.push('INSERT INTO zendesk_users_reporting (user_id, ovpid, name, email, created_at, updated_at, time_zone, iana_time_zone, phone, org_id, role, details, notes, role_type, custom_role_id, default_group_id, quick_fixes, user_type) VALUES ('+user_data.users[t].id+','+partnerOVPID+",'"+name+"','"+user_data.users[t].email+"','"+user_data.users[t].created_at+"','"+user_data.users[t].updated_at+"','"+user_data.users[t].time_zone+"','"+user_data.users[t].iana_time_zone+"','"+user_data.users[t].phone+"','"+user_data.users[t].organization_id+"','"+user_data.users[t].role+"','"+details+"','"+notes+"','"+user_data.users[t].role_type+"','"+user_data.users[t].custom_role_id+"','"+user_data.users[t].default_group_id+"','"+quick_fixes+"','"+user_type+');')
        }
        const fileName = partner_domain+'_users.txt'
        final1 = finalArray.join(' ');
        fs.appendFile(fileName, final1, function (err) {
        if (err) throw err;
        });
        if (end_of_stream === true) {
            console.log(end_of_stream)
            console.log('Partner Finished in '+counter+' pages!')
        } else {
            options.url=next_page
            counter++;
            console.log('Page '+counter+' Finished')
            console.log('Wait Started')
            sleep.sleep(10)
            console.log('Wait Ended')
            request(options, callback)
        }
    } else {
        console.log(response)
    }
        
}

var output = request(options, callback);