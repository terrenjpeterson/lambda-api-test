// lambda function written in nodeJS to post an article in S3

console.log('loading required functions');

var aws = require('aws-sdk');

console.log('starting to execute function');

exports.handler = function(event, context) {
    // start executing function
    console.log('processing data');
    
    console.log('Publish Date: ' + event.publishDate);
    console.log('Article Text: ' + event.articleFullText);
    
    var s3 = new aws.S3();
    
    var params = {Bucket : 'content-upload-test', 
                  Key : 'test.json', 
                  Body : JSON.stringify(event) };

    console.log('attempt to put data into s3 bucket' + JSON.stringify(params));

    s3.putObject(params, function(err, data) {
      if(err)
        console.log('Error posting article : ' + err);
      else
        console.log('Successfully posted article : ' + err);

      context.succeed('successful posting of new article: ' + event.articleTitle);
    });
};

