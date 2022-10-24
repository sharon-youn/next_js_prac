import NavBar from "./NavBar";

// children은 _app.js에 있는 Component를 말함 
export default function Layout({children}) {
  return (
    <>
      <NavBar/>
      <div>{children}</div>
    </>
  )
}
