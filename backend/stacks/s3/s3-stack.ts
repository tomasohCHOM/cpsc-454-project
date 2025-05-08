import { Bucket } from "aws-cdk-lib/aws-s3";
import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Function } from "aws-cdk-lib/aws-lambda";
import { LambdaFunction } from "aws-cdk-lib/aws-events-targets";
import { Duration } from "aws-cdk-lib";

export interface StorageStackProps extends StackProps {
  lambdaFunction: Function;
}

export class StorageStack extends Stack {
  constructor(scope: Construct, id: string, props: StorageStackProps) {
    super(scope, id, props);

    const uploadBucket = new Bucket(this, "upload-bucket", {
      lifecycleRules: [
        {
          expiration: Duration.days(1),
        },
      ],
    });
    const outputBucket = new Bucket(this, "output-bucket", {
      lifecycleRules: [
        {
          expiration: Duration.days(1),
        },
      ],
    });

    uploadBucket.grantReadWrite(props.lambdaFunction);
    outputBucket.grantReadWrite(props.lambdaFunction);
  }
}
