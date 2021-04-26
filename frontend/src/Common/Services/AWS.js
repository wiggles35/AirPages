import React from "react";
import * as Env from "../../environments";
import AWS from 'aws-sdk';

export const uploadImage = (file) => {
    var albumBucketName = Env.S3_BUCKET;
    var bucketRegion = Env.REGION;
    var IdentityPoolId = Env.AWS_IDPOOL;

    AWS.config.update({
        region: bucketRegion,
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: IdentityPoolId
        })
    });

    var photoKey = file.name

    var upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: albumBucketName,
            Key: photoKey,
            Body: file
        }
    });

    var promise = upload.promise();

    promise.then(
        function(data) {
            alert("Successfully uploaded photo.");
        },
        function(err) {
            return alert("There was an error uploading your photo: ", err.message);
        }
    );
}