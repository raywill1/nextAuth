import  CredentialsProvider  from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";


export const authOptions = {

  providers:[
       GitHubProvider({
        clientId: process.env.GITHUB_ID ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
       CredentialsProvider({
        name:"Credentials",
        credentials: {
            username : {
                label : 'Enter Name:',
                placeholder:'e.g Billy...'
            },
            password : {
                label : 'Password:',
                placeholder:'Enter Password:'
            },
        },

           async authorize(credentials, req) {
            
                // you fetch the user here from the db here
                    // const res = await fetch('/api/user',
                    // {
                    //     method:'POST',
                    //     body: JSON.stringify(credentials),
                    //     headers: {
                    //         "Content-Type":"application/json"
                    //     }    
                    // })
                    // if(res.success) return credentials
                    const user = {
                        id: "1",
                        name: "billy",
                        password: "nextauth"
                    }
                     if(credentials.username === user?.name && credentials.password === user?.password){
                        
                      return user;
                    }
                       
                    return null;
         },

    }),
],
//  callbacks: {
//     async signIn({user, account}){
//         if(account.provider ==='Credentials'){
//                 const {email, password} = user;
//         try {
//             const res = await fetch('/api/user',
//             {
//                 method:'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body:JSON.stringify({email, password})
//             })
//             if(res.success){
//                 return user
//             }
            
//         } catch (error) {
//             console.log(error)
//         }}
//     }
//  }

};
