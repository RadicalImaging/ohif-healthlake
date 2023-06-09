import {
    AwsClient
} from 'aws4fetch';
import awsCredentials from './awsCredentials';

export const getFetch = config => {
    if (config.awsAccessKeyID) {
        const aws = new AwsClient(awsCredentials(config));
        return aws.fetch.bind(aws);
    } else {
        return fetch;
    }
};
