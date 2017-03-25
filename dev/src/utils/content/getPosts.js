var getPosts = function(data){
    var fieldsObject = [];
    for(var i=0; i < data.feed.entry.length; i++){
        var oneRow = data.feed.entry[i];
        var rowObject = {
            Title: oneRow.gsx$title.$t,
            Subtitle: oneRow.gsx$subtitle.$t,
            Image: oneRow.gsx$image.$t,
            Category: oneRow.gsx$category.$t
        };
        rowObject['Post Id'] = oneRow.gsx$postid.$t;
        rowObject['Image Id'] = oneRow.gsx$imageid.$t;
        rowObject['Last Updated'] = oneRow.gsx$lastupdated.$t;
        fieldsObject.push(rowObject);
    }
    return fieldsObject;
};
module.exports = getPosts;