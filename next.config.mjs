/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/dashboard",
                destination: "/dashboard/overview",
                permanent: true,
            },
            {
                source: "/",
                destination: "/dashboard/overview",
                permanent: true,
            },
            {
                source: "/jobs",
                destination: "/jobs/board",
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
