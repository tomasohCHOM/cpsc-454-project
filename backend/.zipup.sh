#!/usr/bin/env sh

pushd .
cd stacks/lambda/function
zip my_deployment_package.zip driver.py handler.py
popd
cdk deploy --all
