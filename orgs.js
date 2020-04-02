var request = require('request');
var fs = require('fs');
var counter = 0;
var sleep = require('sleep');

var options = {
    url: 'https://symbioav.zendesk.com/api/v2/incremental/organizations.json?start_time=1262304000',
    auth: {
        'user': 'isdadmin@onevisionresources.com/token',
        'pass': 'f0c6230ilEWSf4gh8W4MxVc6TR25S0CFZtemYAuZ'
    }
};
const partner_domain = 'symbioav';
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
        const org_data = (JSON.parse([body]))
        const final = [];
        const end_of_stream = org_data.end_of_stream
        const next_page = org_data.next_page 
        var t;
        const finalArray = []
        for (t = 0; t < org_data.organizations.length; t++) {
            var tags = (org_data.organizations[t].tags.toString());
            var custom_fields = (org_data.organizations[t].organization_fields);
               var name = escape(org_data.organizations[t].name)
               var name = name.replace(/%20/g, " ")
               var notes = escape(org_data.organizations[t].notes)
               var notes = notes.replace(/%20/g, " ")
               var details = escape(org_data.organizations[t].details)
               var details = details.replace(/%20/g, " ")
            const entries = Object.entries(org_data.organizations[t].organization_fields)
            entries.forEach(myFunction);
            function myFunction(item) {
                var service = ['service_plan','membership_level'];
                var warranty = ['warranty_expiration','date_warranty_expiration','plan_warranty_expiration'];
                var acceptedtos = ['plan_acceptedtos','plans_acceptedtos'];
                var site_tv_service_provider = ['site_tv_service_provider','tv_service_provider']
                var audio_interface = ['site_primary_audio_interface','primary_audio_interface']
                var camera_system = ['site_camera_system_brand','camera_system_brand']
                var internet = ['site_internet_service_provider','internet_service_provider', 'site_internet_service']
                var access = ['site_access_control_system_smart_lock', 'site_access_control_system_smart_locks','access_control_system_smart_locks','access_control_system_brand']
                var security_brand = ['site_security_system_brand','security_system_brand']
                var address = ['full_address','address']
                var hvac = ['hvac_integration','site_hvac_integration']
                var phone_brand = ['ite_phone_system_brand','site_phone_system_brand']
                var audio_system = ['audio_system_type','site_audio_system_type']
                var rsm = ['remote_systems_management','site_remote_systems_management','site_remote_systems_managemen']
                var poc = ['primary_point_of_contact','site_primary_point_of_contact']
                var control = ['control_system_brand','site_control_system_brand']
                var shade = ['shade_type', 'site_shade_type']

                
                if (new RegExp(service.join('|')).test(item[0]) === true) {
                    item[0] = 'service_plan'
                } else if (new RegExp(warranty.join('|')).test(item[0]) === true) {
                    item[0] = 'warranty_expiration'
                } else if (new RegExp(acceptedtos.join('|')).test(item[0]) === true) {
                    item[0] = 'plans_acceptedtos'
                } else if (new RegExp(site_tv_service_provider.join('|')).test(item[0]) === true) {
                    item[0] = 'site_tv_service_provider'
                } else if (new RegExp(audio_interface.join('|')).test(item[0]) === true) {
                    item[0] = 'site_primary_audio_interface'
                } else if (new RegExp(camera_system.join('|')).test(item[0]) === true) {
                    item[0] = 'site_camera_system_brand'
                } else if (new RegExp(access.join('|')).test(item[0]) === true) {
                    item[0] = 'site_access_control_system_smart_locks'
                } else if (new RegExp(internet.join('|')).test(item[0]) === true) {
                    item[0] = 'site_internet_service'
                } else if (new RegExp(security_brand.join('|')).test(item[0]) === true) {
                    item[0] = 'site_security_system_brand'
                } else if (new RegExp(address.join('|')).test(item[0]) === true) {
                    item[0] = 'address'
                } else if (new RegExp(hvac.join('|')).test(item[0]) === true) {
                    item[0] = 'hvac_integration'
                } else if (new RegExp(phone_brand.join('|')).test(item[0]) === true) {
                    item[0] = 'site_phone_system_brand'
                } else if (new RegExp(audio_system.join('|')).test(item[0]) === true) {
                    item[0] = 'site_audio_system_type'
                } else if (new RegExp(rsm.join('|')).test(item[0]) === true) {
                    item[0] = 'site_remote_systems_management'
                }  else if (new RegExp(poc.join('|')).test(item[0]) === true) {
                    item[0] = 'site_primary_point_of_contact'
                }  else if (new RegExp(control.join('|')).test(item[0]) === true) {
                    item[0] = 'site_control_system_brand'
                } else if (new RegExp(shade.join('|')).test(item[0]) === true) {
                    item[0] = 'site_shade_type'
                }   
                else {
                }
            }
            function withObjectAssign(object, [key, value]) {
                return Object.assign(object, {[key]: value})
            }
            
            var custom_fields = entries.reduce(withObjectAssign, {})
            
            finalArray.push("INSERT INTO zendesk_organizations_reporting (org_id, ovpid, name, created_at, updated_at, details, notes, tags, service_plan, plans_acceptedtos, site_type, site_systems_supported, site_3rd_party_network_provider, site_internet_service, site_tv_service_provider, site_remote_systems_management, site_primary_equipment_location, site_network_location, site_wireless_network_brand, site_wired_network_brand, site_control_system_brand, site_audio_system_type, site_primary_audio_interface, site_video_distribution_brand, site_video_system_type, site_lighting_system_type, site_lighting_system_brand, site_hvac_brand, hvac_integration, site_phone_system_type, site_phone_system_brand, site_access_control_system_smart_locks, site_camera_system_type, site_camera_system_brand, site_security_system_brand, site_security_system_integrated, site_shade_brand, site_shade_type, site_shade_interface, site_intercom, site_video_doorbell, warranty_expiration, plan_cpp_expiration, client_selected_membership, site_primary_point_of_contact) VALUES ("+org_data.organizations[t].id+','+partnerOVPID+",'"+name+"','"+org_data.organizations[t].created_at+"','"+org_data.organizations[t].updated_at+"','"+details+"','"+notes+"','"+tags+"','"+custom_fields.service_plan+"','"+custom_fields.plans_acceptedtos+"','"+custom_fields.site_type+"','"+custom_fields.site_systems_supported+"','"+custom_fields.site_3rd_party_network_provider+"','"+custom_fields.site_internet_service+"','"+custom_fields.site_tv_service_provider+"','"+custom_fields.site_remote_systems_management+"','"+custom_fields.site_primary_equipment_location+"','"+custom_fields.site_network_location+"','"+custom_fields.site_wireless_network_brand+"','"+custom_fields.site_wired_network_brand+"','"+custom_fields.site_control_system_brand+"','"+custom_fields.site_audio_system_type+"','"+custom_fields.site_primary_audio_interface+"','"+custom_fields.site_video_distribution_brand+"','"+custom_fields.site_video_system_type+"','"+custom_fields.site_lighting_system_type+"','"+custom_fields.site_lighting_system_brand+"','"+custom_fields.site_hvac_brand+"','"+custom_fields.hvac_integration+"','"+custom_fields.site_phone_system_type+"','"+custom_fields.site_phone_system_brand+"','"+custom_fields.site_access_control_system_smart_locks+"','"+custom_fields.site_camera_system_type+"','"+custom_fields.site_camera_system_brand+"','"+custom_fields.site_security_system_brand+"','"+custom_fields.site_security_system_integrated+"','"+custom_fields.site_shade_brand+"','"+custom_fields.site_shade_type+"','"+custom_fields.site_shade_interface+"','"+custom_fields.site_intercom+"','"+custom_fields.site_video_doorbell+"','"+custom_fields.warranty_expiration+"','"+custom_fields.plan_cpp_expiration+"','"+custom_fields.client_selected_membership+"','"+custom_fields.site_primary_point_of_contact+"');")
        
                                                                
        }
        final1 = finalArray.join(' ');
        fs.appendFile('orgs.txt', final1, function (err) {
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