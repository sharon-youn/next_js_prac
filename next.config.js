/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // redirects는 oldblog로 접속할때 말그대로 destination URL로 바뀜
  // 하지만 보이기 때문에 유저가 URL이 바뀌었는지 알게 됨 
  async redirects() {
    return [
      {
        // * 붙이면 더 뒤에 붙더라도 똑같은 :path뒤의 앞에만 바뀐 채로 이동함
        source:"/old-blog/:path*", 
        destination:"/new-sexy-blog/:path*",
        permanent: false,
      },
    ]
  },
  //rewrites는 url 변화 없이 그냥 받아올 수 있음!! 
  // api 정보를 숨길 수도 있다. 
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
  }

}

module.exports = nextConfig
