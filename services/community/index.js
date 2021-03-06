const communitylist = require('./communitylistService');
const communitypanel = require('./communitypanelServices');
const addcommunity = require('./addcommunityServices');
const managecommunity = require('./managecommunityService');
const communitymember = require('./communitymemberService');
const communityadmin = require('./communityadminServices');
const invitedusers = require('./inviteduserService');
const inviteusers = require('./inviteuserServices');
const invitelist = require('./invitelistServices');
const deleteinvite = require('./deleteinviteServices');
const editcommunity = require('./editcommunityServices');
const communityprofile = require('./communityprofileServices');
const list = require('./listServices');
const joincommunity = require('./joincommunityServices');
const requests = require('./requestservices');
const action = require('./requestactionServices');
const deletemember = require('./deletememberService');
const promotordemote = require('./promotanddemotememberServices');

module.exports = {
    communitylist,
    communitypanel,
    addcommunity,
    managecommunity,
    communitymember,
    communityadmin,
    invitedusers,
    inviteusers,
    invitelist,
    deleteinvite,
    editcommunity,
    communityprofile,
    list,
    joincommunity,
    requests,
    action,
    deletemember,
    promotordemote,
};

