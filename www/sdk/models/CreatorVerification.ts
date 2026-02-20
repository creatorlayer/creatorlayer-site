/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreatorVerification = {
    id?: number;
    creator_id?: number;
    creator_youtube_channel?: string | null;
    creator_twitch_channel?: string | null;
    income_30d?: number;
    income_90d?: number;
    trend?: 'growing' | 'flat';
    risk_score?: number;
    recommended_loan_amount?: number;
    fraud_flags?: Array<string>;
    lender_ref?: string | null;
    created_at?: string;
};

