import { useEffect, useState } from "react";
import Link  from "next/link";
import Seo from "../components/Seo";
import { useRouter } from "next/router";


export default function Home({results}) {
    // const [movies, setMovies] = useState([]);
    // useEffect(()=> {
    // (async() => {
       
    // setMovies(results)
    // })();
    // }, [])
    const router = useRouter();
    const onClick = (id, title) => {
        router.push(
        `/movies/${title}/${id}`
        )
    
    }
  return (
    <div className="container">
    <Seo title="Home"/>
    {/* {!movies && <h4>Loading...</h4>} */}
     {results?.map(movie => (
    <div onClick={()=> onClick(movie.id, movie.original_title)} className="movie"  key={movie.id}>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <h4> 
        <Link 
        href={`/movies/${movie.original_title}/${movie.id}`}
        >
        <a>{movie.original_title}     </a>
        </Link>
        </h4>
     </div>
    ) )}
     <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie{
            cursor:pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
// 이 이름은 정말 중요하고 바꿀수 없음!! 꼭 기억하기
// 이 코드는 server에서 작동할 것임! 
// 그렇다면 rewrites꼭 안써도 여기에 숨기면 절대 client가 볼수없겠네?
export async function getServerSideProps() {
    const {results} = await (
        await fetch(
        `http://localhost:3000/api/movies`
)).json()
// 여기서 리턴하는 props로써 page에 Results를 인자로 전달 
// 원한다면 server side로 props를 page로 보낼 수 있다! 
return {
    props: {
        results,
    }
}
}