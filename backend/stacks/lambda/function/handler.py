import json
import uuid
from botocore.exceptions import ClientError
import logging
import boto3

logger = logging.getLogger(__name__)
def main(event, context):
    try:
        payload = json.loads(event["body"])
        data = payload["data"]
        client = boto3.client('s3')
        bucket = "cdkstackstoragestack887cc089-uploadbucket13b7e0d9-teo1qw5fgcn6"
        key = str(uuid.uuid4())
        client.put_object(Bucket=bucket, Key=key, Body=data)
    except ClientError as err:
        logger.error(
                "Couldn't check for existence of %s. Here's why: %s: %s",
                "topics table",
                err.response["Error"]["Code"],
                err.response["Error"]["Message"],
            )
    response = {
    "isBase64Encoded": False,
    "statusCode": 200,
    "headers": {
                  "Access-Control-Allow-Origin" : "http://localhost:3000",
                  'Content-Type': 'application/json',
                },
    "body": json.dumps("Hello from lambda")
}
    return response