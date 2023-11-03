import { NextResponse } from "next/server";

export async function POST(req) {
    // const {email, password} = await req.json()
    if(req.method === 'POST'){
    const user = await req.json()
            console.log('heres the mail form the server api',user)
        const res = await fetch('http://localhost:5000',{
            method:"POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json"
            }
           })
           
        //  console.log( "these are the rows",rows);
        return user
    }else{
        return 
    }
   
}