// /movies/12212121 이렇게 작동할 것임 
// 대괄호를 열고 변수명을 넣으면됨! 
// /movies/1을 들어가면 div안에 있는 내용이 잘 뜸
// 대괄호를 쓰면 NextJs한테 동적으로 사용할 수 있다는 걸 알려줌
// 만약 대괄호를 쓰지않으면 그냥 movies/id 일것! 변수로 인식하지 못함

import { useRouter } from "next/router";
import Seo from "../../components/Seo";


export default function Detail({params}) {
    const router = useRouter();
    const [title, id]= params || [];

    console.log(router)
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  )
}

export function getServerSideProps({params:{params}}) {

  return {
    props: {
      params
    },
  }
}