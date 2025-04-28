import { inject } from '@vercel/analytics';

export default function () {
    if (process.client) {
        inject();
    }
}
