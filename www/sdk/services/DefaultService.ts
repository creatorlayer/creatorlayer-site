/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Creator } from '../models/Creator';
import type { CreatorVerification } from '../models/CreatorVerification';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Health check endpoint
     * @returns any OK
     * @throws ApiError
     */
    public static getHealth(): CancelablePromise<{
        status?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/health',
        });
    }
    /**
     * Get a creator by ID
     * @returns any Creator found
     * @throws ApiError
     */
    public static getApiV1Creators({
        id,
    }: {
        id: number,
    }): CancelablePromise<(Creator & {
        latest_verification?: CreatorVerification | null;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/creators/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Creator not found`,
            },
        });
    }
    /**
     * Get a creator verification by ID
     * @returns CreatorVerification Creator verification found
     * @throws ApiError
     */
    public static getApiV1CreatorVerifications({
        id,
    }: {
        id: number,
    }): CancelablePromise<CreatorVerification> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/creator_verifications/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Creator verification not found`,
            },
        });
    }
    /**
     * Get all verifications for a creator
     * @returns any List of verifications
     * @throws ApiError
     */
    public static getApiV1CreatorsVerifications({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        creator_id?: number;
        verifications?: Array<CreatorVerification>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/creators/{id}/verifications',
            path: {
                'id': id,
            },
            errors: {
                404: `No verifications found for this creator`,
            },
        });
    }
}
