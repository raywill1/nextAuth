
const About = async () => {

  const user ={ 
   name:"william",
   caption:"test",
   bitches: "many"}

   const res = await fetch('http://localhost:3000/api/user',{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
   })

 console.log( "data sent successfully");


  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.caption}</p>
    </div>
  )
}

export default About