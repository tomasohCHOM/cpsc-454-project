import json
import uuid
import boto3
import time

class Driver:
    def __init__(self):
        self.s3_client = boto3.client('s3')
        self.transcribe_client = boto3.client('transcribe')
        self.upload_bucket = "cdkstackstoragestack887cc089-uploadbucket13b7e0d9-teo1qw5fgcn6"
        self.output_bucket = "cdkstackstoragestack887cc089-outputbucket0b6601c4-alet4yallrbb"
        self.key = str(uuid.uuid4())
        self.upload_file_uri = f's3://{self.upload_bucket}/{self.key}'
        self.transcription = ""

    def uploadMedia(self, data):
        self.s3_client.put_object(Bucket=self.upload_bucket, Key=self.key+".flac", Body=data)

    def getTranscription(self) -> str:

        self.transcribe_client.start_transcription_job(
            TranscriptionJobName=self.key,
            LanguageCode='en-US',
            MediaFormat='flac',
            Media={
                "MediaFileUri":self.upload_file_uri+".flac"
            },
            OutputBucketName=self.output_bucket,
            OutputKey=self.key
        )

        max_tries = 600
        while max_tries > 0:
            max_tries -= 1
            job = self.transcribe_client.get_transcription_job(TranscriptionJobName=self.key)
            job_status = job["TranscriptionJob"]["TranscriptionJobStatus"]
            print(job_status)
            if job_status in ["COMPLETED", "FAILED"]:
                if job_status == "COMPLETED":
                    print(
                        f"Download the transcript from\n"
                        f"\t{job['TranscriptionJob']['Transcript']['TranscriptFileUri']}."
                    )
                    return job["TranscriptionJob"]["Transcript"]["TranscriptFileUri"]
                break
            time.sleep(0.15)
        return ""
