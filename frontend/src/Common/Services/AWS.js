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

    return upload.promise();
}

export const downloadImage = (acctID) => {
    var albumBucketName = Env.S3_BUCKET;
    var bucketRegion = Env.REGION;
    var IdentityPoolId = Env.AWS_IDPOOL;

    AWS.config.update({
        region: bucketRegion,
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: IdentityPoolId
        })
    });

    const s3 = new AWS.S3();

    var download = s3.getObject({
        params: {
            Bucket: albumBucketName,
            Key: "ND1.jpg",
        }
    });

    var promise = download.promise();

    promise.then(
        function(data) {
            alert(JSON.stringify(data))
        },
        function(err) {
            return alert("There was an error downloading your photo: ", err.message);
        }
    );
}