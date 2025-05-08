import json
import base64
from botocore.exceptions import ClientError
import logging
from driver import Driver

logger = logging.getLogger(__name__)


def main(event, context):
    try:
        driver = Driver()
        data = base64.b64decode(event["body"])
        event["body"] = ""

        # upload to s3
        driver.uploadMedia(data)
        # transcribe
        event["transcription"] = driver.getTranscription()
    except ClientError as err:
        return {
            "isBase64Encoded": False,
            "statusCode": 500,
            "headers": {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Content-Type": "application/json",
                "Error-Description": str(err),
            },
            "body": json.dumps(event),
        }
    response = {
        "isBase64Encoded": False,
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        "body": json.dumps(event),
    }
    return response
