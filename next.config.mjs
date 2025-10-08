/** @type {import('next').NextConfig} */
const nextConfig = {

images: {

    remotePatterns: [

        {
            protocol: 'https',
            hostname: 'i.ibb.co'
    
        },

         {
            protocol: 'https',
            hostname: 'images.unsplash.com'
        },
        {



        protocol: 'https',
        hostname: 'media.istockphoto.com'

        },

        {
        protocol: 'https',
        hostname: 'i.pravatar.cc'

        }
    ]
}

};

export default nextConfig;
