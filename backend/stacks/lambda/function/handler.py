import json
import base64
from botocore.exceptions import ClientError
import logging
from driver import Driver

logger = logging.getLogger(__name__)
def main(event, context):
    try:
        driver = Driver()
        data = base64.decode(event["body"])

        # upload to s3
        driver.uploadMedia(data)
        # transcribe
        # driver.getTranscription()
    except ClientError as err:
        logger.error(
                "Failed to upload",
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
    "body": json.dumps(event)
}
    return response
