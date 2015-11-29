// lambda function written in nodeJS to get an article in S3

console.log('loading required functions');

var aws = require('aws-sdk');

console.log('starting to execute function');

exports.handler = function(event, context) {
    // start executing function
    console.log('processing request');
    
    var s3 = new aws.S3();
    
    var getParams = {Bucket : 'content-upload-test', 
                     Key : 'test.json'}; 

    console.log('attempt to pull an object from an s3 bucket' + JSON.stringify(getParams));

    s3.getObject(getParams, function(err, data) {
      if(err)
        console.log('Error getting article : ' + err);
      else
        console.log('Successfully retrieved article : ' + err);

      context.succeed('successful retrival of article: ' + data.Body);
    });
};
